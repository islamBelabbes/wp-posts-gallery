<?php 
if (! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

function maingall(){
    $output = ' 
    <div class="wp-gall-container">
    <div class="tabs">
      <button class="filter-tab tab allitems" data-cat="">All</button>
    </div>
    <div class="gallery-items">
      <div class="wp-gallery-items-loding">
      <img src="' . plugin_dir_url( __FILE__ ) . '/wp-gallery-loading.gif' . '" />
      </div>
    <div class="masonry"></div>
    </div>
    <template data-gallery-template>
      <div data-cat="" class="mItem scale-up-center">
        <a href="">
        <img src="https://source.unsplash.com/random/600" />
        </a>
      </div>
    </template>
   <div class="loadmore">
   <button data-current-cat="" data-max-page="" data-current-page="1" class="filter-tab">Load More</button>
   </div>
  </div>';
    return $output;
}