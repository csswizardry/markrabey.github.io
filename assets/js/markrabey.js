gw.ready(function() {

    /* Dropdown for site-nav */
    document.getElementById('site-nav__toggle').onclick = function (e) {
        e.preventDefault();
        document.getElementById('site-nav__list').classList.toggle('site-nav__list--expanded');
    }


    /* Fix site-nav to top after scroll */
    // var html = document.getElementsByTagName('HTML')[0];
    // if (!gw.hasClass(html,'page--fixed-nav')) {
    //     document.onscroll = function (event) {
    //       var top = window.pageYOffset;
    //        if (top > 300) {
    //         gw.addClass(html,'page--fixed-nav');
    //       } else if (top == 0) {
    //         gw.removeClass(html,'page--fixed-nav');
    //       }
    //     }
    // }
}) ;