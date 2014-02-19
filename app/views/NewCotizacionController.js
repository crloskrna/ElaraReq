angular.module('app.controlerNewCot',[])

    .factory('Items3',function(){
        var Datos2 = [
            {id:'',Item:'',Cantidad:'',Categoria:'',Descripcion:'',Marca:'',Modelo:'',ProveedorSug:'',checks:''}
        ];
        return Datos2;
    })

    .controller('NewCotizaCntrl',function($scope,$filter,Items3){

        $scope.mSelections=[
            {id:'',Item:'',Cantidad:'',Categoria:'',Descripcion:'',Marca:'',Modelo:'',ProveedorSug:'',checks:''}
        ];
        $scope.SelectedItemss = [];
        $scope.mData = Items3;
        $scope.mData = $filter('filter')($scope.mData,{checks:false});
        $scope.gridOptions = {
            data: 'mData',
            filterOptions: {filterText: '', useExternalFilter: false},
            enablePaging:true,
            pagingOptions:{ pageSizes: [250, 500, 1000], pageSize: 250, totalServerItems: 0, currentPage: 1 },
            showFilter: true,
            enablePinning: true,
            columnDefs:[
                {width:30, cellTemplate:'<div class="ngSelectionCell"><input class="ngSelectionCheckbox" type="checkbox" ng-model="row.entity.checks"/></div>',pinned: true},
                {field:'Item',displayName:'#Item'},
                {field:'Cantidad',displayName:'Cantidad'},
                {field:'Categoria',displayName:'Categoria'},
                {field:'Descripcion',displayName:'Descripcion'},
                {field:'Marca',displayName:'Marca'},
                {field:'Modelo',displayName:'Modelo'},
                {field:'ProveedorSug',displayName:'Proveedor Sugerido'}
            ],
            selectedItem: $scope.mSelections,
            multiSelect: false
        };

        $scope.mData=Items3;
        $scope.AgregaItem= function(){
            Items3.push({
                id:$scope.mData.length + 1,
                Item:$scope.mData.length + 1,
                Cantidad:$scope.new_Cantidad,
                Categoria:$scope.new_Categoria,
                Descripcion:$scope.new_Descripcion,
                Marca:$scope.new_Marca,
                Modelo:$scope.new_Modelo,
                ProveedorSug:$scope.new_Proveedor,
                checks:false

            });
            $scope.new_Cantidad='';
            $scope.new_Categoria='';
            $scope.new_Descripcion='';
            $scope.new_Marca='';
            $scope.new_Modelo='';
            $scope.new_Proveedor='';
        };
        $scope.mData=Items3;


        $scope.DeleteItem=function(){
            $scope.mData=$filter('filter')($scope.mData,{checks:false});
            Items3 = $scope.mData;
        }

        $scope.myData=Items3;

/*
        $scope.AddEmpresa= function(){
            Items2.push({
                id:$scope.myData.length + 1,
                Empresa:$scope.new_Empresa,
                FechaSolicitud:$scope.New_fechaSol,
                NombreSolicitante:$scope.new_nombreSol,
                FechaReq:$scope.new_fechaRequerimiento,
                Departamento:$scope.new_Dpto,
                NoCotizacion:$scope.new_noCotizacion,
                Proyecto:$scope.new_Proyecto
            });

            $scope.new_Empresa = '';
            $scope.New_fechaSol='';
            $scope.new_nombreSol='';
            $scope.new_fechaRequerimiento='';
            $scope.new_Dpto = '';
            $scope.new_noCotizacion='';
            $scope.new_Proyecto = '';
        };
        $scope.myData=Items2;
        */

        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        if (month < 10){
            month = "0" + month;
        }
        var day = d.getDate();
        $scope.new_fechasolicitudes = year + "-" + month + "-" + day;

    })


