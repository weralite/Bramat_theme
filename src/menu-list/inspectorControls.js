// inspectorControls.js
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const CustomInspectorControls = ({ attributes, setAttributes }) => {
  return (
    <InspectorControls>
      <PanelBody title="Settings" initialOpen={true}>
      <SelectControl
          label="Align heading"
          value={attributes.HeadlineAlignment}
          options={[
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ]}
          onChange={(align) => setAttributes({ align })}
        />
        <TextControl
          label="Title"
          value={attributes.title} // Bind the title attribute
          onChange={(title) => setAttributes({ title })} // Update title on change
          placeholder="Enter your title..."
        />
        <SelectControl
          label="Text Alignment"
          value={attributes.align}
          options={[
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ]}
          onChange={(align) => setAttributes({ align })}
        />
      </PanelBody>
    </InspectorControls>
  );
};

export default CustomInspectorControls;
