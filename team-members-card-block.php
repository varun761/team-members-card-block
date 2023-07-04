<?php
/**
 * Plugin Name:       Team Members Card Block
 * Description:       A block to display team members.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Varun
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members-card-block
 *
 * @package           wedevoop
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_team_members_showcase_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_team_members_showcase_block_init' );

function enqueue_block_assets_plug()
{
	wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap',
        array(),
        null
    );
}

add_action( 'enqueue_block_assets', 'enqueue_block_assets_plug' );