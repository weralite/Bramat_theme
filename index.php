<?php
get_header();

if (is_front_page()) {
    include 'template-parts/content.php';
    exit;
}
?>

<div class="container mx-auto bg-black bg-opacity-70 pt-10 min-h-screen border-shadow">

	<?php if ( have_posts() ) : ?>
		<?php
		while ( have_posts() ) :
			the_post();
			?>

<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

		<?php endwhile; ?>

	<?php endif; ?>

</div>

<?php
get_footer();
