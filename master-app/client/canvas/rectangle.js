/* global makePerspective */
/* global $V */
/* global Matrix */

class Rectangle {
   constructor(gl, sp) {
      this.perspectiveMatrix = makePerspective(45, gl.canvas.width/gl.canvas.height, 0.1, 100.0);
      //this.viewMatrix = multiMatrix(Matrix.Translation($V([0, 0, 0])).ensure4x4());
      this.viewMatrix = Matrix.I(4);
      //this.viewMatrix = this.viewMatrix.x(Matrix.Translation($V(0, 0, 0)).ensure4x4());
      //console.log(this.viewMatrix);
      //this.viewMatrix = mvM
      console.log(gl.canvas);
      this.gl = gl; this.sp = sp;
      this.vbo = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo);

      var vertices = [
         -0.5, -0.5, 0.0,
         0.5, -0.5, 0.0,
         0.5, 0.5, 0.0,
         -0.5, 0.5, 0.0,
      ];

      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
   }

   render() {
      var gl = this.gl;
      var sp = this.sp;

      gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'projection'), false, new Float32Array(this.perspectiveMatrix.flatten()));
      gl.uniformMatrix4fv(gl.getUniformLocation(sp, 'view'), false, new Float32Array(this.viewMatrix.flatten()));
      this.gl.uniform3fv(this.gl.getUniformLocation(this.sp, 'color'), [0.1, 0.5, 0.1]);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo);
      this.gl.vertexAttribPointer(this.gl.getAttribLocation(this.sp, 'aVertexPosition'), 3, this.gl.FLOAT, false, 0, 0);
      this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 3);
   }
}

export default Rectangle;
