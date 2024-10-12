<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {

    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/sass/style.css');

    wp_enqueue_style('swiper-css', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css');
    wp_enqueue_script('swiper-js', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), null, true);

    wp_enqueue_script('navBurger', get_stylesheet_directory_uri() . '/js/navBurger.js', array(), null, true);
    wp_enqueue_script('parallaxeLogo', get_stylesheet_directory_uri() . '/js/parallaxeLogo.js', array(), null, true);
    wp_enqueue_script('fadeInSection', get_stylesheet_directory_uri() . '/js/fadeInSection.js', array(), null, true);
    wp_enqueue_script('fadeInTitle', get_stylesheet_directory_uri() . '/js/fadeInTitle.js', array(), null, true);
    wp_enqueue_script('removeControl', get_stylesheet_directory_uri() . '/js/removeControl.js', array(), null, true);
    wp_enqueue_script('parallaxeCloud', get_stylesheet_directory_uri() . '/js/parallaxeCloud.js', array(), null, true);
    wp_enqueue_script('swiperCarrousel', get_stylesheet_directory_uri() . '/js/swiperCarrousel.js', array('swiper-js'), null, true);
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}