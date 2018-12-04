angular.module('app', []).controller('ctrl', function($scope) {
    $scope.portfolio = [{
        title: 'Memory Game',
        img: 'img/images.jpg',
        alt: 'Um jogo da memória',
        link: 'https://oseiasal.github.io/Memory-Game/',
        text: 'Um divertido jogo da memória'
    }, {
        title: 'Mapa do Bairro',
        img: 'img/mapa-do-bairro.jpg',
        alt: 'Mapa do bairro de Guarulhos',
        link: 'https://oseiasal.github.io/mapa-do-bairro/',
        text: 'Mapa do Bairro de Guarulhos'
    }, {
        title: 'Restaurant',
        img: 'img/restaurant-reviews.jpg',
        alt: 'Restaurant Review - Stage 1',
        link: 'https://github.com/oseiasal/mws-restaurant-stage-1',
        text: 'Restaurant Review - Stage 1'
    }]
});
