<?php
/**
 * Plugin Name: Very first plugin
 * Plugin URI: http://kaurkaelep.ikt.khk.ee/
 * Description: This is the very first plugin I ever created.
 * Version: 1.0
 * Author: Kaur Kaelep
 * Author URI: http://kaurkaelep.ikt.khk.ee/
 **/
 
 function dh_modify_read_more_link() {

    return '<a class="more-link" href="' . get_permalink() . '">Click to Read!</a>';

}

add_filter( 'the_content_more_link', 'dh_modify_read_more_link' );