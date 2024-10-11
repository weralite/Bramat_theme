// inspectorControls.js
import { PanelBody, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const CustomInspectorControls = ({ attributes, setAttributes }) => {
  return (
    <InspectorControls>
      <PanelBody title="Text" initialOpen={true}>
        <TextControl
          label="Title"
          value={attributes.dish} // Bind the title attribute
          onChange={(dish) => setAttributes({ dish })} // Update title on change
          placeholder="Enter your title..."
        />
        <TextControl
          label="Description"
          value={attributes.description} // Bind the title attribute
          onChange={(description) => setAttributes({ description })} // Update title on change
          placeholder="Describe your dish..."
        />
        <TextControl
          label="Price"
          value={attributes.price} // Bind the title attribute
          onChange={(price) => setAttributes({ price })} // Update title on change
          placeholder="Enter your price..."
        />


      </PanelBody>
      <PanelBody title="Settings" initialOpen={true}>
        <ToggleControl
          label="Show Price"
          checked={attributes.showPrice}
          onChange={(value) => setAttributes({ showPrice: value })}
        />
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
