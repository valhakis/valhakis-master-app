
routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         template: require('./home/home.html')
      });
}

export default routes;
