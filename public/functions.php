<?php

// function wpse_modify_taxonomy() {
//   // get the arguments of the already-registered taxonomy
//   $language_args = get_taxonomy( 'language' ); // returns an object

//   // make changes to the args
//   // in this example there are three changes
//   // again, note that it's an object
//   $language_args->show_in_rest = true;

//   // re-register the taxonomy
//   register_taxonomy( 'language', 'corsi', (array) $language_args );

// }

function send_general_contact_email(WP_REST_Request $request) {

  $nameSurname = $request['nameSurname'];
  $email = $request['email'];
  $company = empty($request['company']) ? 'N/A' : $request['company'];
  $message = $request['message'];

  $mailBody = file_get_contents(get_template_directory_uri() . '/templates/mail/general.html');

  $mailBody = str_replace('_NAME_SURNAME_', $nameSurname, $mailBody);
  $mailBody = str_replace('_MESSAGE_', $message, $mailBody);
  $mailBody = str_replace('_EMAIL_', $email, $mailBody);

  function wpse27856_set_content_type(){
    return "text/html";
  }

  add_filter( 'wp_mail_content_type','wpse27856_set_content_type' );

  wp_mail( 'claudio.cortese@educabile.it', $nameSurname . ' ti ha inviato un nuovo messaggio', $mailBody, ["From:" => "claudio.cortese@educabile.it"]);

  remove_filter( 'wp_mail_content_type','wpse27856_set_content_type' );

  return new WP_REST_Response($mailBody, 201);
}

function scotsas_theme_setup() {
  add_theme_support( 'align-wide' );
  add_theme_support( 'post-thumbnails' );
}

function scotsas_theme_scripts() {
  wp_enqueue_style( 'style', get_stylesheet_uri() );
}

// if (!is_admin()) {
//   function polylang_json_api_init(){
//     global $polylang;
//     $default = pll_default_language();
//     $langs = pll_languages_list();
//     $cur_lang = $_GET['lang'];
//     if (!in_array($cur_lang, $langs)) {
//       $cur_lang = $default;
//     }
//     $polylang->curlang = $polylang->model->get_language($cur_lang);
//     $GLOBALS['text_direction'] = $polylang->curlang->is_rtl ? 'rtl' : 'ltr';
//   }

//   function polylang_json_api_languages(){
//     return pll_languages_list();
//   }

//   add_action( 'rest_api_init' , 'polylang_json_api_init' );

//   add_action( 'rest_api_init' , 'polylangroute');
// }

add_action( 'after_setup_theme', 'scotsas_theme_setup' );

// hook it up to 11 so that it overrides the original register_taxonomy function
// add_action( 'init', 'wpse_modify_taxonomy', 11 );

add_action('rest_api_init', function () {
  header( "Access-Control-Allow-Origin: *" );

  register_rest_route( 'email/v1', '/contacts',array(
    'methods'  => WP_REST_Server::CREATABLE,
    'callback' => 'send_general_contact_email'
  ));

  register_rest_route( 'email/v1', '/courses',array(
    'methods'  => WP_REST_Server::CREATABLE,
    'callback' => 'send_course_email'
  ));
});

add_action( 'wp_enqueue_scripts', 'scotsas_theme_scripts' );


add_action( 'after_setup_theme', 'register_custom_nav_menus' );

function register_custom_nav_menus() {
	register_nav_menus( array(
		'header_menu' => 'Navbar Menu',
		'footer_menu' => 'Footer Menu',
	) );
}
