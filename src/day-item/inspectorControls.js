// inspectorControls.js
import { PanelBody, TextControl, SelectControl, RangeControl, Button } from '@wordpress/components';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';



const CustomInspectorControls = ({ attributes, setAttributes }) => {


  return (
    <>
      <InspectorControls>
        <PanelBody title="Text" initialOpen={true}>
          <TextControl
            label="Veckodag"
            value={attributes.day}
            onChange={(day) => setAttributes({ day })}
            placeholder="Enter your title..."
          />
        </PanelBody>
        <PanelBody title="Settings" initialOpen={true}>

          <InnerBlocks
            allowedBlocks={['custom/dish-item']}
            renderAppender={InnerBlocks.ButtonBlockAppender} />
        </PanelBody>


      </InspectorControls>

    </>
  );
};

export default CustomInspectorControls;
