Index: ui.datepicker.js
===================================================================
--- ui.datepicker.js	(revision 2416)
+++ ui.datepicker.js	(working copy)
@@ -204,6 +204,8 @@
 				return this._get(inst, key);
 			});
 		$.data(target, PROP_NAME, inst);
+        //to update the date picker or the alternate field after a direct user change 
+        input.keyup( this._updateAfterInputChange);
 	},
 
 	/* Attach an inline date picker to a div. */
@@ -823,6 +825,25 @@
 			$(altField).each(function() { $(this).val(dateStr); });
 		}
 	},
+    
+   /* Update any alternate field when the main field is changed without the datepicker
+   Verify first that the date is valid before to update the alternate field 
+   @event */
+   _updateAfterInputChange: function(event) {
+       var inst = $.datepicker._getInst(event.target);
+       var dateFormat = $.datepicker._get(inst, 'dateFormat');
+       var dates = inst.input ? inst.input.val() : null;
+       var date =  $.datepicker._getDefaultDate(inst);
+       var settings = $.datepicker._getFormatConfig(inst);
+       try {
+           date = $.datepicker.parseDate(dateFormat, dates, settings);
+           if(date){
+               $.datepicker._setDateFromField(inst);
+               $.datepicker._updateAlternate(inst);
+               $.datepicker._updateDatepicker(inst);
+           }
+       } catch (event) { $.datepicker.log(event); }
+    },
 
 	/* Set as beforeShowDay function to prevent selection of weekends.
 	   @param  date  Date - the date to customise
