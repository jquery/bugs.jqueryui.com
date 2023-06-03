/* \Persian Translation for jQuery UI date picker plugin. */
/* Saleh Souzanchi -- saleh.souzanchi@gmail.com */
/* صالح سوزچی -- saleh.souzanchi@gmail.com */
jQuery(function($){
	$.datepicker.regional['fa'] = {
		clearText: 'از نوع', clearStatus: 'حذف تاریخ فعلی',
		closeText: 'بستن', closeStatus: 'بستن بدون تغییر',
		prevText: '&#x3c;قبلی', prevStatus: 'نمایش ماه قبل',
		prevBigText: '&#x3c;&#x3c;', prevBigStatus: 'نمایش سال قبل',
		nextText: 'بعدی&#x3e;', nextStatus: 'ماه بعدی',
		nextBigText: '&#x3e;&#x3e;', nextBigStatus: 'نمایش سال بعد',
		currentText: 'امروز', currentStatus: 'نمایش ماه جاری',
		monthNames: ['ژانویه', 'فبریه', 'مارس', 'آوریل', 'مه', 'ژوئن',
		'جولای', 'آگوست', 'سپتامبر',	'اکتبر', 'نوامبر', 'دسامبر'],
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		monthStatus: 'نمایش تاریخ متفاوت', yearStatus: 'نمایش سال متفاوت',
		weekHeader: 'هفته', weekStatus: 'هفته جاری',
		dayNames: ['یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'],
		dayNamesShort: ['یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'],
		dayNamesMin: ['یک شنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'],
		dayStatus: 'انتخاب DD ، برای اولین روز هفته', dateStatus: 'انتخاب D, M d',
		dateFormat: 'dd/mm/yy', firstDay: 0, 
		initStatus: 'انتخاب یک تاریخ', isRTL: true};
	$.datepicker.setDefaults($.datepicker.regional['fa']);
});