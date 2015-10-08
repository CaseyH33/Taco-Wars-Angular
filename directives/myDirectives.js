tacoWars.directive("downtownBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('css/downtown.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

tacoWars.directive("stadiumBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('css/stadium.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

tacoWars.directive("beachBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('css/beach.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

tacoWars.directive("lakeBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('css/lake.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

tacoWars.directive("cemeteryBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('css/cemetery.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

tacoWars.directive("universityBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('css/school.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});
