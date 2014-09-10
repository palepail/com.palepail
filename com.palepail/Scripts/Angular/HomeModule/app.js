(function () {
    var app = angular.module('app', ['ngRoute']);

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider
          .when("/", { templateUrl: "/Home/Home" })
          .when("/contact", { templateUrl: "/Home/Contact" })
            .when("/about", { templateUrl: "/Home/About" })
          .otherwise({ redirectTo: "/" });
        $locationProvider.html5Mode(false).hashPrefix("!");
    }]);

    app.controller('AppController', function () {


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