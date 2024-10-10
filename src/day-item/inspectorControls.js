// inspectorControls.js
import { PanelBody, TextControl, SelectControl, RangeControl, Button } from '@wordpress/components';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';



const CustomInspectorControls = ({ attributes, setAttributes }) => {


  return (
    <>
      <InspectorControls>
        {/* <PanelBody title="Add block" initialOpen={true}>
          <InnerBlocks.ButtonBlockAppender />
        </PanelBody> */}
        <PanelBody title="Text" initialOpen={true}>
      <TextControl
          label="Veckodag"
          value={attributes.day} // Bind the title attribute
          onChange={(day) => setAttributes({ day })} // Update title on change
          placeholder="Enter your title..."
        />
      </PanelBody>
      <PanelBody title="Settings" initialOpen={true}>

        <InnerBlocks 
        allowedBlocks={['custom/dish-item']}
        renderAppender={ InnerBlocks.ButtonBlockAppender }/>
        </PanelBody>


      </InspectorControls>

    </>
  );
};

export default CustomInspectorControls;
