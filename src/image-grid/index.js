import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { Button } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";

const CustomButtonBlockAppender = ({ clientId }) => {
  return (
    <Button
      className="bg-blue-500 text-white"
      onClick={() => wp.data.dispatch('core/block-editor').insertBlock(
        wp.blocks.createBlock('custom/dish-item'),
        undefined,
        clientId
      )}
    >
      {__('Add')}
    </Button>
  );
};


const Edit = ({ attributes, setAttributes, clientId }) => {
  const blockProps = useBlockProps();

  return (
    <>
    <CustomInspectorControls attributes={attributes} setAttributes={setAttributes} />
    <div {...blockProps}>

      <CustomButtonBlockAppender clientId={clientId} />

    </div>
    </>
  );
};

const save = ({ attributes }) => {
  return (
    <div className="py-4">

    </div>
  );
};

registerBlockType(metadata.name, {
  edit: Edit,
  save,
  __experimentalLabel: (attributes, { context }) => {
    return context === 'list-view' && attributes.day 
      ? attributes.day 
      : __('Day');
  },
});
