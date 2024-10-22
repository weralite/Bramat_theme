<?php
get_header();
?>

<div id="content-container" class="container mx-auto pt-16"> 

    <?php if (is_page('home')): ?>
        <?php include 'template-parts/homepage.php'; ?>
    <?php else: ?>

        <?php if (have_posts()): ?>
            <?php while (have_posts()): the_post(); ?>
                <?php get_template_part('template-parts/content', get_post_format()); ?>
            <?php endwhile; ?>
        <?php endif; ?>

    <?php endif; ?>

</div> 

<?php
get_footer();
?>
