routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
   $stateProvider
      .state('blog', {
         url: '/blog',
         template: require('./partials/index.html'),
         controller: 'BlogController',
         controllerAs: 'blog'
      })
      .state('blog.new', {
         url: '/new', 
         template: require('./partials/new.html'),
         // controller: 'BlogController',
         // controllerAs: 'vm'
      })
      .state('blog.home', {
         url: '/home', 
         template: require('./partials/home.html')
      });
}

export default routes;
