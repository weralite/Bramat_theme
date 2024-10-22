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
            'mobile' => __('Mobile Menu', 'tailpress'),
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

   // Localize the script with new data
    wp_localize_script('tailpress', 'my_ajax_object', array(
        'ajax_url' => admin_url('admin-ajax.php'),
    ));
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

if (defined('WP_DEBUG') && WP_DEBUG) {
    error_log('Debug log test: Functions.php loaded successfully.');
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
    // Logga att funktionen har anropats
    error_log('tailpress_nav_menu_add_li_class() was called.');

    // Logga innehållet i $args för felsökning
    error_log('Args: ' . print_r($args, true));

    // Om li_class finns i args, lägg till den i klasserna
    if (isset($args->li_class)) {
        $classes[] = $args->li_class;
    }

    // Om li_class_$depth finns i args, lägg till den i klasserna
    if (isset($args->{"li_class_$depth"})) {
        $classes[] = $args->{"li_class_$depth"};
    }

    // Returnera de modifierade klasserna
    return $classes;
}

// Registrera funktionen med nav_menu_css_class-filter
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

function tailpress_nav_menu_add_data_slug($item_output, $item, $depth, $args) {
    // H채mta slugen fr책n URL:en
    $slug = basename($item->url);

    // L채gg till data-slug attributet i a-taggen
    $item_output = str_replace('<a ', '<a data-slug="' . esc_attr($slug) . '" ', $item_output);
	

    return $item_output;
}
add_filter('walker_nav_menu_start_el', 'tailpress_nav_menu_add_data_slug', 10, 4);




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



function load_page_content() {
    if (isset($_POST['page_slug'])) {
        $slug = sanitize_text_field($_POST['page_slug']);
        
        if ($slug === '/') {
            // Handle the homepage case
            $homepage_id = get_option('page_on_front'); // Get the ID of the front page
            if ($homepage_id) {
                echo load_template_with_postdata('template-parts/homepage', $homepage_id);
            } else {
                echo 'Homepage not set.';
            }
        } else {
            $page = get_page_by_path($slug);
            
            if ($page) {
                echo load_template_with_postdata('template-parts/content', $page->ID, get_post_format($page));
            } else {
                echo 'Page not found.';
            }
        }
    }
    wp_die();
}
add_action('wp_ajax_load_page', 'load_page_content');
add_action('wp_ajax_nopriv_load_page', 'load_page_content');

function load_template_with_postdata($template, $post_id, $post_format = '') {
    global $post;
    $post = get_post($post_id);
    setup_postdata($post);

    ob_start();
    get_template_part($template, $post_format);
    $content = ob_get_clean();

    wp_reset_postdata();
    return $content;
}


// function my_enqueue_scripts() {
//     wp_enqueue_script('my-custom-script', get_template_directory_uri() . '/js/app.js', array(), null, true);
    
//     wp_localize_script('my-custom-script', 'my_ajax_object', array(
//         'ajax_url' => admin_url('admin-ajax.php')
//     ));
// }
// add_action('wp_enqueue_scripts', 'my_enqueue_scripts');



