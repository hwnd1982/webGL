import { fragmentShader } from "./shader-fs.js";
import { vertexShader } from "./shader-vs.js";

const render = () => {
  requestAnimationFrame(render);
};

export const bootstrap = () => {
  const canvas = document.getElementById("holder");
  const gl = canvas.getContext("experimental-webgl");
  const shaderProgram = gl.createProgram();
  const buffer = gl.createBuffer();
  let vertexPositionLocation = null;

  const resize = () => {
    gl.viewport(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  };

  resize();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  gl.useProgram(shaderProgram);

  gl.deleteShader(fragmentShader);
  gl.deleteShader(vertexShader);

  vertexPositionLocation = gl.getAttributeLocation(
    shaderProgram,
    "aVertexPosition"
  );
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.enableVertexAttributeArray(vertexPositionLocation);
  gl.vertexAttributePointer(vertexPositionLocation, 2, gl.FLOAT, false, 0, 0);

  window.addEventListener("resize", resize);
};
