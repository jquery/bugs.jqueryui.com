/* Inicialización para empregar galego no plugin jQuery UI date picker. */
/* Traducido por OpenHost S.L. para o proxecto OpenNemas (http://www.openhost.es/es/opennemas) */
jQuery(function($){
	$.datepicker.regional['gl-ES'] = {
		closeText: 'Pechar',
		prevText: 'Prev',
		nextText: 'Seg',
		currentText: 'Hoxe',
		monthNames: ['Xaneiro','Febreiro','Marzo','Abril','Maio','Xuño',
		'Xullo','Agosto','Setembro','Outubro','Novembro','Decembro'],
		monthNamesShort: ['Xan', 'Feb', 'Mar', 'Abr', 'Mai', 'Xuñ',
		'Xul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
		dayNames: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'],
		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mér', 'Xov', 'Ven', 'Sáb'],
		dayNamesMin: ['Do','Lu','Ma','Mé','Xo','Ve','Sá'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['gl-ES']);
});
