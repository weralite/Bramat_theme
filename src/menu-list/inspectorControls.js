// inspectorControls.js
import { PanelBody, TextControl, SelectControl, RangeControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const CustomInspectorControls = ({ attributes, setAttributes }) => {
  return (
    <InspectorControls>
      <PanelBody title="Settings" initialOpen={true}>
        <TextControl
          label="Title"
          value={attributes.title} // Bind the title attribute
          onChange={(title) => setAttributes({ title })} // Update title on change
          placeholder="Enter your title..."
        />
        <SelectControl
          label="Align heading"
          value={attributes.HeadlineAlignment}
          options={[
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ]}
          onChange={(HeadlineAlignment) => setAttributes({ HeadlineAlignment })}
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
        <RangeControl
          label="Object Gap"
          value={attributes.gap}
          min="1" max="30" step="1"
          onChange={(gap) => setAttributes({ gap })}
        />
        <SelectControl
          label="Page Width"
          value={attributes.maxWidth}
          options={[
            { label: 'Small', value: '500px' },
            { label: 'Medium', value: '700px' },
            { label: 'Large', value: '960px' },
          ]}
          onChange={(maxWidth) => setAttributes({ maxWidth })}
        />
      </PanelBody>
    </InspectorControls>
  );
};

export default CustomInspectorControls;
