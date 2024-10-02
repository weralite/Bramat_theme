<?php

/**
 * Theme setup.
 */
function tailpress_setup()
{
	add_theme_support('title-tag');

	register_nav_menus(
		array(
			'primary' => __('Primary Menu', 'tailpress'),
			'secondary' => __('Secondary Menu', 'tailpress'),
		)
	);

	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		)
	);

	add_theme_support('custom-logo');
	add_theme_support('post-thumbnails');

	add_theme_support('align-wide');
	add_theme_support('wp-block-styles');

	add_theme_support('responsive-embeds');

	add_theme_support('editor-styles');
	add_editor_style('css/editor-style.css');
}

add_action('after_setup_theme', 'tailpress_setup');

/**
 * Enqueue theme assets.
 */
function tailpress_enqueue_scripts()
{
	$theme = wp_get_theme();

	wp_enqueue_style('tailpress', tailpress_asset('css/app.css'), array(), $theme->get('Version'));
	wp_enqueue_script('tailpress', tailpress_asset('js/app.js'), array(), $theme->get('Version'));
}

add_action('wp_enqueue_scripts', 'tailpress_enqueue_scripts');

/**
 * Get asset path.
 *
 * @param string  $path Path to asset.
 *
 * @return string
 */
function tailpress_asset($path)
{
	if (wp_get_environment_type() === 'production') {
		return get_stylesheet_directory_uri() . '/' . $path;
	}

	return add_query_arg('time', time(),  get_stylesheet_directory_uri() . '/' . $path);
}


/**
 * Adds option 'li_class' to 'wp_nav_menu'.
 *
 * @param string  $classes String of classes.
 * @param mixed   $item The current item.
 * @param WP_Term $args Holds the nav menu arguments.
 *
 * @return array
 */
function tailpress_nav_menu_add_li_class($classes, $item, $args, $depth)
{
	if (isset($args->li_class)) {
		$classes[] = $args->li_class;
	}

	if (isset($args->{"li_class_$depth"})) {
		$classes[] = $args->{"li_class_$depth"};
	}

	return $classes;
}

add_filter('nav_menu_css_class', 'tailpress_nav_menu_add_li_class', 10, 4);

function tailpress_nav_menu_add_a_class($atts, $item, $args, $depth)
{
	// Check if the a_class argument is set and apply it to the a tag
	if (isset($args->a_class)) {
		$atts['class'] = $args->a_class;
	}

	// Optionally add depth-specific class for more granular control
	if (isset($args->{"a_class_$depth"})) {
		$atts['class'] .= ' ' . $args->{"a_class_$depth"};
	}

	return $atts;
}

add_filter('nav_menu_link_attributes', 'tailpress_nav_menu_add_a_class', 10, 4);



/**
 * Adds option 'submenu_class' to 'wp_nav_menu'.
 *
 * @param string  $classes String of classes.
 * @param mixed   $item The current item.
 * @param WP_Term $args Holds the nav menu arguments.
 *
 * @return array
 */
function tailpress_nav_menu_add_submenu_class($classes, $args, $depth)
{
	if (isset($args->submenu_class)) {
		$classes[] = $args->submenu_class;
	}

	if (isset($args->{"submenu_class_$depth"})) {
		$classes[] = $args->{"submenu_class_$depth"};
	}

	return $classes;
}

add_filter('nav_menu_submenu_css_class', 'tailpress_nav_menu_add_submenu_class', 10, 3);



function mycustomblocks_block_init()
{
	register_block_type(__DIR__ . '/build/menu-item');
	register_block_type(__DIR__ . '/build/mosaic-image-grid');
}
add_action('init', 'mycustomblocks_block_init');


function register_layout_category($categories)
{
	// Define the custom category
	$custom_category = array(
		'slug'  => 'custom-layout-category',
		'title' => 'Restaurant Layouts',
	);

	// Prepend the custom category to the categories array
	array_unshift($categories, $custom_category);

	return $categories;
}

if (version_compare(get_bloginfo('version'), '5.8', '>=')) {
	add_filter('block_categories_all', 'register_layout_category');
} else {
	add_filter('block_categories', 'register_layout_category');
}
