<article id="post-<?php the_ID(); ?>">

	<header class="entry-header">
		<!-- <?php the_title( sprintf( '<h2 class="font-josefin entry-title text-center text-2xl md:text-3xl font-bold leading-tight">', esc_url( get_permalink() ) ), '</h2>' ); ?> -->

	</header>

	<?php if ( is_search() || is_archive() ) : ?>

		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div>

	<?php else : ?>

		<div class="homepage-content fixed top-0 w-full h-screen bg-black bg-opacity-30">
		<div class="relative pt-20 w-full flex"> <!-- Added flex class here -->
        <div class="mx-auto">

					<?php
			/* translators: %s: Name of current post */
			the_content(
				sprintf(
					__( 'Continue reading %s', 'tailpress' ),
					the_title( '<span class="screen-reader-text">"', '"</span>', false )
				)
			);

			wp_link_pages(
				array(
					'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'tailpress' ) . '</span>',
					'after'       => '</div>',
					'link_before' => '<span>',
					'link_after'  => '</span>',
					'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'tailpress' ) . ' </span>%',
					'separator'   => '<span class="screen-reader-text">, </span>',
				)
			);
			?>


				</div>
				
			</div>

		</div>

	<?php endif; ?>

</article>
