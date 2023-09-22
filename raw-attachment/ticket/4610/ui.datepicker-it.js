/* Italian initialisation for the jQuery UI date picker plugin. */
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */
jQuery(function($){
	$.datepicker.regional['it'] = {
		closeText: 'Chiudi',
		prevText: '&#x3c;Prec',
		nextText: 'Succ&#x3e;',
		currentText: 'Oggi',
		monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
			'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
		monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu',
			'Lug','Ago','Set','Ott','Nov','Dic'],
		dayNames: ['Domenica','Luned&#236','Marted&#236','Mercoled&#236','Gioved&#236','Venerd&#236','Sabato'],
		dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
		dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
        showMonthAfterYear: false,
		yearSuffix: '',
        isHoliday : function (date) {
            var fixedDates = ['1/1', '6/1', '25/4', '1/5', '2/6', '15/8', '1/11', '8/12', '25/12', '26/12' ];
            if($.inArray(date.getDate() + '/' +(date.getMonth()+1), fixedDates) !== -1){
                return true;
            }
            var year = date.getFullYear();
            
            var golden = year % 19;
            var b = Math.floor( year / 100 );
            var c = year % 100;
            var d = Math.floor( b / 4);
            var e = b % 4;
            var f = Math.floor((b + 8 ) / 25);
            var g = Math.floor((b - f + 1 ) / 3);
            var h = (19 * golden + b - d - g + 15) % 30;
            var i = Math.floor(c / 4);
            var j = c % 4;
            var k = (32 + 2 * e + 2 * i - h - j) % 7;
            var m = Math.floor((golden + 11 * h + 22 * k) / 451);
            var month = Math.floor((h + k - 7 * m + 114) / 31);
            var day = ((h + k - 7 * m +114) % 31) + 1;
            if(month == 3 && day == 31){
                month = 4; day = 1;
            } else {
                day++;
            }
            
            if(date.getDate() == day && (date.getMonth()+1) == month)
                return true;
            
            return false;
        }
    };
	$.datepicker.setDefaults($.datepicker.regional['it']);
});
