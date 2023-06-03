// Line 1611 in jquery-ui-1.8.2.datepicker.min.js?387 (http://localhost/App_Scripts/jquery-ui-1.8.2.datepicker.min.js?387)
// alternative with IE8 detection

var ie8class = “”;
if((jQuery.browser.msie) && parseInt(jQuery.browser.version) == 8){ ie8class = “ ui-state-disabled “}              

var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
                  '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid +
                  '.datepicker._adjustDate(\'#' + inst.id + '\', -' + stepMonths + ', \'M\');"' +
                  ' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
                  (hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="’+ie8class+’ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
