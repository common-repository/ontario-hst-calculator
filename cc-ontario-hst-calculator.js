var $J = jQuery.noConflict();

var hstRate = 13; 

$J( document ).ready(function() {
	// runtime events
	
	$J(".ontario-including-hst").keydown(function(event) {
		if(!(isDecimalKey(event,this.value))) event.preventDefault();
	});	

	$J(".ontario-including-hst").keyup(function( ) {
		calculate_ontario_hst(this.id, parseFloat(this.value), $J(this).closest("aside").attr("id"));
	});

	$J(".ontario-excluding-hst").keydown(function(event) {
		if(!(isDecimalKey(event,this.value))) event.preventDefault();
	});	

	$J(".ontario-excluding-hst").keyup(function( ) {
		calculate_ontario_hst(this.id, parseFloat(this.value), $J(this).closest("aside").attr("id"));
	});

	$J(".ontario-hst").keydown(function(event) {
		if(!(isDecimalKey(event,this.value))) event.preventDefault();
	});	

	$J(".ontario-hst").keyup(function( ) {
		calculate_ontario_hst(this.id, parseFloat(this.value), $J(this).closest("aside").attr("id"));
	});

	$J(".ontario-clear").click(function( ) {
		clear_ontario_hst_values($J(this).closest("aside").attr("id"));
	});


});

function clear_ontario_hst_values(widget_id)
{
	$J('#' + widget_id + '-hst').val("");
	$J('#' + widget_id + '-including-hst').val(""); 
	$J('#' + widget_id + '-excluding-hst').val("");
};

function calculate_ontario_hst(id, value, widget_id)
{
    	// if no data entered
	if (isNaN(value) || value == "") {
	    clear_ontario_hst_values(widget_id);
	    return;   
	}

	var HSTID = widget_id + '-hst';
	var HSTinclusiveID = widget_id + '-including-hst';
	var HSTexclusiveID = widget_id + '-excluding-hst';

		var HSTinclusive = 0, HSTexclusive = 0, HST = 0;
		switch(id) {
			case HSTID:
				HST = value;
				HSTexclusive = HST * 100 / hstRate;
				HSTinclusive = HSTexclusive + HST;	
				break;
			case HSTinclusiveID:
                HSTinclusive = value;
                HST = HSTinclusive * hstRate / (100 + hstRate);
                HSTexclusive = HSTinclusive - HST;			
				
				break;
			case HSTexclusiveID:
                HSTexclusive = value;
                HST = HSTexclusive * hstRate / 100;
                HSTinclusive = HSTexclusive + HST;			
				break;
		}

		if(id != HSTID) $J('#' + HSTID).val(round2TwoDecimals(HST));
		if(id != HSTinclusiveID) $J('#' + HSTinclusiveID).val(round2TwoDecimals(HSTinclusive));
		if(id != HSTexclusiveID) $J('#' + HSTexclusiveID).val(round2TwoDecimals(HSTexclusive));
   
};


function isIntegerKey(evt)	  
      {
         var key = evt.which || evt.which || event.keyCode;
		 // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
		 var isInteger = (key == 8 || 
                key == 9 ||
                key == 46 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
		return isInteger;
				
      };
	  
function isDecimalKey(e, number)
      {
         var key = (e.which) ? e.which : e.keyCode;
		 // numbers (48-57 and 96-105), dot (110,190), comma (44,188), backspace(8), tab (9), navigation keys (35-40), DEL(46)
		 if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 110 || key == 190 || key == 8 || key == 9 || (35 <= key && key <= 40) || key == 46 )  
		 	{
			 		  if (key == 110 || key == 190)
					  {
					   	 // skip it if comma or decimal point already entered or it is empty field yet
						 if (number.indexOf(".") > -1 || number.indexOf(",") > -1 || number.length == 0) 
						 	return false; 
					  }
			          return true;
			}

         return false;
      };

function radioValue(element)	  
		 {
		    var returnValue = "";
            var radios = document.getElementsByName(element);
            
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    returnValue = radios[i].value;
                }
			}
			return returnValue;	
		 };	  	
function round2TwoDecimals(number)
		 {
 		    return Math.round(number*100)/100						 
		 };	
 



