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

	<div id="page" class="min-h-screen flex flex-col">

		<?php do_action('tailpress_header'); ?>

		<header class="sticky top-0 z-9  min-w-full'">
		<div class="min-w-full flex justify-center">
			<?php
		wp_nav_menu( array(
    		'theme_location'  => 'secondary',
    		'container_class' => 'min-w-full', // Tailwind styles for container
   			'menu_class'      => 'hidden lg:flex lg:flex-row lg:justify-center', 
   		    'li_class'        => 'secondary-li-class-parent-desktop group', // Parent item styles
 		    'a_class'         => 'lg:text-2xl lg:tracking-wide lg:font-teko z-20 lg:w-full lg:font-medium lg:uppercase lg:relative',
 		    'submenu_class'   => 'hover-background-animation', // Centered and increased size
));?>
</div>
			<div class="lg:hidden container min-w-full bg-black bg-opacity-80">
				<div class="lg:relative min-w-full lg:flex lg:justify-between lg:items-center">
					
					<div class="flex justify-between items-center min-w-full lg:child-left pb-4">
					<div>
							<?php if (has_custom_logo()) { ?>
								<?php the_custom_logo(); ?> 
							<?php } else { ?>
								<a href="<?php echo get_bloginfo('url'); ?>" class="font-extrabold text-lg uppercase">
									<?php echo get_bloginfo('name'); ?>
								</a>

								<p class="text-sm font-light text-gray-600">
									<?php echo get_bloginfo('description'); ?>
								</p>

							<?php } ?>
						</div>



						<div class="p-4 lg:hidden">
							<a href="#" aria-label="Toggle navigation" id="primary-menu-toggle">
								<svg viewBox="0 0 20 20" class="inline-block w-6 h-6" version="1.1"
									xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
										<g id="icon-shape">
											<path d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z"
												id="Combined-Shape"></path>
										</g>
									</g>
								</svg>
							</a>
						</div>



					</div>

					<?php
					wp_nav_menu(
						array(
							'container_id'    => 'primary-menu',
							'container_class' => 'hidden mt-4 p-4 lg:mt-0 lg:p-0 lg:pl-10 xl:pl-14 lg:block xl:bg-transparent xl:block xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2',
							'menu_class'      => 'lg:flex lg:gap-4 z--1',
							'theme_location'  => 'primary',
							'li_class'        => 'lg:mx-4 groupa', // Add group class here
							'a_class'         => 'relative z--1 inline-block font-teko lg:font-light lg:text-4xl xl:text-7xl uppercase transition-all duration-150', // Class for <a>
							'fallback_cb'     => false,
						)
					);
					?>


				</div>
			</div>

			
<!-- 
			<div class="mx-auto min-w-xl h-1 bg-gray-300">
			</div> -->
			
		</header>

		<div id="content" class="site-content flex-grow">

			<?php if (is_front_page()) { ?>
				<!-- Start introduction -->
				 <div class="flex justify-center pt-20">
				<?php
					wp_nav_menu(
						array(
							'container_id'    => 'primary-menu',
							'container_class' => 'hidden mt-4 p-4 lg:mt-0 lg:p-0 lg:pl-10 xl:pl-14 lg:block xl:bg-transparent xl:block',
							'menu_class'      => 'lg:flex lg:gap-4',
							'theme_location'  => 'primary',
							'li_class'        => 'lg:mx-4 groupa', // Add group class here
							'a_class'         => 'relative -z-1 inline-block font-teko lg:font-light lg:text-4xl xl:text-8xl uppercase transition-all duration-150', // Class for <a>
							'fallback_cb'     => false,
						)
					);
					?>
					</div>
				<!-- End introduction -->
			<?php } ?>

			<?php do_action('tailpress_content_start'); ?>


			<main>