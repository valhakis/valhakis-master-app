# 01 - Triangle

## Start The App

```bash
webpack --watch
```

> Starts the application at http://192.168.0.2:3000

## Vertex Shader Source
```glsl
attribute vec3 aVertexPosition;

void main() {
   gl_Position = vec4(aVertexPosition);
}
```

## Fragment Shader Source
```glsl
void main() {
   gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
```

## 1. Create canvas element and initialize webgl context
```javascript
var canvas = '...';

canvas.height = canavs.clientHeight;
canvas.width = canavs.clientWidth;

var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

gl.clearColor(0.1, 0.1, 0.1, 1.0);
gl.viewport(0, 0, canvas.width, canvas.height);
```

## 2. Create shader
```javascript
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, source);
gl.compileShader(shader);

if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
   console.log(gl.getShaderInfoLog(shader));
   gl.deleteShader(shader);
}
```

## 3. Create shader program;
```javascript
var vs = create_shader('vs', source);
var fs = create_shader('fs', source);

var sp = gl.createProgram();
gl.attachShader(sp, vs);
gl.attachShader(sp, fs);
gl.linkProgram(sp);

if (!gl.getProgramParameter(shader, gl.COMPILE_STATUS)) {
   console.log(gl.getProgramInfoLog(shader));
   gl.deleteShader(shader);
}

gl.useProgram(sp);
```

## 4. Set up object

```javascript
var vbo = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

var vertices = [
   -0.5, -0.5, 0.0,
   0.5, -0.5, 0.0,
   0.0, 0.5, 0.0,
];

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

gl.enableVertexAttribArray(gl.getAttribLocation(sp, 'aVertexPosition'));
```

## 5. Render
```javscript
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.vertexAttribPointer(gl.getAttribLocation(sp, 'aVertexPosition'), 3, gl.FLOAT, false, 0, 0);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
```
