angular.module('app.controllerPendiente',[])


    .factory('Items6',function(){
        var Datos6 = [
            //{id:'' ,Item:'',Cantidad:'',Equipo:'',Marca:'',Modelo:'',Costo1:'',Entrega1:'',Costo2:'',Entrega2:'',Costo3:'',Entrega3:'',Seleccion:'',Costo:'',RazonSeleccion:''}
        ];
        return Datos6;
    })

    .controller('CotPendienteCntrl', function($scope,Items6,$filter,$routeParams,$location){

        $scope.miData=Items6;

        $scope.gridOptions = {
            data: 'miData',
            filterOptions: {filterText:'', useExternalFilter: false},
            enablePaging:true,
            pagingOptions:{ pageSizes: [250, 500, 1000], pageSize: 250, totalServerItems: 0, currentPage: 1 },
            showFilter: true,
            enablePinning: true,
            columnDefs:[
                {field:'Item',displayName:'Item'},
                {field:'Cantidad',displayName:'Cantidad'},
                {field:'Equipo',displayName:'Equipo'},
                {field:'Marca',displayName:'Marca'},
                {field:'Modelo',displayName:'Modelo'},
                {field:'Costo1',displayName:'Costo'},
                {field:'Entrega1',displayName:'Entrega'},
                {field:'Costo2',displayName:'Costo'},
                {field:'Entrega2',displayName:'Entrega'},
                {field:'Costo3',displayName:'Costo'},
                {field:'Entrega3',displayName:'Entrega'},
                {field:'Seleccion',displayName:'Seleccion'},
                {field:'Costo',displayName:'Costo'},
                {field:'RazonSeleccion',displayName:'Razon de Seleccion'}
            ],
            multiSelect: false
        };

    });
