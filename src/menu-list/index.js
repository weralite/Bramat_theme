import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks, BlockControls } from "@wordpress/block-editor";
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: {
      maxWidth: attributes.maxWidth,
    },
    className: `py-10 flex flex-col`,
  });


  // TODO: save heading value to title attribute and use it with experimental label in save function to display the menu name in listview.

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
});
