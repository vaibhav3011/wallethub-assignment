define([
    'angular','service/commonData'
], function(angular, service) {
    angular.module('wallethub.ctrl', ['wallethub.service'])
        .controller('HomeCtrl1',function($scope, commonData) {

            $scope.userName = commonData.getName();
            $scope.save_name = function () {
                commonData.setName($scope.userName);
            };

        })
        .controller('HomeCtrl2',function($scope, commonData){

            $scope.userName = commonData.getName();

            $scope.number = [100, 100, 100];

            var getSum = function(){
                return $scope.number[0]+$scope.number[1]+$scope.number[2];
            };
            $scope.number_sum = getSum();

            $scope.change_numbers = function(){
                $scope.number_sum = getSum();
            };

            $scope.change_sum = function() {
                var previous_sum = getSum();
                var change = ($scope.number_sum - previous_sum) / 3;
                $scope.number[0] += change;
                $scope.number[1] += change;
                $scope.number[2] += change;
            };

        })
        .controller('HomeCtrl3',function($scope){

            $scope.data = [{"make":"Fiat","model":"PALIO NV","version":44},{"make":"Fiat","model":"PUNTO EVO","version":68},{"make":"Fiat","model":"PUNTO","version":23},{"make":"Fiat","model":"LINEA","version":4},{"make":"Fiat","model":"PALIO D","version":81},{"make":"Fiat","model":"LINEA CLASSIC","version":84},{"make":"Fiat","model":"PALIO STILE","version":44},{"make":"Hyundai","model":"ACCENT","version":59},{"make":"Hyundai","model":"GRAND I10","version":67},{"make":"Hyundai","model":"VERNA","version":45},{"make":"Hyundai","model":"SANTA FE","version":88},{"make":"Hyundai","model":"ELANTRA","version":84},{"make":"Hyundai","model":"GETZ","version":60},{"make":"Hyundai","model":"SONATA EMBERA","version":53},{"make":"Hyundai","model":"I20 ACTIVE","version":75},{"make":"Hyundai","model":"ACCENT VIVA","version":47},{"make":"Hyundai","model":"GETZ PRIME","version":62},{"make":"Hyundai","model":"SANTRO XING","version":10},{"make":"Hyundai","model":"XCENT","version":20},{"make":"Hyundai","model":"SONATA","version":43},{"make":"Hyundai","model":"VERNA TRANSFORM","version":3},{"make":"Hyundai","model":"EON","version":71},{"make":"Hyundai","model":"SONATA TRANSFORM","version":53},{"make":"Hyundai","model":"ELITE I20","version":47},{"make":"Hyundai","model":"CRETA","version":92},{"make":"Hyundai","model":"I20","version":55},{"make":"Hyundai","model":"SANTRO","version":43},{"make":"Hyundai","model":"TUCSON","version":4},{"make":"Hyundai","model":"I10","version":89},{"make":"Maruti Suzuki","model":"GYPSY","version":85},{"make":"Maruti Suzuki","model":"800","version":4},{"make":"Maruti Suzuki","model":"ESTEEM","version":11},{"make":"Maruti Suzuki","model":"WAGON R 1.0","version":50},{"make":"Maruti Suzuki","model":"BALENO","version":28},{"make":"Maruti Suzuki","model":"ZEN","version":27},{"make":"Maruti Suzuki","model":"STINGRAY","version":23},{"make":"Maruti Suzuki","model":"CELERIO","version":72},{"make":"Maruti Suzuki","model":"GRAND VITARA","version":4},{"make":"Maruti Suzuki","model":"ESTILO","version":11},{"make":"Maruti Suzuki","model":"SWIFT","version":14},{"make":"Maruti Suzuki","model":"ALTO","version":64},{"make":"Maruti Suzuki","model":"ALTO K10","version":63},{"make":"Maruti Suzuki","model":"KIZASHI","version":38},{"make":"Maruti Suzuki","model":"RITZ","version":30},{"make":"Maruti Suzuki","model":"A-STAR","version":70},{"make":"Maruti Suzuki","model":"VERSA","version":61},{"make":"Maruti Suzuki","model":"EECO","version":0},{"make":"Maruti Suzuki","model":"ERTIGA","version":69},{"make":"Maruti Suzuki","model":"SX4","version":55},{"make":"Maruti Suzuki","model":"CIAZ","version":66},{"make":"Maruti Suzuki","model":"ALTO 800","version":58},{"make":"Maruti Suzuki","model":"WAGON R","version":78},{"make":"Maruti Suzuki","model":"S-CROSS","version":62},{"make":"Maruti Suzuki","model":"SWIFT DZIRE","version":95},{"make":"Maruti Suzuki","model":"OMNI","version":95},{"make":"Mahindra","model":"THAR","version":32},{"make":"Mahindra","model":"BOLERO","version":93},{"make":"Mahindra","model":"VERITO","version":44},{"make":"Mahindra","model":"SCORPIO","version":28},{"make":"Mahindra","model":"SCORPIO GETAWAY","version":34},{"make":"Mahindra","model":"QUANTO","version":32},{"make":"Mahindra","model":"VERITO VIBE CS","version":49},{"make":"Mahindra","model":"TUV 300","version":81},{"make":"Mahindra","model":"XUV500","version":17},{"make":"Mahindra","model":"XYLO","version":73},{"make":"Mitsubishi","model":"PAJERO SPORT","version":3},{"make":"Mitsubishi","model":"LANCER","version":34},{"make":"Mitsubishi","model":"CEDIA","version":82},{"make":"Mitsubishi","model":"OUTLANDER","version":51},{"make":"Mitsubishi","model":"LANCER EVOLUTION","version":66},{"make":"Mitsubishi","model":"PAJERO","version":73},{"make":"Mitsubishi","model":"MONTERO","version":30}];

            $scope.sortType = 'make';
            $scope.sortReverse = false;
        });
});
