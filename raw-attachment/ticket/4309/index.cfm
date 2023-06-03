<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<title>Test</title>
<link rel="stylesheet" type="text/css" href="static/css_temp/ui.all.css">
<script src="static/js/jquery-1.3.js"></script>
<script src="static/js/jquery-ui-1.7.custom.js"></script>

<script>
	$(document).ready(function() {
		$('#main').click(function() {
			$('#dialog1').dialog({
				title: 'dialog1',
				modal: true
			});
			
			return false;
		});
		
		
		$('#open_other').click(function() {
			$('#dialog2').dialog({
				title: 'dialog2',
				modal: true
			});
			
			return false;
		});
		
	});
</script>

</head>
<body>

<div id="dialog1" style="display:none;">
	<input type="text"/>
	<div>
		<a href="#" id="open_other">Open other dialog</a>
	</div>
</div>

<div id="dialog2"  style="display:none;">
	nothing to see here
</div>

<a href="#" id="main">Start test</a>
	
</div>
</body>
</html>


