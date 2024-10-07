import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: {
      textAlign: attributes.align,
    },
    id: attributes.anchor ? attributes.anchor : undefined,
  });

  return (
    <>
      <CustomInspectorControls attributes={attributes} setAttributes={setAttributes} />
      <div {...blockProps}>
        <RichText
          tagName="h2"
          value={attributes.title}
          onChange={(title) => setAttributes({ title })}
          placeholder={('Add title...')}
          style={{ textAlign: attributes.HeadlineAlignment }} 
        />
        <InnerBlocks allowedBlocks={['custom/day-item']} />
      </div>
    </>
  );
};

const save = ({ attributes }) => {
  return (
    <div>
      <RichText.Content tagName="h2" value={attributes.title} style={{ textAlign: attributes.HeadlineAlignment }} />
      <InnerBlocks.Content />
    </div>
  );
};

registerBlockType(metadata.name, {
  edit: Edit,
  save,
});
