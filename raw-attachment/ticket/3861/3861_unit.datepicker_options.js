Index: datepicker_options.js
===================================================================
--- datepicker_options.js	(revision 2416)
+++ datepicker_options.js	(working copy)
@@ -409,6 +409,15 @@
 	inp.simulate('keydown', {ctrlKey: true, keyCode: $.simulate.VK_END});
 	equals(inp.val(), '', 'Alt field - dp - ctrl+end');
 	equals(alt.val(), '', 'Alt field - alt - ctrl+end');
+    // verify alt field is updated on keyup
+    alt.val('');
+	inp.val('06/04/2008');
+    inp.simulate('keyup', {keyCode: $.simulate.VK_RETURN});
+	equals(alt.val(), '2008-06-04', 'Alt field - updated');
+    // verify alt field is not updated on keyup is date is invalid
+    inp.val('/04/2008');
+    inp.simulate('keyup', {keyCode: $.simulate.VK_RETURN});
+	equals(alt.val(), '2008-06-04', 'Alt field - not updated');
 });
 
 test('daylightSaving', function() {
