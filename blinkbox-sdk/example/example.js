const { BlindBox, PointClick } = require("../dist/index.js");

const blindbox = BlindBox.instance;

blindbox.callJsByNotify();

const event = new PointClick("cid");

event.game_open();
