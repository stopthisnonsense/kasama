<?php get_header(); ?>
<section class="content-wrap">
    <?php
        if( have_posts() ) {
            while( have_posts() ) {
                the_post();
                ?>
                    <article id='post-<?php the_id(); ?>' <?php post_class(); ?>>
                    <?php
                        $post_title = get_the_title();
                        echo "<h2>$post_title</h2>";
                        the_content();
                    ?>
                    </article>

            <?php
            }
        }
        ?>
</section>
<?php get_footer(); ?>