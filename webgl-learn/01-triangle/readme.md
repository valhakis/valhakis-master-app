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
