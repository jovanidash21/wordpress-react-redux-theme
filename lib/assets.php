<?php

function assets() {

  // Fonts
  wp_enqueue_style( 'roboto-font', 'https://fonts.googleapis.com/css?family=Roboto' );

  // Styles
  wp_enqueue_style( 'react-redux-css', get_template_directory_uri() . '/dist/build/bundle.css', false, null );

  // Scripts
  wp_enqueue_script( 'react-redux-js', get_template_directory_uri() . '/dist/build/bundle.js', array(), null, true );
  wp_localize_script( 'react-redux-js', 'WP_REACT_REDUX', array(
    'siteName'        => get_bloginfo( 'name' ),
    'siteDescription' => get_bloginfo( 'description' ),
    'siteURL'         => get_site_url(),
    'images'          => get_template_directory_uri() . '/dist/images',
  ) );

}

add_action( 'wp_enqueue_scripts', 'assets', 100 );

?>
