angular.module('app.controllerPOM',[])

.factory('Items4',function(){
    var Datos3 = [
        {id:1,Item:'1',Cantidad:'1',Articulo:'Laptop',Categoria:'electronicos',Marca:'DELL',Modelo:'Vostro|1510',CostoUnitario:'$10,200',TotalSinIVA:'$10,200',IVA:'$20',TotalConIVA:'$10,220',Moneda:'Pesos'},
        {id:2,Item:'2',Cantidad:'3',Articulo:'Mause',Categoria:'electronicos',Marca:'hp',Modelo:'Msu10',CostoUnitario:'$100',TotalSinIVA:'$100',IVA:'$50',TotalConIVA:'$105',Moneda:'Pesos'},
        {id:3,Item:'3',Cantidad:'1',Articulo:'Teclado',Categoria:'electronicos',Marca:'hp',Modelo:'Tcld10',CostoUnitario:'$200',TotalSinIVA:'$200',IVA:'$10',TotalConIVA:'$210',Moneda:'Pesos'},
        {id:4,Item:'4',Cantidad:'2',Articulo:'Laptop',Categoria:'electronicos',Marca:'DELL',Modelo:'Vostro|1510',CostoUnitario:'$10,200',TotalSinIVA:'$10,200',IVA:'$20',TotalConIVA:'$10,220',Moneda:'Pesos'},
        {id:5,Item:'5',Cantidad:'2',Articulo:'Bosinas',Categoria:'electronicos',Marca:'Sony',Modelo:'Bsns1045',CostoUnitario:'$100',TotalSinIVA:'$1000',IVA:'$20',TotalConIVA:'$1020',Moneda:'Pesos'}
    ];
    return Datos3;
})

    .controller('POMCntrl', function($scope,Items4,$location) {


        $scope.miData=Items4;
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
                {field:'Articulo',displayName:'Artiulo'},
                {field:'Categoria',displayName:'Categoria'},
                {field:'Marca',displayName:'Marca'},
                {field:'Modelo',displayName:'Modelo'},
                {field:'CostoUnitario',displayName:'Costo Unitario'},
                {field:'TotalSinIVA',displayName:'Total Sin IVA'},
                {field:'IVA',displayName:'IVA'},
                {field:'TotalConIVA',displayName:'Total Con IVA'},
                {field:'Moneda',displayName:'Moneda'}
            ],
            multiSelect: false
        };

    });

