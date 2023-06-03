var timesheet = {

    setup: function () {

        // place range on calendar
        $("#dte").datepicker({ dateFormat: 'dd/mm/yy',
            minDate: $("#timesheetCalMinDate").val(),
            maxDate: $("#timesheetCalMaxDate").val(),
            changeMonth: true,
            showWeek: true
        });

        // turn html combos into autocomplete combos
        (function ($) {
            $.widget("ui.combobox", {
                // added options functionality to widget to support tag id attribute -jcaines
                options: {
                    tagId: ""
                },
                _create: function () {
                    var self = this;
                    var select = this.element.hide();
                    var input = $("<input id=\"" + this.options.tagId + "\">") //modified to support tag id attribute -jcaines
    					.insertAfter(select)
    					.autocomplete({
    					    source: function (request, response) {
    					        var matcher = new RegExp(request.term, "i");
    					        response(select.children("option").map(function () {
    					            var text = $(this).text();
    					            if (!request.term || matcher.test(text))
    					                return {
    					                    id: $(this).val(),
    					                    label: text.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + request.term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>"),
    					                    value: text
    					                };
    					        }));
    					    },
    					    delay: 0,
    					    select: function (e, ui) {
    					        if (!ui.item) {
    					            // remove invalid value, as it didn't match anything
    					            $(this).val("");
    					            return false;
    					        }
    					        $(this).focus();
    					        select.val(ui.item.id);
    					        self._trigger("selected", null, {
    					            item: select.find("[value='" + ui.item.id + "']")
    					        });

    					    },
    					    minLength: 0
    					})
    					.addClass("ui-widget ui-widget-content ui-corner-left resize-h resize-w");
                    $("<button>&nbsp;</button>")
    				.insertAfter(input)
    				.button({
    				    icons: {
    				        primary: "ui-icon-triangle-1-s"
    				    },
    				    text: false
    				}).removeClass("ui-corner-all")
    				.addClass("ui-corner-right ui-button-icon")
    				.position({
    				    my: "left center",
    				    at: "right center",
    				    of: input,
    				    offset: "-1 0"
    				}).css("top", "")
    				.click(function () {
    				    // close if already visible
    				    if (input.autocomplete("widget").is(":visible")) {
    				        input.autocomplete("close");
    				        return false; // ensure no form postback
    				    }
    				    // pass empty string as value to search for, displaying all results
    				    input.autocomplete("search", "");
    				    input.focus();
    				    return false; //ensure no form postback
    				});
                }
            });
        })(jQuery);

        // Add hour slider functionality
        $("#hours").val(parseFloat($("#timesheetHrsValue").val()));
        $("#hoursSlider").slider({
            value: parseFloat($("#timesheetHrsValue").val()),
            min: parseFloat($("#timesheetHrsMin").val()),
            max: parseFloat($("#timesheetHrsMax").val()),
            step: parseFloat($("#timesheetHrsStep").val()),
            slide: function (event, ui) {
                $("#hours").val(ui.value);
            }
        });

        // intialise jquery combos
        $("#projectId").combobox({ tagId: "prjId" });
        $("#classificationId").combobox({ tagId: "clsId" });

        // sychronize html ddls with jquery ddls
        $("#prjId").val($("#projectId option:selected").text());
        $("#clsId").val($("#classificationId option:selected").text());

        // redefine input box styles
        $("#dte").addClass("ui-widget ui-widget-content ui-corner-left ui-corner-right resize-h resize-w");
        $("#hours").addClass("ui-widget ui-widget-content ui-corner-left ui-corner-right resize-h resize-w-hours");
        $("#stage").addClass("ui-widget ui-widget-content ui-corner-left ui-corner-right resize-h resize-w-stage");
        $("#notes").addClass("ui-widget ui-widget-content ui-corner-left ui-corner-right resize-h-notes resize-w-notes");

        // redefine other page furnishings
        $("#fieldset").addClass("ui-corner-left ui-corner-right");
        $("#listHours").addClass("ui-corner-left ui-corner-right");
    }
}