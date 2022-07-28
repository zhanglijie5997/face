declare interface CreateType {
	appId: string; // 系统分配的APPID
	name: string; // 全局的调用变量名，可以任意设置，后续的调用使用该名称即可
	sdkUrl: string; // 统计脚本URL
	serverUrl: string; // 数据上传的URL
	loaded: (ta: any) => void;
}

declare module "point" {
	export function create(v?: CreateType): void;
}
