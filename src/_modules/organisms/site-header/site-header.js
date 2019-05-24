'use strict';

import $ from 'jquery';
import 'sticky-kit';
import Headroom from 'headroom.js';
import 'hover-intent';
import enquire from 'enquire.js';
import { bp, iOS } from '_helper';

export default class SiteHeader {
    constructor() {
        let _self = this;

        var mySiteHeader = document.querySelector('header');

        var $mainSiteHeader = $('.main-header'),
            $nav = $('.navigation'),
            $lvl1Menu = $('.nav-main__features > .megamenu > li'),
            // $lvl2Menu = $('.menu-col__lvl2 > li'),
            $lvl2Menu = $('.nav-main__features > .megamenu > li > ul > li'),
            $subUL = $('.menu-col__links'),
            $btnSearch = $('.btn--search'),
            $mobileMenuButton = $('.hamburger-menu');

        var headroom = new Headroom(mySiteHeader, {
            "offset" : 10,
            "tolerance" : {
                up : 150,
                down : 10
            },
            "classes" : {
                "initial" : "animated",
                "pinned" : "headroom--pinned",
                "unpinned" : "headroom--unpinned"
            }
        });

        window.ntu.currentPosition = 0;

        headroom.init();

        $btnSearch.on('click', function(){
            var $form = $(this).closest('form'),
                searchInput = $form.find('#search-input').val();

            if(searchInput != '') {
                $form.submit();
            }
        });

        //Adding Arrow if Menu has Children
        var primaryNavsLIParents = $('.nav-main ul.menu li ul.sub-menu');
        primaryNavsLIParents.before('<button class="btn btn--nav btn--noanime mobile-only" type="button"><span><i class="icon icon-arrow-down"></i><span class="btn__text"></span></span></button>');

        // Mobile & Tablet
        enquire.register("screen and (max-width: 1024px)", {
		    match : function() {
		    	$mobileMenuButton.on('click', function(){
		    		if(!$nav.hasClass('expanded')){
                        $(this).addClass('active');
                        $mainSiteHeader.addClass('menu-open');
                        setTimeout(function(){
                            $mobileMenuButton.addClass('rotate');
                            $nav.addClass('expanded');
                        }, 300);
                        setTimeout(function(){
                            _self.openMenu();
                        }, 300);
		    		}
	    			else{
                        $nav.removeClass('expanded');
                        $(this).removeClass('rotate');
                        _self.closeMenu();
	    				setTimeout(function(){
                            $mobileMenuButton.removeClass('active');
                            $mainSiteHeader.removeClass('menu-open');
                        }, 300);
	    			}
		    	});

    			$('.megamenu > li').on('click', '.btn--nav',function(e) {
                    let $this = $(this);

                    if($this.hasClass('is-active')) {
                        _self.collapseLink($this);
                    } else {
                        _self.expandLink($this);
                    };
                });
			},

		    unmatch : function() {
		    	$nav.removeClass('expanded');
		    	$('.active').removeClass('active');
		    	$('.inactive').removeClass('inactive');

		    	//unbind click events
		    	$mobileMenuButton.off('click');

    	    	//font-resizer
    	    	if(!$('.default').hasClass('active')){
    				$('.default').addClass('active');
    	    	}
		    }
		});
    }

    capturePosition() {
        let _self = this,
            currentPosition = $(window).scrollTop();

        return currentPosition;
    }

    openMenu() {
        let _self = this;

        if (iOS) {
            window.ntu.currentPosition = _self.capturePosition();
            $('html,body').animate({ scrollTop: 0});
            $('body').addClass('no-scroll');
        }
    }

    closeMenu() {
        let _self = this;

        if (iOS) {
            $('html,body').animate({ scrollTop: window.ntu.currentPosition});
            $('body').removeClass('no-scroll');
        }
    }

    expandLink($this) {
        let _self = this;

        $this.addClass('is-active');
        $this.parent('li').addClass('is-active');
        $this.find('.icon').removeClass('icon-arrow-down');
        $this.find('.icon').addClass('icon-arrow-up');
        $this.siblings('.sub-menu').slideDown(200);
    }

    collapseLink($this) {
        let _self = this;

        $this.removeClass('is-active');
        $this.blur();
        $this.parent('li').removeClass('is-active');
        $this.find('.icon').removeClass('icon-arrow-up');
        $this.find('.icon').addClass('icon-arrow-down');
        $this.siblings('.sub-menu').slideUp(200);
    }
}
