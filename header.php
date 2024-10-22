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

				<!-- Main navigational menu for desktop view -->
		<div class="min-w-full flex justify-center">
			<?php
		wp_nav_menu( array(
    		'theme_location'  => 'secondary',
			'container_id'    => 'secondary-menu',
    		'container_class' => 'min-w-full', 
   			'menu_class'      => 'hidden xl:flex xl:flex-row xl:justify-center', 
   		    'li_class'        => 'secondary-li-class-parent-desktop group', 
 		    'a_class'         => 'ajax-link xl:text-2xl z-10 xl:tracking-wide xl:font-teko xl:w-full xl:font-light xl:uppercase xl:relative',
 		    'submenu_class'   => 'hover-background-animation', 
			 'container'      => false,
));?>
</div>
							<!-- TODO: Switch naming places on primary and secondary menues. -->
							<!-- Primary" Menu used on mid-sizes screens -->
			<div class="xl:hidden min-w-full">
				<div class="xl:relative min-w-full xl:flex xl:justify-between xl:items-center">
					<div class="flex justify-between items-center min-w-full">
					<?php
					wp_nav_menu(
						array(
							'container_id'    => 'primary-menu',
							'container_class' => 'hidden w-full md:mt-0 md:p-0 md:pl-16 md:block',
							'menu_class'      => 'md:flex md:justify-center md:gap-4',
							'theme_location'  => 'primary',
							'li_class'        => 'md:mx-4 groupa',
							'a_class'         => 'ajax-link relative z-0 inline-block font-teko md:font-light md:text-4xl uppercase transition-all duration-150', 
							'fallback_cb'     => false,
						)
					);
					?>

								<!-- Wordpress classic? logo and headlines -->
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



								<!-- Hamburger Animation -->
						<div class="p-4 z-10 xl:hidden">
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
								<!-- TODO: Add ajax link to a tags -->
								<!-- "Secondary" menu for toggle on small screen/phone -->
					<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'mobile',
							'container_id'    => 'mobile-menu',
							'container_class' => 'mobile-menu top-0 absolute bg-black min-w-full',
							'menu_class'      => 'menu-content mx-auto h-full flex flex-col justify-center w-1/3 gap-5',
							'li_class'        => '', 
							'a_class'         => 'z-1 font-teko text-xl', 
							'submenu_class'   => 'ml-4', 
							'fallback_cb'     => false,
						)
					);
					?>

			
				</div>
			</div>

			


			
		</header>
			<?php do_action('tailpress_content_start'); ?>

			<?php if (is_front_page()) { ?>
				
			<?php } ?>

			<main>