//import anime from 'node_modules/animejs';
//var anime = require('anime');
var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});

var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 1,
			paginationClickable: true,
			loop: true,
       		paginationBulletRender: function (index, className) {
				var tabsName = ['Login', 'Register'];
				if ( index === (tabsName.length - 1) ) {
          				return	'<span class="' + className + '">'
          						+ tabsName[index] + '</span>'
          						+ '<div class="active-mark "></div>';
				}
				return '<span class="' + className + '">' + tabsName[index] + '</span>';
        		}
		});