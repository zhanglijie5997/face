export interface CreateType {
	appId?: string; // 系统分配的APPID
	name?: string; // 全局的调用变量名，可以任意设置，后续的调用使用该名称即可
	sdkUrl?: string; // 统计脚本URL
	serverUrl?: string; // 数据上传的URL
	loaded?: (ta: any) => void;
}

export const create = function (loaded?: Function, options?: CreateType) {
	let e: CreateType = {
		appId: "ec38b4158c3d438fa38ec04d831029f4", // 系统分配的APPID
		name: "ta", // 全局的调用变量名，可以任意设置，后续的调用使用该名称即可
		sdkUrl: "https://web.oversea.blindbox.store/js/thinkingdata.min.js", // 统计脚本URL
		serverUrl: "https://global-receiver-ta.thinkingdata.cn", // 数据上传的URL
		loaded(ta: any) {
			const currentId = ta.getDistinctId();
			console.log(currentId, "currentId");
			loaded?.();
		},
	};
	e = { ...e, ...options };
	if (!window.ThinkingDataAnalyticalTool) {
		const n: any = e.sdkUrl;
		const t: any = e.name;
		const r: any = window;
		const a = document;
		const i = "script";
		let l: any = null;
		let s: any = null;
		r.ThinkingDataAnalyticalTool = t;
		const o = [
			"track",
			"quick",
			"login",
			"identify",
			"logout",
			"trackLink",
			"userSet",
			"userSetOnce",
			"userAdd",
			"userDel",
			"setPageProperty",
			"setSuperProperties",
			"setDynamicSuperProperties",
			"clearSuperProperties",
			"timeEvent",
			"unsetSuperProperties",
			"initInstance",
			"trackFirstEvent",
			"trackUpdate",
			"trackOverwrite",
		];
		r[t] = function (e: any) {
			return function () {
				// @ts-ignore
				if (this.name) {
					// @ts-ignore
					(r[t]._q = r[t]._q || []).push([e, arguments, this.name]);
				} else if (e === "initInstance") {
					const n = arguments[0];
					r[t][n] = { name: n };
					for (let a = 0; a < o.length; a++) {
						r[t][n][o[a]] = r[t].call(r[t][n], o[a]);
					}
					(r[t]._q1 = r[t]._q1 || []).push([e, arguments]);
				} else {
					(r[t]._q = r[t]._q || []).push([e, arguments]);
				}
			};
		};
		for (let u = 0; u < o.length; u++) {
			r[t][o[u]] = r[t].call(null, o[u]);
		}
		(r[t].param = e),
			(r[t].__SV = 1.1),
			(l = a.createElement(i)),
			(s = a.getElementsByTagName(i)[0]),
			(l.async = 1),
			(l.src = n),
			s.parentNode.insertBefore(l, s);
	}
};
