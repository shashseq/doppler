var dashApp = angular.module('dashApp', ['ngRoute']);


dashApp.config(['$routeProvider','$locationProvider',
  function ($routeProvider,$locationProvider){
  
  $routeProvider.
  when('/main',{
  templateUrl: 'main.html',
  controller: 'orgController'
  }).
  when('/performance',{
  templateUrl: 'performance.html',
  controller: 'performanceController'
  }).
  when('/firm_performance',{
  templateUrl: 'firm_performance.html',
  controller: 'performanceController'
  }).
  when('/division1_fs',{
  templateUrl: 'division1_fs.html',
  controller: 'division1_fsController'
  }).
  when('/division1_performance',{
  templateUrl: 'division1_performance.html',
  controller: 'division1_performanceController'
  }).
  when('/plant1_fs',{
  templateUrl: 'plant1_fs.html',
  controller: 'plant1_fsController'
  }).
  when('/plant1_performance',{
  templateUrl: 'plant1_performance.html',
  controller: 'plant1_performanceController'
  }).
  when('/net_income',{
  templateUrl: 'net_income.html',
  controller: 'netIncomeController'
  }).
  when('/net_income_table',{
  templateUrl: 'net_income_table.html',
  controller: 'netIncomeTableController'
  }).
  when('/cashflow',{
  templateUrl: 'cashflow.html',
  controller: 'cashflowController'
  }).
  when('/cashflow_table',{
  templateUrl: 'cashflow_table.html',
  controller: 'cashflowTableController'
  }).
  when('/balance_sheet',{
  templateUrl: 'balance_sheet.html',
  controller: 'balanceSheetController'
  }).
  when('/balance_sheet_table',{
  templateUrl: 'balance_sheet_table.html',
  controller: 'balanceSheetTableController'
  }).
  when('/scen_performance/:scenario',{
  templateUrl: 'scen_performance.html',
  controller: 'scen_performanceController'
  }).
  when('/scenario',{
  templateUrl: 'scenario.html',
  controller: 'scenarioController'
  }).
  when('/techbuzz',{
  templateUrl: 'techbuzz.html',
  controller: 'techbuzzController'
  }).
  otherwise({
  redirectTo: '/main'
  });

}]).run(function($rootScope,$location,$window,$http){
         
    });
