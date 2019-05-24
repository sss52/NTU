'use strict';

import $ from 'jquery';
import 'slick-carousel';

export default class EventCarousel {
    constructor() {
        let $eventCarouselContainer = $('.event-carousel'),
            $slides = $('.event-slider', $eventCarouselContainer);

        $slides.map((i,ele)=> {
            var $this = $(ele);

            $this.slick({
                autoplay: false,
                centermode: true,
                slidesToShow: 5,
                centerPadding: '60px',
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    }
                  ]
            });
        });
    }
}
