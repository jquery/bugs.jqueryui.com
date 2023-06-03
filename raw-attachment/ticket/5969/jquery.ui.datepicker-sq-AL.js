/* Albanian initialisation for the jQuery UI date picker plugin. */
/* Written by Mehmetali Shaqiri. */
jQuery(function($){
	$.datepicker.regional['sq-AL'] = {
		closeText: 'Në rregull',
		prevText: 'Prapa',
		nextText: 'Para',
		currentText: 'Today',
		monthNames: ['Janar','Shkurt','Mars','Prill','Maj','Qershor','Korrik','Gusht','Shtator','Tetor','Nëntor','Dhjetor'],
		monthNamesShort: ['Jan', 'Shku', 'Mar', 'Pri', 'Maj', 'Qer','Korr', 'Gush', 'Shta', 'Tet', 'Nën', 'Dhje'],
		dayNames: ['E diel', 'E hënë', 'E martë', 'E mërkure', 'E enjte', 'E premte', 'E shtune'],
		dayNamesShort: ['D', 'H', 'M', 'M', 'E', 'P', 'S'],
		dayNamesMin: ['D', 'H', 'M', 'M', 'E', 'P', 'S'],
		weekHeader: 'Jv',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['sq-AL']);
});
