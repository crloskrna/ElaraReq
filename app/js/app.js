'use strict';

var module = angular.module('app', ['ngGrid', 'ngRoute','app.controllerHome','app.controllerConsult','app.controllerNew',
    'app.controllerEdit','app.controlerNewCot','app.controllerConsultCot','app.controllerPOM','app.controllerPendiente'],
    function($routeProvider) {
        $routeProvider

            .when('/',{
                controller:'CntrlHome',
                templateUrl:'Home/Home.html'
            })
            .when('/Consultas/:ParamId',{
                controller:'CntrlConsula',
                templateUrl:'views/Consultas.html'
            })
            .when('/New',{
                controller:'CntrlNew',
                templateUrl:'views/New.html'
            })
            .when('/EditaCotizacion/:ParamId',{
                controller:'EditCntrl',
                templateUrl:'views/EditaCotizacion.html'
            })
            .when('/NewCotizacion',{
                controller:'NewCotizaCntrl',
                templateUrl:'views/NewCotizacion.html'
            })
            .when('/ConsultasCotizaciones',{
                controller:'ConsultCotCntrl',
                templateUrl:'views/ConsultasCotizaciones.html'
            })
            .when('/POM',{
                controller:'POMCntrl',
                templateUrl:'POM/POM.html'
            })
            .when('/CotizacionPendiente',{
                controller:'CotPendienteCntrl',
                templateUrl:'views/CotizacionPendiente.html'
            })

            .otherwise({
                redirectTo:'/'
            })
    })

