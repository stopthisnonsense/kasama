<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="header">
    <div class="header__logo">
        <?php if( has_custom_logo() ) {
            the_custom_logo();
        } else {
            $site_url = site_url();
            $site_title = get_bloginfo('name');

            echo "<h1><a href='{$site_url}'>$site_title</a></h1>";
        }  ?>
    </div>
    <?php wp_nav_menu( [
        'menu'=>'primary',
        'container_class' => "header__menu header__menu--primary",
        'menu_class' => 'menu menu--primary',
        ] ); ?>
</header>