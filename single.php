<?php get_header(); ?>

	<div class="container mx-auto max-w-screen-xl min-h-screen pt-16">

	<?php if ( have_posts() ) : ?>

		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content', 'single' ); ?>

			<!-- <?php
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;
			?> -->

		<?php endwhile; ?>

	<?php endif; ?>

	</div>

<?php
get_footer();
