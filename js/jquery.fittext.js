/*  <!--
	Сайт компании СройДомСервис, Тверь.
	    - Разработка оконных приложений C# 
		- Разработка мобильных приложений 
		- Разработка Web-Приложений 
		- Unity3D 
		- Разработка сайтов HTML,CSS.JS 
		- Решение задач C#, C/C++,Python. Курсовые и лабораторные работы.

		Заказать работу, а так же ознакомиться с обзором выполненных работ можно 
		в нашей группе  ВК- https://vk.com/bigpapasugrob
-->
/*


/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
