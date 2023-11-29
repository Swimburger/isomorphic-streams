import { defineBuildConfig } from "unbuild";

export default defineBuildConfig([
  {
    entries: ["./src/default.ts", "./src/node.ts"],
    rollup: {
      emitCJS: true,
    },
    declaration: true,
    clean: true
  }
]);