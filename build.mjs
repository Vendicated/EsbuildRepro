import esbuild from "esbuild";

const watch = {
    onRebuild: (err) => {
        if (err) console.error("Build Error", err.message);
        else console.log("Rebuilt!");
    }
};

await Promise.all([
    esbuild.build({
        entryPoints: ["index.js"],
        outfile: "out.js",
        watch
    }), esbuild.build({
        entryPoints: ["other.js"],
        outfile: "otherOut.js",
        watch
    })
]).catch(() => 0);
