import { type Config } from "./scripts/build/ts/config-types"
import { resolve as path } from "path"

const BuildConfig: Config = {
    projectPath: path("./frontend/dist"),
    outDir: path("./dist"),
    appName: "Svelte Neutralino",
    description: "An app made with Vite, Svelte and NeutralinoJS",
    appBundleName: "SvelteNeutralino",
    appIdentifier: "ts.svelte.neutralino",
    mac: {
        architecture: ["universal","arm64","x64"],
        appIcon: path("./build/assets/mac.icns"),
        minimumOS: "10.13.0"
    },
    win: {
        architecture: ["x64"],
        appIcon: path("./build/assets/win.ico")
    },
    linux: {
        architecture: ["x64","arm64","armhf"],
        appIcon: path("./build/assets/linux.png"),
        appPath: "/usr/share/SvelteNeutralino",
        appIconPath:  "/usr/share/SvelteNeutralino/icon.png"
    }
}

export default BuildConfig