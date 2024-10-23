import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { __ } from '@wordpress/i18n';
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";

const Edit = ({ attributes, setAttributes, clientId }) => {
  const blockProps = useBlockProps({
    style: {
      maxWidth: attributes.maxWidth,
    },
    className: `py-10 flex flex-col`,
  });

  const headingContent = useSelect((select) => {
    const blocks = select('core/block-editor').getBlocks(clientId);
    const headingBlock = blocks.find(block => block.name === 'core/heading');
    return headingBlock ? headingBlock.attributes.content : '';
  }, [clientId]);

  if (headingContent !== attributes.title) {
    setAttributes({ title: headingContent });
  }


  return (
    <>
      <CustomInspectorControls attributes={attributes} setAttributes={setAttributes} />
      <div {...blockProps}>
        <InnerBlocks 
          allowedBlocks={['core/heading', 'custom/day-item', 'custom/dish-item']} 
          renderAppender={ false } 
          paddingRange={attributes.paddingRange}
        />
        <InnerBlocks.ButtonBlockAppender />
      </div>
    </>
  );
};

const save = ({ attributes }) => {
  const gapClasses = {
    0: 'gap-0',
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
  };
  const gapClass = gapClasses[attributes.blockGap];

  const blockProps = useBlockProps.save({
    className: `py-10 flex flex-col ${gapClass}`,
    style: {
      maxWidth: attributes.maxWidth,
    },
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};

registerBlockType(metadata.name, {
  edit: Edit,
  save,
  __experimentalLabel: (attributes, { context }) => {
    return context === 'list-view' && attributes.title 
      ? attributes.title 
      : __('Menu');
  },
});
