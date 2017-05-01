import Library from './lib';

class WebGL {
   constructor() {
      // console.log('WebGL constructed');
   }
   start() {
      var i = 0;
      var canvas = document.createElement('canvas');

      canvas.width = 500;
      canvas.height = 300;

      canvas.id = 'canvas';

      var gl = canvas.getContext('webgl');

      var sp = Library.createProgram(gl, `
         attribute vec3 aVertexPosition;

         uniform mat4 model;
         uniform mat4 view;
         uniform mat4 projection;

         void main() {
            gl_Position = vec4(aVertexPosition, 1.0);
         }
      `, `
         void main() {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
         }
      `);

      gl.enableVertexAttribArray(gl.getAttribLocation(sp, 'aVertexPosition'));

      gl.clearColor(0.1, 0.1, 0.1, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);

      this.interval = setInterval(() => {
         // console.log('working', i++);
      }, 500);
      document.body.appendChild(canvas);

      this.gl = gl;
      this.canvas = canvas;
   }
   stop() {
      clearInterval(this.interval);
      document.body.removeChild(this.canvas);
   }
}

export default WebGL;
