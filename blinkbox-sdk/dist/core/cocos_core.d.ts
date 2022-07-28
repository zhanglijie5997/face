declare class BlindBox {
    static instance: BlindBox;
    constructor();
    /**
     * 断言,判断是否在blindbox中
     */
    isInBindBox(): void;
    /**
     * blindbox 支付页面
     * @param OrderId   订单id
     * @param OrderType 订单类型
     * @param callback  不在原生的回调
     */
    callNativeCheckPaid(OrderId: string, OrderType: number, callback?: Function): void;
    /**
     * 关闭页面
     * @param pageId    页面id
     * @param callback
     */
    callNativeCloseAndRedirectPage(pageId: CallNativeCloseAndRedirectPageParams, callback?: Function): void;
    /**
     * 获取API请求头
     * @param callback 如果在cocos界面会使用此回调
     * @returns {Object}
     */
    callNativeLoadHeader(callback?: Function): Promise<CallNativeLoadHeaderType | undefined>;
    /**
     * 通知app处理异常
     * @param v
     */
    callNativeHandleByErrorCode(value: Object, callback?: Function): void;
    /**
     * 创建订单后调用
     * @param value 订单信息
     * @param callback
     */
    callNativeCloseUrl(value: Object, callback?: Function): void;
    /**
     * 收到推送通知h5跳转页面 需要传进去类型
     * @param callback
     * @returns
     */
    callJsByNotify<T>(callback?: Function): Promise<T>;
    /**
     * 余额支付成功
     * @param v
     */
    callNativePaySuccess(value: "rules" | "charge" | "combo", callback?: Function): void;
    /**
     * 插入数据
     * @param k             eg: 用户id + 接口名称
     * @param v             eg: 接口返回结果
     * @param Expiration    过期时间
     * @param callback
     */
    callNativeInsertDB(k: string, v: Object & {
        Expiration: number;
    }, Expiration?: number, callback?: Function): void;
    /**
     * 获取参数
     * @param k eg: 用户id + 接口名称
     * @returns
     */
    callNativeSelectDB<T>(k: string): Promise<T>;
    /**
     * 修改状态栏颜色
     * @param v hex色值
     * @param callback
     */
    callNativeUpdateStatusBar(v: string, callback?: Function): void;
    /**
     * 跳转首页导航
     * @param v 0 -> 首页 1 -> 游戏大厅 2 -> 商城 3 —> 仓库 4 -> 我的
     */
    callNativeBackHome(v: number, callback?: Function): void;
    /**
     * 返回
     * @param callback
     */
    callNativeBack(callback?: Function): void;
    /**
     * scheme跳转
     * @param v 路径
     * @param isCloseCurrentPage 是否关闭当前界面
     * @param jumpType 原生0，h5 1
     * @param statusBarType true -> 原生 false -> 无导航
     */
    callNativePagesJump(v: string, isCloseCurrentPage?: boolean, jumpType?: number, statusBarType?: boolean, callback?: Function): void;
    /**
     * 跳转H5
     * @param pageId
     * @param statusBarType  true -> 原生控制导航栏
     * @param callback
     */
    callNativePagesJumpWeb(pageId: string, statusBarType?: boolean, callback?: Function): void;
    /**
     * 跳转盲盒机
     * @param MachineId
     * @param openPayDialog 打开弹窗
     */
    callNativeOpenMachine(MachineId: string, openPayDialog?: boolean, callback?: Function): void;
    /**
     * 播放音频
     * @param v
     */
    callNativePlayerAudio(v: string, callback?: Function): void;
    /**
     * 设置进度条
     * @param progress 进度
     * @param fn
     */
    callNativeSetLoadingProgress(progress: number, fn?: Function): void;
    /**
     * 获取用户信息
     * @returns
     */
    callNativeGetUserInfo<T>(): Promise<T>;
    /**
     * mqtt发布消息
     * @param data
     */
    callNativePublishMessageForTopic(data?: CallNativePublishMessageForTopicType, fn?: Function): void;
}

interface Params {
    name: string;
    params: {
        pageId: string;
        type?: boolean;
    };
}
declare class CocosCore {
    static instance: CocosCore;
    core: BlindBox;
    constructor();
    /**
     * 跳转H5
     * @param v 跳转路径
     */
    callNativeCheckPaid(v: Params): void;
    /**
     * 跳转盲盒机
     * @param param0 id firstId
     * @param param1 type 是否打开弹窗
     */
    callNativeOpenMachine({ id, type }: {
        id: string;
        type: boolean;
    }): void;
    /**
     * 跳转web
     * @param param0 web路径
     * @param type   true -> 原生控制导航栏
     */
    callNativePagesJumpWeb({ pageId, type, }: {
        pageId: string;
        type: boolean;
    }): void;
    /**
     * 设置进度条
     * @param progress 进度
     * @param fn
     */
    callNativeSetLoadingProgress(progress: number): void;
}

export { CocosCore as default };
