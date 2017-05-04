routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
   $stateProvider
      .state('about', {
         url: '/about',
         template: require('./about.html')
      });
}

export default routes;
