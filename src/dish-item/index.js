
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
      <div className="flex flex-row justify-between">
      <RichText
        tagName="b"
        value={attributes.dish}
        onChange={(dish) => setAttributes({ dish })}
        placeholder={__('Add dish name...')}
      />
      {attributes.showPrice && (
          <RichText
            tagName="span"
            value={attributes.price}
            onChange={(price) => setAttributes({ price })}
            placeholder={__('Add price...')}
            className="price"
          />
        )}
      </div>
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
    <div className="flex flex-row justify-between">
    <RichText.Content tagName="b" value={attributes.dish} />
    <RichText.Content className="whitespace-nowrap" tagName="b" value={attributes.price} />
    </div>
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
