import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: {
      maxWidth: attributes.maxWidth,
      display: "flex",
      flexDirection: "column",
    },
    className: "py-10"
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
          className="text-center"
        />
        <InnerBlocks allowedBlocks={['custom/day-item']} />
      </div>
    </>
  );
};

const save = ({ attributes }) => {
  const blockProps = useBlockProps.save({
    className: "py-10",
    style: {
      maxWidth: attributes.maxWidth
    }
  });

  return (
    <div {...blockProps}>
      <RichText.Content className="text-center" tagName="h2" value={attributes.title} />
      <InnerBlocks.Content/>
    </div>
  );
};

registerBlockType(metadata.name, {
  edit: Edit,
  save,
});
