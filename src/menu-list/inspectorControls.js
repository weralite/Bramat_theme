// inspectorControls.js
import { PanelBody, TextControl, SelectControl, RangeControl, Button } from '@wordpress/components';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';


const CustomInspectorControls = ({ attributes, setAttributes }) => {


  return (
    <>
      <InspectorControls>
        <PanelBody title="Add block" initialOpen={true}>
          <InnerBlocks
                  allowedBlocks={['custom/dish-item', 'custom/day-item']}
                  renderAppender={ InnerBlocks.ButtonBlockAppender }
                  
 />
        </PanelBody>

        <PanelBody title="Settings" initialOpen={true}>

          <TextControl
            label="Title"
            value={attributes.title} // Bind the title attribute
            onChange={(title) => setAttributes({ title })} // Update title on change
            placeholder="Enter your title..."
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

    </>
  );
};

export default CustomInspectorControls;
