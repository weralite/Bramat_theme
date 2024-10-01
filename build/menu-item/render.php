<?php
// src/menu-item/render.php

function render_menu_item_block($attributes, $content) {
    return '<div class="menu-item">' . esc_html($content) . '</div>';
}

register_block_type('custom/menu-item', array(
    'render_callback' => 'render_menu_item_block',
));
?>