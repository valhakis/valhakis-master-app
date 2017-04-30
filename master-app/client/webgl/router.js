import WebGL from './webgl';

var webgl = new WebGL();

export default function router($stateProvider) {
   $stateProvider.state('webgl', {
      url: '/webgl',
      controller: function() {

      },
      template: require('./index.html'),
      onEnter: function() {
         webgl.start();
      },
      onExit: function() {
         webgl.stop();
      }
   });
}
