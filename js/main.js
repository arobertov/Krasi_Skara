jQuery(document).ready(function($) {

    let ldMenu = $('#ld-menu');
    let showField;let clickEvent;

    let grillText = $(' <div id="grill">\n' +
        '                       <h4>БАЛКАНСКА СКАРА</h4>\n'+
        '                       <table>\n' +
        '                            <tr>\n' +
        '                                <td class="article">КЮФТЕ</td>\n' +
        '                                <td class="quantity">80 гр.</td>\n' +
        '                                <td class="price">0.90 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">НЕРВОЗНО КЮФТЕ</td>\n' +
        '                                <td class="quantity">80 гр.</td>\n' +
        '                                <td class="price">0.90 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">КЕБАПЧЕ</td>\n' +
        '                                <td class="quantity">80 гр.</td>\n' +
        '                                <td class="price">0.90 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">КЮФТЕ КАЛЦОНЕ</td>\n' +
        '                                <td class="quantity">150 гр.</td>\n' +
        '                                <td class="price">2.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПЪЛ. КЕБАПЧЕ</td>\n' +
        '                                <td class="quantity">130 гр.</td>\n' +
        '                                <td class="price">1.60 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПЛЕСКАВИЦА</td>\n' +
        '                                <td class="quantity">200 гр.</td>\n' +
        '                                <td class="price">2.50 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">СВ. СУДЖУК</td>\n' +
        '                                <td class="quantity">200 гр.</td>\n' +
        '                                <td class="price">3.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">СВ. ШНИЦЕЛ</td>\n' +
        '                                <td class="quantity">130 гр.</td>\n' +
        '                                <td class="price">1.60 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПИЛЕ НА ЖАР</td>\n' +
        '                                <td class="quantity">1 бр.</td>\n' +
        '                                <td class="price">10.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПИЛ. БУТЧЕ</td>\n' +
        '                                <td class="quantity">1 бр.</td>\n' +
        '                                <td class="price">2.50 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">1/2 ПИЛЕ</td>\n' +
        '                                <td class="quantity">1 бр.</td>\n' +
        '                                <td class="price">5.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПИЛ. ПЪРЖОЛА ОТ БУТ</td>\n' +
        '                                <td class="quantity">200 гр.</td>\n' +
        '                                <td class="price">3.20 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПИЛ. ПЪРЖОЛА ОТ ФИЛЕ</td>\n' +
        '                                <td class="quantity">200 гр.</td>\n' +
        '                                <td class="price">3.20 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПИЛ. ВРЕТЕНО</td>\n' +
        '                                <td class="quantity">150 гр.</td>\n' +
        '                                <td class="price">2.40 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">СВ. ВРАТНА ПЪРЖОЛА</td>\n' +
        '                                <td class="quantity">200 гр.</td>\n' +
        '                                <td class="price">3.20 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">СВ. РЕБРА</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.50 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПИТКА ХЛЯБ</td>\n' +
        '                                <td class="quantity">200 гр.</td>\n' +
        '                                <td class="price">0.50 лв.</td>\n' +
        '                            </tr>\n' +
        '                        </table>\n' +
        '                   </div>');

    let garnersText = $('<div id="garners">' +
        '                       <h4>ГАРНИТУРИ</h4>\n'+
        '                       <table>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ЗЕЛЕ С МОРКОВИ</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">КАРТОФЕНА САЛАТА</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ДОМ. ЛЮТЕНИЦА</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">БОБ С ЛЮТЕНИЦА</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">СНЕЖАНКА</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">РУСКА САЛАТА</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">КАТЪК С ПЕЧ. ЧУШКИ</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПИКАНТНА САЛАТА</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПЕЧ. ЧУШКИ С ЧЕСЪН</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПЪРЖЕНИ КАРТОФИ</td>\n' +
        '                                <td class="quantity">100 гр.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ЛЮТА ЧУШКА</td>\n' +
        '                                <td class="quantity">1 бр.</td>\n' +
        '                                <td class="price">0.20 лв.</td>\n' +
        '                            </tr>\n' +
        '                        </table>' +
        '                   </div>' +
        '');

    let drinksText = $('<div id="drinks">\n' +
        '                       <h4>НАПИТКИ</h4>\n'+
        '                       <table>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ПИРИНСКО КЕН</td>\n' +
        '                                <td class="quantity">0.5 л.</td>\n' +
        '                                <td class="price">1.20 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">АРИАНА КЕН</td>\n' +
        '                                <td class="quantity">0.5 л.</td>\n' +
        '                                <td class="price">1.40 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">КОКА КОЛА</td>\n' +
        '                                <td class="quantity">0.5 л.</td>\n' +
        '                                <td class="price">1.20 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ФАНТА</td>\n' +
        '                                <td class="quantity">0.5 л.</td>\n' +
        '                                <td class="price">1.20 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">СПРАЙТ</td>\n' +
        '                                <td class="quantity">0.5 л.</td>\n' +
        '                                <td class="price">1.20 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">ДЕРБИ</td>\n' +
        '                                <td class="quantity">0.5 л.</td>\n' +
        '                                <td class="price">0.60 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">МИН. ВОДА</td>\n' +
        '                                <td class="quantity">0.5 л.</td>\n' +
        '                                <td class="price">0.70 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">МИН. ВОДА</td>\n' +
        '                                <td class="quantity">1.5 л.</td>\n' +
        '                                <td class="price">1.00 лв.</td>\n' +
        '                            </tr>\n' +
        '                            <tr>\n' +
        '                                <td class="article">КАФЕ ЧИБО</td>\n' +
        '                                <td class="quantity"></td>\n' +
        '                                <td class="price">0.80 лв.</td>\n' +
        '                            </tr>\n' +
        '                        </table>' +
        '                   </div>' +
        '');

    let menus = {'grill-menu':grillText,'garners-menu':garnersText,'drinks-menu':drinksText};

    $('#grill-btn,#garners-btn,#drinks-btn').click(function () {

        if(clickEvent === this) {
            ldMenu.fadeOut(2000);
            $('.grill-menu,.garners-menu,.drinks-menu').fadeOut(2000);
            clickEvent = '';
            return;
        }
        showField = $(this).attr('data-target');
        clickEvent = this;
        closeMenuField();

        if(window.screen.width>785){
            ldMenu.append('<img src="web/img/d22523b33fdee011261e16132edb09b9.png"/>');
            ldMenu.append(menus[showField]);
            ldMenu.fadeIn(2000);
        } else {
            let smMenu = $('.'+showField);
            smMenu.append("<div id='menu-img'><img src=\"web/img/d22523b33fdee011261e16132edb09b9.png\"/></div>");
            smMenu.append(menus[showField]);
            smMenu.fadeIn(2000);
        }
    });


    function closeMenuField() {
        ldMenu.empty();
        $('.grill-menu,.garners-menu,.drinks-menu').empty();
    }

    /*   ------ navbar transparent scroll --------- */

    var navbarDark = $('.navbar-dark');
    var scroll_pos = $(document).scrollTop();

    if(scroll_pos > 100){
        navbarDark.addClass('navbar-dark-fill')
    }

    $('.navbar-toggler').click(function () {
        scroll_pos = $(document).scrollTop();
        if(navbarDark.hasClass('navbar-dark-fill') && scroll_pos <= 100 ){
            navbarDark.removeClass('navbar-dark-fill');
        } else {
            navbarDark.addClass('navbar-dark-fill');
        }
    });

    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 100) {
            navbarDark.addClass('navbar-dark-fill');
        } else {
            navbarDark.removeClass('navbar-dark-fill');
        }
    });

    $('.carousel').carousel({
      interval:7000
    });

    $('#carouselExampleControls').on('slide.bs.carousel', function () {
        $('.slide-caption').css({'animation-name': 'bounceInLeft',
        'animation-duration': '4s',
        'animation-timing-function':'ease-out'});
        $('.slide-desc').css({'animation-name':'lightSpeedIn','animation-duration': '2s',
            'animation-timing-function':'ease-out'});
        setTimeout(function (){
            $('.slide-caption').css({
                    'animation-name': 'bounceOutRight',
                    'animation-duration': '3s',
                    'animation-timing-function':'linear'
            });
        },6000)
    });
});

