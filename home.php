<?php get_header(); ?>

<div class="container mx-auto max-w-screen-xl min-h-screen pt-16">


    <!-- Blog Post Loop -->
    <section class="mx-auto flex flex-col md:max-w-screen-lg gap-10">
        <?php if ( have_posts() ) : ?>
            <?php while ( have_posts() ) : the_post(); ?>

            <article class="flex flex-col gap-5 max-w-sm md:flex-row md:max-w-screen-lg md:min-w-screen-lg mx-auto md:mx-0 overflow-hidden" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

            <?php if ( has_post_thumbnail() ) : ?>
        <div class="w-full max-w-sm aspect-[16/9] overflow-hidden">
            <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail('full', ['class' => 'w-full h-full object-cover']); ?>
                   </a>
                     </div>
                     <?php else : ?>
                    
                   <div class="w-full max-w-sm aspect-[16/9] bg-transparent flex items-center justify-center">
                    <div class="w-full h-full object-fill flex items-center justify-center" >
                   <span class="text-gray-500">No Image Available</span>
                   </div>
                   </div>
                    <?php endif; ?>
                    <div class="w-full max flex flex-col justify-between">
                    <div clasS="flex flex-col gap-2 w-full">
                    <!-- Post Title -->
                    <header class="entry-header">
                        <h2 class="text-xl font-bold"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    </header>

                    <!-- Post Meta (Date, Author) -->
                    <div class="entry-meta">
                        <span class="post-date text-sm text-gray-400"><?php echo get_the_date(); ?></span>
                    </div>

                    <!-- Post Content -->
                    <div class="entry-excerpt">
                     <?php 
                      $excerpt = get_the_excerpt();
                       echo $excerpt; 
                       ?>
                        </div>
                    </div>

                        <!-- Read More Link -->
                        <?php if (strlen($excerpt) > 300) : // Adjust the length as needed ?>
                         <footer class="entry-footer">
                         <a class="read-more" href="<?php the_permalink(); ?>">Läs Mer</a>
                          </footer>
                        <?php endif; ?>


                    </div>
                </article>
            <?php endwhile; ?>

            <!-- Pagination -->
            <div class="pagination">
                <?php
                // Display previous/next post links
                the_posts_pagination( array(
                    'prev_text' => 'Previous',
                    'next_text' => 'Next',
                ) );
                ?>
            </div>

        <?php else : ?>
            <!-- No posts found message -->
            <p>No blog posts found.</p>
        <?php endif; ?>
    </section>

</div>

<?php get_footer(); ?>
