
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for stacks_in_5_page0
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5_page0 = {};

// A closure is defined and assined to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for refering
// to this object from elsewhere.
stacks.stacks_in_5_page0 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
stacks.myMenuFloatStackID = 'stacks_in_5_page0';
var $myMenuFloat = jQuery.noConflict(); 
$myMenuFloat(document).ready(function() {
	$myMenuFloat('.nimblehost_myMenuOuterWrapper_stacks_in_5_page0 script').remove();
	$myMenuFloat('.nimblehost_myMenuOuterWrapper_stacks_in_5_page0').appendTo('body');
	$myMenuFloat('.nimblehost_myMenuOuterWrapper_stacks_in_5_page0').css({position:'absolute'});
	
	var myMenuFloatOffset = $myMenuFloat('.nimblehost_myMenuOuterWrapper_stacks_in_5_page0').offset();
	var myMenuFloatPosition = (myMenuFloatOffset.left / $myMenuFloat(window).width()) * 100;
	if (myMenuFloatPosition > 50) {
		var subMenuOffset = $myMenuFloat('.nimblehost_myMenu_stacks_in_5_page0 ul').width() + 1;
		$myMenuFloat('.nimblehost_myMenu_stacks_in_5_page0 ul ul').css({left: 'auto', right: subMenuOffset + 'px'});
		$myMenuFloat('.nimblehost_myMenu_stacks_in_5_page0 ul li a').css({paddingLeft: '15px'});
		$myMenuFloat(window).load(function(){
			$myMenuFloat('.nimblehost_myMenu_stacks_in_5_page0 ul li.ddarrow .childIndicator').css({right: 'auto', left: '2px', backgroundImage: 'url(files/ddarrowLeft.png)'});
		});
	}
	
	var myMenuLinkHeight = $myMenuFloat('.nimblehost_myMenu_stacks_in_5_page0 ul li').height();
	$myMenuFloat(window).load(function(){
		$myMenuFloat('.nimblehost_myMenu_stacks_in_5_page0 ul li.ddarrow .childIndicator').css({height: myMenuLinkHeight + 'px', top: '0'});
	});
});
	return stack;
})(stacks.stacks_in_5_page0);


// Javascript for stacks_in_6_page0
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6_page0 = {};

// A closure is defined and assined to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for refering
// to this object from elsewhere.
stacks.stacks_in_6_page0 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

//-- TipTip Stack v1.4.1 by Joe Workman --//
/* TipTip Version 1.3 - Copyright 2010 Drew Wilson
 * http://code.drewwilson.com/entry/tiptip-jquery-plugin
 * Dual licensed under the MIT and GPL licenses: http://www.opensource.org/licenses/mit-license.php & http://www.gnu.org/licenses/gpl.html */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

$(document).ready(function() {
	$(".tiptip").tipTip({activation:'hover',keepAlive:false});
	if (true == true) {
	    $('#tiptip_holder').live('click', function() {
          $('#tiptip_holder').fadeOut(200);
        });
	}
});
//-- End TipTip Stack --//


	return stack;
})(stacks.stacks_in_6_page0);


