type MacArch = 'x64' | 'arm64' | 'universal'
type LinuxArch = 'x64' | 'arm64' | 'armhf'

export interface Config {
    projectPath: string,
    outDir: string,
	appName: string;
	appBundleName: string;
	appIdentifier: string;
	mac?: {
		architecture: MacArch[];
		minimumOS: string;
		appIcon: string;
	};
	win?: {
		architecture: 'x64'[];
		appIcon: string;
	};
	linux?: {
		architecture: LinuxArch[];
		appIcon: string;
	};
}