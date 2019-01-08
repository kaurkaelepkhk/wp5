/**
 * customizer.js
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );
	
	wp.customize( 'heading_font', function( value ){
		value.bind( function( to ){
			$( 'body' ).append( '<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=' + to + '">' );
			
			$( 'h1,h2,h3,h4,h5,h6,blockquote').css( 'font-family', '"' + to + '"' );
		} );
	} );
	
	wp.customize( 'logo_font', function( value ){
		value.bind( function( to )
		{
			$( 'body' ).append( '<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=' + to + '">' );
			
			$( '.site-branding .site-title').css( 'font-family', '"' + to + '"' );
		} );
	} );
	
	wp.customize( 'navigation_font', function( value ){
		value.bind( function( to ){
			$( 'body' ).append( '<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=' + to + '">' );
			
			$( '.main-navigation a').css( 'font-family', '"' + to + '"' );
		} );
	} );
	
	wp.customize( 'body_font', function( value ){
		value.bind( function( to ){
			$( 'body' ).append( '<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=' + to + '">' );
			
			$( 'body').css( 'font-family', '"' + to + '"' );
		} );
	} );
	
	wp.customize( 'global_color', function( value ){
		value.bind( function( to ){	
			$('a,#ls-topbar.withbg .main-navigation a:hover,.main-navigation a:hover,.site-cover .main-navigation a:hover,.widget li a:hover,.widget_categories ul.children li a:hover,.widget_nav_menu ul.sub-menu li a:hover,.entry-title a:hover,.woocommerce ul.products li.product .price,#site-icons a:hover').css( 'color', '"' + to + '"' );
			
			$('input[type="button"]:hover,input[type="submit"]:hover,input[type="reset"]:hover,.button:hover,.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover,#site-icons a:hover').css( 'border-color', '"' + to + '"' );
			
            $('input[type="button"]:hover,input[type="submit"]:hover,input[type="reset"]:hover,.button:hover,.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover').css( 'background-color', '"' + to + '"' );
		} );
	} );

	wp.customize( 'product_category_row', function( value ){
		value.bind( function( to ){
			if(to==0){
				$('.ls-product-categories').hide();
			}else if(to==1){
				$('.ls-product-categories').show();
			}
		} );
	} );

	wp.customize( 'featured_row', function( value ){
		value.bind( function( to ){
			if(to==0){
				$('.ls-featured-products').hide();
			}else if(to==1){
				$('.ls-featured-products').show();
			}
		} );
	} );

	wp.customize( 'top_rated_row', function( value ){
		value.bind( function( to ){
			if(to==0){
				$('.ls-popular-products').hide();
			}else if(to==1){
				$('.ls-popular-products').show();
			}
		} );
	} );

	wp.customize( 'recent_products_row', function( value ){
		value.bind( function( to ){
			if(to==0){
				$('.ls-recent-products').hide();
			}else if(to==1){
				$('.ls-recent-products').show();
			}
		} );
	} );

	wp.customize( 'onsale_row', function( value ){
		value.bind( function( to ){
			if(to==0){
				$('.ls-on-sale-products').hide();
			}else if(to==1){
				$('.ls-on-sale-products').show();
			}
		} );
	} );

	wp.customize( 'shop_sidebar', function( value ){
		value.bind( function( to ){
			if(to=='left-sidebar'){
				$('body').addClass('lithestore-left-sidebar');
			}else{
				$('body').removeClass('lithestore-left-sidebar');
			}
		} );
	} );
	
} )( jQuery );
