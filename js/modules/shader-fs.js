//type="x-shader/fragment
const shaderSource = ``;
export const fragmentShader = (gl) => {
  const shader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  return shader;
};
