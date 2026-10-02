'use strict';
// 由《道具剧情.xlsx》《约会剧情.xlsx》生成；空白人物为旁白，空白表情为默认。
const EXTRA_STORIES = {
  "棉花娃娃": {
    "title": "玩偶",
    "stage": "teen",
    "scene": "room",
    "lines": [
      {
        "row": 2,
        "who": "mu",
        "text": "橹橹，你看这是什么！",
        "bgm": "assets/audio/欢快.mp3"
      },
      {
        "row": 3,
        "who": "wang",
        "text": "这是…棉花娃娃？这个…好像哥哥。"
      },
      {
        "row": 4,
        "who": "mu",
        "text": "对！这个是橹橹，这个呢就是我，特别像吧！",
        "expression": "happy"
      },
      {
        "row": 5,
        "who": "mu",
        "text": "因为我前几天刷到棉花娃娃打卡拍照教程了。（想给小橹橹拍漂亮娃片，但是怎么可能只买一个小橹橹呢，那多孤单！所以…)"
      },
      {
        "row": 6,
        "who": "mu",
        "text": "所以我火速订做了两个！下次我们出去玩就可以带着他们啦！",
        "expression": "happy"
      },
      {
        "row": 7,
        "who": "wang",
        "text": "好可爱…",
        "expression": "happy"
      },
      {
        "row": 8,
        "who": "mu",
        "text": "对吧，我也觉得这个小橹橹超可爱的"
      },
      {
        "row": 9,
        "who": "wang",
        "text": "我是说哥哥可爱…当然迷你哥哥也很可爱…(超小声）",
        "expression": "shy"
      },
      {
        "row": 10,
        "who": "mu",
        "text": "对了，这个还可以磁吸的！"
      },
      {
        "row": 11,
        "who": "mu",
        "text": "你看！脸贴在一起了！"
      },
      {
        "row": 12,
        "who": "wang",
        "text": "嗯…"
      },
      {
        "row": 13,
        "who": "mu",
        "text": "橹橹，你的反应好平淡哦。"
      },
      {
        "row": 14,
        "who": "wang",
        "text": "啊，有吗…我…",
        "expression": "shy"
      },
      {
        "row": 15,
        "who": "mu",
        "text": "我知道你很喜欢，你脸好红哦~",
        "expression": "happy"
      },
      {
        "row": 16,
        "who": "wang",
        "text": "有有有有吗！没有吧！",
        "expression": "shy"
      },
      {
        "row": 17,
        "who": "mu",
        "text": "特别明显哦王橹杰小同志，这边，这边，还有这边。"
      },
      {
        "row": 18,
        "who": "wang",
        "text": "咳咳，天，天气太热了。",
        "expression": "shy"
      },
      {
        "row": 19,
        "who": "mu",
        "text": "哦~~确实~好~热~呀~",
        "expression": "happy"
      },
      {
        "row": 20,
        "who": "wang",
        "text": "哥哥…你坏。",
        "expression": "shy"
      },
      {
        "row": 21,
        "who": "mu",
        "text": "好了好了不逗你了。我们来拍个照吧。"
      },
      {
        "row": 22,
        "who": "mu",
        "text": "3——2——1——蓝莓~",
        "expression": "happy",
        "image": "assets/story/玩偶.jpg"
      },
      {
        "row": 23,
        "who": "wang",
        "text": "为什么是蓝莓？"
      },
      {
        "row": 24,
        "who": "mu",
        "text": "不知道，总感觉蓝莓很美好，我喜欢蓝莓。"
      },
      {
        "row": 25,
        "who": "mu",
        "text": "橹橹你都不看镜头！",
        "expression": "angry"
      },
      {
        "row": 26,
        "who": "wang",
        "text": "哥哥也没看啊。"
      },
      {
        "row": 27,
        "who": "mu",
        "text": "我那是笑眯眯！"
      },
      {
        "row": 28,
        "who": "wang",
        "text": "但是我们跟小橹橹和小穆穆的表情很一致呢。"
      },
      {
        "row": 29,
        "who": "mu",
        "text": "还真是，哈哈哈，小苹果，来哥哥摸摸，哎呦脸好烫啊。",
        "expression": "happy"
      },
      {
        "row": 30,
        "who": "wang",
        "text": "哥哥，温度不是这样感受的。"
      },
      {
        "row": 31,
        "who": "mu",
        "text": "啊？"
      },
      {
        "row": 32,
        "who": "wang",
        "text": "要这样才对（脸贴着穆祉丞的脸）\n就像它们一样，哥哥你感受到了吗？明明哥哥也很烫…",
        "expression": "happy"
      },
      {
        "row": 33,
        "who": "mu",
        "text": "小坏蛋…",
        "expression": "shy"
      },
      {
        "row": 34,
        "who": "wang",
        "text": "哥哥我们不要分开好不好"
      },
      {
        "row": 35,
        "who": "mu",
        "text": "永远不会分开"
      },
      {
        "row": 36,
        "who": "wang",
        "text": "小王橹杰和小穆祉丞也不要分开",
        "expression": "happy"
      },
      {
        "row": 37,
        "who": "mu",
        "text": "可是…"
      },
      {
        "row": 38,
        "who": "wang",
        "text": "？？？"
      },
      {
        "row": 39,
        "who": "mu",
        "text": "我今天想把小王橹杰放在床头陪我睡诶"
      },
      {
        "row": 40,
        "who": "wang",
        "text": "哥哥有橹橹了还不够吗！",
        "expression": "sad"
      },
      {
        "row": 41,
        "who": "mu",
        "text": "多多益善多多益善~",
        "expression": "happy"
      },
      {
        "row": 42,
        "who": "wang",
        "text": "不行不可以！只有王橹杰可以陪哥哥睡觉！",
        "expression": "angry"
      },
      {
        "row": 43,
        "who": "wang",
        "text": "小王橹杰要好好陪着小穆祉丞"
      },
      {
        "row": 44,
        "who": "mu",
        "text": "哎呦小傻蛋，娃娃的醋也要吃。"
      },
      {
        "row": 45,
        "who": "mu",
        "text": "逗你呢，又小鸭子嘴了，真可爱。",
        "expression": "happy"
      },
      {
        "row": 46,
        "who": "wang",
        "text": "哥哥你就继续逗这个可怜的王橹杰吧",
        "expression": "sad"
      },
      {
        "row": 47,
        "who": "wang",
        "text": "王橹杰心甘情愿做哥哥的玩物˃ ˄ ˂̥̥",
        "expression": "sad"
      },
      {
        "row": 48,
        "who": "mu",
        "text": "你丞哥也只会逗这个小橹杰玩😼",
        "expression": "happy"
      }
    ]
  },
  "磨牙棒": {
    "title": "磨牙期",
    "stage": "child",
    "scene": "room",
    "lines": [
      {
        "row": 51,
        "who": "mu",
        "text": "橹橹你干什么！",
        "expression": "angry",
        "bgm": "assets/audio/chill-game.mp3"
      },
      {
        "row": 52,
        "who": "mu",
        "text": "我不是你的磨牙棒，快住口！你咬痛我了！",
        "expression": "angry"
      },
      {
        "row": 53,
        "who": "wang",
        "text": "锅锅你不许跟别人出去玩…www…",
        "expression": "sad"
      },
      {
        "row": 54,
        "who": null,
        "text": "........................."
      },
      {
        "row": 55,
        "who": "mu",
        "text": "你怎么又咬我脸。",
        "expression": "angry"
      },
      {
        "row": 56,
        "who": "wang",
        "text": "白馒头…好吃…",
        "expression": "happy",
        "image": "assets/story/磨牙期.jpg"
      }
    ]
  },
  "磨牙棒_adult": {
    "title": "磨牙期",
    "stage": "adult",
    "scene": "room",
    "lines": [
      {
        "row": 57,
        "who": "mu",
        "text": "王橹杰，你怎么从小就喜欢咬我，现在这么大了还要咬我。"
      },
      {
        "row": 58,
        "who": "wang",
        "text": "嗯…不知道，就是…想咬。"
      },
      {
        "row": 59,
        "who": "wang",
        "text": "哥哥…"
      },
      {
        "row": 60,
        "who": "mu",
        "text": "那你咬吧（伸胳膊）"
      },
      {
        "row": 61,
        "who": "wang",
        "text": "（眼睛瞪得像铜铃）"
      },
      {
        "row": 62,
        "who": "mu",
        "text": "快点，趁我反悔前，过了这村没有这店了。"
      },
      {
        "row": 63,
        "who": "wang",
        "text": "嗯…算了吧，哥哥会疼的。"
      },
      {
        "row": 64,
        "who": "mu",
        "text": "你个小王八蛋的，之前好多次怎么都不说怕我疼，现在给我装起来了？",
        "expression": "angry"
      },
      {
        "row": 65,
        "who": "wang",
        "text": "嘿嘿哥哥你最好了~（轻轻咬住穆祉丞手腕）",
        "expression": "happy"
      },
      {
        "row": 66,
        "who": "mu",
        "text": "嘶…"
      },
      {
        "row": 67,
        "who": "wang",
        "text": "哥哥我咬疼你了吗？"
      },
      {
        "row": 68,
        "who": "mu",
        "text": "我们橹橹太厉害了，咬合力堪比一只荷兰猪"
      },
      {
        "row": 69,
        "who": "wang",
        "text": "既然如此，如哥哥所愿。"
      },
      {
        "row": 70,
        "who": "mu",
        "text": "啊啊啊，王橹杰停停停"
      },
      {
        "row": 71,
        "who": "wang",
        "text": "请给出您的评价"
      },
      {
        "row": 72,
        "who": "mu",
        "text": "堪比一条成年鬣狗。"
      },
      {
        "row": 73,
        "who": "mu",
        "text": "你这小虎牙还挺尖的"
      },
      {
        "row": 74,
        "who": "wang",
        "text": "（看着一圈牙印，嘴角向上了两个像素点。）"
      },
      {
        "row": 75,
        "who": "mu",
        "text": "张嘴，看看小狗牙"
      },
      {
        "row": 76,
        "who": "wang",
        "text": "锅锅，是虎牙"
      },
      {
        "row": 77,
        "who": "mu",
        "text": "小狗的牙齿就是小狗牙"
      },
      {
        "row": 78,
        "who": "wang",
        "text": "嚎叭…锅锅泥看嚎了马"
      },
      {
        "row": 79,
        "who": "mu",
        "text": "等你睡着我就把这两颗小狗牙给磨平"
      },
      {
        "row": 80,
        "who": "wang",
        "text": "啊~哥哥好狠的心啊~哥哥上次亲亲的时候还舔了小狗牙呢"
      },
      {
        "row": 81,
        "who": "mu",
        "text": "你，你胡说，我没有！"
      },
      {
        "row": 82,
        "who": "wang",
        "text": "明明就有，橹橹都感觉到了，哥哥其实很喜欢橹橹的小狗牙吧𐔌՞ ܸ.ˬ.ܸ՞𐦯"
      },
      {
        "row": 83,
        "who": "mu",
        "text": "喜欢啊，怎么了，不让喜欢啊"
      },
      {
        "row": 84,
        "who": "wang",
        "text": "如果我说不让呢？"
      },
      {
        "row": 85,
        "who": "mu",
        "text": "哦，那我不喜欢了",
        "expression": "angry"
      },
      {
        "row": 86,
        "who": "wang",
        "text": "啊啊啊不要嘛哥哥，求求哥哥了，喜欢橹橹嘛~",
        "expression": "sad"
      },
      {
        "row": 87,
        "who": "mu",
        "text": "哼哼，傻蛋。"
      }
    ]
  },
  "头纱": {
    "title": "头纱",
    "stage": "child",
    "scene": "room",
    "lines": [
      {
        "row": 90,
        "who": "mu",
        "text": "橹橹，我们来玩过家家吧",
        "expression": "happy"
      },
      {
        "row": 91,
        "who": "wang",
        "text": "好呀哥哥",
        "expression": "happy"
      },
      {
        "row": 92,
        "who": "mu",
        "text": "我当新郎，你来当新娘"
      },
      {
        "row": 93,
        "who": "wang",
        "text": "哥哥我不要当新娘，我也要当新郎"
      },
      {
        "row": 94,
        "who": "mu",
        "text": "新郎和新郎也可以结婚吗？"
      },
      {
        "row": 95,
        "who": "wang",
        "text": "可是也没有说过不可以啊"
      },
      {
        "row": 96,
        "who": "mu",
        "text": "也是"
      },
      {
        "row": 97,
        "who": "wang",
        "text": "哥哥我帮你把头纱戴上"
      },
      {
        "row": 98,
        "who": "mu",
        "text": "诶？为什么是我戴啊？"
      },
      {
        "row": 99,
        "who": "wang",
        "text": "因为橹橹想娶哥哥"
      },
      {
        "row": 100,
        "who": "mu",
        "text": "应该是哥哥娶橹橹才对！"
      },
      {
        "row": 101,
        "who": "mu",
        "text": "头纱应该橹橹戴！"
      },
      {
        "row": 102,
        "who": "wang",
        "text": "不要嘛，橹橹就要娶哥哥"
      },
      {
        "row": 103,
        "who": "mu",
        "text": "不行不行！",
        "expression": "angry"
      },
      {
        "row": 104,
        "who": "wang",
        "text": "可以的可以的！哥哥~~~",
        "expression": "sad"
      }
    ]
  },
  "头纱_adult": {
    "title": "头纱",
    "stage": "child",
    "scene": "room",
    "lines": [
      {
        "row": 105,
        "who": "mu",
        "text": "橹橹，我们来玩过家家吧"
      },
      {
        "row": 106,
        "who": "wang",
        "text": "好呀哥哥"
      },
      {
        "row": 107,
        "who": "mu",
        "text": "我当新郎，你来当新娘"
      },
      {
        "row": 108,
        "who": "wang",
        "text": "哥哥我不要当新娘，我也要当新郎"
      },
      {
        "row": 109,
        "who": "mu",
        "text": "新郎和新郎也可以结婚吗？"
      },
      {
        "row": 110,
        "who": "wang",
        "text": "可是也没有说过不可以啊"
      },
      {
        "row": 111,
        "who": "mu",
        "text": "也是"
      },
      {
        "row": 112,
        "who": "wang",
        "text": "哥哥我帮你把头纱戴上"
      },
      {
        "row": 113,
        "who": "mu",
        "text": "诶？为什么是我戴啊？"
      },
      {
        "row": 114,
        "who": "wang",
        "text": "因为橹橹想娶哥哥"
      },
      {
        "row": 115,
        "who": "mu",
        "text": "应该是哥哥娶橹橹才对！"
      },
      {
        "row": 116,
        "who": "mu",
        "text": "头纱应该橹橹戴！"
      },
      {
        "row": 117,
        "who": "wang",
        "text": "不要嘛，橹橹就要娶哥哥"
      },
      {
        "row": 118,
        "who": "mu",
        "text": "不行不行！"
      },
      {
        "row": 119,
        "who": "wang",
        "text": "可以的可以的！哥哥~~~"
      },
      {
        "row": 120,
        "who": null,
        "text": ".........................",
        "stage": "adult"
      },
      {
        "row": 121,
        "who": "mu",
        "text": "哎呦，怎么还有这段录像啊。"
      },
      {
        "row": 122,
        "who": "mu",
        "text": "我都不记得了"
      },
      {
        "row": 123,
        "who": "wang",
        "text": "我记得…最后好像是用3包旺旺仙贝换得了哥哥带头纱的机会"
      },
      {
        "row": 124,
        "who": "mu",
        "text": "换现在的我肯定不答应"
      },
      {
        "row": 125,
        "who": "wang",
        "text": "哥哥你不愿意嫁给我吗…",
        "expression": "sad"
      },
      {
        "row": 126,
        "who": "mu",
        "text": "又在这歪曲我的意思"
      },
      {
        "row": 127,
        "who": "wang",
        "text": "那哥哥是什么意思嘛"
      },
      {
        "row": 128,
        "who": "mu",
        "text": "不如…",
        "scene": "garden-wedding"
      },
      {
        "row": 129,
        "who": "mu",
        "text": "我们一起戴吧",
        "bgm": "assets/audio/wedding.m4a"
      },
      {
        "row": 130,
        "who": "wang",
        "text": "for richer"
      },
      {
        "row": 131,
        "who": "mu",
        "text": "for poorer"
      },
      {
        "row": 132,
        "who": "wang",
        "text": "in sickness and in health"
      },
      {
        "row": 133,
        "who": "mu",
        "text": "to love and to cherish"
      },
      {
        "row": 134,
        "who": null,
        "text": "死亡也无法将我们分开"
      },
      {
        "row": 135,
        "who": "wang",
        "text": "穆祉丞，我爱你。"
      },
      {
        "row": 136,
        "who": "mu",
        "text": "王橹杰，我爱你。"
      }
    ]
  },
  "巧克力蛋糕": {
    "title": "巧克力蛋糕",
    "stage": "teen",
    "scene": "room",
    "lines": [
      {
        "row": 139,
        "who": "mu",
        "text": "祝我们王橹杰小朋友14岁生日快乐呀！",
        "expression": "happy",
        "scene": "birthday-candle",
        "bgm": "assets/audio/happy-birthday-wlj.mp3"
      },
      {
        "row": 140,
        "who": "wang",
        "text": "谢谢哥哥～",
        "expression": "happy"
      },
      {
        "row": 141,
        "who": "mu",
        "text": "我们橹橹又长大一岁啦，转眼都比哥哥高了。"
      },
      {
        "row": 142,
        "who": "wang",
        "text": "哥哥，我要快点长大，这样我就可以保护你了。"
      },
      {
        "row": 143,
        "who": "mu",
        "text": "不行，那当然是要丞哥保护你呀，我可是哥哥哼哼！"
      },
      {
        "row": 144,
        "who": "wang",
        "text": "哥哥是小猪吗，怎么都会哼哼？"
      },
      {
        "row": 145,
        "who": "mu",
        "text": "哼哼，橹橹才是小猪，我每次噜噜叫，你就会歪着头凑过来。"
      },
      {
        "row": 146,
        "who": "wang",
        "text": "王橹杰是穆祉丞的小猪。"
      },
      {
        "row": 147,
        "who": "mu",
        "text": "（羞）哎呀～不闹了，橹橹快闭上眼睛，我要把礼物拿出来喽～"
      },
      {
        "row": 148,
        "who": "wang",
        "text": "怎么这么神秘呀。（闭上双眼）"
      },
      {
        "row": 149,
        "who": "mu",
        "text": "（双手端出放在冰箱里的蛋糕到王橹杰面前）当当！"
      },
      {
        "row": 150,
        "who": null,
        "text": "王橹杰睁开双眼，眼前是最喜欢的巧克力蛋糕，上面歪歪扭扭用黑色奶油写着“祝橹橹14岁生日快乐”，旁边插着1根正在闪烁的蓝粉色蜡烛，拿蛋糕的人弯弯的笑眼在火光下衬托的像星星一样明亮。此时此刻，闪动的亮光好像在书写他的心跳"
      },
      {
        "row": 151,
        "who": "mu",
        "text": "怎么傻了，好吧，我承认是有点丑，但是这可是你丞哥花了一下午的时间做的，不妨碍它好吃！"
      },
      {
        "row": 152,
        "who": "wang",
        "text": "（被逗笑）怎么会呢，哥哥，你做的就是世界上最好看最好吃的蛋糕，我特别特别喜欢，谢谢你，穆祉丞。",
        "expression": "happy"
      },
      {
        "row": 153,
        "who": "mu",
        "text": "（😳）咳咳，突然这么正经干嘛，快点快点许愿吹蜡烛吧！"
      },
      {
        "row": 154,
        "who": "wang",
        "text": "（闭上眼睛，双手合十）『我希望和穆祉丞永永远远在一起，我希望穆祉丞能够天天开心，好好吃饭，身体健康。』（睁开双眼，吹蜡烛）"
      },
      {
        "row": 155,
        "who": "mu",
        "text": "希望我们橹橹以后都能吃到自己爱吃的，做自己喜欢的事，不被任何人或事所束缚，永远做自己，哥哥会一直陪着你！",
        "expression": "happy"
      },
      {
        "row": 156,
        "who": "wang",
        "text": "哥哥。。（抱住穆祉丞）谢谢你，谢谢你陪着我。"
      },
      {
        "row": 157,
        "who": "mu",
        "text": "（轻轻抚摸王橹杰的头）也谢谢橹橹陪在我身边，我们会永远在一起的。"
      },
      {
        "row": 158,
        "who": "wang",
        "text": "嗯，会的！"
      },
      {
        "row": 159,
        "who": "mu",
        "text": "好啦，我们来吃蛋糕吧，快来尝尝你丞哥的手艺。（用叉子铲了一块蛋糕喂给王橹杰）"
      },
      {
        "row": 160,
        "who": "wang",
        "text": "（啊呜，咪啊咪啊咪啊）好好吃，丞哥好厉害！"
      },
      {
        "row": 161,
        "who": "mu",
        "text": "嘿嘿，是吧，你丞哥厉害的嘞。"
      },
      {
        "row": 162,
        "who": "wang",
        "text": "（用叉子铲了一块蛋糕）哥哥，你也吃。"
      },
      {
        "row": 163,
        "who": "mu",
        "text": "（啊呜）"
      },
      {
        "row": 164,
        "who": "wang",
        "text": "（故意抹到穆祉丞的鼻子上）嘿嘿，原来哥哥不是小猪，是小花猫！"
      },
      {
        "row": 165,
        "who": "mu",
        "text": "啊呀，王橹杰，你完蛋了！（用手指抹了一点奶油）",
        "expression": "angry"
      },
      {
        "row": 166,
        "who": "wang",
        "text": "啊啊啊，丞哥我错了，饶命啊！！！！（跑走）"
      },
      {
        "row": 167,
        "who": "mu",
        "text": "哈哈哈，叫丞哥也没有，快给我抹一下，要不我誓不罢休！（追）",
        "expression": "angry"
      }
    ]
  },
  "哆啦A梦主题蛋糕": {
    "title": "哆啦A梦主题蛋糕",
    "stage": "teen",
    "scene": "room",
    "lines": [
      {
        "row": 170,
        "who": "wang",
        "text": "哥哥，14岁生日快乐！",
        "expression": "happy",
        "scene": "birthday-doraemon",
        "bgm": "assets/audio/happy-birthday-mzc.mp3"
      },
      {
        "row": 171,
        "who": "mu",
        "text": "谢谢橹橹，嘿嘿",
        "expression": "happy"
      },
      {
        "row": 172,
        "who": "wang",
        "text": "14岁的穆祉丞会是什么样子的呢？"
      },
      {
        "row": 173,
        "who": "mu",
        "text": "应该会变得更加勇敢，可以保护橹橹。"
      },
      {
        "row": 174,
        "who": "wang",
        "text": "我希望14岁的穆祉丞每天都要开开心心的，没有烦恼，每天吃自己爱吃的，玩自己想玩的。"
      },
      {
        "row": 175,
        "who": "mu",
        "text": "有橹橹在身边，我每天都会特别开心。"
      },
      {
        "row": 176,
        "who": "wang",
        "text": "哥哥，你说我什么时候可以到14岁呢。"
      },
      {
        "row": 177,
        "who": "mu",
        "text": "橹橹今天晚上喝杯牛奶，九点睡觉，一早起来就会变成14岁啦！"
      },
      {
        "row": 178,
        "who": "wang",
        "text": "真的吗！那王橹杰要喝10杯牛奶！"
      },
      {
        "row": 179,
        "who": "mu",
        "text": "哇，橹橹这么厉害！"
      },
      {
        "row": 180,
        "who": "wang",
        "text": "王橹杰要快点长大，这样就可以保护哥哥了。"
      },
      {
        "row": 181,
        "who": "mu",
        "text": "我明明是哥哥，哪有你保护我的道理呀。"
      },
      {
        "row": 182,
        "who": "wang",
        "text": "哥哥，我昨天晚上梦到你了。"
      },
      {
        "row": 183,
        "who": "mu",
        "text": "怪不得你凌晨突然抱住我叫哥哥。"
      },
      {
        "row": 184,
        "who": "wang",
        "text": "嗯，我梦到穆祉丞的14岁生日被很多人欺负，他们把欺负当做生日惊喜，可是你并不开心，你一直在流眼泪，我好心疼，我想给你擦眼泪，可是我摸不到你，好着急，橹橹不能保护你。（边说边掉眼泪））",
        "expression": "sad"
      },
      {
        "row": 185,
        "who": "mu",
        "text": "（立马伸手去擦）橹橹，怎么哭了呀。不哭了不哭了，因为有橹橹陪着哥哥，哥哥的14岁生日特别特别开心呀，橹橹不要伤心了。"
      },
      {
        "row": 186,
        "who": "wang",
        "text": "嗯！以后的每一天，王橹杰都要陪着穆祉丞，我要快点长大，保护你。"
      },
      {
        "row": 187,
        "who": "mu",
        "text": "我们橹橹怎么这么懂事，好啦好啦，不难过了，我们来吃蛋糕吧。"
      },
      {
        "row": 188,
        "who": "wang",
        "text": "那我要吃两块！",
        "expression": "happy"
      },
      {
        "row": 189,
        "who": "mu",
        "text": "那丞哥要吃三块，哼哼！"
      },
      {
        "row": 190,
        "who": "wang",
        "text": "哇，哥哥是大胃王！"
      }
    ]
  },
  "camp": {
    "title": "露营",
    "stage": "adult",
    "scene": "room",
    "lines": [
      {
        "row": 346,
        "who": null,
        "text": "（周末，两人开车到近郊湖边露营）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 347,
        "who": "mu",
        "text": "终于搭好了",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 348,
        "who": null,
        "text": "（穆祉丞直起身，擦了一把额头的汗）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 349,
        "who": "wang",
        "text": "哥哥，幕布也支好了",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 350,
        "who": null,
        "text": "（王橹杰退远一点，满意地看着自己挂在树枝上的白色幕布）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 351,
        "who": "mu",
        "text": "时间还早，我想去钓鱼",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 352,
        "who": "wang",
        "text": "我去把鱼竿拿出来",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 353,
        "who": null,
        "text": "（两人找了一处阴凉且平坦的小溪边坐下）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 354,
        "who": null,
        "text": "（王橹杰在一旁乖乖看着穆祉丞调漂、挂饵、抛竿，动作利落一气呵成）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 355,
        "who": null,
        "text": "（然后就是漫长的等待…）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 356,
        "who": null,
        "text": "（王橹杰凑近穆祉丞耳边，用气声跟他说话，穆祉丞也用同样的音量回应他）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 357,
        "who": "wang",
        "text": "穆祉丞钓鱼",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 358,
        "who": "mu",
        "text": "王橹杰上钩",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 359,
        "who": "wang",
        "text": "哥哥钓我都不用打窝",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 360,
        "who": "mu",
        "text": "其实根本不需要钓",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 361,
        "who": "mu",
        "text": "狗皮膏药一样就贴上来了",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 362,
        "who": "wang",
        "text": "就贴就贴",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 363,
        "who": "mu",
        "text": "好啦，不说话了，鱼都游走了",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 364,
        "who": "wang",
        "text": "哥哥的鱼塘有我这条鱼就够了",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 365,
        "who": "mu",
        "text": "你这条鱼又不能当饭吃",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 366,
        "who": "wang",
        "text": "谁说不行",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 367,
        "who": "mu",
        "text": "嘘…浮漂动了",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 368,
        "who": "wang",
        "text": "哥哥加油哥哥加油",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 369,
        "who": null,
        "text": "（穆祉丞向上抬杆，然后快速收线，一条活蹦乱跳的鱼就上钩了）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 370,
        "who": "wang",
        "text": "午饭加一",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 371,
        "who": "mu",
        "text": "橹橹你想不想试试？",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 372,
        "who": "wang",
        "text": "不了不了，我就在旁边看着吧",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 373,
        "who": "mu",
        "text": "觉得无聊吗？你要不要回帐篷里去？",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 374,
        "who": "wang",
        "text": "不要，我就要在哥哥旁边，我是狗皮膏药",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 375,
        "who": "mu",
        "text": "行",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 376,
        "who": "wang",
        "text": "哥哥，耳朵给我",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 377,
        "who": "mu",
        "text": "？干啥",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 378,
        "who": "wang",
        "text": "一起听歌",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 379,
        "who": null,
        "text": "（王橹杰把一只耳机塞给穆祉丞，自己戴上另一只）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 380,
        "who": null,
        "text": "（就这样，时间过得很快，桶里的鱼也越来越多）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 381,
        "who": null,
        "text": "（太阳渐渐西斜）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 382,
        "who": "wang",
        "text": "哥哥，我犊子饿了",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 383,
        "who": null,
        "text": "（穆祉丞收起鱼竿站起来）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 384,
        "who": "mu",
        "text": "回去烧烤吧",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 385,
        "who": null,
        "text": "（穆祉丞看着王橹杰坐在那儿无动于衷，伸出手想拉他一把）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 386,
        "who": "wang",
        "text": "等会儿哥哥…我腿麻了…",
        "expression": "sad",
        "scene": "camp-day"
      },
      {
        "row": 387,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 388,
        "who": null,
        "text": "（两人回到营地）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 389,
        "who": "mu",
        "text": "我去把食材拿出来",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 390,
        "who": "wang",
        "text": "哥哥我帮你",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 391,
        "who": "mu",
        "text": "这些是调料，你先拿过去吧",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 392,
        "who": null,
        "text": "（王橹杰转身的时候被帐篷绊了一下，差点跩了）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 393,
        "who": "mu",
        "text": "唉！小心啊，脚麻吗还？",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 394,
        "who": "wang",
        "text": "妈…妈妈？我没事我没事的",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 395,
        "who": "mu",
        "text": "？我。你…",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 396,
        "who": "mu",
        "text": "我是怕帐篷塌了咱们今天就只能裹着睡袋露天看星星了",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 397,
        "who": "wang",
        "text": "原来哥哥不是关心我(ᗒᗣᗕ)՞",
        "expression": "sad",
        "scene": "camp-day"
      },
      {
        "row": 398,
        "who": "wang",
        "text": "我要闹了",
        "expression": "sad",
        "scene": "camp-day"
      },
      {
        "row": 399,
        "who": "mu",
        "text": "乖，你去那坐着吧",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 400,
        "who": "mu",
        "text": "剩下的我来就行",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 401,
        "who": null,
        "text": "（王橹杰在小马扎上坐下，因为腿太长，膝盖只能高高支起，显得十分局促）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 402,
        "who": "mu",
        "text": "你怎么蹲在这干啥？",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 403,
        "who": "wang",
        "text": "哥哥我坐着呢",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 404,
        "who": "mu",
        "text": "？",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 405,
        "who": "mu",
        "text": "下次得买高一点的，怪不得会脚麻",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 406,
        "who": null,
        "text": "（穆大厨上线，橹小杰帮倒忙中）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 407,
        "who": "mu",
        "text": "来来来，你过来",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 408,
        "who": "mu",
        "text": "你坐在这，坐好",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 409,
        "who": null,
        "text": "（穆祉丞把王橹杰一整个搬到旁边，按着他坐下）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 410,
        "who": "mu",
        "text": "嗯很好，握手",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 411,
        "who": "wang",
        "text": "？",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 412,
        "who": null,
        "text": "（王橹杰疑惑地伸出一只手）",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 413,
        "who": "mu",
        "text": "蒸蚌！",
        "expression": "happy",
        "scene": "camp-day"
      },
      {
        "row": 414,
        "who": "mu",
        "text": "在这待着看我",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 415,
        "who": "wang",
        "text": "王橹杰惨遭驱逐(｡í ˰ ì｡)",
        "expression": "sad",
        "scene": "camp-day"
      },
      {
        "row": 416,
        "who": "mu",
        "text": "你选一部片子，等会儿一起看行不",
        "expression": "normal",
        "scene": "camp-day"
      },
      {
        "row": 417,
        "who": "wang",
        "text": "好~(｡•̀ᴗ-)ok",
        "expression": "happy",
        "scene": "camp-night"
      },
      {
        "row": 418,
        "who": null,
        "text": "（夜色落满湖面，两棵树之间拉的幕布在微风下轻轻晃着）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 419,
        "who": "mu",
        "text": "没想到这个投影效果还不错",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 420,
        "who": "wang",
        "text": "如果没风就很好了",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 421,
        "who": "wang",
        "text": "哥哥你看到刚刚那个人的表情了吗",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 422,
        "who": "wang",
        "text": "被风吹的都有点变形了",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 423,
        "who": "mu",
        "text": "哈哈确实，有点搞笑",
        "expression": "happy",
        "scene": "camp-night"
      },
      {
        "row": 424,
        "who": "wang",
        "text": "这个也太好吃了",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 425,
        "who": "wang",
        "text": "哥哥你吃！",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 426,
        "who": null,
        "text": "（王橹杰将烤串递过去，穆祉丞就着竹签咬下一口）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 427,
        "who": "mu",
        "text": "嗯，好吃",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 428,
        "who": "wang",
        "text": "是吧是吧很好吃吧",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 429,
        "who": "mu",
        "text": "拿我烤的串给我献殷勤吗，你小子",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 430,
        "who": "wang",
        "text": "那哥哥来尝尝我剥的橘子？",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 431,
        "who": null,
        "text": "（王橹杰又递过去一片砂糖橘）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 432,
        "who": null,
        "text": "（穆祉丞叼过橘片，不经意的舔了一下王橹杰的指尖）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 433,
        "who": "wang",
        "text": "哥哥…你",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 434,
        "who": "mu",
        "text": "我怎么了？😼",
        "expression": "happy",
        "scene": "camp-night"
      },
      {
        "row": 435,
        "who": "wang",
        "text": "你吃到嘴边了",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 436,
        "who": "wang",
        "text": "我帮你擦掉",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 437,
        "who": null,
        "text": "（王橹杰吻了上去，投影的光在两人脸上忽明忽暗）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 438,
        "who": null,
        "text": "（远处湖水静静的泛着微光，虫鸣衬的夜晚更加静谧）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 439,
        "who": null,
        "text": "（这个吻很轻，带着一点烤肉的香料味和橘子的酸涩）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 440,
        "who": null,
        "text": "（夜色渐浓，两人并排躺在垫子上）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 441,
        "who": "mu",
        "text": "好多星星啊",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 442,
        "who": "wang",
        "text": "哥哥，那个是天蝎座",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 443,
        "who": null,
        "text": "（王橹杰指向南边的天空）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 444,
        "who": "mu",
        "text": "真的吗？",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 445,
        "who": "wang",
        "text": "真的",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 446,
        "who": "mu",
        "text": "真的？",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 447,
        "who": "wang",
        "text": "假的",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 448,
        "who": "mu",
        "text": "哈哈我就知道",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 449,
        "who": null,
        "text": "（穆祉丞拿起手机不知道在搜什么）",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 450,
        "who": "mu",
        "text": "我天，橹橹你神了",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 451,
        "who": "mu",
        "text": "那个真是天蝎座",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 452,
        "who": "wang",
        "text": "？",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 453,
        "who": "wang",
        "text": "真的吗？",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 454,
        "who": "mu",
        "text": "假的",
        "expression": "normal",
        "scene": "camp-night"
      },
      {
        "row": 455,
        "who": "mu",
        "text": "哈哈哈哈哈哈哈哈",
        "expression": "happy",
        "scene": "camp-night"
      },
      {
        "row": 456,
        "who": "wang",
        "text": "穆祉丞——！",
        "expression": "sad",
        "scene": "camp-night"
      }
    ]
  },
  "beach": {
    "title": "赶海",
    "stage": "adult",
    "scene": "room",
    "lines": [
      {
        "row": 458,
        "who": null,
        "text": "（傍晚海潮退去，咸蛋黄一样的落日慢慢地沉入地平线）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 459,
        "who": null,
        "text": "（海风还带着白天的余温，卷着海的咸腥扑面而来）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 460,
        "who": null,
        "text": "（穆祉丞提着桶走的飞快，裤脚随意的挽起）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 461,
        "who": null,
        "text": "（王橹杰迈着步子跟上，伸手去拉他的后领）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 462,
        "who": "wang",
        "text": "穆祉丞，别跑那么快，昨天差点摔一身沙子忘记了？",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 463,
        "who": "mu",
        "text": "哎呀！没事的，昨天是意外嘛！",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 464,
        "who": "mu",
        "text": "我今天稳得很，绝对不会翻安安啊——",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 465,
        "who": null,
        "text": "（王橹杰眼疾手快一把拽住脚底打滑的穆祉丞）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 466,
        "who": "wang",
        "text": "绝、不、翻、车？",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 467,
        "who": "mu",
        "text": "啊哈哈…看来flag不能立…",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 468,
        "who": null,
        "text": "（王橹杰不知道从哪里掏出来一个防丢绳，套在穆祉丞手腕上，另一边套在自己手上）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 469,
        "who": "mu",
        "text": "这你从哪来的？我又不是小孩了！",
        "expression": "angry",
        "scene": "beach-evening"
      },
      {
        "row": 470,
        "who": "mu",
        "text": "我不要！王橹杰！被看见好丢人的！",
        "expression": "angry",
        "scene": "beach-evening"
      },
      {
        "row": 471,
        "who": "wang",
        "text": "不行哦哥哥~",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 472,
        "who": "wang",
        "text": "其实原本没想用在这的",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 473,
        "who": "wang",
        "text": "但现在看来，非常适用",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 474,
        "who": "wang",
        "text": "不用担心，这片海滩人很少的",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 475,
        "who": "mu",
        "text": "讨厌你",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 476,
        "who": "wang",
        "text": "喜欢你",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 477,
        "who": "mu",
        "text": "讨厌你讨厌你",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 478,
        "who": "wang",
        "text": "喜欢你喜欢你（亲）",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 479,
        "who": "mu",
        "text": "诶！王橹杰你看，小螃蟹！",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 480,
        "who": null,
        "text": "（穆祉丞一个瞬移，王橹杰在绳子的牵引下差点没站稳）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 481,
        "who": "wang",
        "text": "果然…兔子跑的好快…",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 482,
        "who": null,
        "text": "（穆祉丞手起铲落，铲了一铲子的沙）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 483,
        "who": "wang",
        "text": "哥哥，那个洞里，我好像看到了",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 484,
        "who": "mu",
        "text": "okay啊，看你丞哥的",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 485,
        "who": null,
        "text": "（就这样，第一只小螃蟹成功入桶）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 486,
        "who": "wang",
        "text": "哥哥好厉害ദ്ദി◝ ⩊ ◜.ᐟ",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 487,
        "who": "mu",
        "text": "哼哼抓螃蟹从入门到精通",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 488,
        "who": null,
        "text": "（穆祉丞蹲在沙地上专注自己的捕蟹大业，王橹杰在两步之外的地方写着什么）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 489,
        "who": null,
        "text": "（不一会儿，穆祉丞桶里已经装了十几只小螃蟹了）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 490,
        "who": "mu",
        "text": "橹橹，你看！",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 491,
        "who": "mu",
        "text": "诶？你在写啥呢",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 492,
        "who": "wang",
        "text": "哥哥我在画画",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 493,
        "who": "mu",
        "text": "哇，好可爱",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 494,
        "who": "mu",
        "text": "画的我们",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 495,
        "who": "wang",
        "text": "嗯嗯！",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 496,
        "who": "mu",
        "text": "我可以画吗？",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 497,
        "who": "wang",
        "text": "当然可以啊！",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 498,
        "who": "mu",
        "text": "我怕画毁了",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 499,
        "who": "wang",
        "text": "没事的哥哥，给你，用这个枝条画吧",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 500,
        "who": null,
        "text": "（穆祉丞画了一个大大的爱心把两个小人框住）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 501,
        "who": "wang",
        "text": "好完美的爱心ദ്ദി(˶>𖥦<˶)✧",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 502,
        "who": "mu",
        "text": "嘿嘿，还不错吧",
        "expression": "normal",
        "scene": "beach-evening",
        "image": "assets/story/沙滩画.jpg"
      },
      {
        "row": 503,
        "who": "wang",
        "text": "哥哥我们合个影吧",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 504,
        "who": "wang",
        "text": "3—2—1——",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 505,
        "who": "mu",
        "text": "王橹杰——",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 506,
        "who": null,
        "text": "（咔嚓）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 507,
        "who": "wang",
        "text": "哥哥你为什么叫我的名字",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 508,
        "who": "mu",
        "text": "因为我发现叫王橹杰嘴角是向上的ᗜ 𖥦 ᗜ",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 509,
        "who": "wang",
        "text": "那我下次要叫恩仔",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 510,
        "who": "mu",
        "text": "诶～",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 511,
        "who": "wang",
        "text": "宝宝！",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 512,
        "who": "mu",
        "text": "嗯哼ᗜ ᴗ ᗜ",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 513,
        "who": "wang",
        "text": "老婆～",
        "expression": "happy",
        "scene": "beach-evening"
      },
      {
        "row": 514,
        "who": "mu",
        "text": "咳咳…我们…去水边走走吧",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 515,
        "who": "wang",
        "text": "你不回应我我就不走了",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 516,
        "who": "mu",
        "text": "诶诶诶好好，走吧",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 517,
        "who": null,
        "text": "（穆祉丞把王橹杰拽走了）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 518,
        "who": null,
        "text": "（两人手牵手沿着海岸线慢慢往前走，潮水浅浅漫过脚背）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 519,
        "who": null,
        "text": "（两人有一搭没一搭的聊着）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 520,
        "who": "mu",
        "text": "明天我们去哪儿",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 521,
        "who": "wang",
        "text": "不知道",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 522,
        "who": "mu",
        "text": "晚上吃什么",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 523,
        "who": "wang",
        "text": "不知道",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 524,
        "who": "mu",
        "text": "你怎么什么都不知道",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 525,
        "who": "wang",
        "text": "那哥哥你说",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 526,
        "who": "mu",
        "text": "我也不知道",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 527,
        "who": "wang",
        "text": "不如我们随便搭乘一辆巴士，再随机选一站下车？",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 528,
        "who": "mu",
        "text": "我觉得可以",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 529,
        "who": null,
        "text": "（两人踩着还带着湿沙的拖鞋，并肩朝着公路走去）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 530,
        "who": null,
        "text": "（不知道巴士会开往哪一站，不知道下车之后会遇见什么样的小店）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 531,
        "who": null,
        "text": "（但也不必知道）",
        "expression": "normal",
        "scene": "beach-evening"
      },
      {
        "row": 532,
        "who": null,
        "text": "（只要身边还是彼此，随便去哪，都会是好风景）",
        "expression": "normal",
        "scene": "beach-evening"
      }
    ]
  },
  "pop_up": {
    "title": "快闪",
    "stage": "adult",
    "scene": "room",
    "lines": [
      {
        "row": 533,
        "who": null,
        "text": "（最近有一个很巧的事情是，小马宝莉快闪和地缚少年花子君快闪都开到了楼下）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 534,
        "who": null,
        "text": "（于是两个人闲来无事，就打算上午去小马宝莉快闪，下午去花子君快闪，晚上还能搓一顿火锅）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 535,
        "who": "wang",
        "text": "这个王橹杰今天要狠狠“赌博”一番",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 536,
        "who": "mu",
        "text": "gogogo，我拿了大疆，准备拍一个vlog",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 537,
        "who": "wang",
        "text": "hello大家好呀，我要跟哥哥去快闪啦，我们现场见",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 538,
        "who": null,
        "text": "（王橹杰对着镜头露出特色海星手）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 539,
        "who": "mu",
        "text": "橹橹，我要告诉你个事儿",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 540,
        "who": "wang",
        "text": "你没开机是吧",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 541,
        "who": "mu",
        "text": "对…",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 542,
        "who": "wang",
        "text": "没事的没事",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 543,
        "who": null,
        "text": "（王橹杰转头就往大门走，突然一个雷霆转头）",
        "expression": "normal",
        "scene": "room"
      },
      {
        "row": 544,
        "who": "wang",
        "text": "但是无法原谅！",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 545,
        "who": null,
        "text": "（📍小马宝莉快闪店）",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 546,
        "who": "wang",
        "text": "这个很好看啊",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 547,
        "who": "wang",
        "text": "这个工艺做的很好啊",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 548,
        "who": "wang",
        "text": "这个创意好独特",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 549,
        "who": "mu",
        "text": "都买都买",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 550,
        "who": null,
        "text": "（采购了一大袋子，两人找了个甜品店坐下）",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 551,
        "who": null,
        "text": "（穆祉丞将摄像头对准王橹杰）",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 552,
        "who": "mu",
        "text": "你想抽到什么角色",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 553,
        "who": "wang",
        "text": "我最想抽到的是珍奇",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 554,
        "who": "wang",
        "text": "如果这一盒抽到珍奇的话，王橹杰愿意一周不吃巧克力",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 555,
        "who": null,
        "text": "（王橹杰拆开包装）",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 556,
        "who": "wang",
        "text": "哥哥你帮我看吧，我不敢看了",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 557,
        "who": "mu",
        "text": "行，我来看看",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 558,
        "who": "mu",
        "text": "呃…珍奇应该不是橙色的吧？",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 559,
        "who": "wang",
        "text": "好的我知道了",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 560,
        "who": "wang",
        "text": "我们继续下一盒",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 561,
        "who": "mu",
        "text": "没事的，第一盒没抽中可以理解",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 562,
        "who": "wang",
        "text": "如果这盒是珍奇，王橹杰愿意每天少看一小时动画片",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 563,
        "who": "wang",
        "text": "哥哥你再帮我看一下",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 564,
        "who": null,
        "text": "（王橹杰把盒子对准穆祉丞和摄像，自己闭着眼）",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 565,
        "who": "mu",
        "text": "嗯……",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 566,
        "who": "wang",
        "text": "ok下一盒",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 567,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 568,
        "who": "wang",
        "text": "下一盒",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 569,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 570,
        "who": "wang",
        "text": "我服了怎么一直出同一个啊",
        "expression": "sad",
        "scene": "dessert-shop"
      },
      {
        "row": 571,
        "who": "wang",
        "text": "缠上我了吗",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 572,
        "who": "wang",
        "text": "我不信了，这个如果是珍奇我就禁欲一周",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 573,
        "who": "mu",
        "text": "你确定要立这个flag？",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 574,
        "who": "wang",
        "text": "我非常确定。",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 575,
        "who": "mu",
        "text": "行，我帮你看看",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 576,
        "who": "mu",
        "text": "神了，王橹杰",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 577,
        "who": "wang",
        "text": "？",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 578,
        "who": "wang",
        "text": "不会吧。",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 579,
        "who": "mu",
        "text": "真的，你的珍奇来了",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 580,
        "who": "wang",
        "text": "王橹杰已力竭已沉默已无力招架已三十六计走为上计哈哈哈哈哈",
        "expression": "angry",
        "scene": "dessert-shop"
      },
      {
        "row": 581,
        "who": "wang",
        "text": "挺好的，我最喜欢的一款盲盒，不错。",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 582,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 583,
        "who": "wang",
        "text": "那么，这就是，王橹杰今天买的全部的盲盒。",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 584,
        "who": "wang",
        "text": "已经全部拆完了，对的",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 585,
        "who": "wang",
        "text": "不行哥哥，我还是很生气",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 586,
        "who": "wang",
        "text": "我还要买一盒这款",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 587,
        "who": "wang",
        "text": "最后一次，抽不到就…",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 588,
        "who": "mu",
        "text": "端盒？",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 589,
        "who": "wang",
        "text": "就算了(；′⌒`)",
        "expression": "sad",
        "scene": "dessert-shop"
      },
      {
        "row": 590,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 591,
        "who": "wang",
        "text": "久等了，我回来了",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 592,
        "who": null,
        "text": "（王橹杰狠狠撕开包装，卡片从盒子里掉到桌上，是紫色的）",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 593,
        "who": "wang",
        "text": "抽中了(★＞U＜★)",
        "expression": "happy",
        "scene": "dessert-shop"
      },
      {
        "row": 594,
        "who": "wang",
        "text": "哥哥你看！",
        "expression": "happy",
        "scene": "dessert-shop"
      },
      {
        "row": 595,
        "who": "mu",
        "text": "太好了！我接接接，分我点运气，下午我也抽",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 596,
        "who": "wang",
        "text": "哥哥你确实要我的运气吗？",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 597,
        "who": null,
        "text": "（俩人同时瞥了一眼旁边的盲盒山）",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 598,
        "who": "mu",
        "text": "那我吸好运，不吸坏运",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 599,
        "who": "wang",
        "text": "属于是取其精华去其糟粕",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 600,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 601,
        "who": "wang",
        "text": "接下来是，王橹杰的吃播时间",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 602,
        "who": "wang",
        "text": "我给自己点了一个迪拜巧克力软曲奇🍪🍫，我觉得这个真的超级好吃☝🏻🤤，就是迷恋程度已经到了就是说🥰😍。",
        "expression": "happy",
        "scene": "dessert-shop"
      },
      {
        "row": 603,
        "who": "wang",
        "text": "因为我觉得它里面的这个，嗯开心果，嗯面包丝内陷特别的酥脆🍞🔇，再加上外面那层巧克力棉花糖的外皮🍬☁️，超级超级的好🩷🩵。",
        "expression": "happy",
        "scene": "dessert-shop"
      },
      {
        "row": 604,
        "who": "wang",
        "text": "大家可以去试试，真的很好吃。大家真的一定要去尝一下迪拜巧克力软曲奇🍪🍫。",
        "expression": "happy",
        "scene": "dessert-shop"
      },
      {
        "row": 605,
        "who": "wang",
        "text": "超级好吃，大家可以找正宗的，真的很好吃，因为这种开心果味特别浓郁😋🫱🏻，超级好吃，必须要去尝一尝😍👅。",
        "expression": "happy",
        "scene": "dessert-shop"
      },
      {
        "row": 606,
        "who": "mu",
        "text": "王橹杰我发现你还挺有当主播的潜力的",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 607,
        "who": "wang",
        "text": "哥哥别打趣我了＞＜",
        "expression": "normal",
        "scene": "dessert-shop"
      },
      {
        "row": 608,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 609,
        "who": null,
        "text": "（📍地缚少年花子君快闪）",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 610,
        "who": "mu",
        "text": "谁能把谷子的价格打下来",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 611,
        "who": "wang",
        "text": "我支持",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 612,
        "who": "mu",
        "text": "要不就这些吧",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 613,
        "who": "mu",
        "text": "橹橹你去外面等我吧，里面好挤",
        "expression": "normal",
        "scene": "mall"
      },
      {
        "row": 614,
        "who": "wang",
        "text": "好的👌🏻",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 615,
        "who": null,
        "text": "（火锅店里，等锅开的时候）",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 616,
        "who": null,
        "text": "（穆祉丞把摄像架在对面，自己和王橹杰并排坐着）",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 617,
        "who": "mu",
        "text": "okay啊，现在我们来吃火锅了",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 618,
        "who": "mu",
        "text": "那么在吃火锅前，先来拆一下刚刚买的盲抽",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 619,
        "who": "mu",
        "text": "首先，第一个",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 620,
        "who": "mu",
        "text": "我很喜欢这款柄图，都是很经典的场景，许愿这款和这款",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 621,
        "who": "wang",
        "text": "哥哥我帮你看~",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 622,
        "who": "mu",
        "text": "有吗？",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 623,
        "who": "wang",
        "text": "好像…好像是的",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 624,
        "who": "mu",
        "text": "真的吗？我看看",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 625,
        "who": "mu",
        "text": "不是的橹橹",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 626,
        "who": "mu",
        "text": "这是花子君的弟弟，不是花子君",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 627,
        "who": "wang",
        "text": "啊？可是他们不是长得一样吗？",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 628,
        "who": "mu",
        "text": "你再仔细看看",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 629,
        "who": "wang",
        "text": "哦…哦对的对的…哦不对不对",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 630,
        "who": "wang",
        "text": "好吧",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 631,
        "who": "mu",
        "text": "没事的，我继续拆了",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 632,
        "who": "wang",
        "text": "这回经过我仔细的观察，绝对错不了",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 633,
        "who": "mu",
        "text": "哦！还真是！可以可以",
        "expression": "happy",
        "scene": "hotpot"
      },
      {
        "row": 634,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 635,
        "who": "wang",
        "text": "哥哥你又抽中了！",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 636,
        "who": "mu",
        "text": "哇塞夯爆了",
        "expression": "happy",
        "scene": "hotpot"
      },
      {
        "row": 637,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 638,
        "who": "wang",
        "text": "不是你最喜欢的那个，但也是你许愿的",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 639,
        "who": "mu",
        "text": "不错不错",
        "expression": "happy",
        "scene": "hotpot"
      },
      {
        "row": 640,
        "who": null,
        "text": "……",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 641,
        "who": "wang",
        "text": "哎呀哥哥你手气怎么这么好！早知道早上让你帮我抽了！",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 642,
        "who": "mu",
        "text": "哎呀真是没想到，这把抽的太舒服了",
        "expression": "happy",
        "scene": "hotpot"
      },
      {
        "row": 643,
        "who": null,
        "text": "（拆完最后一盒，锅也开了）",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 644,
        "who": "mu",
        "text": "放好吧，吃饭吃饭",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 645,
        "who": "mu",
        "text": "饿死了",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 646,
        "who": "wang",
        "text": "哥哥…",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 647,
        "who": "mu",
        "text": "咋了",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 648,
        "who": "wang",
        "text": "等会能不能再陪我去一趟…你帮我抽一个",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 649,
        "who": "mu",
        "text": "当然可以，但是我也不确定还能不能抽到了",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 650,
        "who": "wang",
        "text": "一定可以的🥺",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 651,
        "who": "mu",
        "text": "抽不到也没事，哥哥给你端盒",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 652,
        "who": null,
        "text": "（穆祉丞涮了一筷子肉夹给王橹杰）",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 653,
        "who": "mu",
        "text": "哦对了，给大家看一下",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 654,
        "who": "mu",
        "text": "吃火锅必备",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 655,
        "who": "mu",
        "text": "豌豆尖儿",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 656,
        "who": "mu",
        "text": "这个豌豆尖必须在清汤🍲🥬里头煮，不在清汤里头煮我不得吃😤❌！",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 657,
        "who": "mu",
        "text": "我从小都没吃过红汤🌶️🥵的豌豆尖儿，只能吃清汤🥣✨。",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 658,
        "who": "mu",
        "text": "因为清汤那个啷个说呀🤔，它煮出来就是你吃进去那一口😋👄，它有有股香味儿🌸💨，就是可能就是那个汤汤料那个料的味道不一样👌🍵。",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 659,
        "who": "mu",
        "text": "然后它就是那个味道就是很香🌿💖，但是豌豆尖本身就香啊💯😋！",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 660,
        "who": "mu",
        "text": "你一放进那个红汤里头，我的天我遭不住我说实话兄弟🤧🤦‍♀️🙅‍♂️，那个红汤里头就是很辣🌶️🔥💥，然后辣辣了你又吃不了🥵😵，那香味就纯辣，啥子清香味都没得了❌💨。",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 661,
        "who": "mu",
        "text": "然后那个汁如果说你吃快了，如果说你吃快了🏃‍♀️💨，它那个汁儿它就会往你的那个喉咙管里头灌💦💧😱，那你就要呛下去😫😣🤧！",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 662,
        "who": "mu",
        "text": "呛到你要喝水🥤💧，喝水，然后一下子又喝不那个😮‍💨😩，说不定那个花椒还很麻😵‍💫🥶👅，麻得舌头都不是自己的了🙀❌，就是你遭都遭不住🙅‍♀️🤯❗❗",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 663,
        "who": "wang",
        "text": "哥哥你要不要喝口水",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 664,
        "who": null,
        "text": "（王橹杰给穆祉丞递了一杯饮料）",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 665,
        "who": "mu",
        "text": "谢谢橹橹",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 666,
        "who": "mu",
        "text": "那么今天的vlog就到此结束啦~",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 667,
        "who": "mu",
        "text": "主要是我忘充电了，快没电了",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 668,
        "who": "mu",
        "text": "拜拜~",
        "expression": "normal",
        "scene": "hotpot"
      },
      {
        "row": 669,
        "who": "wang",
        "text": "再见👋🏻~",
        "expression": "normal",
        "scene": "hotpot"
      }
    ]
  }
};
