  	function Dialogo()
	{
	    $("#dialog").dialog( {width: 650, 
			height: 210 , modal:true,
			/*show: 'slide',*/ hide: 'slide',
			resizable: false, autoOpen: true, 			
			closeOnEscape:false,draggable:false,
			buttons:{ "Aceptar": function() { 							
					if($("#user").attr("value").length>0 && $("#password").attr("value").length>0) 
					{						
						$(this).dialog('destroy'); 
					}
				}}
			}		
		);
	}