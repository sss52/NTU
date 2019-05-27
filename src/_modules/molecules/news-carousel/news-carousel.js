'use strict';

import $ from 'jquery';
import slick from 'slick-carousel';


export default class NewsCarousel {
  constructor() {
    
    $('.carousel-slider', '.news-carousel').slick({
      slidesToShow: 3,
      infinite: false,
      centerMode: false,
      centerPadding: '60px',
      autoPlay: false,
      arrows: false,
    })
  }
}
