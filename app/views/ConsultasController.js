//'use strict';

angular.module('app.controllerConsult',[])

    .factory('Items', function() {
        var Datos = [
            { id:1, Solicitud:'1', Usuario:'Alan', Status:'Cotizada',  Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'COTIZACIÓN AREA',Fecha_Req: '2014-02-14'},
            { id:2, Solicitud:'2', Usuario:'Jorge', Status:'Cotizada', Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'COMERCIAL',Fecha_Req: '2014-02-14'},
            { id:3, Solicitud:'3', Usuario:'Luis', Status:'Rechazada',Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'COTIZACIÓN AREA',Fecha_Req: '2014-02-14'},
            { id:4, Solicitud:'4', Usuario:'Alan', Status:'Caducada', Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'GRUPO MEXICO',Fecha_Req: '2014-02-14'},
            { id:5, Solicitud:'5', Usuario:'Isaac', Status:'Caducada',Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'PERFORADORA MEXICO',Fecha_Req: '2014-02-14'},
            { id:6, Solicitud:'6', Usuario:'Juan', Status:'Abierta',  Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'COMERCIAL',Fecha_Req: '2014-02-14'},
            { id:7, Solicitud:'7', Usuario:'Juan', Status:'Cotizada', Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'EQUIPAMIENTO PARA OFICINA',Fecha_Req: '2014-02-14'},
            { id:8, Solicitud:'8', Usuario:'Isaac', Status:'Rechazada',Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'GRUPO MEXICO',Fecha_Req: '2014-02-14'},
            { id:9, Solicitud:'9', Usuario:'Luis', Status:'Caducada', Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'COTIZACIÓN AREA',Fecha_Req: '2014-02-14'},
            { id:10, Solicitud:'10', Usuario:'Alfred', Status:'Rechazada',Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'COMERCIAL',Fecha_Req: '2014-02-14'},
            { id:11, Solicitud:'11', Usuario:'Jose Luis', Status:'Abierta',  Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'COTIZACIÓN AREA',Fecha_Req: '2014-02-14'},
            { id:12, Solicitud:'12', Usuario:'Betty', Status:'Cotizada', Fecha_Sol:'2014-02-14',check:false, Area:'Sistemas',Proyecto: 'COTIZACIÓN AREA',Fecha_Req: '2014-02-14'}
        ];
        return Datos;
    })


    .controller('CntrlConsula', function($scope,Items,$filter,$routeParams,$location){

        $scope.mySelections=[
            { id:'', Solicitud:'', Usuario:'', Status:'', Fecha_Sol:'',check:false, Area:'',Proyecto: '',Fecha_Req: ''}
        ];

        $scope.SelectedItems=[];


        $scope.myDblClickHandler = function(rowItem) {
            $scope.mySelections[0].id=rowItem.id;
            $scope.mySelections[0].Solicitud= rowItem.Solicitud;
            $scope.mySelections[0].Categoria=rowItem.Categoria;
            $scope.mySelections[0].Status=rowItem.Status;
            $scope.mySelections[0].Fecha=rowItem.Fecha;
            $scope.mySelections[0].check=rowItem.check;
        }

        $scope.myData=Items;
       var Filtro = $routeParams.ParamId;
        if(Filtro == "'All'")
        {
            $scope.myData= $filter('filter')(Items,{check:false})
        }
        else
        {
            $scope.myData= $filter('filter')(Items,{Status:Filtro})
        }
        $scope.gridOptions = {
            data: 'myData',
            filterOptions: {filterText: '', useExternalFilter: false},
            enablePaging:true,
            pagingOptions:{ pageSizes: [250, 500, 1000], pageSize: 250, totalServerItems: 0, currentPage: 1 },
            showFilter: true,
            enablePinning: true,
            columnDefs:[
                {width:30, cellTemplate:'<div class=""><input ng-checked="parent" ng-click="getAllSelected()" class="ngSelectionCheckbox" type="checkbox" ng-model="row.entity.check"/></div>',pinned: true},
                {field:'Solicitud',displayName:'#Solicitud'},
                {field:'Status',displayName:'Status'},
                {field:'Usuario',displayName:'Usuario'},
                {field:'Area',displayName:'Area'},
                {field:'Proyecto',displayName:'Proyecto'},
                {field:'Fecha_Sol',displayName:'Fecha Solicitud'},
                {field:'Fecha_Req',displayName:'Fecha Req.'}
            ],
            selectedItems: $scope.mySelections,
            multiSelect: false,

            dblClickFn: $scope.myDblClickHandler,
            plugins: [ngGridDoubleClick],
            afterSelectionChange:function(item){
                angular.forEach($scope.mySelections,function(item){
                    //alert(item.id);
                    $location.path('/EditaCotizacion/:' + item.id);
                })
            }
        };

        function Ctrl($scope) {
            $scope.getAllSelected = function () {
                var chkChild = document.querySelectorAll('input[ng-model^="child_"]').length;
                var chkChildChecked = document.querySelectorAll('input[ng-model^="child_"]:checked').length;
                if (chkChild === chkChildChecked)
                    $scope.parent= true;
                else
                    $scope.parent= false;
            }
        }

        function ngGridDoubleClick() {
            var self = this;
            self.$scope = null;
            self.myGrid = null;

            self.init = function(scope, grid, services) {
                self.$scope = scope;
                self.myGrid = grid;
                self.assignEvents();
            };
            self.assignEvents = function() {
                self.myGrid.$viewport.on('dblclick', self.onDoubleClick);
            };
            self.onDoubleClick = function(event) {
                self.myGrid.config.dblClickFn(self.$scope.selectedItems[0].id);
                //console.log($scope.mySelections)
            };
        }

        $scope.Delete=function(){
            $scope.myData=$filter('filter')($scope.myData,{check:false});
            Items=$scope.myData;
        }


        $scope.FiltroAbiertas=function(){
            return  $filter('filter')(Items,{Status:'Abierta'}).length;;
        }
        $scope.FiltroCotizadas=function(){
            return  $scope.myData= $filter('filter')(Items,{Status:'Cotizada'}).length;;
        }
        $scope.FiltroRechazadas=function(){
            return  $scope.myData= $filter('filter')(Items,{Status:'Rechazada'}).length;;
        }
        $scope.FiltroCaducadas=function(){
            return  $scope.myData= $filter('filter')(Items,{Status:'Caducada'}).length;;
        }

    });




