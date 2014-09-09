(function () {
    var app = angular.module('home', []);

    app.controller('HomeController', function () {


    });
    app.controller('TabController', function () {
     this.tab = 1;

     this.setTab = function (tab) {
         this.tab = tab;
     };

     this.isSet = function(checkTab) {
         return this.tab===checkTab;
     };

    });

})();