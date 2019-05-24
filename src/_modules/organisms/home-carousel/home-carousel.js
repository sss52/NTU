'use strict';

import $ from 'jquery';
import 'slick-carousel';
import 'jquery-asPieProgress';

export default class HomeCarousel {
    constructor() {
        let _self = this;

        var $homeCarouselWrap = $('.home-carousel'),
            $homeBanner = $('.home-carousel__slick'),
            $thumbBanner = $('.thumb-carousel__slick'),
            $status = $('.notification__paging');

        var time = 10,
            $bar,
            $slick,
            isPause,
            tick,
            percentTime;

        $bar = $('.slider-progress .progress');

        if($('.home-carousel')[0]) {
            $('.progress').asPieProgress({
                namespace: 'progress',
                min: 0,
                max: 100,
                goal: 100,
                size: 125,
                speed: 100, // speed of 1/100
                barcolor: '#ff8526',
                barsize: '3',
                trackcolor: '#fefefe',
                fillcolor: 'none',
                easing: 'ease'
            });

            $homeBanner.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.text('0'+ i + ' / ' + '0' + slick.slideCount);

                var totalProjectSlide = slick.slideCount;

                $('.progress').asPieProgress('reset');
                $('.progress').asPieProgress('start');

                $homeCarouselWrap.fadeIn('fast');
            });

            $homeBanner.slick({
                speed: 800,
                fade: true,
                pauseOnDotsHover: false,
                dots: true,
                arrows: true,
                mobileFirst: true,
                appendDots: $('.home-carousel__dots .container .carousel-dots__wrap'),
                appendArrows: $('.home-carousel__arrows .progress-arrows'),
                prevArrow: $('.progress-arrows .prev'),
                nextArrow: $('.progress-arrows .next'),
                asNavFor: $thumbBanner
            });

            $thumbBanner.slick({
                speed: 400,
                fade: true,
                draggable: false,
                pauseOnDotsHover: true,
                dots: false,
                arrows: false,
                mobileFirst: true
            });

            $homeBanner.on('afterChange', function(event, slick, currentSlide, nextSlide){
                $thumbBanner.slick('slickNext');
            });

            $thumbBanner.slick('slickNext');

            $homeCarouselWrap.on({
                mouseenter: function() {
                    isPause = true;
                    $('.progress').asPieProgress('stop');
                },
                mouseleave: function() {
                    isPause = false;
                    $('.progress').asPieProgress('start');
                }
            })

            $('.slick-dots').on('click', 'li button', '.slick-arrow.next', function() {
                var li_no = $(this).parent('li').index();
                if ($(this).parent('li').index() > li_no) {
                    $thumbBanner.slick('slickNext');
                    resetProgressbar();
                }
            });

            function startProgressbar() {
                resetProgressbar();
                percentTime = 0;
                isPause = false;
                tick = setInterval(interval, 10);
            }

            function interval() {
                if(isPause === false) {
                    percentTime += 1 / (time+0.1);
                    $bar.css({
                        width: percentTime+"%"
                    });
                    
                    if(percentTime >= 100)
                    {
                        $homeBanner.slick('slickNext');
                        startProgressbar();
                    }
                }
            }

            function resetProgressbar() {
                $bar.css({
                    width: 0+'%' 
                });
                clearTimeout(tick);
            }

            startProgressbar();
        }
    }
}
