import BuildConfig from '@root/build.config';
import { macBuild } from './mac-bundle';
import neuConfig from "@root/neutralino.config.json"
import { copyFolderSync } from './utils';
import path from "path"
import fs from "fs"

async function main() {
	fs.rmSync(path.resolve("dist"),{recursive: true, force: true})
	fs.rmSync(path.resolve(".tmpbuild"),{recursive: true, force: true})
	if (BuildConfig.mac) {
        await macBuild()
	}

	fs.rmSync(path.resolve("dist"),{recursive: true, force: true})
	copyFolderSync(path.resolve(".tmpbuild"),path.resolve("./dist"))
}

main()