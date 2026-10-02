'use strict';
// 由《约会剧情.xlsx》Sheet1 生成；空白人物为旁白，空白表情为默认。
const DATE_STORIES = {
  "haunted": {
    "title": "鬼屋",
    "stage": "adult",
    "scene": "room",
    "lines": [
      {
        "row": 2,
        "who": "mu",
        "text": "一定要去鬼屋约会吗…",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 3,
        "who": "wang",
        "text": "哥哥如果你害怕的话我们就不去",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 4,
        "who": "mu",
        "text": "谁说我害怕了！我只是觉得鬼屋一点儿也不浪漫。",
        "expression": "angry",
        "scene": "room"
      },
      {
        "row": 5,
        "who": "wang",
        "text": "哎呀哥哥，偶尔也换换口味嘛",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 6,
        "who": null,
        "text": "（鬼屋入口处）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 7,
        "who": "mu",
        "text": "橹橹，到时候你要是害怕就牵紧我的手。",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 8,
        "who": "wang",
        "text": "好的哥哥 (＾＾)",
        "expression": "happy",
        "scene": "haunted"
      },
      {
        "row": 9,
        "who": null,
        "text": "（穆祉丞掀开入口处的帘子走进去，王橹杰抓着他的手紧跟在后面）",
        "bgm": "assets/audio/haunted-cn-bgm.m4a",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 10,
        "who": "mu",
        "text": "妖魔鬼怪快离开妖魔鬼怪快离开妖魔鬼怪快离开…（碎碎念中）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 11,
        "who": "wang",
        "text": "哥哥你嘀嘀咕咕啥呢？",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 12,
        "who": "mu",
        "text": "啊？没有啊。你抓紧我。",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 13,
        "who": "wang",
        "text": "哥哥你出手汗了",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 14,
        "who": "mu",
        "text": "里面太闷了，有点热",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 15,
        "who": null,
        "text": "（jump scare）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 16,
        "who": "mu",
        "text": "啊啊啊啊！那年的相遇分开都！啊啊啊啊！飘着花！啊啊啊啊啊！我们都笑着闹着去追晚霞！啊！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 17,
        "who": "wang",
        "text": "哇，哥哥好厉害啊，刚刚那个音飚的好高",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 18,
        "who": null,
        "text": "（丞哥零帧起手给了王橹杰一拳）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 19,
        "who": "mu",
        "text": "咳咳…突然好想唱歌是怎么回事",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 20,
        "who": "wang",
        "text": "哥哥我跟你一起唱^ ^",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 21,
        "who": "mu",
        "text": "额不用了，我们继续走吧",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 22,
        "who": null,
        "text": "（穆祉丞牵着王橹杰，小心翼翼的走在前面，眼睛眯成一条缝，但还是被突然出现的女鬼和音效声吓到）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 23,
        "who": null,
        "text": "（但这次穆祉丞忍着没有出声，后退了一大步，反耳是王橹杰叫出了声）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 24,
        "who": "wang",
        "text": "啊！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 25,
        "who": "mu",
        "text": "橹橹别怕，哥哥在！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 26,
        "who": "wang",
        "text": "哥哥…",
        "expression": "sad",
        "scene": "haunted"
      },
      {
        "row": 27,
        "who": "mu",
        "text": "橹橹别哭，哥哥保护你",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 28,
        "who": "wang",
        "text": "哥哥你…我的脚…我的脚趾…",
        "expression": "sad",
        "scene": "haunted"
      },
      {
        "row": 29,
        "who": "mu",
        "text": "啊？对对对对不起！我咋没感觉呢…",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 30,
        "who": "wang",
        "text": "啊…没事哥哥…我缓一下就好…",
        "expression": "sad",
        "scene": "haunted"
      },
      {
        "row": 31,
        "who": "mu",
        "text": "嗯…要不你走前面吧，我怕等下把你另一只脚也踩了",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 32,
        "who": "wang",
        "text": "哥哥你抓着我的腰吧，这样比较好走",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 33,
        "who": "mu",
        "text": "嗯…好了…",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 34,
        "who": "wang",
        "text": "哥哥，你这是揪着我的衣服",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 35,
        "who": "wang",
        "text": "要这样（牵着穆祉丞的手放在自己腰上）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 36,
        "who": "wang",
        "text": "好了吗哥哥？",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 37,
        "who": "mu",
        "text": "好了王导，出发吧",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 38,
        "who": "wang",
        "text": "王导是什么？",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 39,
        "who": "mu",
        "text": "王橹杰导游呀",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 40,
        "who": "wang",
        "text": "可是王导听着好像导师",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 41,
        "who": "mu",
        "text": "不讲不讲，好萎啊",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 42,
        "who": "wang",
        "text": "咳咳，游客们注意，接下来我们将去到西厢房",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 43,
        "who": "mu",
        "text": "哪有们？",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 44,
        "who": "wang",
        "text": "那…我亲爱的尊敬的vvvvvip贵宾，在后面的游览过程中，如果受到惊吓和害怕，可以把头埋在我身后，假装自己是一只鸵鸟",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 45,
        "who": "mu",
        "text": "这位小王导游，你再这样我可要投诉你了",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 46,
        "who": "wang",
        "text": "不要啊，我会被扣工资的，我还有老婆要养",
        "expression": "sad",
        "scene": "haunted"
      },
      {
        "row": 47,
        "who": "mu",
        "text": "谁是你老婆",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 48,
        "who": "wang",
        "text": "^ ^（王橹杰笑着看着穆祉丞不说话）",
        "expression": "happy",
        "scene": "haunted"
      },
      {
        "row": 49,
        "who": "mu",
        "text": "走走走走啦！（穆祉丞掐着王橹杰的腰把他往前推）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 50,
        "who": null,
        "text": "（穆祉丞把头埋在王橹杰背后，慢吞吞的跟着他移动）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 51,
        "who": "mu",
        "text": "橹橹…现在是什么场景",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 52,
        "who": "wang",
        "text": "现在是…这个红衣服的女生在屋内荡秋千",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 53,
        "who": "mu",
        "text": "啥？在屋内荡秋千？",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 54,
        "who": "wang",
        "text": "嗯对，不过绳子是挂在脖子上的",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 55,
        "who": "mu",
        "text": "那特么叫上吊了！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 56,
        "who": null,
        "text": "（穆祉丞从王橹杰身后探出脑袋，这时候红衣女人垂着的头突然抬起，眼睛死死盯着穆祉丞）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 57,
        "who": "mu",
        "text": "啊啊啊啊啊啊！快走快走快走！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 58,
        "who": "wang",
        "text": "哥哥，你小心点！慢点啊",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 59,
        "who": null,
        "text": "（穆祉丞像推购物车一样把王橹杰推到了书房，灯光亮起一瞬后又熄灭）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 60,
        "who": "mu",
        "text": "我去！头悬梁是这样的头悬梁吗！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 61,
        "who": "wang",
        "text": "好黑…看不见了。",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 62,
        "who": "wang",
        "text": "怎么了哥哥？",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 63,
        "who": "mu",
        "text": "什么怎么了，我都没动。",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 64,
        "who": null,
        "text": "（穆祉丞的手还紧紧的抓在王橹杰腰上，那抓着他手腕的是…？）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 65,
        "who": "wang",
        "text": "啊！大哥你行行好别碰我，我老婆会吃醋的！",
        "expression": "angry",
        "scene": "haunted"
      },
      {
        "row": 66,
        "who": "mu",
        "text": "王橹杰你干嘛啊吓我一跳！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 67,
        "who": "wang",
        "text": "此地不宜久留，哥哥我们快走",
        "expression": "angry",
        "scene": "haunted"
      },
      {
        "row": 68,
        "who": null,
        "text": "（俩人来到灵堂）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 69,
        "who": null,
        "text": "（一阵鸡飞狗跳之后…）",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 70,
        "who": "mu",
        "text": "啊啊啊啊退！退！退！我最怕中式恐怖了！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 71,
        "who": "wang",
        "text": "哥哥别怕，我们应该马上就能出去了！",
        "expression": "normal",
        "scene": "haunted"
      },
      {
        "row": 72,
        "who": "mu",
        "text": "谁出的馊主意来鬼屋啊 我给到一个拉中拉！啊啊啊啊！",
        "expression": "angry",
        "scene": "haunted"
      },
      {
        "row": 73,
        "who": null,
        "text": "（鬼屋出口处，穆祉丞闭着眼，双手环着王橹杰脖子，被他公主抱着跑出来了）",
        "bgm": "assets/audio/date-bgm.mp3",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 74,
        "who": "mu",
        "text": "内个…你可以放我下来了",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 75,
        "who": "wang",
        "text": "［哥哥好香…好可爱…眼眶都红红的好可怜啊…但是好可爱吧…］哦哦好的",
        "expression": "happy",
        "scene": "room"
      },
      {
        "row": 76,
        "who": "mu",
        "text": "啊哈哈…不知道咋的就跳你身上去了",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 77,
        "who": null,
        "text": "（王橹杰标准举手姿势）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 78,
        "who": "wang",
        "text": "哥哥，这个我知道，是在那个…",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 79,
        "who": null,
        "text": "（穆祉丞一把揪住王橹杰的嘴）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 80,
        "who": "mu",
        "text": "不不不不不用了，我不想回忆",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 81,
        "who": null,
        "text": "（夜，卧室）",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 82,
        "who": "mu",
        "text": "橹橹",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 83,
        "who": "wang",
        "text": "怎么了哥哥",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 84,
        "who": "mu",
        "text": "你觉得…今天鬼屋吓人吗",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 85,
        "who": null,
        "text": "（穆祉丞把被子拉到只露出眼睛，小猫一样的大眼睛湿漉漉的）",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 86,
        "who": "wang",
        "text": "王橹杰觉得，挺吓人的，哥哥可以抱着橹橹睡吗🥺",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 87,
        "who": "mu",
        "text": "那来哥哥怀里",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 88,
        "who": null,
        "text": "（王橹杰蛄蛹着钻进穆祉丞怀里，自己把穆祉丞的手摆成环抱着自己的姿势）",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 89,
        "who": "wang",
        "text": "哥哥，我觉得没那么害怕了",
        "expression": "happy",
        "scene": "bedroom-night"
      },
      {
        "row": 90,
        "who": "mu",
        "text": "晚安，橹橹",
        "expression": "normal",
        "scene": "bedroom-night"
      },
      {
        "row": 91,
        "who": "wang",
        "text": "晚安，哥哥~",
        "expression": "normal",
        "scene": "bedroom-night"
      }
    ]
  },
  "hot_spring": {
    "title": "温泉",
    "stage": "adult",
    "scene": "room",
    "lines": [
      {
        "row": 93,
        "who": null,
        "text": "（难得的休息日，阳光透过纱窗洒在俩人身上。）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 94,
        "who": null,
        "text": "（穆祉丞调整了一下姿势，更舒服的窝在王橹杰怀里）",
        "expression": "normal",
        "scene": "room",
        "image": "assets/story/温泉.jpg"
      },
      {
        "row": 95,
        "who": "mu",
        "text": "唉…终于能休息一下了，这周忙死了",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 96,
        "who": "mu",
        "text": "橹橹，我跟你说#&*＊&＊×∈≒™（说了一堆领导干的畜生事）",
        "expression": "angry",
        "scene": "room"
      },
      {
        "row": 97,
        "who": "wang",
        "text": "怎么可以这样啊！",
        "expression": "angry",
        "scene": "room"
      },
      {
        "row": 98,
        "who": "mu",
        "text": "你也觉得很离谱是吧！",
        "expression": "angry",
        "scene": "room"
      },
      {
        "row": 99,
        "who": "wang",
        "text": "让你们领导辞职吧，我来当你领导，我肯定是明君来的",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 100,
        "who": "mu",
        "text": "你省省吧，我觉得把“领”去了还成，你只会…（目移）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 101,
        "who": "wang",
        "text": "哥哥！没想到你是这样的穆祉丞！",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 102,
        "who": "wang",
        "text": "大白天的~",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 103,
        "who": "wang",
        "text": "是想试试？",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 104,
        "who": null,
        "text": "（穆祉丞突然刹住，两根手指在嘴唇上比了个拉链的姿势，下巴微微抬起，一副“我睡了，再见”的表情。）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 105,
        "who": "wang",
        "text": "哥哥你别睡，你不许睡，起来重睡！",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 106,
        "who": "mu",
        "text": "好困啊…吃完饭晒着太阳就是很适合睡觉的",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 107,
        "who": "wang",
        "text": "哥哥，要不我们晚上去泡温泉吧",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 108,
        "who": null,
        "text": "（穆祉丞眼睛亮了一下）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 109,
        "who": "mu",
        "text": "去哪泡？",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 110,
        "who": "wang",
        "text": "去度假山庄吧，开车过去也就一个半小时",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 111,
        "who": null,
        "text": "（穆祉丞从王橹杰身上跳下来，跑走了）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 112,
        "who": "mu",
        "text": "那还等什么，收拾行李",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 113,
        "who": null,
        "text": "（几分钟后穆祉丞就背着背包出来了）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 114,
        "who": "mu",
        "text": "感觉也不需要带什么，走吧橹橹，我已经帮你收拾好了",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 115,
        "who": null,
        "text": "（王橹杰慢慢从沙发上起身）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 116,
        "who": "wang",
        "text": "哥哥，最重要的东西带了吗？",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 117,
        "who": "mu",
        "text": "什么东西？",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 118,
        "who": "wang",
        "text": "嗯……就是内个内个呀",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 119,
        "who": "mu",
        "text": "哪个哪个？",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 120,
        "who": null,
        "text": "（王橹杰走进卧室，拿了一盒t走出来，朝着穆祉丞晃了晃）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 121,
        "who": null,
        "text": "（穆祉丞不看他，假装自己很忙的样子）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 122,
        "who": null,
        "text": "（王橹杰大步走过来，拉开拉链把盒子往里塞）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 123,
        "who": "mu",
        "text": "哎呀别，我我我拿了几个的，你别放了",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 124,
        "who": "wang",
        "text": "几个够吗？",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 125,
        "who": "mu",
        "text": "你还想多少！？",
        "expression": "angry",
        "scene": "room"
      },
      {
        "row": 126,
        "who": "wang",
        "text": "带着吧，以防万一  ╮(^ ^)╭",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 127,
        "who": null,
        "text": "（温泉度假村）",
        "expression": "normal",
        "scene": "hotel-bedroom"
      },
      {
        "row": 128,
        "who": null,
        "text": "（穆祉丞一进门就扑到床上，呈一个“大”字型）",
        "expression": "normal",
        "scene": "hotel-bedroom"
      },
      {
        "row": 129,
        "who": null,
        "text": "（王橹杰放下背包，从后面压了上去）",
        "expression": "normal",
        "scene": "hotel-bedroom"
      },
      {
        "row": 130,
        "who": "mu",
        "text": "王橹杰！你要压死我啊！",
        "expression": "angry",
        "scene": "hotel-bedroom"
      },
      {
        "row": 131,
        "who": "wang",
        "text": "嘿嘿，把哥哥压成小猫饼",
        "expression": "normal",
        "scene": "hotel-bedroom"
      },
      {
        "row": 132,
        "who": "mu",
        "text": "起开，你好重啊",
        "expression": "normal",
        "scene": "hotel-bedroom"
      },
      {
        "row": 133,
        "who": "wang",
        "text": "真的吗哥哥，那王橹杰要减肥了",
        "expression": "sad",
        "scene": "hotel-bedroom"
      },
      {
        "row": 134,
        "who": "mu",
        "text": "不许！你都瘦成竹节虫了还减减减，减个大头鬼啊！",
        "expression": "angry",
        "scene": "hotel-bedroom"
      },
      {
        "row": 135,
        "who": "wang",
        "text": "没有吧，哥哥每天都把我喂得很饱的(˵>  <˵)",
        "expression": "happy",
        "scene": "hotel-bedroom"
      },
      {
        "row": 136,
        "who": "mu",
        "text": "说话奇奇怪怪的…",
        "expression": "normal",
        "scene": "hotel-bedroom"
      },
      {
        "row": 137,
        "who": "mu",
        "text": "那你…现在饿了吗",
        "expression": "normal",
        "scene": "hotel-bedroom"
      },
      {
        "row": 138,
        "who": "wang",
        "text": "有点",
        "expression": "normal",
        "scene": "hotel-bedroom"
      },
      {
        "row": 139,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 140,
        "who": null,
        "text": "（原本晴朗的天空突然下起了小雨，雨水淅淅沥沥地打在窗外的绿叶上）",
        "bgm": "assets/audio/adult-sleep-alt.mp3",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 141,
        "who": null,
        "text": "（柔嫩的小叶在雨中颤颤巍巍地摇晃，但依旧挺立）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 142,
        "who": null,
        "text": "（泥土被这场雨浸湿，先是裂开一道细缝，像被什么东西从里面轻轻顶了一下。缝里露出一小节褐色的笋尖，那尖儿上挂着雨水，颤了颤，接着又往上拱了一点。周围的泥土被撑得微微隆起。）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 143,
        "who": null,
        "text": "（那笋尖就这样一寸一寸，不慌不忙的继续生长。雨水顺着笋身往下淌，在根部汇成一小汪浑浊的水。在雨水的滋润下，竟是又胀大一圈，带着一种不容置疑的力道似是要把这黑暗顶破、戳穿。）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 144,
        "who": null,
        "text": "（一场春雨，一场湿濡）",
        "bgm": "assets/audio/date-bgm.mp3",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 145,
        "who": "wang",
        "text": "哥哥，我抱你去洗澡吧",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 146,
        "who": "mu",
        "text": "直接进去吧",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 147,
        "who": "wang",
        "text": "啊？哥哥你不累吗？",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 148,
        "who": "wang",
        "text": "王橹杰是没意见啦",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 149,
        "who": "mu",
        "text": "我说进温泉里。",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 150,
        "who": "wang",
        "text": "哦哦哦对的，我也是说温泉",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 151,
        "who": null,
        "text": "（王橹杰抱着穆祉丞走进温泉里，在台阶上坐下）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 152,
        "who": "mu",
        "text": "好舒服…",
        "expression": "happy",
        "scene": "hot-spring"
      },
      {
        "row": 153,
        "who": "wang",
        "text": "那跟刚刚哪个更舒服？",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 154,
        "who": "mu",
        "text": "王橹杰我不想打你哦",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 155,
        "who": "wang",
        "text": "好的哥哥，我不说了",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 156,
        "who": null,
        "text": "（穆祉丞跨坐在王橹杰身上，头靠在王橹杰肩膀上）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 157,
        "who": "wang",
        "text": "哥哥你要不要吃点东西？",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 158,
        "who": "mu",
        "text": "哪里？",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 159,
        "who": "wang",
        "text": "来之前我让他们准备了一些甜点，我去拿",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 160,
        "who": null,
        "text": "（王橹杰端着盘子回来的时候穆祉丞正在折纸）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 161,
        "who": "wang",
        "text": "哥哥你在折什么呢",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 162,
        "who": "mu",
        "text": "哦，没什么，一只小船，没想到还会折",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 163,
        "who": null,
        "text": "（穆祉丞把小船放在水面上，王橹杰走下来，把盘子放在穆祉丞手边，水波把纸船推着向远处漂去）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 164,
        "who": "mu",
        "text": "看着很好吃的样子",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 165,
        "who": "wang",
        "text": "哥哥你先吃点吧，等泡完我们去吃正餐",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 166,
        "who": null,
        "text": "（穆祉丞叉了一口蛋糕）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 167,
        "who": "mu",
        "text": "嗯，味道还可以",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 168,
        "who": "wang",
        "text": "哥哥喜欢就好",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 169,
        "who": "mu",
        "text": "但是还差点什么",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 170,
        "who": "wang",
        "text": "什么？",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 171,
        "who": "mu",
        "text": "我觉得…这样会更好吃",
        "expression": "happy",
        "scene": "hot-spring"
      },
      {
        "row": 172,
        "who": null,
        "text": "（穆祉丞抹了一点奶油在王橹杰喉结上，下一秒，柔软灵活的舌尖缠了上来，将奶油舔舐干净，也将平静的水面搅动起波澜）",
        "bgm": "assets/audio/adult-sleep-alt.mp3",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 173,
        "who": "wang",
        "text": "哥哥，这不能怪橹橹意志不坚定啊",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 174,
        "who": "mu",
        "text": "谁说我怪你了",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 175,
        "who": null,
        "text": "（雪白的奶油像雪一样散落在穆祉丞身上，随即又被王橹杰慢条斯理地吻去）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 176,
        "who": "mu",
        "text": "水温…感觉好热…",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 177,
        "who": "wang",
        "text": "没有啊哥哥，比刚刚还低了一两度",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 178,
        "who": "mu",
        "text": "这样吗…",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 179,
        "who": "wang",
        "text": "专心一点，哥，哥。",
        "expression": "happy",
        "scene": "hot-spring"
      },
      {
        "row": 180,
        "who": null,
        "text": "（王橹杰吻住穆祉丞的唇，汗水混合着温泉水从穆祉丞脸上滑落，滴在王橹杰手背上）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 181,
        "who": "wang",
        "text": "真的很热吗哥哥？",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 182,
        "who": "mu",
        "text": "有点吧",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 183,
        "who": "wang",
        "text": "那哥哥稍等，我去拿个东西",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 184,
        "who": "mu",
        "text": "那你快点",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 185,
        "who": null,
        "text": "（王橹杰拿着一杯冰块回来了，穆祉丞伸手想拿一块）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 186,
        "who": "wang",
        "text": "哥哥，这个不是给你吃的",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 187,
        "who": "wang",
        "text": "至少不是这张嘴",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 188,
        "who": "mu",
        "text": "什…什么意思？",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 189,
        "who": null,
        "text": "（王橹杰用两指夹住一块冰块，伸向泉眼）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 190,
        "who": "mu",
        "text": "啊…不要…",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 191,
        "who": "wang",
        "text": "哥哥不是热吗？现在还热吗？",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 192,
        "who": "wang",
        "text": "是橹橹不好，没有发现哥哥都热成红苹果了",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 193,
        "who": "mu",
        "text": "不是，你等一下…",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 194,
        "who": null,
        "text": "（温泉水本就热，泉眼处又喷出滚烫的泉水，加快着冰块的融化，不一会儿就消失不见）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 195,
        "who": "wang",
        "text": "化的好快啊，这次多加一个好不好？",
        "expression": "happy",
        "scene": "hot-spring"
      },
      {
        "row": 196,
        "who": null,
        "text": "（冰块再次抵上那处，温泉的热与冰块的凉，轮番刺激着穆祉丞的感官）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 197,
        "who": "mu",
        "text": "我不热了我不热了…不要…",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 198,
        "who": "wang",
        "text": "说谎，哥哥这里明明还是很热",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 199,
        "who": "wang",
        "text": "怎么可以说谎呢哥哥，不是一个好榜样哦",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 200,
        "who": "wang",
        "text": "橹橹应该怎么惩罚哥哥呢？",
        "expression": "happy",
        "scene": "hot-spring"
      },
      {
        "row": 201,
        "who": null,
        "text": "（王橹杰拍上穆祉丞的🍑，但由于水的阻力，没有一丝惩罚意味，全是调情。）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 202,
        "who": null,
        "text": "（动作带起的水波扰动着池水，远处的小船突然晃得厉害，左右摇摆着，像是随时要翻。但它没有，只是湿了一些，沉了一点。）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 203,
        "who": null,
        "text": "（夜色渐浓，波浪不停地拍打着纸船，折缝里渗进了水，纸一点点变软。）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 204,
        "who": null,
        "text": "（小船就这样一晃一晃，朝着自己的不冻港漂去，那是它的归处，它的家。）",
        "expression": "normal",
        "scene": "hot-spring"
      },
      {
        "row": 205,
        "who": null,
        "text": "（最后小船慢慢沉了下去，沉溺在温柔的梦中。）",
        "expression": "normal",
        "scene": "hot-spring"
      }
    ],
    "video": "assets/mov/温泉视频.m4v"
  },
  "amusement": {
    "title": "游乐园",
    "stage": "adult",
    "scene": "room",
    "lines": [
      {
        "row": 207,
        "who": "mu",
        "text": "橹橹，你好了吗？",
        "bgm": "assets/audio/date-cheerful.mp3",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 208,
        "who": "wang",
        "text": "好了好了哥哥，我来了",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 209,
        "who": "mu",
        "text": "那走吧",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 210,
        "who": null,
        "text": "（穆祉丞转身去开门）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 211,
        "who": "wang",
        "text": "还不行",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 212,
        "who": "mu",
        "text": "怎么了？",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 213,
        "who": "wang",
        "text": "要这样…",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 214,
        "who": null,
        "text": "（王橹杰把穆祉丞揣在兜里的手拉出来，十指相扣）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 215,
        "who": "wang",
        "text": "现在好了，走吧",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 216,
        "who": null,
        "text": "（因为是淡季，游乐园今天游客很少，几乎不用排队就入园了）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 217,
        "who": "mu",
        "text": "哎呀，天气真好呀",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 218,
        "who": null,
        "text": "（穆祉丞伸了一个懒腰）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 219,
        "who": "wang",
        "text": "哥哥我们先去玩什么？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 220,
        "who": "mu",
        "text": "我想玩过山车！",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 221,
        "who": "wang",
        "text": "哥哥~一上来就这么刺激，王橹杰是要受不了的呀",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 222,
        "who": "mu",
        "text": "那去玩旋转木马？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 223,
        "who": "wang",
        "text": "倒也不用这么…极端",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 224,
        "who": "mu",
        "text": "我来看看地图",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 225,
        "who": "mu",
        "text": "这个排队少，我们先去玩这个怎么样？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 226,
        "who": "wang",
        "text": "“有点紧张”？现在项目名字都取的这么随意了吗？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 227,
        "who": "mu",
        "text": "应该是休闲项目吧？走，去看看",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 228,
        "who": null,
        "text": "（📍“有点紧张”）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 229,
        "who": "wang",
        "text": "哥哥…这个好像有点高…",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 230,
        "who": "mu",
        "text": "确实不矮…",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 231,
        "who": null,
        "text": "（远远看过去，这个项目就像一把巨大的伞，从伞顶垂下来一根一根细长的铁链，每根链子末端吊着一把椅子。椅子是双人的，并排两个座位，只有一根横在胸前的安全杆。）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 232,
        "who": null,
        "text": "（当设施升到高空时，椅子会因为离心力向外甩开）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 233,
        "who": "mu",
        "text": "坐吗？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 234,
        "who": "wang",
        "text": "坐吧。",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 235,
        "who": "mu",
        "text": "走",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 236,
        "who": "wang",
        "text": "哥哥你想坐外面吗？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 237,
        "who": "mu",
        "text": "都可以啊，那我坐外侧好了",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 238,
        "who": null,
        "text": "（两人选了一个蓝粉色座椅坐下）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 239,
        "who": null,
        "text": "（设施启动）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 240,
        "who": "wang",
        "text": "哥哥…",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 241,
        "who": "mu",
        "text": "紧张吗？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 242,
        "who": "wang",
        "text": "有点…",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 243,
        "who": "mu",
        "text": "我好像知道为什么叫这个名字了…",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 244,
        "who": "mu",
        "text": "橹橹没事的，等会你要是真害怕就闭眼",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 245,
        "who": null,
        "text": "（穆祉丞抬起手，胳膊从王橹杰背后绕过去，搭在他肩膀上，将他半抱在怀里）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 246,
        "who": null,
        "text": "（座椅缓慢升空，到达高度时旋转起来）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 247,
        "who": "mu",
        "text": "wo~~~~",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 248,
        "who": "mu",
        "text": "风好舒服呀",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 249,
        "who": "mu",
        "text": "橹橹，你在看吗？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 250,
        "who": "mu",
        "text": "风景很不错的",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 251,
        "who": "wang",
        "text": "嗯…好像…也不是很吓人",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 252,
        "who": "wang",
        "text": "哥哥你看，摩天轮，我们晚上去坐吧",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 253,
        "who": "mu",
        "text": "好呀，晚上还有烟花秀呢",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 254,
        "who": "mu",
        "text": "如果算好时间，我们就能在摩天轮上看烟花",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 255,
        "who": "wang",
        "text": "摩天轮比这个还高",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 256,
        "who": "mu",
        "text": "你害怕吗？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 257,
        "who": "wang",
        "text": "有哥哥在，橹橹什么都不怕",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 258,
        "who": null,
        "text": "（📍“不心跳挑战”）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 259,
        "who": null,
        "text": "（王橹杰扒着路边的柱子不肯撒手，穆祉丞拽着王橹杰小马宝莉的痛包，想把他往过山车入口拽）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 260,
        "who": "mu",
        "text": "不是说哥哥在什么都不怕吗",
        "expression": "angry",
        "scene": "amusement-day"
      },
      {
        "row": 261,
        "who": "wang",
        "text": "近距离看了一下感觉太有冲击力了…哥哥…",
        "expression": "sad",
        "scene": "amusement-day"
      },
      {
        "row": 262,
        "who": "mu",
        "text": "没事的没事的，眼睛一睁一闭就过去了，来都来了",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 263,
        "who": "wang",
        "text": "哥哥你等等，我再做一下心里建设",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 264,
        "who": "mu",
        "text": "5分钟以及10分钟前你就这么说",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 265,
        "who": "wang",
        "text": "那这不是心里建设做少了嘛…哈哈…",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 266,
        "who": "mu",
        "text": "唉。",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 267,
        "who": "mu",
        "text": "你放手，跟我来个地方",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 268,
        "who": "wang",
        "text": "什…什么地方？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 269,
        "who": "mu",
        "text": "你来了就知道了",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 270,
        "who": "wang",
        "text": "不会是想把我骗上去吧",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 271,
        "who": "mu",
        "text": "不来算了，我走了",
        "expression": "angry",
        "scene": "amusement-day"
      },
      {
        "row": 272,
        "who": "wang",
        "text": "唉别别别，我去，我去还不行嘛",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 273,
        "who": null,
        "text": "（隐秘的角落，两个男孩纸…）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 274,
        "who": "mu",
        "text": "可以了不？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 275,
        "who": "wang",
        "text": "可……",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 276,
        "who": "mu",
        "text": "行，那走吧",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 277,
        "who": "wang",
        "text": "可…可不可以再来一次",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 278,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 279,
        "who": "wang",
        "text": "可以了哥哥，现在橹橹可以为哥哥上刀山下火海",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 280,
        "who": "mu",
        "text": "不需要，谢谢",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 281,
        "who": null,
        "text": "（过山车设施启动）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 282,
        "who": null,
        "text": "（穆祉丞伸出手，王橹杰紧紧扣住）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 283,
        "who": null,
        "text": "（列车弹射起步，几秒便登顶，随即俯冲向下）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 284,
        "who": "mu",
        "text": "哇哦~~~——",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 285,
        "who": "mu",
        "text": "喔——————",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 286,
        "who": "mu",
        "text": "橹橹——你怎么不叫啊————",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 287,
        "who": null,
        "text": "（王橹杰的声音被耳边的风声盖过）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 288,
        "who": "mu",
        "text": "你说啥——听不见————",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 289,
        "who": null,
        "text": "（列车到站）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 290,
        "who": "mu",
        "text": "哇，太刺激了",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 291,
        "who": "mu",
        "text": "橹橹你还好吗？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 292,
        "who": "wang",
        "text": "我…我还行…",
        "expression": "sad",
        "scene": "amusement-day"
      },
      {
        "row": 293,
        "who": "mu",
        "text": "你哭了？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 294,
        "who": "wang",
        "text": "没有！这是风吹的",
        "expression": "sad",
        "scene": "amusement-day"
      },
      {
        "row": 295,
        "who": "wang",
        "text": "哥哥，我很厉害的吧",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 296,
        "who": "mu",
        "text": "厉害，这次起码没有唱爱能克服远距离",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 297,
        "who": "wang",
        "text": "哥哥~！",
        "expression": "sad",
        "scene": "amusement-day"
      },
      {
        "row": 298,
        "who": "mu",
        "text": "嘿嘿，橹橹最厉害了",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 299,
        "who": null,
        "text": "（穆祉丞安抚性地捏了捏王橹杰的手指）",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 300,
        "who": "mu",
        "text": "饿了吗？要不要去吃点东西？",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 301,
        "who": "wang",
        "text": "哥哥我刷到一个网上说很好吃的甜品，就在这附近！",
        "expression": "happy",
        "scene": "amusement-day"
      },
      {
        "row": 302,
        "who": "mu",
        "text": "那带路吧",
        "expression": "normal",
        "scene": "amusement-day"
      },
      {
        "row": 303,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "amusement-night"
      },
      {
        "row": 304,
        "who": null,
        "text": "（两人爽玩一整天，时间来到晚上）",
        "expression": "normal",
        "scene": "amusement-night"
      },
      {
        "row": 305,
        "who": null,
        "text": "（穆祉丞悄悄走到王橹杰身后，拍了一下他的左肩，然后闪到右肩笑眯眯的看他反应）",
        "expression": "normal",
        "scene": "amusement-night"
      },
      {
        "row": 306,
        "who": null,
        "text": "（王橹杰回头没看到人，又转回去，在右边看到了举着一个蓝粉混色棉花糖的穆祉丞在萌萌的笑。）",
        "expression": "normal",
        "scene": "amusement-night"
      },
      {
        "row": 307,
        "who": "wang",
        "text": "哥哥你什么时候去买的？",
        "expression": "normal",
        "scene": "amusement-night"
      },
      {
        "row": 308,
        "who": "mu",
        "text": "这你别管",
        "expression": "normal",
        "scene": "amusement-night"
      },
      {
        "row": 309,
        "who": "mu",
        "text": "走吧，烟花快开始了",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 310,
        "who": null,
        "text": "（两人坐上摩天轮，里面空间并不大，面对面坐着的时候膝盖挨着膝盖）",
        "bgm": "assets/audio/date-romantic.mp3",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 311,
        "who": null,
        "text": "（外面嘈杂的声音像蒙了一层雾，轿厢内安静的仿佛能听见彼此的心跳）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 312,
        "who": "mu",
        "text": "今天开心吗？",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 313,
        "who": "wang",
        "text": "开心，特别开心",
        "expression": "happy",
        "scene": "ferris-night"
      },
      {
        "row": 314,
        "who": "mu",
        "text": "我也很开心，很久没这么玩过了",
        "expression": "happy",
        "scene": "ferris-night"
      },
      {
        "row": 315,
        "who": "wang",
        "text": "哥哥你听说过内个吗？",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 316,
        "who": "mu",
        "text": "什么？",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 317,
        "who": "wang",
        "text": "听说在摩天轮最高点接吻的情侣，会一直在一起。",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 318,
        "who": "mu",
        "text": "你信吗？",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 319,
        "who": "wang",
        "text": "比起信不信这个传言，我跟相信我跟哥哥之间的感情",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 320,
        "who": "wang",
        "text": "不过…",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 321,
        "who": "mu",
        "text": "来都来了？",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 322,
        "who": null,
        "text": "（两个人目光相接，相视一笑）",
        "expression": "happy",
        "scene": "ferris-night"
      },
      {
        "row": 323,
        "who": null,
        "text": "（轿厢渐渐爬升到了顶端）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 324,
        "who": null,
        "text": "（王橹杰倾身，眼睛盯着穆祉丞的嘴唇）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 325,
        "who": null,
        "text": "（他的上嘴唇有颗小痣，接吻的时候王橹杰很喜欢亲那里）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 326,
        "who": null,
        "text": "（而穆祉丞也很喜欢亲他的唇下痣）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 327,
        "who": null,
        "text": "（随着距离的缩短，王橹杰闭上眼，但预想中的触感没有出现）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 328,
        "who": "wang",
        "text": "嗯？",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 329,
        "who": null,
        "text": "（穆祉丞将棉花糖挡在中间，王橹杰吻上了绵软甜腻的糖）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 330,
        "who": "wang",
        "text": "哥哥…又耍我吗…",
        "expression": "sad",
        "scene": "ferris-night"
      },
      {
        "row": 331,
        "who": null,
        "text": "（穆祉丞笑了笑，眼睛弯成一条缝）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 332,
        "who": null,
        "text": "（他扯了一条棉花糖，拦在他们中间）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 333,
        "who": "mu",
        "text": "我只是觉得，这样更甜",
        "expression": "happy",
        "scene": "ferris-night"
      },
      {
        "row": 334,
        "who": null,
        "text": "（穆祉丞吻了上去，隔着薄薄的一层棉花糖。糖在体温下融化，渗进唇缝）",
        "expression": "normal",
        "scene": "ferris-fireworks"
      },
      {
        "row": 335,
        "who": null,
        "text": "（园区突然暗下来，烟花在天边炸开，照亮了轿厢里两人贴合的侧脸）",
        "bgm": "assets/audio/date-climax.m4a?v=2",
        "expression": "normal",
        "scene": "ferris-fireworks"
      },
      {
        "row": 336,
        "who": null,
        "text": "（王橹杰伸手扣住了穆祉丞的后脑勺，手指插进发间，将人往自己这边带。一边手指摩挲着穆祉丞的后颈，一边加深了这个吻）",
        "expression": "normal",
        "scene": "ferris-fireworks"
      },
      {
        "row": 337,
        "who": null,
        "text": "（融化的糖水顺着嘴角缓慢流下来，又被轻轻舔去）",
        "expression": "normal",
        "scene": "ferris-fireworks"
      },
      {
        "row": 338,
        "who": null,
        "text": "（最后一缕烟花消失在空中，天空暗了下来。底下的灯一盏一盏重新亮起，摩天轮的轮廓灯重新转起来。）",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 339,
        "who": null,
        "text": "（彼时，这趟行程已经接近尾声，轿厢越来越接近地面，人群的喧闹从缝隙里传来）",
        "bgm": "assets/audio/date-bgm.mp3",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 340,
        "who": "mu",
        "text": "王橹杰，你说…会有一瞬间的永远吗？",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 341,
        "who": "wang",
        "text": "什么？",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 342,
        "who": "mu",
        "text": "算了，当我没说",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 343,
        "who": "wang",
        "text": "跟你一起的每个瞬间吧",
        "expression": "normal",
        "scene": "ferris-night"
      },
      {
        "row": 344,
        "who": null,
        "text": "(行程结束，两人手拉手融入嘈杂的人海)",
        "expression": "normal",
        "scene": "ferris-night",
        "audio": "assets/audio/amusement-ending.m4a?v=2"
      }
    ]
  }
};
