<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class('bg-black text-gray-200 antialiased'); ?>>

	<?php do_action('tailpress_site_before'); ?>

	<div id="page" class="min-h-screen flex flex-col">

		<?php do_action('tailpress_header'); ?>

		<header class="sticky top-0 bg-black pt-2">

			<div class="mx-auto container">
				<div class="lg:relative lg:flex lg:justify-between lg:items-center">
					<div class="flex justify-between items-center lg:child-left pb-4">
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

						<div class="lg:hidden">
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
							'container_class' => 'hidden bg-black mt-4 p-4 lg:mt-0 lg:p-0 lg:pl-10 xl:pl-14 lg:block xl:bg-transparent xl:block xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2',
							'menu_class'      => 'lg:flex lg:gap-4',
							'theme_location'  => 'primary',
							'li_class'        => 'lg:mx-4 groupa', // Add group class here
							'a_class'         => 'relative inline-block font-teko lg:font-light lg:text-4xl xl:text-5xl uppercase transition-all duration-150', // Class for <a>
							'fallback_cb'     => false,
						)
					);
					?>

				</div>
				<!-- <div class="flex justify-center p-2">
					<b>Julbord</b>
				</div> -->
			</div>

			

			<div class="mx-auto max-w-[1440px] h-2 bg-gray-300">
			</div>
			<div class="w-full flex justify-center">
			<?php
wp_nav_menu( array(
    'theme_location'  => 'secondary',
    'container_class' => '', // Tailwind styles for container
    'menu_class'      => 'flex flex-row', 
    'li_class'        => 'primary-li-class-parent-desktop group', // Parent item styles
    'a_class'         => 'text-xl tracking-wide font-teko z-20 w-full font-semibold uppercase p-4 relative',
   'submenu_class'   => 'absolute pt-4 top-full left-1/2 transform -translate-x-1/2 w-64 overflow-hidden transition-all duration-100 ease-in-out origin-top scale-y-0 group-hover:max-h-40 group-hover:scale-y-100 will-change-transform', // Centered and increased size
    'submenu_li_class' => 'border-b ', // Submenu items styles
	'submenu_a_class' => 'text-black text-left  hover:underline',
));
?>
			<!-- <ul class="lg:flex">
			<li class="text-lg group relative w-max pt-2 ">
					<a href="#" class="text-xl font-teko font-semibold uppercase p-5 relative z-10 group-hover:text-black">hEM</a>
					      <span class="absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full "></span>
				</li>
				<li class="text-lg group relative w-max pt-2">
					<a href="#" class="text-xl font-teko font-semibold uppercase p-5 relative z-10 group-hover:text-black">boka</a>
					      <span class="absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full "></span>
				</li>
				<li class="text-lg group relative w-max pt-2">
					<a href="#" class="text-xl font-teko font-semibold uppercase p-5 relative z-10 group-hover:text-black">Öppettider</a>
					      <span class="absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full "></span>
				</li>
				<li class="text-lg group relative w-max pt-2">
					<a href="#" class="text-xl font-teko font-semibold uppercase p-5 relative z-10 group-hover:text-black">Take Away</a>
					      <span class="absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full "></span>
				</li>
				<li class="text-lg group relative w-max pt-2">
					<a href="#" class="text-xl font-teko font-semibold uppercase p-5 relative z-10 group-hover:text-black">Lokalen</a>
					      <span class="absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full "></span>
				</li>
				<li class="text-lg group relative w-max pt-2">
					<a href="#" class="text-xl font-teko font-semibold uppercase p-5 relative z-10 group-hover:text-black">Lediga tjänster</a>
					      <span class="absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full "></span>
				</li>
				<li class="text-lg group relative w-max pt-2">
					<a href="#" class="text-xl font-teko font-semibold uppercase p-5 relative z-10 group-hover:text-black">Om oss</a>
					      <span class="absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full "></span>
				</li>
				<li class="text-lg group relative w-max pt-2">
					<a href="#" class="text-xl font-teko font-semibold uppercase p-5 relative z-10 group-hover:text-black">Julbord</a>
					      <span class="absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full "></span>
				</li>

</ul> -->

</div>
		</header>

		<div id="content" class="site-content flex-grow">

			<?php if (is_front_page()) { ?>
				<!-- Start introduction -->

				<!-- End introduction -->
			<?php } ?>

			<?php do_action('tailpress_content_start'); ?>


			<main>