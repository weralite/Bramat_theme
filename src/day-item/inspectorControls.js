// inspectorControls.js
import { PanelBody, TextControl, SelectControl, RangeControl, Button } from '@wordpress/components';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';


const CustomInspectorControls = ({ attributes, setAttributes }) => {


  return (
    <>
      <InspectorControls>
        <PanelBody title="Add block" initialOpen={true}>
          <InnerBlocks.ButtonBlockAppender />
        </PanelBody>


      </InspectorControls>

    </>
  );
};

export default CustomInspectorControls;
