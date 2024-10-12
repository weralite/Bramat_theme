import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
  ['core/columns', {}, [
    ['core/column', {}, [['custom/day-item']]],
    ['core/column', {}, [['custom/dish-item']]],
  ]]
];

registerBlockType('custom/my-custom-block', {
  title: 'My Custom Block',
  icon: 'block-default',
  category: 'layout',
  edit() {
    return (
      <div>
        <InnerBlocks template={TEMPLATE} />
      </div>
    );
  },
  save() {
    return (
      <div>
        <InnerBlocks.Content />
      </div>
    );
  },
});
