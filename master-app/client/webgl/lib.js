var lib = {};

lib.welcome = function() {
   console.log('Welcome to hell! hooman');
};

lib.createShader = function(gl, type, source) {
   var shader;

   if (type == 'vs') {
      shader = gl.createShader(gl.VERTEX_SHADER);
   } else {
      shader = gl.createShader(gl.FRAGMENT_SHADER);
   }

   gl.shaderSource(shader, source);
   gl.compileShader(shader);

   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.log(`I was unable to compile the shader '${type}': ${gl.getShaderInfoLog()}`);
      gl.deleteShader(shader);
      return null;
   }

   return shader;
};

lib.createProgram = function(gl, vs_source, vf_source) {
   var vs = lib.createShader(gl, 'vs', vs_source);
   var fs = lib.createShader(gl, 'fs', vs_source);

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

export default lib;
