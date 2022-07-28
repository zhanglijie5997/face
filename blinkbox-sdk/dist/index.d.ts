import { CreateType } from 'point/point';

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

declare enum PointEnum {
    recharge_click_item = "recharge_click_item",
    recharge_create_order = "recharge_create_order",
    recharge_create_order_success = "recharge_create_order_success",
    recharge_create_order_fail = "recharge_create_order_fail",
    game_participate = "game_participate",
    game_shop = "game_shop",
    game_join_success = "game_join_success",
    game_open = "game_open",
    game_history_recnet_win = "game_history_recnet_win",
    game_history_my_win = "game_history_my_win",
    game_rank_today = "game_rank_today",
    game_rank_yesterday = "game_rank_yesterday",
    game_rank_last_month = "game_rank_last_month",
    game_lucky_roulette_enter = "game_lucky_roulette_enter",
    game_lucky_roulette_spin = "game_lucky_roulette_spin",
    open_task = "open_task",
    claim_task_reward = "claim_task_reward",
    open_daily_lottery = "open_daily_lottery",
    open_daily_lottery_detail = "open_daily_lottery_detail",
    enter_game_roll = "enter_game_roll",
    open_box_pay = "open_box_pay"
}
declare class PointClick {
    props?: CreateType;
    loggedInUserId: string;
    /**
     * 初始化参数
     * @param props
     * @param loggedInUserId 用户cid
     */
    constructor(loggedInUserId: string, props?: CreateType | undefined);
    /**
     * 创建远程埋点文件
     * @param e
     */
    init(e?: CreateType): void;
    login(): void;
    /**
     * 点击充值条目
     * @param v
     */
    recharge_click_item(v: {
        index: number;
        coin: number;
        price: number;
    }): void;
    /**
     * 发起订单
     * @param v
     */
    recharge_create_order(v: {
        order_id: string;
        index: number;
        coin: number;
        price: number;
        payway_id: string;
    }): void;
    /**
     * 完成支付
     * @param order_id 订单id
     * @param index    索引,没有传-1
     * @param coin     金币
     * @param price    价格
     * @param payway_id 支付方式id
     */
    recharge_create_order_success(order_id: string, index: number, coin: number, price: number, payway_id: string): void;
    /**
     * 支付失败
     * @param order_id         订单id
     * @param index            索引，没有传-1
     * @param coin             金币
     * @param price            价格
     * @param payway_id        支付方式id
     */
    recharge_create_order_fail(order_id: string, index: number, coin: number, price: number, payway_id: string): void;
    /**
     * 点击game下注界面
     * @param game_id 游戏id
     */
    game_participate(game_id: string): void;
    /**
     * 下注时点击商城界面
     * @param v
     */
    game_shop<T>(v?: T): void;
    /**
     * 成功下注
     * @param game_id  游戏id
     * @param goods_price_sum  下注商品总价格
     * @param goods_num     下注商品总数量
     */
    game_join_success(game_id: string, goods_price_sum: number, goods_num: number): void;
    /**
     * 成功开局
     * @param goods_price_sum 本局下注商品总金额
     * @param goods_num     本局下注商品总数
     * @param player_num    本局下注人数
     * @param duration      时常（第一个人下注后距离开始的时间）
     * @param v             商品信息
     */
    game_open<T>(goods_price_sum: number, goods_num: number, player_num: number, duration: number, v?: T): void;
    /**
     * 点击game界面的历史记录 recnet_win
     */
    game_history_recnet_win(): void;
    /**
     * 点击game界面的历史记录 my_win
     */
    game_history_my_win(): void;
    /**
     * 点击game界面的排行榜_今天
     */
    game_rank_today(): void;
    /**
     * 点击game界面的排行榜_昨天
     */
    game_rank_yesterday(): void;
    /**
     * 点击game界面的排行榜_上个月
     */
    game_rank_last_month(): void;
    /**
     * 成功进入金币转盘界面
     */
    game_lucky_roulette_enter(): void;
    /**
     * 金币转盘成功开始旋转
     */
    game_lucky_roulette_spin(): void;
    /**
     * 进入任务界面
     */
    open_task(): void;
    /**
     * 领取任意一个任务奖励
     */
    claim_task_reward(): void;
    /**
     * 进入每日抽奖界面
     */
    open_daily_lottery(): void;
    /**
     * 进入每日抽奖详情页
     */
    open_daily_lottery_detail(): void;
    /**
     * 进入实物滚轮游戏界面
     */
    enter_game_roll(): void;
    /**
     * 成功进入抽盒支付页面
     */
    open_box_pay(): void;
}

export { PointClick, PointEnum, BlindBox as blindbox, CocosCore as cocoscore };
