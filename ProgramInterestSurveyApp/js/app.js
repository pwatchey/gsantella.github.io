var app = angular.module('survey', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            views: {
              'header': {
                templateUrl:'partials/header.html',
                controller: 'HomeCtrl'
              },
              'content': {
                templateUrl:'partials/content.html',
                controller: 'HomeCtrl'
              },
              'footer': {
                templateUrl:'partials/footer.html',
                controller: 'HomeCtrl'
              },

            }
        })

    .state('page1', {
            url:'/page1',
            views: {
              'header': {
                templateUrl:'partials/header.html',
                controller: 'HomeCtrl'
              },
              'content': {
                templateUrl:'partials/page1.html',
                controller: 'HomeCtrl'
              },
              'footer': {
                templateUrl:'partials/footer.html',
                controller: 'HomeCtrl'
              },
            }
        })

    .state('page2', {
            url:'/page2',
            views: {
              'header': {
                templateUrl:'partials/header.html',
                controller: 'HomeCtrl'
              },
              'content': {
                templateUrl:'partials/page2.html',
                controller: 'HomeCtrl'
              },
              'footer': {
                templateUrl:'partials/footer.html',
                controller: 'HomeCtrl'
              },
            }
        })

    .state('page3', {
            url:'/page3',
            views: {
              'header': {
                templateUrl:'partials/header.html',
                controller: 'HomeCtrl'
              },
              'content': {
                templateUrl:'partials/page3.html',
                controller: 'HomeCtrl'
              },
              'footer': {
                templateUrl:'partials/footer.html',
                controller: 'HomeCtrl'
              },
            }
        })

        .state('page4', {
                url:'/page4',
                views: {
                  'header': {
                    templateUrl:'partials/header.html',
                    controller: 'HomeCtrl'
                  },
                  'content': {
                    templateUrl:'partials/page4.html',
                    controller: 'HomeCtrl'
                  },
                  'footer': {
                    templateUrl:'partials/footer.html',
                    controller: 'HomeCtrl'
                  },
                }
        })

        .state('page5', {
            url:'/page5',
            views: {
              'header': {
                templateUrl:'partials/header.html',
                controller: 'HomeCtrl'
              },
              'content': {
                templateUrl:'partials/page5.html',
                controller: 'HomeCtrl'
              },
              'footer': {
                templateUrl:'partials/footer.html',
                controller: 'HomeCtrl'
              },
            }
          })

          .state('page6', {
              url:'/page6',
              views: {
                'header': {
                  templateUrl:'partials/header.html',
                  controller: 'HomeCtrl'
                },
                'content': {
                  templateUrl:'partials/page6.html',
                  controller: 'HomeCtrl'
                },
                'footer': {
                  templateUrl:'partials/footer.html',
                  controller: 'HomeCtrl'
                },
              }
          })

          .state('page7', {
              url:'/page7',
              views: {
                'header': {
                  templateUrl:'partials/header.html',
                  controller: 'HomeCtrl'
                },
                'content': {
                  templateUrl:'partials/page7.html',
                  controller: 'HomeCtrl'
                },
                'footer': {
                  templateUrl:'partials/footer.html',
                  controller: 'HomeCtrl'
                },
              }
          })

          .state('page8', {
              url:'/page8',
              views: {
                'header': {
                  templateUrl:'partials/header.html',
                  controller: 'HomeCtrl'
                },
                'content': {
                  templateUrl:'partials/page8.html',
                  controller: 'HomeCtrl'
                },
                'footer': {
                  templateUrl:'partials/footer.html',
                  controller: 'HomeCtrl'
                },
              }
          })

          .state('page9', {
              url:'/page9',
              views: {
                'header': {
                  templateUrl:'partials/header.html',
                  controller: 'HomeCtrl'
                },
                'content': {
                  templateUrl:'partials/page9.html',
                  controller: 'HomeCtrl'
                },
                'footer': {
                  templateUrl:'partials/footer.html',
                  controller: 'HomeCtrl'
                },
              }
          })

          .state('page10', {
              url:'/page10',
              views: {
                'header': {
                  templateUrl:'partials/header.html',
                  controller: 'HomeCtrl'
                },
                'content': {
                  templateUrl:'partials/page10.html',
                  controller: 'HomeCtrl'
                },
                'footer': {
                  templateUrl:'partials/footer.html',
                  controller: 'HomeCtrl'
                },
              }
          })

          .state('page11', {
              url:'/page11',
              views: {
                'header': {
                  templateUrl:'partials/header.html',
                  controller: 'HomeCtrl'
                },
                'content': {
                  templateUrl:'partials/page11.html',
                  controller: 'HomeCtrl'
                },
                'footer': {
                  templateUrl:'partials/footer.html',
                  controller: 'HomeCtrl'
                },
              }
          })

          .state('results', {
              url:'/results',
              views: {
                'header': {
                  templateUrl:'partials/header.html',
                  controller: 'HomeCtrl'
                },
                'content': {
                  templateUrl:'partials/results.html',
                  controller: 'HomeCtrl'
                },
                'footer': {
                  templateUrl:'partials/footer.html',
                  controller: 'HomeCtrl'
                },
              }
          })

}]);

app.controller('HomeCtrl',  ['$scope', function($scope) {

  $scope.countTrues = function(model) {
    var count = 0;
    angular.forEach(model, function(checkbox) {
      count += checkbox ? 1 : 0;
    });
    return count;
  }

  $scope.findWins = function() {
    //order $scope.programs
    $scope.programs = $scope.programs.sort(function(a, b) {
      return (b[value] > a[value]);
    });

    //loop through in results view

  }

  $scope.programs = [
    {text:'Program1', value:$scope.countTrues($scope.checkboxModelPage1)},
    {text:'Program2', value:$scope.countTrues($scope.checkboxModelPage2)}
  ];

  $scope.checkboxModelPage1 = $scope.checkboxModelPage1 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage2 = $scope.checkboxModelPage2 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage3 = $scope.checkboxModelPage3 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage3 = $scope.checkboxModelPage4 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage4 = $scope.checkboxModelPage5 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage5 = $scope.checkboxModelPage6 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage6 = $scope.checkboxModelPage7 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage7 = $scope.checkboxModelPage8 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage8 = $scope.checkboxModelPage9 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage9 = $scope.checkboxModelPage10 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

  $scope.checkboxModelPage10 = $scope.checkboxModelPage11 || {
       value1 : false, value2 : false, value3 : false, value4 : false,
       value5 : false, value6 : false, value7 : false, value8 : false,
       value9 : false, value10: false, value11 : false, value12 : false,
       value13 : false, value14 : false, value15 : false, value16 : false,
       value17 : false
  };

}]);
