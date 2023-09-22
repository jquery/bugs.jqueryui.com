--- ./jquery-ui-orig/development-bundle/ui/jquery.ui.resizable.js	Sat Feb 27 19:55:06 2010
+++ ./jquery-ui/development-bundle/ui/jquery.ui.resizable.js	Tue Mar 16 10:51:01 2010
@@ -28,6 +28,7 @@
 		grid: false,
 		handles: "e,s,se",
 		helper: false,
+		iframeFix: false,
 		maxHeight: null,
 		maxWidth: null,
 		minHeight: 10,
@@ -787,6 +788,25 @@
 	}
 
 });
+
+$.ui.plugin.add("resizable", "iframeFix", {
+	start: function(event, ui) {
+		var o = $(this).data('resizable').options;
+		$(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
+			$('<div class="ui-resizable-iframeFix" style="background: #fff;"></div>')
+			.css({
+				width: this.offsetWidth+"px", height: this.offsetHeight+"px",
+				position: "absolute", opacity: "0.001", zIndex: 1000
+			})
+			.css($(this).offset())
+			.appendTo("body");
+		});
+	},
+	stop: function(event, ui) {
+		$("div.ui-resizable-iframeFix").each(function() { this.parentNode.removeChild(this); }); //Remove frame helpers
+	}
+});
+
 
 var num = function(v) {
 	return parseInt(v, 10) || 0;
