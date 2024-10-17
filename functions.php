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
function tailpress_enqueue_assets() {
    $theme = wp_get_theme();

    // Enqueue theme styles
    wp_enqueue_style('tailpress', tailpress_asset('css/app.css'), array(), $theme->get('Version'));

    // Enqueue custom fonts
    wp_enqueue_style('tailpress-fonts', get_template_directory_uri() . '/resources/css/fonts.css', array(), $theme->get('Version'));

    // Enqueue theme scripts (load in footer)
    wp_enqueue_script('tailpress', tailpress_asset('js/app.js'), array(), $theme->get('Version'), true);
}

// Enqueue assets for frontend
add_action('wp_enqueue_scripts', 'tailpress_enqueue_assets');

// Enqueue assets for block editor (same function)
add_action('enqueue_block_editor_assets', 'tailpress_enqueue_assets');

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

function tailpress_nav_menu_add_submenu_li_class($classes, $item, $args, $depth)
{
    if (isset($args->submenu_li_class) && $depth > 0) {
        $classes[] = $args->submenu_li_class;
    }

    if (isset($args->{"submenu_li_class_$depth"})) {
        $classes[] = $args->{"submenu_li_class_$depth"};
    }

    return $classes;
}

add_filter('nav_menu_css_class', 'tailpress_nav_menu_add_submenu_li_class', 10, 4);

function tailpress_nav_menu_add_submenu_a_class($atts, $item, $args, $depth)
{
    if (isset($args->submenu_a_class) && $depth > 0) {
        $atts['class'] = isset($atts['class']) ? $atts['class'] . ' ' . $args->submenu_a_class : $args->submenu_a_class;
    }

    if (isset($args->{"submenu_a_class_$depth"})) {
        $atts['class'] = isset($atts['class']) ? $atts['class'] . ' ' . $args->{"submenu_a_class_$depth"} : $args->{"submenu_a_class_$depth"};
    }

    return $atts;
}

add_filter('nav_menu_link_attributes', 'tailpress_nav_menu_add_submenu_a_class', 10, 4);



function mycustomblocks_block_init()
{
	register_block_type(__DIR__ . '/build/menu-list');
	register_block_type(__DIR__ . '/build/day-item');
	register_block_type(__DIR__ . '/build/dish-item');
	register_block_type(__DIR__ . '/build/custom-block');
}
add_action('init', 'mycustomblocks_block_init');


function register_layout_category($categories)
{
	// Define the custom category
	$custom_category = array(
		'slug'  => 'custom-blocks',
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

function mytheme_custom_background_setup() {
    add_theme_support( 'custom-background', apply_filters( 'mytheme_custom_background_args', array(
        'default-color'          => 'ffffff', // Default background color
        'default-image'          => '',       // Default background image (can be set to a specific image URL)
        'wp-head-callback'       => '_custom_background_cb', // Callback for the background styling
    ) ) );
}
add_action( 'after_setup_theme', 'mytheme_custom_background_setup' );



