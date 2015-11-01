ymaps.ready(function () {
    var viewportWidth = $(window).width();

    if (viewportWidth > '480') {

        var myMap = new ymaps.Map('map', {
            center: [55.74328183, 37.73893384],
            zoom: 12,
            controls: []
        });



        myPlacemark = new ymaps.Placemark([55.74118901, 37.73929481], {
            hintContent: 'Маслов-Сервис <br> 1-я Фрезерная д.2 к.1',
            balloonContentBody: [
                '<address>',
                "<h3 class='baloon-title'>Автосервис Маслов-Сервис</h3>",
                "<span class='baloon-address'>Адрес: Москва, ул. 1-я Фрезерная д.2 к.1</span>'",
                '<br/>',
                "<span class='baloon-clock-work'>Часы работы: 8-23 </span>",
                "<span class='baloon-auto-work' >Прием авто: круглосуточно </span>",
                '<br/>',
                "<p class='baloon-telephone' >Телефоны: 8 (495) 968‒21‒25,  8 (903) 968‒21‒25</p>",
                "<a class='baloon-route' href='https://maps.yandex.ru/21621/reutov/?ol=biz&ll=37.739105%2C55.741830&z=16&rtext=~55.741830%2C37.739105&rtt=auto&oid=1124201315' target='_blank'>Проложить маршрут</a>",
                '</address>'
            ].join('')

        }, {
            iconLayout: 'default#image',
            iconImageHref: '/images/icons/address_metka_ru.png',
            iconImageShadow: true,
            iconImageSize: [120, 80],


            iconImageOffset: [-60, -80]
        });
        myMap.controls
            .add('zoomControl', {position: {left: '5px', top: '5px'}});

        myMap.geoObjects.add(myPlacemark);
    }
    else {
        var myMap = new ymaps.Map('map', {
            center: [55.75321953, 37.65093211],
            zoom: 10,
            controls: []
        });

        myPlacemark = new ymaps.Placemark([55.74328183, 37.73893384], {

            hintContent: 'Маслов-Сервис <br> 1-я Фрезерная д.2 к.1',
            balloonContentHeader: '<strong>Автосервис Маслов-Сервис</strong>',
            balloonContentBody: [
                '<address>',
                "<h3 class='baloon-title'>Автосервис Маслов-Сервис</h3>",
                "<span class='baloon-address'>Адрес: Москва, ул. 1-я Фрезерная д.2 к.1</span>'",
                '<br/>',
                "<span class='baloon-clock-work'>Часы работы: 8-23 </span>",
                "<span class='baloon-auto-work' >Прием авто: круглосуточно </span>",
                '<br/>',
                '<br/>',
                "<p class='baloon-telephone' >Телефоны: 8 (495) 968‒21‒25,  8 (903) 968‒21‒25</p>",
                '<br/>',
                "<a class='baloon-route' href='https://maps.yandex.ru/21621/reutov/?ol=biz&ll=37.739105%2C55.741830&z=16&rtext=~55.741830%2C37.739105&rtt=auto&oid=1124201315' target='_blank'>Проложить маршрут</a>",
                '</address>'
            ].join('')

        }, {
            balloonPanelMaxMapArea: 0,
            balloonShadow: false,
            iconLayout: 'default#image',
            iconImageHref: '/images/icons/address_metka_ru.png',
            iconImageShadow: true,
            iconImageSize: [100, 60],
            iconImageOffset: [-60, -80]
        });


        myMap.controls
            .add('zoomControl', {
                float: 'none',
                position: {
                    top: 60,
                    left: 5
                }
            });
        myMap.geoObjects.add(myPlacemark);

    }
});
