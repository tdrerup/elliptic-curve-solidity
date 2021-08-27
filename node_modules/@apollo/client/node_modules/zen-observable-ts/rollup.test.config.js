import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./tests/index.ts",
  output: {
    file: "./tests/bundle.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve(),
    typescript(),
  ],
};
