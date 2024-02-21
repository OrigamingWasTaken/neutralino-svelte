import {spawn} from 'child_process';
import path from 'path';

let binaryOS = 'linux';
switch (process.platform) {
	case 'darwin':
		binaryOS = 'mac';
		break;
	case 'win32':
		binaryOS = 'win';
		break;
}
const vite = spawn('vite', {
	cwd: process.cwd(),
	detached: false,
	stdio: 'inherit',
});
const args = [
	'--window-enable-inspector=true',
	'--export-auth-info',
	'--load-dir-res',
	`--path=${path.resolve('.')}`,
	'--neu-dev-extension',
	'--url=http://localhost:5173',
];
const neu = spawn(`./bin/neutralino-${binaryOS}_${process.arch}`, args, {
	cwd: process.cwd(),
	detached: false,
	stdio: 'inherit',
}).on('close', () => {
	vite.kill();
	process.exit();
});
