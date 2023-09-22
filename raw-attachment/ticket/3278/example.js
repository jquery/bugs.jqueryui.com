var events = [[9,1,'holiday hol_09_01','Labor Day'],
              [10,31,'holiday hol_10-31','Holloween']]; // examples hard-coded for testing

function setTitle () {
    for (i = 0; i < events.length; i++) {
        var cls = events[i][2].split(' ')[1];
        var title = $('.' + cls).attr('title',events[i][3]);
    }
}

function setSelectable () { // allow only the dates listed to be selectable
    for (i = 0; i < events.length; i++) {
        if (date.getMonth() == events[i][0] - 1 && date.getDate() == events[i][1]) {
            if (events[i][2].match('holiday'))
                return [false, events[i][2]];
            else
                return [true, events[i][2]];
	    }
	}
    return [false, ''];
}

function showResponse (date) {
    alert(date);
}

$(document).ready(function() {
    $("#calendar").datepicker({
        dateFormat: $.datepicker.ISO_8601,
        beforeShowDay: setSelectable,
        onSelect: showResponse,
        rangeSelect: false,
        numberOfMonths: 2,
        changeYear: false,
        changeMonth: false,
        changeFirstDay: false
    }).children("div").css("width", "100%");
    setTitle();
});
