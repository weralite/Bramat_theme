// inspectorControls.js
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const CustomInspectorControls = ({ attributes, setAttributes }) => {
  return (
    <InspectorControls>
      <PanelBody title="Settings" initialOpen={true}>
        {/* <TextControl
          label="Title"
          value={attributes.title} // Bind the title attribute
          onChange={(title) => setAttributes({ title })} // Update title on change
          placeholder="Enter your title..."
        /> */}
        <SelectControl
          label="Direction"
          value={attributes.flexDirection}
          options={[
            { label: 'Row', value: 'row' },
            { label: 'Column', value: 'column' },
          ]}
          onChange={(flexDirection) => setAttributes({ flexDirection })}
        />
        <TextControl
          label="Gap"
          value={attributes.title} // Bind the title attribute
          onChange={(gap) => setAttributes({ gap })} // Update title on change
          placeholder="Add gap"
        />

      </PanelBody>
    </InspectorControls>
  );
};

export default CustomInspectorControls;
