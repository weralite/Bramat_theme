
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from '@wordpress/i18n';
import metadata from "./block.json";
import CustomInspectorControls from "./inspectorControls";
import GlutenIcon from "../../assets/icons/icon_gluten.png";
import VeganIcon from "../../assets/icons/icon_vegan.png";
import VegetarianIcon from "../../assets/icons/icon_vegetarian.png";
import LactoseIcon from "../../assets/icons/icon_lactose.png";

const paddingClasses = {
  0: 'px-0',
  2: 'px-2',
  4: 'px-4',
  6: 'px-6',
  8: 'px-8',
  10: 'px-10',
  12: 'px-12',
  14: 'px-14',
  16: 'px-16',
  18: 'px-18',
  20: 'px-20',
  22: 'px-22',
  24: 'px-24',
  26: 'px-26',
  28: 'px-28',
  30: 'px-30',
};

const Edit = ({ attributes, setAttributes }) => {

  const paddingClass = paddingClasses[attributes.paddingRange];

  const blockProps = useBlockProps({
    className: paddingClass,
  });

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
          {attributes.showAllergens && (
            <p className="separator-class">(
            {attributes.isLactoseFree && <span>L</span>}
            {attributes.isGlutenFree && <span>G</span>}
            {attributes.isVegan && <span>VE</span>}
            {attributes.isVegetarian && <span>V</span>}
            )</p> )}
            {attributes.showPrice && (
              <div>
                <RichText
                  tagName="b"
                  value={attributes.price}
                  onChange={(price) => setAttributes({ price })}
                  placeholder={__('Add price...')}
                  className="price"
                />
                <b> SEK</b>
              </div>
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




const save = ({ attributes }) => {

  const paddingClass = paddingClasses[attributes.paddingRange];

  const blockProps = useBlockProps.save({
    className: `py-2 ${paddingClass}`,

  });

  return (
    <div {...blockProps}>
      <div className="gap-4 flex flex-row justify-between">
        <div className="md:flex-shrink">
          <RichText.Content tagName="b" value={attributes.dish} />
          <RichText.Content tagName="p" value={attributes.description} />
        </div>
        <div className="flex flex-col-reverse justify-end md:flex-row md:justify-end md:gap-4 md:flex-grow md:flex-shrink-0">
          <div className="whitespace-nowrap text-right">
          {attributes.showAllergens && (
            <p className="separator-class">(
              {attributes.isLactoseFree && <span>L,</span>}
              {attributes.isGlutenFree && <span>G</span>}
              {attributes.isVegan && <span>VE</span>}
              {attributes.isVegetarian && <span>V</span>}
            )</p>
          )}
          </div>
          <div className="whitespace-nowrap text-right">
            {attributes.showPrice && (
              <p>
                <RichText.Content tagName="span" value={attributes.price} />
                <span> SEK</span>
              </p>
            )}
          </div>
        </div>
      </div>

    </div>
  )
};

/**
 * Register block type
 */
registerBlockType(metadata.name, {
  edit: Edit,
  save,
  __experimentalLabel: (attributes, { context }) => {
    return context === 'list-view' && attributes.dish
      ? attributes.dish
      : __('Dish');
  },
});
