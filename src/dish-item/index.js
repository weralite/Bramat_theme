
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from '@wordpress/i18n';
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: {
      display: 'flex',
      flexDirection: attributes.flexDirection,
      gap: attributes.gap,
    }
  })

  return (
    <>
      <CustomInspectorControls attributes={attributes} setAttributes={setAttributes} />
    <div {...blockProps}>
      <RichText
        tagName="b"
        value={attributes.dish}
        onChange={(dish) => setAttributes({ dish })}
        placeholder={__('Add dish name...')}
      />
      <RichText
        tagName="p"
        value={attributes.description}
        onChange={(description) => setAttributes({ description })}
        placeholder={__('Add dish description...')}
      />
    </div>
    </>
  );
};




const save = ({ attributes }) => (
  <div style={{
    display: 'flex',
    flexDirection: attributes.flexDirection,
    gap: attributes.gap,
  }}>
    <RichText.Content tagName="b" value={attributes.dish} />
    <RichText.Content tagName="p" value={attributes.description} />
  </div>
);

/**
 * Register block type
 */
registerBlockType(metadata.name, {
  edit: Edit,
  save,
  __experimentalLabel: (attributes, { context }) => {
    return context === 'list-view' && attributes.dish
      ? attributes.dish
      : __('Dish Item');
  },
});
