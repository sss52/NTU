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
import '@fancyapps/fancybox';

import SiteHeader from 'organisms/site-header/site-header';
import HomeCarousel from 'organisms/home-carousel/home-carousel';
import EventCarousel from 'organisms/event-carousel/event-carousel';
import SelectInterest from 'organisms/select-interest/select-interest';
import Excellence from 'organisms/excellence/excellence';
import NewsCarousel from 'molecules/news-carousel/news-carousel';



$(() => {
		let _self = this;

		window.ntu = new Object();

		new SiteHeader();
		new HomeCarousel();
		new EventCarousel();
		new Excellence();
		new SelectInterest;

		if($('.news-carousel').length) {
			new NewsCarousel();
		}

		if($('.facybox').length) {
			$('.facybox').fancybox();
		}

const navbarLinks = document.querySelector(".nav__items");
			const navBtn = document.querySelector(".nav__btn");
			
			navbarLinks.addEventListener("click", e => {
			
			if (!event.target.classList.contains('nav__link')) return;
			
			navBtn.checked = false;
			
			});
			
// Search for the text
		var jsonData;
		$.ajax({
			url: "assets/ntu/jsondata/searchField.json", 
			success: function(result) {
				jsonData = result;
		  	}
		});

		$('#search-site').click(function(){
			$('#search-result').toggle('1000');
		  })
		  
		var $searchResult = $("#search-result");
		var $searchSite = $("#search-site");
		$searchSite.on('keyup', function() {
			$("#search-result").css("display", "block");
			var searchValue = $(this).val();
			if (searchValue.length <= 3) {
				return;
			}

			var results = jsonData.filter(autoComplete);

			if (results.length == 0) {
				$searchResult.html('<p>No results found.</p>');
				return;
			}

		 // append list data
			var res = '<ul class="search-title"><h4>Quick Links</h4>';
for(var key in results) {
	res += '<li><a href="javascript:void(0)";>' + highlight(results[key].title, searchValue) + '</li></a>';
}

			res += '</ul><ul class="search-title"><h4>Suggested Search</h4>';
			for(var key in results) {
				res += '<li><a href="javascript:void(0)";>'+highlight(results[key].link, searchValue)+'</li></a>';
			}
			res += '</ul><ul class="search-img"><h4>Research</h4>';
			for(var key in results) {
				res += '<li><a href="javascript:void(0)";><img src='+highlight(results[key].image, searchValue)+'></li></a>';
			}
			res += '</ul>';
			$searchResult.html(res);
		});

		function autoComplete(arrVal) 
		{
			return (arrVal.title.toLowerCase().includes($searchSite.val().toLowerCase()));
		}

		function highlight(title, searchVal)
		{
			searchVal = searchVal.replace(/(\s+)/,"(<[^>]+>)$1(<[^>]+>)");
			var pattern = new RegExp("("+searchVal+")", "gi");

			title = title.replace(pattern, "<strong>$1</strong>");
			title = title.replace(/(<strong>[^<>])((<[^>]+>)+)([^<>]<\/strong>)/,"$1</strong>$2<strong>$4");

			return title;
		}


		//Search filter for Programmes
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
			var icon =  $("<i>").attr({
				"class": "icon icon-search"
			});

			$(header).append(input).append(icon).appendTo(header);

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