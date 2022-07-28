# blindbox-sdk

1. 普通调用 与 native 通信

[1] 模块化调用
` import { Blindbox } from 'blindbox-game-sdk'; const blindbox = new Blindbox(); // or const blindbox = Blindbox.insance;`
[2] html 中调用
` const blindbox = new window.blindbox_sdk.Blindbox();`

2. 使用埋点

[1] 初始化

`
// 模块化调用
import { PointClick } from 'blindbox-game-sdk';
// 参数详见 sdk 提示
const event = new PointClick(props, userCid);

event.recharge_click_item(xxx);

// html 中调用
const event = new window.blindbox_sdk.PointClick(cid);`

event.recharge_click_item(xxx);
`
