var Lib = {};

Lib.identityMatrix = [
   1, 0, 0, 0,
   0, 1, 0, 0,
   0, 0, 1, 0,
   0, 0, 0, 1,
];

Lib.createShader = function(gl, type, source) {
   var shader;

   if (type == 'vs') {
      shader = gl.createShader(gl.VERTEX_SHADER);
   } else if (type == 'fs') {
      shader = gl.createShader(gl.FRAGMENT_SHADER);
   } else {
      console.log(`Unable to create shader, only 'vs' or 'fs' allowed!`);
   }

   gl.shaderSource(shader, source);
   gl.compileShader(shader);

   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.log(`I was unable to compile the shader '${type}': ${gl.getShaderInfoLog(shader)}`);
      gl.deleteShader(shader);
      return null;
   }

   return shader;
};

Lib.createProgram = function(gl, vs_source, fs_source) {
   var vs = Lib.createShader(gl, 'vs', vs_source);
   var fs = Lib.createShader(gl, 'fs', fs_source);

   var sp = gl.createProgram();

   gl.attachShader(sp, vs);
   gl.attachShader(sp, fs);
   gl.linkProgram(sp);

   if (!gl.getProgramParameter(sp, gl.LINK_STATUS)) {
      console.log(`Unable to create shader program: ${gl.getProgramInfoLog}!`);
   }

   gl.useProgram(sp);

   return sp;
};

export default Lib;
