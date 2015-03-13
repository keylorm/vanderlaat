
jQuery(document).ready(function(){

	jQuery('body.i18n-es #edit-field-categoria-proyecto-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-es #edit-field-servicio-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-es #edit-field-cliente-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-en #edit-field-categoria-proyecto-tid option[value="All"]').text("- All -");

	jQuery('body.i18n-en #edit-field-servicio-tid option[value="All"]').text("- All -");

	jQuery('body.i18n-en #edit-field-cliente-tid option[value="All"]').text("- All -");


	
});

jQuery( document ).ajaxComplete(function() {

	jQuery('body.i18n-es #edit-field-categoria-proyecto-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-es #edit-field-servicio-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-es #edit-field-cliente-tid option[value="All"]').text("- Todos -");

	jQuery('body.i18n-en #edit-field-categoria-proyecto-tid option[value="All"]').text("- All -");

	jQuery('body.i18n-en #edit-field-servicio-tid option[value="All"]').text("- All -");

	jQuery('body.i18n-en #edit-field-cliente-tid option[value="All"]').text("- All -");


	
});