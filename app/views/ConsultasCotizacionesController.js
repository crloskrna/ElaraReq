
angular.module('app.controllerConsultCot',[])

    .factory('Items5', function() {
        var Datos = [
            { id:1, Solicitud:'1', Usuario:'Admin', Status:'Pendiente',  Fecha_Sol:'2014-02-14',check:false, Area:'Compras',Proyecto: 'Sistemas',Fecha_Req: '2014-02-14',FechaCotiza:'2014-02-14',NoSolicitudCot:'1'},
            { id:2, Solicitud:'2', Usuario:'admin1', Status:'Rechazada',  Fecha_Sol:'2014-03-15',check:false, Area:'Compras',Proyecto: 'Diseño',Fecha_Req: '2014-03-15',FechaCotiza:'2014-03-22',NoSolicitudCot:'2'},
            { id:3, Solicitud:'3', Usuario:'admin2', Status:'Aceptada',  Fecha_Sol:'2014-02-16',check:false, Area:'Compras',Proyecto: 'Lluvias',Fecha_Req: '2014-03-17',FechaCotiza:'2014-03-22',NoSolicitudCot:'3'},
            { id:4, Solicitud:'4', Usuario:'Admin3', Status:'Abierta',  Fecha_Sol:'2014-02-17',check:false, Area:'Compras',Proyecto: 'Sistemas',Fecha_Req: '2014-03-17',FechaCotiza:'2014-03-22',NoSolicitudCot:'4'},
            { id:5, Solicitud:'5', Usuario:'Admin4', Status:'Pendiente',  Fecha_Sol:'2014-02-18',check:false, Area:'Compras',Proyecto: 'Diseño',Fecha_Req: '2014-03-17',FechaCotiza:'2014-03-22',NoSolicitudCot:'5'},
            { id:6, Solicitud:'6', Usuario:'Admin5', Status:'Rehazada',  Fecha_Sol:'2014-02-19',check:false, Area:'Compras',Proyecto: 'Sistemas',Fecha_Req: '2014-03-17',FechaCotiza:'2014-03-22',NoSolicitudCot:'6'}
        ];
        return Datos;
    })

    .controller('ConsultCotCntrl', function($scope,Items5,$location) {

        $scope.MData=Items5;
        $scope.gridOptions = {
            data: 'MData',
            filterOptions: {filterText:'', useExternalFilter: false},
            enablePaging:true,
            pagingOptions:{ pageSizes: [250, 500, 1000], pageSize: 250, totalServerItems: 0, currentPage: 1 },
            showFilter: true,
            enablePinning: true,
            columnDefs:[
                {field:'Solicitud',displayName:'#Solicitud'},
                {field:'Status',displayName:'Status'},
                {field:'Usuario',displayName:'Usuario'},
                {field:'Area',displayName:'Area'},
                {field:'Proyecto',displayName:'Proyecto'},
                {field:'Fecha_Sol',displayName:'Fecha Solicitud'},
                {field:'Fecha_Req',displayName:'Fecha Req.'},
                {field:'FechaCotiza',displayName:'Fecha de Cotizacion'},
                {field:'NoSolicitudCot',displayName:'No.Solicitud Cotizacion'}

            ],
            multiSelect: false
        };

    });

