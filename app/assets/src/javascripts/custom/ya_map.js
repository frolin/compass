ymaps.ready(function () {
    var viewportWidth = $(window).width();

    if (viewportWidth > '480') {

        var myMap = new ymaps.Map('map', {
            center: [55.803969776997846,37.557331499999925],
            zoom: 12,
            controls: []
        });



        myPlacemark = new ymaps.Placemark([55.803969776997846,37.557331499999925], {
            hintContent: 'Автосервис 24 <br> Москва, Петровско-разумовский пр-зд д.29, стр.18',
            balloonContentBody: [
                '<address>',
                "<h3 class='baloon-title'>Автосервис 24</h3>",
                "<span class='baloon-address'>Адрес: Москва, Петровско-разумовский пр-зд д.29, стр.18</span>'",
                '<br/>',
                "<span class='baloon-clock-work'>Часы работы: 8-23 </span>",
                "<span class='baloon-auto-work' >Прием авто: круглосуточно </span>",
                '<br/>',
                "<p class='baloon-telephone' >Телефоны: 8 (966) 044-33-33, 8 (925) 409-64-86</p>",
                '<br/>',
                "<a class='baloon-route' href='https://maps.yandex.ru/213/moscow/?source=wizbiz_new_map_single&ll=37.540183%2C55.804789&z=14&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%20%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE-%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80-%D0%B7%D0%B4%20%D0%B4.29%2C%20%D1%81%D1%82%D1%80.18&sll=37.738698%2C55.741594&sspn=0.054331%2C0.018763&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.557%252C55.804%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%252C%2520%25D0%259F%25D0%25B5%25D1%2582%25D1%2580%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25BE-%25D0%25A0%25D0%25B0%25D0%25B7%25D1%2583%25D0%25BC%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B9%2520%25D0%25BF%25D1%2580%25D0%25BE%25D0%25B5%25D0%25B7%25D0%25B4%252C%252029%25D1%258118' target='_blank'>Проложить маршрут</a>",
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
            center: [55.803969776997846,37.557331499999925],
            zoom: 10,
            controls: []
        });

        myPlacemark = new ymaps.Placemark([55.803969776997846,37.557331499999925], {

            hintContent: 'Автосервис 24 <br> Москва, Петровско-разумовский пр-зд д.29, стр.18',
            balloonContentHeader: '<strong>Автосервис 24</strong>',
            balloonContentBody: [
                '<address>',
                "<h3 class='baloon-title'>Автосервис 24</h3>",
                "<span class='baloon-address'>Адрес: Москва, Петровско-разумовский пр-зд д.29, стр.18</span>'",
                '<br/>',
                "<span class='baloon-clock-work'>Часы работы: 8-23 </span>",
                "<span class='baloon-auto-work' >Прием авто: круглосуточно </span>",
                '<br/>',
                "<p class='baloon-telephone' >Телефоны: 8 (966) 044-33-33, 8 (925) 409-64-86</p>",
                '<br/>',
                "<a class='baloon-route' href='https://maps.yandex.ru/213/moscow/?source=wizbiz_new_map_single&ll=37.540183%2C55.804789&z=14&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%20%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE-%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80-%D0%B7%D0%B4%20%D0%B4.29%2C%20%D1%81%D1%82%D1%80.18&sll=37.738698%2C55.741594&sspn=0.054331%2C0.018763&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.557%252C55.804%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%252C%2520%25D0%259F%25D0%25B5%25D1%2582%25D1%2580%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25BE-%25D0%25A0%25D0%25B0%25D0%25B7%25D1%2583%25D0%25BC%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B9%2520%25D0%25BF%25D1%2580%25D0%25BE%25D0%25B5%25D0%25B7%25D0%25B4%252C%252029%25D1%258118' target='_blank'>Проложить маршрут</a>",
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
