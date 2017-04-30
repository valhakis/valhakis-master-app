/* global math */

import Triangle5 from './triangle5';
import Rectangle from './rectangle';

var matrix = math.matrix([
   [1, 0, 0, 0,],
   [0, 1, 0, 0,],
   [0, 0, 1, 0,],
   [0, 0, 0, 1,],
]);

math.value = function(matrix) {
   var array = [];
   for (let i=0; i<matrix._data.length; i++) {
      for (let j=0; j<matrix._data[i].length; j++) {
         array.push(matrix._data[i][j]);
      }
   }
   return array;
};

//console.log(math.value(matrix));

//LogMatrix(matrix);

function LogMatrix(matrix) {
   var out = '';

   for (let i=0; i<4; i++) {
      for (let j=0; j<4; j++) {
         out += matrix[j+i*4] + ' ';
      }
      out += '\n';
   }

   console.log(out);
}

var matrix2 = math.matrix([
   [1, 0, 0, 0,],
   [0, 1, 0, 0,],
   [0, 0, 1, 0,],
   [0, 0, 0, 1,],
]);

matrix = math.multiply(matrix, matrix2);

//LogMatrix(math.value(matrix));

var matrix = function() {
   var position = math.matrix([
      [1, 0, 0, 1,],
      [0, 1, 0, 1,],
      [0, 0, 1, 0,],
      [0, 0, 0, 1,],
   ]);
   var scale = [
      [0.2, 0, 0, 0,],
      [0, 0.2, 0, 0,],
      [0, 0, 0.2, 0,],
      [0, 0, 0, 1,],
   ];
   var matrix = math.multiply(position, scale);
   //LogMatrix(math.value(matrix));
};

matrix();

var vs_source = `
   attribute vec3 aVertexPosition;
   attribute vec3 aVertexColor;

   uniform mat4 model;
   uniform mat4 view;
   uniform mat4 projection;

   varying lowp vec3 vColor;

   void main() {
      gl_Position = model * view * projection * vec4(aVertexPosition, 1.0);
      vColor = aVertexColor;
   }
`;

var fs_source = `
   varying lowp vec3 vColor;

   precision mediump float;

   uniform sampler2D u_texture;

   uniform vec3 color;

   void main() {
      // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0) * vec4(vColor, 1.0) * vec4(1.0, 1.0, 1.0, 1.0);
      gl_FragColor = vec4(color, 1.0);
   }
`;


class Matrix {
   constructor(value) {
      this.value = value;
   }
   loadIdentity() {
      this.value = [
         1, 0, 0, 0,
         0, 1, 0, 0,
         0, 0, 1, 0,
         0, 0, 0, 1,
      ];
   }
   log() {
      var i, j, index;
      var out = '';

      index = 0;
      for (i=0; i<4; i++) {
         // i: 0 -> 1 -> 2 -> 3
         for (j=0; j<4; j++) {
            // j: 0 -> 1 -> 2 -> 3
            out += this.value[index] + ' ';
            index++;
         }

         out += ' | ';

         index -= 4;

         for (j=0; j<13; j+=4) {
            out += this.value[j+i] + ' ';
            index++;
         }

         out += '\n';
      }
      // console.log(out);
   }

   transition(x, y, z) {
      var transitionMatrix = [
         1, 0, 0, 0,
         0, 1, 0, 0,
         0, 0, 1, 0,
         x, y, z, 1,
      ];

      //this.value[0]

      //this.value = this.value * transitionMatrix;
      this.testMultiply([
         'a1', 'a2', 'a2', 'a4',
         'b1', 'b2', 'b2', 'b4',
         'c1', 'c2', 'c2', 'c4',
         'd1', 'd2', 'd2', 'd4',
      ], [
         'A1', 'A2', 'A3', 'A4',
         'B1', 'B2', 'B3', 'B4',
         'C1', 'C2', 'C3', 'C4',
         'D1', 'D2', 'D3', 'D4',
      ]);
   }

   translate(x, y, z) {
      this.value = this.multiply(this.value, [
         1, 0, 0, x,
         0, 1, 0, y,
         0, 0, 1, z,
         0, 0, 0, 1,
      ]);
   }

   scale(x, y, z) {
      this.value = this.multiply(this.value, [
         x, 0, 0, 0,
         0, y, 0, 0,
         0, 0, z, 0,
         0, 0, 0, 1,
      ]);
   }

   multiply(mat1, mat2) {
      var mat3 = [];
      for (let i=0; i<4; i++) {
         for (let j=0; j<4; j++) {
            mat3[i+j*4] = 0;
            for (let n=0; n<4; n++) {
               mat3[i+j*4] += mat1[n+i*4] * mat2[j+n*4];
            }
         }
      }
      return mat3;
   }

   testMultiply(mat1, mat2) {
      var out = '';

      for (let i=0; i<4; i++) {
         for (let j=0; j<4; j++) {
            //out += j + i*4 + ' ';
            out += mat1[j+i*4] + ' ';
         }

         out += '| ';

         for (let j=0; j<4; j++) {
            // out += i + j*4 + ' ';
            out += mat2[i+j*4] + ' ';
         }

         out += '| ';
         var mat3 = [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
         ];

         //for (let j=0; j<4; j++) {
         //mat3[j+i*4] = '';
         //out += `${j+i*4}: [`;
         //for (let n=0; n<4; n++) {
         //out += `${mat1[n+i*4]}*${mat2[j+n*4]}`;
         //// mat3[j+i*4] += mat1[n+i*4] * mat2[j+n*4];
         //mat3[j+i*4] += `${mat1[n+i*4]} * ${mat2[j+n*4]} + `;
         //if (n!==3) {
         //out += ' + ';
         //}
         //}
         //out += '] ';
         //}

         for (let j=0; j<4; j++) {
            //out += `${mat1[j+i*4]} `;
            for (let n=0; n<4; n++) {
               out += `${mat1[n+i*4]}*${mat2[j+n*4]} `;
            }
            out += `|| `;
         }

         out += '| ';

         for (let j=0; j<4; j++) {
            // out += i + j*4 + ' ';
            out += mat3[i+j*4] + ' ';
         }

         out += '| ';
         out += '\n';
      }

      // console.log(out);
   }
}

var mat1 = [
   1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   2, 2, 2, 1,
];

var mat2 = [
   1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   0, 0, 0, 1,
];

var mat3 = [
   1, 2, 3, 4,
   5, 6, 7, 8,
   9, 10, 11, 12,
   13, 14, 15, 16,
];

var out = '';

for (let i=0; i<4; i++) {
   for (let j=0; j<4; j++) {
      mat3[i+j*4] = 0;
      for (let n=0; n<4; n++) {
         mat3[i+j*4] += mat1[n+i*4] * mat2[j+n*4];
      }
      out += mat3[i+j*4] + ' ';
   }
   out += '\n';
}

//console.log(out);

//var matrix = new Matrix([
//1, 0, 0, 0,
//0, 1, 0, 0,
//0, 0, 1, 0,
//1, 0, 0, 1,
//]);

//matrix.log();

var MatrixModel = new Matrix([
   1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   0, 0, 0, 1,
]);

MatrixModel.transition(1, 1, 0);

MatrixModel.log();

var multi = function(matrix1, matrix2) {
   var matrix = [
      [1, 0, 0, 0,],
      [0, 1, 0, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 1,],
   ];

   // [0, 0, 0, 0,]
   // [0, 0, 0, 0,]
   // [0, 0, 0, 0,]
   // [0, 0, 0, 0,]

   // [0, 0, 0, 0,]
   // [0, 0, 0, 0,]
   // [0, 0, 0, 0,]
   // [0, 0, 0, 0,]


   return matrix;
};

var matrix1 = [
   [1, 2, 3, 4,],
   [2, 1, 0, 0,],
   [1, 0, 1, 1,],
   [8, 0, 0, 1,],
];

var matrix2 = [
   [1, 3, 0, 2,],
   [0, 1, 0, 0,],
   [2, 0, 1, 0,],
   [0, 6, 0, 1,],
];

var matrix = multi(matrix1, matrix2);

var rotateY = function(matrix, angle) {
   matrix[0][0] = Math.cos(angle);
   matrix[0][2] = -Math.sin(angle);
   matrix[2][0] = Math.sin(angle);
   matrix[2][2] = Math.cos(angle);
   return matrix;
};

var rotateZ = function(matrix, angle) {
   matrix[0][0] = Math.cos(angle);
   matrix[0][1] = Math.sin(angle);
   matrix[1][0] = -Math.sin(angle);
   matrix[1][1] = Math.cos(angle);
   return matrix;
};

var loadIdentity = function() {
   return [
      [1, 0, 0, 0,],
      [0, 1, 0, 0,],
      [0, 0, 1, 0,],
      [0, 0, 0, 1,],
   ];
};

var scale = function(matrix, vector) {

   matrix[0][0] = matrix[0][0] * vector[0];
   matrix[1][1] = matrix[1][1] * vector[1];
   matrix[2][2] = matrix[2][2] * vector[2];

   return matrix;
};

var ortho = function(left, right, bottom, top, near, far) {

   var t = { x: 0, y: 0, z: 0, };

   t.x = (right + left) / (right - left);
   t.y = (top + bottom) / (top - bottom);
   t.z = -(far+near) / (far-near);

   // var matrix = [
   // [2 / (right-left), 0, 0, t.x,],
   // [0, 2 / (top-bottom), 0, t.y,],
   // [0, 0, -2 / (far-near), t.z,],
   // [0, 0, 0, 1,],
   // ];

   var matrix = [
      [2 / (right-left), 0, 0, 0,],
      [0, 2 / (top-bottom), 0, 0,],
      [0, 0, -2 / (far - near), 0,],
      [t.x, t.y, t.z, 1,],
   ];

   //console.log(ToArray(matrix));

   //var matrix = [
   //[1, 0, 0, 0,],
   //[0, 1, 0, 0,],
   //[0, 0, 1, 0,],
   //[0, 0, 0, 1,],
   //];

   return matrix;
};

var ToArray = function(matrix) {

   var i, j, index = 0;

   var array = [];

   for (i=0; i<4; i++) {
      for (j=0; j<4; j++) {
         array.push(matrix[i][j]);
         index++;
      }
   }

   return array;
};

// [ 0 0 0 0 ]
// [ 0 0 0 0 ]
// [ 0 0 0 0 ]
// [ 0 0 0 0 ]

var translate = function(matrix, position) {
   //matrix[0][3] = position[0];
   //matrix[1][3] = position[1];
   //matrix[2][3] = position[2];

   matrix[3][0] = position[0];
   matrix[3][1] = position[1];
   matrix[3][2] = position[2];

   return matrix;
};

function create_shader(gl, type, source) {
   var shader_type;

   switch (type) {
      case 'vs': shader_type = gl.VERTEX_SHADER; break;
      case 'fs': shader_type = gl.FRAGMENT_SHADER; break;
   }

   var shader = gl.createShader(shader_type);
   gl.shaderSource(shader, source);
   gl.compileShader(shader);

   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.log(`Unable to compile shader '${type}': ${gl.getShaderInfoLog(shader)}`);
      gl.deleteShader(shader);
      return null;
   }
   return shader;
}

function create_shader_program(gl) {
   var vs = create_shader(gl, 'vs', vs_source);
   var fs = create_shader(gl, 'fs', fs_source);

   var sp = gl.createProgram();
   gl.attachShader(sp, vs);
   gl.attachShader(sp, fs);
   gl.linkProgram(sp);

   if (!gl.getProgramParameter(sp, gl.LINK_STATUS)) {
      console.log(gl.getProgramInfoLog(sp));
      console.log(`Shader program linking failed: ${gl.getProgramInfoLog(sp)}`);
   }

   gl.useProgram(sp);

   return sp;
}

function CanvasDirective() {
   return {
      controller: function() {
         (function() {
         })();
      },
      link: function(scope, element, attrs) {
         var canvas = document.createElement('canvas');

         canvas.width = 400;
         canvas.height = 400;

         canvas.className = 'canvas';

         var gl = canvas.getContext('webgl');

         gl.clearColor(0.1, 0.1, 0.1, 1.0);
         gl.viewport(0, 0, canvas.width, canvas.height);

         var sp = create_shader_program(gl);

         element[0].innerHTML = '';
         element[0].appendChild(canvas);

         // vertex position buffer
         var vertexPositionBuffer = gl.createBuffer();
         gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);

         //var vertices = [
         //0, 0, 0,
         //100, 100, 0,
         //200, 200, 0
         //];
         var vertices = [
            -0.5, -0.5, 0.0,
            0.5, -0.5, 0.0,
            0.0, 0.5, 0.0,
         ];

         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
         gl.enableVertexAttribArray(gl.getAttribLocation(sp, 'aVertexPosition'));

         // vertex color buffer
         var vertexColorBuffer = gl.createBuffer();

         var colors = [
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0,
         ];

         gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
         gl.enableVertexAttribArray(gl.getAttribLocation(sp, 'aVertexColor'));


         var identityMatrix = [
            [ 1, 0, 0, 0, ],
            [ 0, 1, 0, 0, ],
            [ 0, 0, 1, 0, ],
            [ 0, 0, 0, 1, ],
         ];

         var perspectiveMatrix = [
            [ 1, 0, 0, 0, ],
            [ 0, 1, 0, 0, ],
            [ 0, 0, 1, 0, ],
            [ 0, 0, 0, 1, ],
         ];

         var position = [0.0, 0.0, 0.0];

         var modelMatrix = [
            [ 1, 0, 0, 0, ],
            [ 0, 1, 0, 0, ],
            [ 0, 0, 1, 0, ],
            [ 0, 0, 0, 1, ],
         ];

         // basic rotation

         // Rx

         // [ 1 0 0 0 ]
         // [ 0 cos(a) sin(a) 0 ]
         // [ 0 -sin(a) cos(a) 0 ]
         // [ 0 0 0 1 ]

         var angle = 0;


         // [ 1 0 0 0 ]
         // [ 0 1 0 0 ]
         // [ 0 0 1 0 ]
         // [ 0 0 0 1 ]

         var viewMatrix = [
            [ 1, 0, 0, 0, ],
            [ 0, 1, 0, 0, ],
            [ 0, 0, 1, 0, ],
            [ 0, 0, 0, 1, ],
         ];

         var projectionMatrix = [
            [ 1, 0, 0, 0, ],
            [ 0, 1, 0, 0, ],
            [ 0, 0, 1, 0, ],
            [ 0, 0, 0, 1, ],
         ];

         // model matrix transformation
         // 1. stretching
         // [ k 0 ]
         // [ 0 1 ]

         // 2. scaling
         // [ S1 0  0  0 ]    [ x ]
         // [ 0  S2 0  0 ] *  [ y ]
         // [ 0  0  S3 0 ]    [ z ]
         // [ 0  0  0  1 ]    [ 1 ]

         // rotate model matrix

         canvas.addEventListener('mousemove', function(event) {
            //console.log(event);
            //console.log('screen', event.screenX, event.screenY);
            //console.log('client', event.clientX, event.clientY);
            console.log('offset', event.offsetX, event.offsetY);
            //console.log('page', event.pageX, event.pageY);
         });

         var triangle5 = new Triangle5(gl, sp);
         var rectangle = new Rectangle(gl, sp);

         setInterval(() => {
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.uniform3fv(gl.getUniformLocation(sp, 'color'), [0.1, 0.2, 0.5]);

            angle += 0.01;

            modelMatrix = loadIdentity();

            modelMatrix = translate(modelMatrix, position);
            modelMatrix[1][1] = Math.cos(angle);
            modelMatrix[1][2] = Math.sin(angle);
            modelMatrix[2][1] = -Math.sin(angle);
            modelMatrix[2][2] = Math.cos(angle);
            //projectionMatrix = ortho(0.0, canvas.width, 0.0, canvas.height, 0.1, 100.0);

            gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'model'), false, new Float32Array(ToArray(modelMatrix)));
            gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'view'), false, new Float32Array(ToArray(viewMatrix)));
            gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'projection'), false, new Float32Array(ToArray(projectionMatrix)));

            gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
            gl.vertexAttribPointer(gl.getAttribLocation(sp, 'aVertexPosition'), 3, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
            gl.vertexAttribPointer(gl.getAttribLocation(sp, 'aVertexColor'), 3, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);

            // another triangle
            modelMatrix = loadIdentity();
            modelMatrix = rotateY(modelMatrix, angle);
            modelMatrix = translate(modelMatrix, [0.5, 0.5, 0]);
            modelMatrix = scale(modelMatrix, [0.5, 0.5, 1]);

            gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'model'), false, new Float32Array(ToArray(modelMatrix)));
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);

            // third triangle
            modelMatrix = loadIdentity();
            modelMatrix = rotateZ(modelMatrix, angle);
            modelMatrix = translate(modelMatrix, [-0.5, 0.5, 0]);
            modelMatrix = scale(modelMatrix, [0.25, 0.25, 1]);

            gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'model'), false, new Float32Array(ToArray(modelMatrix)));
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);

            // fourth triangle
            MatrixModel.loadIdentity();
            //MatrixModel.scale(0.2, 0.2, 0.2);
            MatrixModel.translate(1, 1, 0);
            MatrixModel.value = [
               1, 0, 0, 0,
               0, 1, 0, 0,
               0, 0, 1, 0,
               0, 1, 0, 1,
            ];
            // LogMatrix(MatrixModel.value);
            var TranslateMatrix = math.matrix([
               [1, 0, 0, 0,],
               [0, 1, 0, 0,],
               [0, 0, 1, 0,],
               [0, 0, 0, 1,],
            ]);
            var ScaleMatrix = math.matrix([
               [0.2, 0, 0, 0,],
               [0, 0.2, 0, 0,],
               [0, 0, 0.2, 0,],
               [0, 0, 0, 1,],
            ]);
            var RotationMatrix = math.matrix([
               [Math.cos(angle), -Math.sin(angle), 0, 0,],
               [0, 1, 0, 0,],
               [Math.sin(angle), Math.cos(angle), 1, 0,],
               [0, 0, 0, 1,],
            ]);
            var ResultMatrix = math.multiply(ScaleMatrix, RotationMatrix);
            ResultMatrix = math.multiply(ResultMatrix, TranslateMatrix);
            // LogMatrix(math.value(ResultMatrix));
            gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'model'), false, new Float32Array(math.value(ResultMatrix)));
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);

            // Triangle 5
            triangle5.render();
            rectangle.render();
         }, 10);
      },
      template: 'this is canvas'
   };
}

export default CanvasDirective;
