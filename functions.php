<?php
    function kc_theme_scripts() {
        wp_enqueue_style( 'kasama-style', get_stylesheet_uri() );

        wp_register_style( 'kasama-theme-styles', get_stylesheet_directory_uri() . '/dist/main.css', [ 'kasama-style' ] );

        if( wp_style_is( 'kasama-theme-styles', 'registered' ) ) {
            wp_enqueue_style( 'kasama-theme-styles' );
        }

        wp_register_script( 'kasama-theme-scripts', get_stylesheet_directory_uri() . '/dist/main.js', ['jquery'] );
        if( wp_script_is( 'kasama-theme-scripts', 'registered' ) ) {
            wp_enqueue_script( 'kasama-theme-scripts' );
        }
    }

    function kc_register_supports() {
        add_theme_support( 'title-tag' );
    }

    function kc_register_navigation() {
        register_nav_menus(
            [
                'primary-menu' => 'Primary Menu',
                'secondary-menu' => 'Secondary Menu',
                'tertiary-menu' => 'Tertiary Menu',
            ]
            );
    }

    function kc_register_sidebar() {
        register_sidebar(
            [
                'id' => 'primary',
                'name' => 'Primary Sidebar',
                'description' => 'The Primary Theme Sidebar'
            ]
        );
    }

    function header_scripts() { ?>
    <title><?php wp_title('-', true, 'right'); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
<?php
    }

    add_action( 'wp_head', 'header_scripts' );
    add_action( 'wp_enqueue_scripts', 'kc_theme_scripts' );
    add_action( 'after_theme_setup', 'kc_register_supports' );
    add_action( 'after_theme_setup', 'kc_register_navigation' );
    add_action( 'widget_init', 'kc_register_sidebar' );
?>