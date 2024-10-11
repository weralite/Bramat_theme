
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from '@wordpress/i18n';
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";
import GlutenIcon from "../../assets/icons/icon_gluten.png";
import VeganIcon from "../../assets/icons/icon_vegan.png";
import VegetarianIcon from "../../assets/icons/icon_vegetarian.png";
import LactoseIcon from "../../assets/icons/icon_lactose.png";

const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <>
      <CustomInspectorControls attributes={attributes} setAttributes={setAttributes} />
      <div {...blockProps}>
        <div className="flex flex-row justify-between">
          <RichText
            tagName="b"
            value={attributes.dish}
            onChange={(dish) => setAttributes({ dish })}
            placeholder={__('Add dish name...')}
          />
          <div className="flex flex-row gap-4">
            {attributes.isLactoseFree && <span>L</span>}
            {attributes.isGlutenFree && <span>G</span>}
            {attributes.isVegan && <span>VE</span>}
            {attributes.isVegetarian && <span>V</span>}
            {attributes.showPrice && (
              <RichText
                tagName="span"
                value={attributes.price}
                onChange={(price) => setAttributes({ price })}
                placeholder={__('Add price...')}
                className="price"
              />
            )}

          </div>
        </div>
        <RichText
          tagName="p"
          value={attributes.description}
          onChange={(description) => setAttributes({ description })}
          placeholder={__('Add dish description...')}
        />
      </div>
    </>
  );
};




const save = ({ attributes }) => (
  <div className="pb-2">
    <div className="gap-4 flex flex-row justify-between">
      <div className="md:flex-shrink">
        <RichText.Content tagName="b" value={attributes.dish} />
        <RichText.Content tagName="p" value={attributes.description} />
      </div>
      <div className="md:flex md:flex-row md:justify-end md:gap-4 md:flex-grow md:flex-shrink-0">
        <div className="hidden md:flex md:flex-row ">
          {attributes.isLactoseFree && <img src={LactoseIcon} alt="Lactose Free" className="bg-transparent w-14 h-14" />}
          {attributes.isGlutenFree && <img src={GlutenIcon} alt="Gluten Free" className="bg-transparent w-14 h-14" />}
          {attributes.isVegan && <img src={VeganIcon} alt="Vegan" className="bg-transparent w-14 h-14" />}
          {attributes.isVegetarian && <img src={VegetarianIcon} alt="Vegetarian" className="bg-transparent w-14 h-14" />}
        </div>
        <RichText.Content className="whitespace-nowrap text-right" tagName="b" value={attributes.price} />
      </div>
    </div>

  </div>
);

/**
 * Register block type
 */
registerBlockType(metadata.name, {
  edit: Edit,
  save,
  __experimentalLabel: (attributes, { context }) => {
    return context === 'list-view' && attributes.dish
      ? attributes.dish
      : __('Dish Item');
  },
});
