import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks, BlockControls } from "@wordpress/block-editor";
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: {
      maxWidth: attributes.maxWidth
    },
    className: `py-10 flex flex-col`,
  });

  return (
    <>
      <CustomInspectorControls attributes={attributes} setAttributes={setAttributes} />
      <div {...blockProps}>
        <InnerBlocks 
          allowedBlocks={['core/heading', 'custom/day-item', 'custom/dish-item']} 
          renderAppender={ false } 
        />
      </div>
    </>
  );
};

const save = ({ attributes }) => {
  const blockProps = useBlockProps.save({
    className: `py-10 flex flex-col`,
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
