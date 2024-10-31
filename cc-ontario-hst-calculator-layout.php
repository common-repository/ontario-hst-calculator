<?php
function load_cc_ontario_hst_calc($id, $title, $show_url = 0, $bg_color, $border_color, $text_color)
{
    if ($show_url == 1)
        load_cc_hst_custom_colors($id, $bg_color, $border_color, $text_color);
?>


<div class="CCH-Widget CCH-Widget-<?php echo $id; ?>">
	 	<div class="CCH-WidgetTitle CCH-WidgetTitle-<?php echo $id; ?>"><?php echo esc_attr($title); ?></div>		   
        <div class="cch-rowdiv">
			 <div class="cch-leftdiv">
                <label for="<?php echo $id; ?>-including-hst">Price including HST $ :</label>
			 </div>
			 <div class="cch-rightdiv">
  	    	    <input id="<?php echo $id; ?>-including-hst" class="ontario-including-hst" type="text" placeholder="including HST">
			 </div>
        </div>
        <div class="cch-rowdiv">
			 <div class="cch-leftdiv">
                <label for="<?php echo $id; ?>-excluding-hst">Price excluding HST $ :</label>
			 </div>
			 <div class="cch-rightdiv">
  	    	    <input id="<?php echo $id; ?>-excluding-hst" class="ontario-excluding-hst" type="text" placeholder="excluding HST">
			 </div>
        </div>
        <div class="cch-rowdiv">
			 <div class="cch-leftdiv">
                <label for="<?php echo $id; ?>-hst">HST $ :</label>
			 </div>
			 <div class="cch-rightdiv">
  	    	    <input id="<?php echo $id; ?>-hst" class="ontario-hst" type="text" placeholder="HST">
			 </div>
        </div>
        <div class="cch-rowdiv">
			 <div class="cch-leftdiv"><label></label>
			 </div>
			 <div class="cch-rightdiv">
  	    	    <button id="<?php echo $id; ?>-clear" class="CCH-button ontario-clear" type="button">Clear values</button>
			 </div>
        </div>


 
        <?php if ($show_url) { ?>
    		<div class="cch-rowdiv" >
                <div class="CCH-WidgetSignature CCH-WidgetSignature-<?php echo $id; ?>">Provided by <a href="https://hstcalculator.ca" target="_blank">HSTcalculator.ca</a></div>
		    </div>
        <?php } ?>
		
</div>

		
		<?php 
}


function load_cc_hst_custom_colors($id, $bg_color, $border_color, $text_color)
{
?>
<style type="text/css">
.CCH-Widget-<?php echo $id; ?>, .CCH-WidgetTitle-<?php echo $id; ?> a, .CCH-WidgetTitle-<?php echo $id; ?> a:visited, .CCH-WidgetSignature-<?php echo $id; ?> a, .CCH-WidgetSignature-<?php echo $id; ?> a:visited, .CCH-WidgetLine-<?php echo $id; ?> {
    <?php echo (isset( $border_color) ? "border-color:" . esc_attr($border_color) . ";" : ""); ?>
    <?php echo (isset( $bg_color) ? "background-color:" . esc_attr($bg_color) . ";": ""); ?>
    <?php echo (isset( $text_color) ? "color:" . esc_attr($text_color) . " !important;": ""); ?>
}

.CCH-Widget-<?php echo $id; ?> input[type=text] {
    <?php echo (isset( $border_color) ? "border-color:" . esc_attr($border_color) . ";": ""); ?>
    <?php echo (isset( $text_color) ? "color:" . esc_attr($text_color) . ";": ""); ?>
    <?php echo (isset( $input_bg_color) ? "background-color:" . esc_attr($input_bg_color) . ";": ""); ?>
} 
</style>
<?php 
}
?>