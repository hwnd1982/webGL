//type="x-shader/vertex"
const shaderSource = `
attribute ver3 aVertexPosition

void main () {
        

    gl_Position = ver4(aVertexPosition, 1.0)
}
`;

export const vertexShader = (gl) => {
  const shader = gl.createShader(gl.FRAGMENT_VERTEX);

  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  return shader;
};
