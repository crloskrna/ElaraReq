'use strict';

angular.module('app.controllerNew',[])

    .controller('CntrlNew',function($scope,Items,$location){
        $scope.myData1=Items;
        $scope.Add= function(){
            Items.push({
                id:$scope.myData1.length + 1,
                Solicitud:$scope.myData1.length + 1,
                Usuario:$scope.new_Usuario,
                Status:$scope.new_Status,
                Fecha_Sol:$scope.new_FechaSoli,
                check:false,
                Area:$scope.new_Areas,
                Proyecto:$scope.new_Proyecto,
                Fecha_Req:$scope.new_FechaReq
            });
            $location.path('/Consultas/' + "'All'");
        };
        $scope.myData1=Items;
    });
