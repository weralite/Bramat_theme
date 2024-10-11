// inspectorControls.js
import { PanelBody, TextControl, CheckboxControl, SelectControl, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const CustomInspectorControls = ({ attributes, setAttributes }) => {
  return (
    <InspectorControls>
      <PanelBody title="Text" initialOpen={true}>
        <TextControl
          label="Title"
          value={attributes.dish} 
          onChange={(dish) => setAttributes({ dish })} 
          placeholder="Enter your title..."
        />
        <TextControl
          label="Description"
          value={attributes.description} 
          onChange={(description) => setAttributes({ description })} 
          placeholder="Describe your dish..."
        />
        <TextControl
          label="Price"
          value={attributes.price} 
          onChange={(price) => setAttributes({ price })}
          placeholder="Enter your price..."
        />
        <CheckboxControl
          label="Lactose Free"
          checked={attributes.isLactoseFree} 
          onChange={(isLactoseFree) => setAttributes({ isLactoseFree })} 
        />
        <CheckboxControl
          label="Gluten Free"
          checked={attributes.isGlutenFree} 
          onChange={(isGlutenFree) => setAttributes({ isGlutenFree })}
        />
        <CheckboxControl
          label="Vegan"
          checked={attributes.isVegan} 
          onChange={(isVegan) => setAttributes({ isVegan })} 
        />
        <CheckboxControl
          label="Vegetarian"
          checked={attributes.isVegetarian} 
          onChange={(isVegetarian) => setAttributes({ isVegetarian })} 
        />

      </PanelBody>
      <PanelBody title="Settings" initialOpen={true}>
        <ToggleControl
          label="Show Price"
          checked={attributes.showPrice}
          onChange={(value) => setAttributes({ showPrice: value })}
        />
      </PanelBody>
    </InspectorControls>
  );
};

export default CustomInspectorControls;
