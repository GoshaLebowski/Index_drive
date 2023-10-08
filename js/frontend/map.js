let screenResolutionWidth = screen.width;
let zoom = '';
if(screenResolutionWidth === 540 || screenResolutionWidth < 540) {
    zoom = 10;
} else {
    zoom = 11;
}

let center = [55.74651291980777,37.61574031555794]

function init() {
    let map = new ymaps.Map('map-yandx', {
        center: center,
        zoom: zoom
    });

    let placemarkFirst = new ymaps.Placemark([55.73875692422444,37.602736966253765], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon/marker.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0]
    });

    let placemarkSecond = new ymaps.Placemark([55.760975243364996,37.5624679457637], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon/marker.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0]
    });

    let placemarkThird = new ymaps.Placemark([55.80376554292642,37.54488481786992], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon/marker.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0]
    });

    let placemarkFourth = new ymaps.Placemark([55.680618354333824,37.485806257998775], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon/marker.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0]
    });

    let placemarkFifth = new ymaps.Placemark([55.82400361026259,37.4408581205319], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon/marker.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); //удаляем поиск
    map.controls.remove('trafficControl'); //удаляем контроль трафика
    map.controls.remove('typeSelector'); //удаляем тип
    map.controls.remove('fullscreenControl'); //удаление кнопки перехода на полноэкранный режим
    map.controls.remove('zoomControl'); //удаляем контрол зуммирования
    map.controls.remove('rulerControl'); //удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

    map.geoObjects.add(placemarkFirst);
    map.geoObjects.add(placemarkSecond);
    map.geoObjects.add(placemarkThird);
    map.geoObjects.add(placemarkFourth);
    map.geoObjects.add(placemarkFifth);
}

ymaps.ready(init);