
'use strict';

import $ from 'jquery';
import 'slick-carousel';
import 'hover-intent';
import 'jquery-match-height';
import 'sticky-kit';
import 'jquery-match-height';
import 'jquery-asPieProgress';
import 'jquery-nice-select';
import enquire from 'enquire.js';
import { bp } from '_helper';

import SiteHeader from 'organisms/site-header/site-header';
import HomeCarousel from 'organisms/home-carousel/home-carousel';
import EventCarousel from 'organisms/event-carousel/event-carousel';

$(() => {
    let _self = this;

    window.ntu = new Object();

    new SiteHeader();
    new HomeCarousel();
    new EventCarousel();

(function($) {

    jQuery.expr[':'].Contains = function(a, i, m) {
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
   
  
    /**
     * @function listFilter
     * @param header
     * @param list
     */
    function listFilter(header, list) {
  
      var input = $("<input>").attr({
        "class": "filterinput",
        "type": "search",
        "placeholder": 'What interests you?'
      });
  
      $(header).append(input).appendTo(header);
  
      $(input)
        .change(function() {
          var filter = $(this).val();
          if (filter) {
            
            $(list).find(".filter-item:not(:Contains(" + filter + "))").slideUp();
            $(list).find(".filter-item:Contains(" + filter + ")").slideDown();
            
          } else {
            
            $(list).find(".filter-item").slideDown();
            
          }
          return false;
        })
        .keyup(function() {
          $(this).change();
        });
  
      /* no form submit by pressing ENTER button */
      $(input).keypress(function(event) {
  
        if (event.keyCode == 10 || event.keyCode == 13){
          event.preventDefault();
        }
      });
    }
  
    $(function() {
      listFilter($("#filter-header"), $("#filter-list"));
    });
  
  }(jQuery));
  
  $(document).ready(function() {
  
    $("#filter-list li.active").prependTo("#filter-list");
    $("#filter-list li.active").last().css('border-bottom', '1px solid grey');
  
  });

    // Scroll to Top button
	$('.scrollToTop').on('click', function(e) {
		e.preventDefault();
		return $('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;

		$(this).blur();
	});

    // Clone sidebar
    // Mobile & Tablet
    enquire.register("screen and (max-width: " + bp.maxMobile + "px)", {
        match : function() {
            $('aside.sidebar').clone().prependTo('.main').addClass('clone-aside');
            setTimeout(function(){
                $('ul.sidebar__list').each(function(){
                    var list = $(this),
                        select = $(document.createElement('select')).addClass('sidebar__list').insertBefore($(this).hide());
                   
                    $('>li a', this).each(function(){
                        var option=$(document.createElement('option')).appendTo(select).val(this.href).html($(this).html());
                        if($(this).attr('class') === 'selected'){
                            option.attr('selected','selected');
                        }
                    });
                    // list.remove();
                });

                var $cloneSelect = $('.clone-aside > .sidebar-sticky > select.sidebar__list');
                $cloneSelect.niceSelect();

                $('.sidebar-sticky .list li').on('click', function () {
                    var url = $(this).data('value');
                    if (url) {
                        window.location = url;
                    }
                    return false;                    
                });
            }, 200);
        },
        unmatch : function() {
            $('.clone-aside').remove();
            $('select.sidebar__list').remove();
            $('ul.sidebar__list').show();
        }
    });

    // Remove Height & Width
    var $imgLogo = $('.logo-img');

    if ($imgLogo[0]) {
        $imgLogo.each(function() {
            var $this = $(this);
            
            $this.find('img').removeAttr('height').removeAttr('width');
            // $this.show();
            setTimeout(function(){
                $this.show(200);
            }, 300);
        });
    }
});
