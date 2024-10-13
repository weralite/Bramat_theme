import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from '@wordpress/i18n';
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <>
    <CustomInspectorControls attributes={attributes} setAttributes={setAttributes} />
    <div {...blockProps}>
      <RichText
        tagName="h3" // Change tag to h3 for the day heading
        value={attributes.day}
        onChange={(day) => setAttributes({ day })}
        placeholder="Add day..."
        className="underline"
      />
      <InnerBlocks 
        allowedBlocks={['custom/dish-item']} 
        renderAppender={ false }  />
      
    </div>
    </>
  );
};

const save = ({ attributes }) => {
  return (
    <div className="py-4">
      <RichText.Content className="underline" tagName="h3" value={attributes.day} />
      <InnerBlocks.Content />
    </div>
  );
};

registerBlockType(metadata.name, {
  edit: Edit,
  save,
  __experimentalLabel: (attributes, { context }) => {
    return context === 'list-view' && attributes.day 
      ? attributes.day 
      : __('Dish Item');
  },
});
