<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width">
	<meta name="description" content="Sea and shellfish restaurang in Stockholm, Sweden">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<?php wp_head(); ?>
</head>

<body <?php body_class('text-gray-100 antialiased'); ?>>

	<?php do_action('tailpress_site_before'); ?>

		<?php do_action('tailpress_header'); ?>

		<header class="sticky top-0 z-10 min-w-full">

<?php
					wp_nav_menu( array(
    						'theme_location'  => 'primary',
							'container'       => 'nav',
							'container_id'    => 'primary-menu',
    						'container_class' => 'min-w-full flex justify-center', 
   							'menu_class'      => 'hidden xl:flex xl:flex-row xl:justify-center', 
   						    'li_class'        => 'primary-parent-li group', 
 						    'a_class'         => 'ajax-link xl:text-2xl z-10 xl:tracking-wide xl:font-teko xl:w-full xl:font-light xl:uppercase xl:relative',
 						    'submenu_class'   => 'hover-background-animation', 
							'fallback_cb'     => false,
						)
					);
					?>

<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'secondary',
							'container'       => 'nav',
							'container_id'    => 'secondary-menu',
							'container_class' => 'hidden w-full md:p-3 md:pl-16 md:block xl:hidden',
							'menu_class'      => 'md:flex md:justify-center md:gap-4',
							'li_class'        => 'md:mx-4 secondary-parent-li',
							'a_class'         => 'ajax-link relative z-0 inline-block font-teko md:font-light md:text-4xl uppercase transition-all duration-150', 
							'fallback_cb'     => false,
						)
					);
					?>

<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'mobile',
							'container'       => 'nav',
							'container_id'    => 'mobile-menu',
							'container_class' => 'mobile-menu z-1 top-0 absolute bg-black min-w-full xl:hidden',
							'menu_class'      => 'mx-auto menu-content h-full mt-10 flex flex-col items-center w-1/3 gap-5',
							'li_class'        => 'mobile', 
							'a_class'         => 'font-teko text-xl', 
							'submenu_class'   => 'mobile-submenu', 
							'fallback_cb'     => false,
						)
					);
					?>

								<!-- Wordpress classic logo and headlines -->

							<?php if (has_custom_logo()) { ?>
								<!-- <?php the_custom_logo(); ?>  -->
							<?php } else { ?>
								<a href="<?php echo get_bloginfo('url'); ?>" class="font-extrabold text-lg uppercase">
									<?php echo get_bloginfo('name'); ?>
								</a>

								<p class="text-sm font-light text-gray-600">
									<?php echo get_bloginfo('description'); ?>
								</p>

							<?php } ?>



						<div class="p-4 z-10 absolute top-0 right-0 xl:hidden">
						<a href="#" aria-label="Toggle navigation" id="mobile-menu-toggle">
								<div id="toggleMenu" class="grid place-content-center w-10 h-10">
								<div 
								class="hamburger-icon">
							</div>
							</div>
							</a>
						</div>

			

		</header>
			<?php do_action('tailpress_content_start'); ?>

			<?php if (is_front_page()) { ?>
				
			<?php } ?>

			<main>