// inspectorControls.js
import { PanelBody, TextControl, SelectControl, RangeControl, Button } from '@wordpress/components';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';


const CustomInspectorControls = ({ attributes, setAttributes }) => {


  return (
    <>
      <InspectorControls>
        <PanelBody title="Add block" initialOpen={true}>
          <InnerBlocks
            allowedBlocks={['core/heading', 'custom/dish-item', 'custom/day-item']}
            renderAppender={InnerBlocks.ButtonBlockAppender}
          />
        </PanelBody>
        <PanelBody title="Settings" initialOpen={true}>
          <TextControl
            label="Title"
            value={attributes.title}
            onChange={(title) => setAttributes({ title })}
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
          {/* <RangeControl
            label="List Space (Page Only)"
            value={attributes.blockGap}
            onChange={(value) => setAttributes({ blockGap: value })}
            min={0}
            max={6}
            step={2}
          /> */}
          <SelectControl
            label="List Space"
            value={attributes.blockGap}
            options={[
              { label: 'None', value: 0 },
              { label: 'Small', value: 2 },
              { label: 'Medium', value: 4 },
              { label: 'Large', value: 6 },
            ]}
            onChange={(value) => {
              setAttributes({ blockGap: parseInt(value, 10) }); // Ensure it's a number
            }}
          />
        </PanelBody>

      </InspectorControls>

    </>
  );
};

export default CustomInspectorControls;
