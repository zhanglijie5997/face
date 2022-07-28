import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import path from "path";
const resolves = (...args) => path.resolve(...args); // 适应不同环境，封装path.resolve，少写一点代码

const getPlugin = () => [
	commonjs(),
	babel({
		exclude: "node_modules/**",
		babelHelpers: "runtime",
		// 使用预设
		presets: [
			[
				"@babel/preset-env",
				{
					modules: false,
					useBuiltIns: "usage",
					// 目标浏览器
					targets: {
						edge: "17",
						firefox: "60",
						chrome: "67",
						safari: "11.1",
						ie: "10",
					},
				},
			],
		],
		plugins: [
			//  多次导入的文件，只导入一次
			["@babel/plugin-transform-runtime"],
		],
	}),
	resolve(),
	typescript(),
	terser(),
];

export default [
	{
		input: "./index.ts",
		output: {
			file: "./dist/index.js",
			format: "umd",
			name: "blindbox_sdk",
			sourcemap: true,
		},
		plugins: getPlugin(),
	},
	{
		// 生成 .d.ts 类型声明文件
		input: "./index.ts",
		output: {
			file: "./dist/index.d.ts",
			format: "es",
		},
		plugins: [dts()],
	},
	{
		input: "./point/point.ts",
		output: {
			file: "./dist/point/point.js",
			format: "umd",
			name: "point",
			sourcemap: true,
		},
		plugins: getPlugin(),
	},
	{
		// 生成 .d.ts 类型声明文件
		input: "./point/point.ts",
		output: {
			file: "./dist/point/point.d.ts",
			format: "es",
		},
		plugins: [dts()],
	},
	{
		input: "./core/core.ts",
		output: {
			file: "./dist/core/core.js",
			format: "umd",
			name: "core-file",
			sourcemap: true,
		},
		plugins: getPlugin(),
	},
	{
		// 生成 .d.ts 类型声明文件
		input: "./core/core.ts",
		output: {
			file: "./dist/core/core.d.ts",
			format: "es",
		},
		plugins: [dts()],
	},
	{
		input: "./core/cocos_core.ts",
		output: {
			file: "./dist/core/cocos_core.js",
			format: "umd",
			name: "cocos_core_name",
			sourcemap: true,
		},
		plugins: getPlugin(),
	},
	{
		// 生成 .d.ts 类型声明文件
		input: "./core/cocos_core.ts",
		output: {
			file: "./dist/core/cocos_core.d.ts",
			format: "es",
		},
		plugins: [dts()],
	},
];
