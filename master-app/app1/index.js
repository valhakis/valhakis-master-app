import './sass/main.scss';
import Library from './Library.js';

import Menu from '../app2/Menu.js';

var menu = new Menu();

menu.link('Home', '/');
menu.link('link', '/');
menu.link('link', '/');

var gl, canvas, sp;

var triangleVerticesBuffer;

canvas = document.createElement('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

gl = canvas.getContext('webgl');

sp = Library.createProgram(gl, `
   attribute vec3 aVertexPosition;

   uniform mat4 model;
   uniform mat4 view;
   uniform mat4 projection;

   void main() {
      gl_Position = model * vec4(aVertexPosition, 1.0);
   }
`, `
    precision mediump float;
    void main() {
       gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
`);

gl.enableVertexAttribArray(gl.getAttribLocation(sp, 'aVertexPosition'));

// create triangle vertices buffer
var ModelMatrix = [
   1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   0, 0, 0, 1,
];

gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'model'), false, new Float32Array(ModelMatrix));
triangleVerticesBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVerticesBuffer);

var vertices = [
   -0.5, -0.5, 0.0,
   0.5, -0.5, 0.0,
   0.0, 0.5, 0.0,
];

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

gl.clearColor(0.1, 0.1, 0.1, 1.0);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);
gl.viewport(0, 0, canvas.width, canvas.height);

gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

// Render The Triangle
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVerticesBuffer);
gl.vertexAttribPointer(gl.getAttribLocation(sp, 'aVertexPosition'), 3, gl.FLOAT, false, 0, 0);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);

document.body.appendChild(canvas);

canvas.addEventListener('mousemove', function(event) {
   event.preventDefault();
   //console.log(event);
});
