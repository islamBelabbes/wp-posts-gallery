<?php
/*
 * Plugin Name: Post Gallery Plugin
 * Plugin URI: 
 * Description: 
 * Version: v1.1
 * Author: Belabbes Islam
 * Author URI: https://mostaql.com/u/islamalg
 */


if (! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

function postgallery_enqueue_scripts() {
    wp_enqueue_style( 'post-gallery-main', plugin_dir_url( __FILE__ ) . 'inc/style.css' );
    // wp_enqueue_script( 'post-gallery-mainitems', plugin_dir_url( __FILE__ ) . 'inc/itemsgallery.js', array('jquery'),'1.0', true );
    wp_enqueue_script( 'post-gallery-mainjs', plugin_dir_url( __FILE__ ) . 'inc/scriptgallery.js', array('jquery'),"1.0", true );
    wp_localize_script( 'post-gallery-mainjs', 'my_ajax_object',
            array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
    
  }
  add_action( 'wp_enqueue_scripts', 'postgallery_enqueue_scripts' );
  function wp_post_gallery(){
    include("inc/gallery-template.php");
      return maingall();
  }
  add_shortcode("wp_posts_gallery_posty","wp_post_gallery");


// custom end point //
function myplugin_get_posts( $request ) {
  $limit = $request->get_param( 'limit' );
  $category_id = $request->get_param( 'cat' );
  $args = array(
      'post_type' => 'post',
      'posts_per_page' => $limit ? absint( $limit ) : 10,
      'cat' => $category_id ? absint( $category_id ) : "",
  );
  $query = new WP_Query( $args );
  $posts = $query->get_posts();
  $data = array();
  foreach ( $posts as $post ) {
    $category_ids = wp_get_post_categories( $post->ID );
    $categories = array();
    foreach ( $category_ids as $category_id ) {
        $categories[] = array(
            'id' => $category_id,
            'name' => get_cat_name( $category_id ),
        );
        // $categories[] = array(get_cat_name( $category_id ));
    }
      $data[] = array(
          'id' => $post->ID,
          'title' => $post->post_title,
          'img_src' => get_the_post_thumbnail_url( $post->ID),
           "img_cat" => $categories[0],
           "post_url" => get_permalink( $post->ID ),
          // add any other fields you want to include in the response
      );
  }
  return rest_ensure_response( $data );
}
add_action( 'rest_api_init', function () {
  register_rest_route( 'wppostgallery/v2', '/posts', array(
      'methods' => 'GET',
      'callback' => 'myplugin_get_posts',
  ) );
} );

function wp_gallery_rest_api_call(){
  if (rest_url( 'wppostgallery/v2/posts' )){
    $endpoint_url = rest_url( 'wppostgallery/v2/posts' );
    $endpoint_url = $endpoint_url.'?limit='.$_POST["my_data_limit"].'&cat='.$_POST["my_data_cat"].'';
  }
  $response = wp_remote_get(  $endpoint_url );

if ( is_wp_error( $response ) ) {
    // handle error
}

$data = json_decode( wp_remote_retrieve_body( $response ), true );
if ( empty( $data ) ) {
    // handle empty response
}

wp_send_json($data);

}
add_action('wp_ajax_wp_gallery_action', 'wp_gallery_rest_api_call');
add_action('wp_ajax_nopriv_wp_gallery_action', 'wp_gallery_rest_api_call');
