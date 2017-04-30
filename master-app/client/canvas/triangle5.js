/* global mat4 */

// Temporary

// m, n -> rows
// m -> 4, n -> 4
//var tmp = [];
//for (let i=0; i<4; i++) {
   //for (let j=0; j<4; j++) {
      //tmp[i+j*4] = 0;
      //for (let k=0; j<4; k++) {
         //tmp[i+j*] += matrix1[i+k*4]*matrix2[k+j*4]
      //}
   //}
//}

// end of temporary

var rotation = 0.0;

var MatrixTranslate = function (x, y, z) {
   return [
      1, 0, 0, x,
      0, 1, 0, y,
      0, 0, 1, z,
      0, 0, 0, 1,
   ];
};

var MatrixMultiply = function(mat1, mat2) {
   var mat = [];
   for (let i=0; i<4; i++) {
      for (let j=0; j<4; j++) {
         mat[i+j*4] = 0;
         for (let k=0; k<4; k++) {
            mat[i+j*4] += mat1[i+k*4] * mat2[j+k*4];
         }
      }
   }
   return mat;
};

var MatrixScale = function(x, y, z) {
   return [
      x, 0, 0, 0,
      0, y, 0, 0,
      0, 0, z, 0,
      0, 0, 0, 1,
   ];
};

var MatrixPrint = function(mat, name) {
   var out = (!name) ? 'no name is set \n' : name + '\n';

   for (let i=0; i<4; i++) {
      for (let j=0; j<4; j++) {
         out += mat[j+i*4] + ' ';
      }
      out += '\n';
   }

   console.log(out);
};

var MatricesMultiply = function(matrices) {
   var MainMatrix = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
   ];

   matrices.forEach(function(matrix) {
      MainMatrix = MatrixMultiply(MainMatrix, matrix);
      // MatrixPrint(MainMatrix);
   });

   return MainMatrix;
};

var TranslationMatrix = [
   1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   0, 0, 0, 1,
];

var ScaleMatrix = [
   2, 0, 0, 0,
   0, 2, 0, 0,
   0, 0, 2, 0,
   0, 0, 0, 1,
];

var RotationMatrix = [
   1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   0, 0, 0, 1,
];

var MatrixRotateX = function(angle) {
   return [
      1, 0, 0, 0,
      0, Math.cos(angle), Math.sin(angle), 0,
      0, -Math.sin(angle), Math.cos(angle), 0,
      0, 0, 0, 1,
   ];
};


ScaleMatrix = MatrixScale(0.2, 0.2, 0.2);
// TranslationMatrix = MatrixTranslate(1, 1, 1);

// MatrixPrint(TranslationMatrix, 'Translation Matrix');
// MatrixPrint(ScaleMatrix, 'Scale Matrix');
// MatrixPrint(ModelMatrix, 'Model Matrix');

class Triangle5 {
   constructor(gl, sp) {
      this.gl = gl;
      this.sp = sp;


      //var TranslateMatrix = mat4.create([
      //1, 0, 0, 0,
      //0, 1, 0, 0,
      //0, 0, 1, 0,
      //0, 0, 0, 1,
      //]);

      //var ModelMatrix = mat4.multiply(TranslateMatrix);

      //this.ModelMatrix = ModelMatrix;

      var colors = [
         1.0, 0.0, 0.0,
         1.0, 0.0, 0.0,
         1.0, 0.0, 0.0,
      ];
   }
   render() {
      var gl = this.gl;
      var sp = this.sp;

      rotation += 0.01;

      RotationMatrix = MatrixRotateX(rotation);

      var ModelMatrix = MatricesMultiply([ScaleMatrix, RotationMatrix, TranslationMatrix]);

      gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'model'), false, new Float32Array(ModelMatrix));
      gl.uniform3fv(gl.getUniformLocation(sp, 'color'), [1.0, 0.0, 0.0]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
   }
}


export default Triangle5;
