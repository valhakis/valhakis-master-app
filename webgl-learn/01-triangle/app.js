require('./app.scss');

var vs_source = `
   attribute vec3 aVertexPosition;

   void main() {
      gl_Position = vec4(aVertexPosition, 1.0);
   }
`;
var fs_source = `
   void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
   }
`;

var vertexPositionAttribute = null;

class Triangle {
   constructor(gl) {

      var vbo = gl.createBuffer();

      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

      var vertices = [
         -0.5, -0.5, 0.0,
         0.5, -0.5, 0.0,
         0.0, 0.5, 0.0
      ];

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      this.vbo = vbo;
      this.gl = gl;
   }

   render() {
      var gl = this.gl, vbo = this.vbo;

      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
   }
}

class App {
   constructor() {
      this.gl = null; 
      this.canvas = null;
      this.sp = null;
   }

   load() {
      var canvas = document.getElementById('canvas');
      var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

      canvas.height = canvas.clientHeight;
      canvas.width = canvas.clientWidth;

      if (!gl) {
         console.log('Unable to load WebGL. Sorry man.');
      }

      gl.clearColor(0.1, 0.1, 0.1, 1.0);

      gl.viewport(0, 0, canvas.width, canvas.height);


      this.canvas = canvas;
      this.gl = gl;

      this.init_sp();

      this.triangle = new Triangle(this.gl);

      this.render();
   }

   create_shader(shaderType, source) {
      var type = null, shader = null, gl = this.gl;

      if (shaderType == 'vs') {
         type = gl.VERTEX_SHADER;
      } else if (shaderType == 'fs') {
         type = gl.FRAGMENT_SHADER;
      } else {
         console.log(`Only 'vs' or 'fs' type allowed.`);
         return null;
      }

      shader = gl.createShader(type);

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
         console.log(`An error occurred compiling the shader: '${shaderType}': ${gl.getShaderInfoLog(shader)}`);
         gl.deleteShader(shader);
         return 0;
      }

      return shader;
   }

   init_sp() {

      var sp = null;
      var gl = this.gl;

      var vs = this.create_shader('vs', vs_source);
      var fs = this.create_shader('fs', fs_source);

      sp = gl.createProgram();
      gl.attachShader(sp, vs);
      gl.attachShader(sp, fs);
      gl.linkProgram(sp);

      if(!gl.getProgramParameter(sp, gl.LINK_STATUS)) {
         console.log(`Unable to initialize shader program: ${gl.getProgramInfoLog(sp)}`);
      }

      gl.useProgram(sp);

      vertexPositionAttribute = gl.getAttribLocation(sp, 'aVertexPosition');
      gl.enableVertexAttribArray(vertexPositionAttribute);

      this.sp = sp;
   }

   render() {
      var gl = this.gl, triangle = this.triangle;

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      triangle.render();
   }
}

var app = new App();

window.addEventListener('load', function() {
   app.load();
});
