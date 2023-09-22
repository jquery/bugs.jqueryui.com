<?php
switch($_GET['do']) {
 case '0x00a0':
  echo 'test-a.html';
 case '0x00b0':
  echo 'test-b.html';
 case '0x00c0':
  echo 'test-c.html';
 case '0x00d0':
  echo 'test-d.html';
 case '0x00e0':
  echo 'test-e.html';
 case '0x00f0':
  echo 'test-f.html';
 default:
  echo 'test-a.html';
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
 <head>
  <link rel="stylesheet" type="text/css" href="templates/default/css/overcast/jquery-ui-1.8.5.custom.css" />
  <link rel="stylesheet" type="text/css" href="templates/default/css/default.css" />
  <script type="text/javascript" src="libs/js/jquery-1.4.3.min.js"></script>
  <script type="text/javascript" src="libs/js/jquery-ui-1.8.5.custom.min.js"></script>
  <script type="text/javascript" src="libs/js/jquery.cookie.js"></script>
  <script type="text/javascript">
   var $j = jQuery.noConflict();
   $j(document).ready(function() {
    var loading = '<img src="templates/default/images/loading.gif" width="20" height="20" alt="Loading content..." title="Loading content..." />';
    var tabID = $j.cookie('tabID')||0;
    $j('#tabs').tabs({
     rotate: 0,
     ajaxOptions: [{async:true,cache:true}],
     fx: [{opacity:'toggle',height: 'toggle',duration:'normal'}],
     selected: tabID,
     show: function(junk, ui) {
      $j.cookie('tabID', ui.index, {expires:3600});
     },
     spinner: loading
    });
   });
  </script>
 </head>
 <body>
  <div id="tabs" class="tabs">
   <ul id="tabID">
    <li><a href="content.php?do=0x00a0">Main</a></li>
    <li><a href="content.php?do=0x00b0">Purchasing</a></li>
    <li><a href="content.php?do=0x00c0">Inventory</a></li>
    <li><a href="content.php?do=0x00d0">Reports</a></li>
    <li><a href="content.php?do=0x00e0">Options</a></li>
    <li><a href="content.php?do=0x00f0">Exit</a></li>
   </ul>
  </div>
 </body>
</html>
