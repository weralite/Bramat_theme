<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class('text-gray-100 antialiased'); ?>>

	<?php do_action('tailpress_site_before'); ?>

	<div id="page">

		<?php do_action('tailpress_header'); ?>

		<header class="sticky top-0 z-10 min-w-full">
		<div class="min-w-full flex justify-center">
			<?php
		wp_nav_menu( array(
    		'theme_location'  => 'secondary',
			'container_id'    => 'secondary-menu',
    		'container_class' => 'min-w-full', // Tailwind styles for container
   			'menu_class'      => 'hidden xl:flex xl:flex-row xl:justify-center', 
   		    'li_class'        => 'secondary-li-class-parent-desktop group', // Parent item styles
 		    'a_class'         => 'ajax-link xl:text-2xl z-10 xl:tracking-wide xl:font-teko xl:w-full xl:font-light xl:uppercase xl:relative',
 		    'submenu_class'   => 'hover-background-animation', // Centered and increased size
			 'container'      => false,
));?>
</div>
			<div class="xl:hidden container min-w-full">
				<div class="xl:relative min-w-full xl:flex xl:justify-between xl:items-center">
					
					<div class="flex justify-between items-center min-w-full xl:child-left pb-4">
					<div>
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
						</div>



						<div class="p-4 z-10 lg:hidden">
						<a href="#" aria-label="Toggle navigation" id="mobile-menu-toggle">
								<div id="toggleMenu" class="grid place-content-center w-10 h-10">
								<div 
								class="
								w-10
								h-1
							  bg-gray-100 
							    rounded-full
								transition-all
								duration-50
								before:content-['']
								before:absolute
								before:w-10
								before:h-1
							    before:bg-gray-100 
								before:rounded-full
								before:-translate-y-4
								before:transition-all
								before:duration-150
								after:content-['']
								after:absolute
								after:w-10
								after:h-1
								after:bg-gray-100 
								after:rounded-full
								after:translate-y-4
								after:transition-all
								after:duration-150
								">
							</div>
							</div>
							</a>
						</div>


					</div>
					<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'secondary',
							'container_id'    => 'secondary-menu',
							'container_class' => 'hidden top-0 left-0 absolute bg-black min-w-full p-4',
							'menu_class'      => '',
							'li_class'        => 'lg:mx-4', // Add group class here
							'a_class'         => 'relative z-1 inline-block font-teko', // Class for <a>
							'submenu_class'   => '', // Centered and increased size
							'fallback_cb'     => false,
						)
					);
					?>
					<?php
					wp_nav_menu(
						array(
							'container_id'    => 'primary-menu',
							'container_class' => 'hidden mt-4 p-4 lg:mt-0 lg:p-0 lg:pl-10 xl:pl-14 lg:block xl:bg-transparent xl:block xl:left-1/2 xl:transform xl:-translate-x-1/2',
							'menu_class'      => 'lg:flex lg:gap-4',
							'theme_location'  => 'primary',
							'li_class'        => 'lg:mx-4 groupa', // Add group class here
							'a_class'         => 'relative z-1 inline-block font-teko lg:font-light lg:text-4xl xl:text-7xl uppercase transition-all duration-150', // Class for <a>
							'fallback_cb'     => false,
						)
					);
					?>
			
				</div>
			</div>

			


			
		</header>
			<?php do_action('tailpress_content_start'); ?>

			<?php if (is_front_page()) { ?>
				<!-- Start introduction -->
	<!-- HOMEPAGE HEADER -->
				<!-- End introduction -->
			<?php } ?>

			<main>