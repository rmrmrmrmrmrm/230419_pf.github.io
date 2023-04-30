window.addEventListener('DOMContentLoaded', function () {
	// Scroll Animation
	inView.threshold(.5);
	inView('.inview').on('enter', function (e) {
		e.classList.add('on-action');
		e.classList.remove('inview');
	});
});

/*ヘッダー　ハンバーガーメニュー */
let clickbtn = document.getElementById('menubar-btn');
clickbtn.onclick = function () {
	if (clickbtn.classList.contains('mb-open')) {
		clickbtn.classList.remove('mb-open')
		clickbtn.previousElementSibling.classList.remove('mb-open')
	} else {
		clickbtn.classList.add('mb-open')
		clickbtn.previousElementSibling.classList.add('mb-open')
	}
};

/* ヘッダー　内部　PC　ホバー*/
const mb_inner_pc = document.querySelectorAll('.hover-menu_parent');
mb_inner_pc.forEach(function (target) {
	target.addEventListener('mouseenter', () => {
		target.classList.add('hmp-on')
	});
	target.addEventListener('mouseleave', () => {
		target.classList.remove('hmp-on')
	});
});
/* ヘッダー　内部　SP　クリック
const mb_inner_sp = document.getElementById('click-menu');
mb_inner_sp.onclick = function () {
	if (mb_inner_sp.classList.contains('cm-on')) {
		mb_inner_sp.classList.remove('cm-on')
	} else {
		mb_inner_sp.classList.add('cm-on')
	}
};*/

/* kv */
const swiper = new Swiper(".swiper", {
	loop: true,
	effect: 'fade',
    speed: 5000,
    autoplay: {
	delay: 5000,
    },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});