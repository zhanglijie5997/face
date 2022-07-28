import { create, CreateType } from "point/point";
export enum PointEnum {
	recharge_click_item = "recharge_click_item",
	recharge_create_order = "recharge_create_order",
	recharge_create_order_success = "recharge_create_order_success",
	recharge_create_order_fail = "recharge_create_order_fail",
	game_participate = "game_participate", // 点击game界面的下注
	game_shop = "game_shop", // 下注时点击商城界面
	game_join_success = "game_join_success", // 成功下注
	game_open = "game_open", // 成功开局
	game_history_recnet_win = "game_history_recnet_win", // 点击game界面的历史记录_recentWin
	game_history_my_win = "game_history_my_win", // 点击game界面的历史记录_myWin
	game_rank_today = "game_rank_today", // 点击game界面的排行榜_今天
	game_rank_yesterday = "game_rank_yesterday", // 点击game界面的排行榜_昨天
	game_rank_last_month = "game_rank_last_month", // 点击game界面的排行榜_上个月
	// game_rule = 'game_rule', // 点击game界面的规则
	game_lucky_roulette_enter = "game_lucky_roulette_enter", // 成功进入金币转盘界面
	game_lucky_roulette_spin = "game_lucky_roulette_spin", // 金币转盘成功开始旋转
	open_task = "open_task", // 进入任务界面
	claim_task_reward = "claim_task_reward", // 领取任意一个任务奖励
	open_daily_lottery = "open_daily_lottery", // 进入每日抽奖界面
	open_daily_lottery_detail = "open_daily_lottery_detail", // 进入每日抽奖详情页
	enter_game_roll = "enter_game_roll", // 进入实物滚轮游戏界面
	open_box_pay = "open_box_pay", // 成功进入抽盒支付页面
}

export class PointClick {
	props?: CreateType;
	loggedInUserId: string;
	/**
	 * 初始化参数
	 * @param props
	 * @param loggedInUserId 用户cid
	 */
	constructor(loggedInUserId: string, props?: CreateType | undefined) {
		this.init();
		this.loggedInUserId = loggedInUserId;
		console.log(this.loggedInUserId);

		this.props = props;
	}

	/**
	 * 创建远程埋点文件
	 * @param e
	 */
	init(e?: CreateType) {
		if (globalThis !== window) {
			throw new Error("please use sdk in browser");
		}
		const script = document.createElement("script");
		script.src =
			"https://web.oversea.blindbox.store/js/thinkingdata.min.js";
		console.log(script);
		document.body.appendChild(script);
		script.onload = () => {
			create(() => {
				this.login();
			});
		};
	}

	login() {
		console.log(this.loggedInUserId);

		if (!this.loggedInUserId) {
			console.warn("please input [loggedInUserId]");
		} else {
			window.ta.login(this.loggedInUserId);
			console.log("point success");
		}
	}
	/**
	 * 点击充值条目
	 * @param v
	 */
	recharge_click_item(v: {
		index: number; // 索引
		coin: number; // 金币
		price: number; // 金额
	}) {
		window.ta.track(PointEnum.recharge_click_item, v);
	}

	/**
	 * 发起订单
	 * @param v
	 */
	recharge_create_order(v: {
		order_id: string; // 订单id
		index: number; // 索引，没有就传0
		coin: number; // 金币
		price: number; // 价格
		payway_id: string; // 支付方式
	}) {
		window.ta.track(PointEnum.recharge_create_order, v);
	}

	/**
	 * 完成支付
	 * @param order_id 订单id
	 * @param index    索引,没有传-1
	 * @param coin     金币
	 * @param price    价格
	 * @param payway_id 支付方式id
	 */
	recharge_create_order_success(
		order_id: string,
		index: number,
		coin: number,
		price: number,
		payway_id: string
	) {
		window.ta.track(PointEnum.recharge_create_order_success, {
			order_id,
			index,
			coin,
			price,
			payway_id,
		});
	}

	/**
	 * 支付失败
	 * @param order_id         订单id
	 * @param index            索引，没有传-1
	 * @param coin             金币
	 * @param price            价格
	 * @param payway_id        支付方式id
	 */
	recharge_create_order_fail(
		order_id: string,
		index: number,
		coin: number,
		price: number,
		payway_id: string
	) {
		window.ta.track(PointEnum.recharge_create_order_fail, {
			order_id,
			index,
			coin,
			price,
			payway_id,
		});
	}

	/**
	 * 点击game下注界面
	 * @param game_id 游戏id
	 */
	game_participate(game_id: string) {
		window.ta.track(PointEnum.game_participate, {
			game_id,
		});
	}

	/**
	 * 下注时点击商城界面
	 * @param v
	 */
	game_shop<T>(v?: T) {
		window.ta.track(PointEnum.game_shop, v);
	}

	/**
	 * 成功下注
	 * @param game_id  游戏id
	 * @param goods_price_sum  下注商品总价格
	 * @param goods_num     下注商品总数量
	 */
	game_join_success(
		game_id: string,
		goods_price_sum: number,
		goods_num: number
	) {
		window.ta.track(PointEnum.game_join_success, {
			game_id,
			goods_num,
			goods_price_sum,
		});
	}

	/**
	 * 成功开局
	 * @param goods_price_sum 本局下注商品总金额
	 * @param goods_num     本局下注商品总数
	 * @param player_num    本局下注人数
	 * @param duration      时常（第一个人下注后距离开始的时间）
	 * @param v             商品信息
	 */
	game_open<T>(
		goods_price_sum: number,
		goods_num: number,
		player_num: number,
		duration: number,
		v?: T
	) {
		window.ta.track(PointEnum.game_open, {
			goods_num,
			goods_price_sum,
			player_num,
			duration,
			v,
		});
	}

	/**
	 * 点击game界面的历史记录 recnet_win
	 */
	game_history_recnet_win() {
		window.ta.track(PointEnum.game_history_recnet_win);
	}

	/**
	 * 点击game界面的历史记录 my_win
	 */
	game_history_my_win() {
		window.ta.track(PointEnum.game_history_my_win);
	}

	/**
	 * 点击game界面的排行榜_今天
	 */
	game_rank_today() {
		window.ta.track(PointEnum.game_rank_today);
	}

	/**
	 * 点击game界面的排行榜_昨天
	 */
	game_rank_yesterday() {
		window.ta.track(PointEnum.game_rank_yesterday);
	}

	/**
	 * 点击game界面的排行榜_上个月
	 */
	game_rank_last_month() {
		window.ta.track(PointEnum.game_rank_last_month);
	}

	/**
	 * 成功进入金币转盘界面
	 */
	game_lucky_roulette_enter() {
		window.ta.track(PointEnum.game_lucky_roulette_enter);
	}

	/**
	 * 金币转盘成功开始旋转
	 */
	game_lucky_roulette_spin() {
		window.ta.track(PointEnum.game_lucky_roulette_spin);
	}

	/**
	 * 进入任务界面
	 */
	open_task() {
		window.ta.track(PointEnum.open_task);
	}

	/**
	 * 领取任意一个任务奖励
	 */
	claim_task_reward() {
		window.ta.track(PointEnum.claim_task_reward);
	}

	/**
	 * 进入每日抽奖界面
	 */
	open_daily_lottery() {
		window.ta.track(PointEnum.open_daily_lottery);
	}

	/**
	 * 进入每日抽奖详情页
	 */
	open_daily_lottery_detail() {
		window.ta.track(PointEnum.open_daily_lottery_detail);
	}

	/**
	 * 进入实物滚轮游戏界面
	 */
	enter_game_roll() {
		window.ta.track(PointEnum.enter_game_roll);
	}

	/**
	 * 成功进入抽盒支付页面
	 */
	open_box_pay() {
		window.ta.track(PointEnum.open_box_pay);
	}
}
