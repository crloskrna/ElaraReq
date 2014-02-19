//'use strict';
angular.module('app.controllerEdit',[])

    .controller('EditCntrl',
    function($scope, $location, $routeParams, Items, Items3, $filter) {

        var proyUrl = $routeParams.ParamId.replace(':','');
        $scope.Datos=Items;
        for(var i = 0; i < Items.length; i++)
        {
            if(proyUrl == Items[i].id)
            {
                $scope.new_Usuario = Items[i].Usuario;
                $scope.new_Stats = Items[i].Status;
                $scope.new_FechaSoli = Items[i].Fecha_Sol;
                $scope.new_Areas = Items[i].Area;
                $scope.new_Proyecto = Items[i].Proyecto;
                $scope.new_FechaReq = Items[i].Fecha_Req;
                $scope.id=Items[i].id;
            }
        }
        $scope.AddEdit = function() {
            var proyUrl = $routeParams.ParamId.replace(':','');
            $scope.Datos = Items;
            for(var i = 0; i < Items.length; i++)
            {
                if(proyUrl == Items[i].id)
                {
                    Items[i].Usuario = $scope.new_Usuario;
                    Items[i].Status = $scope.new_Stats  ;
                    Items[i].Fecha_Sol = $scope.new_FechaSoli;
                    Items[i].Area = $scope.new_Areas;
                    Items[i].Proyecto = $scope.new_Proyecto;
                    Items[i].Fecha_Req = $scope.new_FechaReq;
                    Items[i].id = proyUrl;
                }
            }
            $location.path('/Consultas/' + "'All'");
        };

    });
