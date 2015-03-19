
jQuery(document).ready(function(){


	jQuery( window ).scroll(function() {
		var submenu = jQuery( ".submenu" );
		var position = submenu.offset();
		if(jQuery(window).scrollTop() > position.top){
			submenu.removeClass('grid-1000');
			submenu.find('.pane-content').addClass('fixtop');
		}else{
			submenu.addClass('grid-1000');
			submenu.find('.pane-content').removeClass('fixtop');
		}
		//console.log(position.top + ' :: ' + jQuery(window).height() + ' :: ' + jQuery(window).scrollTop());
	});
	
	jQuery(".submenu-list li a").click(function(){
		jQuery(".submenu-list li a").removeClass('active');
		jQuery(this).addClass('active');
		
	});

	/*
	.grid-1000 active
	.submenu
	#submenuquehacemos
	#submenurespaldo
	
	
	
	*/



	jQuery('body.i18n-es #edit-field-categoria-proyecto-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-es #edit-field-servicio-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-es #edit-field-cliente-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-en #edit-field-categoria-proyecto-tid option[value="All"]').text("- All -");

	jQuery('body.i18n-en #edit-field-servicio-tid option[value="All"]').text("- All -");

	jQuery('body.i18n-en #edit-field-cliente-tid option[value="All"]').text("- All -");

	jQuery('.node-type-blog #comments #edit-name').attr('placeholder', jQuery('.node-type-blog #comments label[for="edit-name"]').text());
	jQuery('.node-type-blog #comments #edit-field-empresa-und-0-value').attr('placeholder', jQuery('.node-type-blog #comments label[for="edit-field-empresa-und-0-value"]').text());
	jQuery('.node-type-blog #comments #edit-field-email-und-0-value').attr('placeholder', jQuery('.node-type-blog #comments label[for="edit-field-email-und-0-value"]').text());
	jQuery('.node-type-blog #comments #edit-comment-body-und-0-value').attr('placeholder', jQuery('.node-type-blog #comments label[for="edit-comment-body-und-0-value"]').text());
	

	/* para menu responsivo */
	jQuery('#block-menu-menu-menu-para-movil .menu').slicknav();

	
});

	

jQuery( document ).ajaxComplete(function() {

	jQuery('body.i18n-es #edit-field-categoria-proyecto-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-es #edit-field-servicio-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-es #edit-field-cliente-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-en #edit-field-categoria-proyecto-tid option[value="All"]').text("- All -");

	jQuery('body.i18n-en #edit-field-servicio-tid option[value="All"]').text("- All -");

	jQuery('body.i18n-en #edit-field-cliente-tid option[value="All"]').text("- All -");


	
});