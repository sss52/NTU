'use strict';

import $ from 'jquery';
import 'slick-carousel';
import { pad } from '_helper';
import 'jquery-match-height';

export default class HomeCarousel {
    constructor() {
        var $homeCarouselWrap = $('.home-carousel'),
            $homeBanner = $('.home-carousel__slick', $homeCarouselWrap);

        if($('.home-carousel')[0]) {

            $homeBanner.map((i,ele)=> {
                var $this = $(ele);

                $this.slick({
                    autoplay: true,
                    autoplaySpeed: 5000,
                    speed: 500,
                    fade: true,
                    pauseOnDotsHover: false,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    customPaging : function(slider, i) {
                        var cat = $(slider.$slides[i]).find('.slick-wrapper').data('cat'),
                            title = $(slider.$slides[i]).find('.title').text(),
                            count = pad((i + 1), 2);

                        return '<a class="slide-select"> \
                                    <div> \
                                        <div class="counter"> \
                                            <span>' + count + '</span> \
                                        </div> \
                                        <div class="cat"> \
                                            ' + cat + '\
                                            <i class="icon icon-arrow-right"></i> \
                                        </div> \
                                        <p>' + title + '</p> \
                                    </div> \
                                </a>';
                    }
                });

                $this.find('.slick-dots li').matchHeight();
            });
        }
    }
}
