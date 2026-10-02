'use strict';

/* ================== 配置 ================== */
const CONFIG = {
  gameName: '一橹一穆',
  stages: [
    { name: '婴儿', hours: 12 },
    { name: '幼年', hours: 60 },
    { name: '少年', hours: 180 },
  ],
  adultHours: 180,
  critical: 20, danger: 10, sickHours: 6,
  // 婴儿期饱食每小时 -5；之后每小时 -4。清洁每小时 -2。
  decay: { babyHunger: 5, hunger: 4, clean: 2, energy: 0.5 },
  bond: {
    init: 38, maxPre: 99, max: 120,
    qijiao: 20, love: 99, argue: 90, break: 60,
    coldHours: 20, coldPenalty: 3,
    noDateEvery: 24, noDatePenalty: 3,
    maxDatesPerDay: 2,
    repeatPenalty: 0.3,
    singleGain: 1, dualGain: 2,
    companionPerDay: 1,
    lowLoss: 1, lowLossCap: 2,
  },
  care: { bath: 50, play: 15, playEnergy: 15 },
  prices: { gift: 30 },
  dates: [
    { id: 'haunted', name: '鬼屋', emoji: '👻', price: 40, bond: 10 },
    { id: 'amusement', name: '游乐园', emoji: '🎡', price: 50, bond: 12 },
    { id: 'hot_spring', name: '温泉度假山庄', emoji: '♨️', price: 66, bond: 15 },
    { id: 'camp', name: '露营地', emoji: '🏕️', price: 30, bond: 8 },
    { id: 'beach', name: '海滩', emoji: '🏖️', price: 20, bond: 5 },
    { id: 'pop_up', name: '快闪', emoji: '🛍️', price: 40, bond: 10 },
    // 只为旧存档中已经买入的门票保留结算规则，不再上架。
    { id: 'park', name: '公园散步', emoji: '🌳', price: 15, bond: 3 },
    { id: 'dessert', name: '甜品店', emoji: '🍰', price: 30, bond: 5 },
    { id: 'firework', name: '海边烟花', emoji: '🎆', price: 80, bond: 12 },
  ],
  speeds: [
    { label: '慢', secPerHour: 7200, behaviorMs: 14000 },
    { label: '标准', secPerHour: 3600, behaviorMs: 10000 },
    { label: '快', secPerHour: 360, behaviorMs: 7500 },
    { label: '极速', secPerHour: 36, behaviorMs: 6000 },
  ],
  checkIn: 10,
  behaviorIntervalMs: 7000,
  offlineCapHours: 72,
};

/* 食物（来源《食物触发表》） */
const FOOD_STAPLES = ['尊宝披萨','玉米猪肉饺子','重庆小面','火锅','烧烤','红烧肉','麻辣兔头','黄瓜炒蛋','蛋炒饭','红汤豌豆尖','青椒','香菜','馄饨'];
const FOOD_DESSERTS = ['三角巧克力','黄油年糕','迪拜巧克力软曲奇','巴旦木','西瓜','榴莲','番茄','芒果','牛奶'];
const FOOD_PREF = {
  wang: { like: ['迪拜巧克力软曲奇','三角巧克力','巴旦木','西瓜','红烧肉'], super: [], dislike: ['青椒','番茄','香菜'] },
  mu:   { like: ['火锅','黄油年糕','重庆小面','玉米猪肉饺子'], super: ['尊宝披萨'], dislike: ['红汤豌豆尖'] },
};
const FOOD_LINES = {
  '尊宝披萨': { mu: '兄弟这个夯爆了！' },
  '玉米猪肉饺子': { mu: '好吃爱吃~' },
  '黄油年糕': { mu: '甜叽叽的，好吃~' },
  '红汤豌豆尖': { mu: '豌豆尖必须在清汤🍲🥬里头煮，不在清汤里头煮我不得吃😤❌！我从小都没吃过红汤🌶️🥵的豌豆尖儿，只能吃清汤🥣✨。' },
  '迪拜巧克力软曲奇': { wang: '这个巨好吃。' },
  '巴旦木': { wang: '喜欢，但是热量很高…' },
  '番茄': { wang: '王橹杰是不会碰这个食物的。' },
  '青椒': { wang: '王橹杰是不会碰这个食物的。' },
  '香菜': { wang: '王橹杰是不会碰这个食物的。' },
};
const FEED_AUDIO = {
  '尊宝披萨': { mu: 'assets/audio/hangbaole.m4a' },
  '红汤豌豆尖': { mu: 'assets/audio/wandoujian.m4a' },
  '迪拜巧克力软曲奇': { wang: 'assets/audio/wljjuhaochi.m4a' },
  '巴旦木': { wang: 'assets/audio/wljbadanmu.m4a' },
  '番茄': { wang: 'assets/audio/wljbupeng.m4a' },
  '青椒': { wang: 'assets/audio/wljbupeng.m4a' },
  '香菜': { wang: 'assets/audio/wljbupeng.m4a' },
};
const FOOD_FALLBACK = {
  staple: { wang: '已慢慢进食…', mu: '已暴风吸入。' },
  dessert: { wang: '谢谢(ᐡ⦁⩊⦁⸝⸝ᐡ )₊୭', mu: '好吃好吃' },
};
const CARE_LINES = {
  bath: { wang: '嗯，洗好了。', mu: '舒服了😼' },
  play: {
    wang: { single: '想和哥哥一起玩...', dual: '最喜欢和哥哥玩了𐔌՞ ܸ.ˬ.ܸ՞𐦯' },
    mu: { single: '如果能和橹橹一起玩就更好了', dual: '橹橹，我们下次还要一起玩！' },
  },
};
const PLAY_AUDIO = { wang: 'assets/audio/wljplay.m4a', mu: 'assets/audio/mzcplay.m4a' };

/* 道具与约会剧情由表格生成，统一使用同一套对话界面。 */
const STORIES = {
  ...(typeof DATE_STORIES === 'undefined' ? {} : DATE_STORIES),
  ...(typeof EXTRA_STORIES === 'undefined' ? {} : EXTRA_STORIES),
};

const SHOP = {
  '棉花娃娃': { name: '棉花娃娃', emoji: '🧸', icon: 'assets/ui/item-doll.png?v=2', price: 30, bond: 8, cat: 'story', effect: '少年期起可用 · 羁绊 +8' },
  '磨牙棒': { name: '磨牙棒', emoji: '🍪', icon: 'assets/ui/item-teether.png?v=2', price: 20, bond: 5, cat: 'story', effect: '幼年/少年、成年各有剧情 · 羁绊 +5' },
  '手机': { name: '手机', emoji: '📱', icon: 'assets/ui/item-phone.png?v=2', price: 40, cat: 'story', kind: 'chat', effect: '少年期可购 · 永久解锁主页聊天入口' },
  '头纱': { name: '头纱', icon: 'assets/ui/item-veil.png?v=1', price: 20, bond: 5, cat: 'story', effect: '幼年/少年、成年各有剧情 · 羁绊 +5' },
  '巧克力蛋糕': { name: '巧克力蛋糕', icon: 'assets/ui/item-chocolate-cake.png?v=2', price: 35, bond: 10, cat: 'story', effect: '少年期起可用 ·「LuLu生日」· 羁绊 +10' },
  '哆啦A梦主题蛋糕': { name: '哆啦A梦主题蛋糕', icon: 'assets/ui/item-robot-cat-cake.png?v=2', price: 35, bond: 10, cat: 'story', effect: '少年期起可用 ·「MuMu生日」· 羁绊 +10' },
  haunted: { name: '鬼屋', icon: 'assets/ui/ticket-haunted-v2.png?v=1', price: 40, cat: 'ticket', effect: '约会 · 触发「鬼屋」剧情 · 羁绊 +10' },
  amusement: { name: '游乐园', emoji: '🎡', icon: 'assets/ui/ticket-amusement.png?v=2', price: 50, cat: 'ticket', effect: '约会 · 触发「游乐园」剧情 · 羁绊 +12' },
  hot_spring: { name: '温泉度假山庄', icon: 'assets/ui/ticket-hot-spring.png?v=2', price: 66, cat: 'ticket', effect: '约会 · 触发「温泉」剧情 · 羁绊 +15' },
  camp: { name: '露营地', icon: 'assets/ui/ticket-camp.png?v=2', price: 30, cat: 'ticket', effect: '约会 · 触发「露营」剧情 · 羁绊 +8' },
  beach: { name: '海滩', icon: 'assets/ui/ticket-beach.png?v=2', price: 20, cat: 'ticket', effect: '约会 · 触发「赶海」剧情 · 羁绊 +5' },
  pop_up: { name: '快闪', icon: 'assets/ui/ticket-pop-up.png?v=2', price: 40, cat: 'ticket', effect: '约会 · 触发「快闪」剧情 · 羁绊 +10' },
  medicine: { name: '药', emoji: '💊', icon: 'assets/ui/item-medicine.png?v=2', price: 15, cat: 'func', effect: '解除生病；不增加其他数值' },
  // 旧存档中的停售门票仍可从背包使用。
  park: { name: '公园散步', emoji: '🌳', icon: 'assets/ui/ticket-park.png?v=2', price: 15, cat: 'ticket', effect: '约会 · 羁绊 +3', retired: true },
  dessert: { name: '甜品店', emoji: '🍰', icon: 'assets/ui/ticket-dessert.png?v=2', price: 30, cat: 'ticket', effect: '约会 · 羁绊 +5', retired: true },
  firework: { name: '海边烟花', emoji: '🎆', icon: 'assets/ui/ticket-firework.png?v=2', price: 80, cat: 'ticket', effect: '约会 · 羁绊 +12', retired: true },
  cat_ears: { name: '猫耳', icon: 'assets/ui/accessories/cat_ears.png?v=1', price: 20, cat: 'accessory', category: 'headwear', scope: ['mu'], effect: 'MuMu专属', layers: { mu: 'assets/chars/mzc-adult-acc-cat-ears.png?v=1' } },
  dog_ears: { name: '狗耳', icon: 'assets/ui/accessories/dog_ears.png?v=1', price: 20, cat: 'accessory', category: 'headwear', scope: ['wang'], effect: 'LuLu专属', layers: { wang: 'assets/chars/wlj-adult-acc-dog-ears.png?v=1' } },
  cry_glasses: { name: '哭哭眼镜', icon: 'assets/ui/accessories/cry_glasses.png?v=1', price: 15, cat: 'accessory', category: 'glasses', scope: ['wang', 'mu'], effect: '通用', layers: { wang: 'assets/chars/wlj-adult-acc-cry-glasses.png?v=1', mu: 'assets/chars/mzc-adult-acc-cry-glasses.png?v=1' } },
  gold_glasses: { name: '金丝眼镜', icon: 'assets/ui/accessories/gold_glasses.png?v=1', price: 15, cat: 'accessory', category: 'glasses', scope: ['wang', 'mu'], effect: '通用', layers: { wang: 'assets/chars/wlj-adult-acc-gold-glasses.png?v=1', mu: 'assets/chars/mzc-adult-acc-gold-glasses.png?v=1' } },
  alien_antenna: { name: '外星人触角', icon: 'assets/ui/accessories/alien_antenna.png?v=1', price: 10, cat: 'accessory', category: 'headwear', scope: ['wang', 'mu'], effect: '通用', layers: { wang: 'assets/chars/wlj-adult-acc-alien.png?v=1', mu: 'assets/chars/mzc-adult-acc-alien.png?v=1' } },
  mzc_blueberry: { name: 'mzc蓝莓头套', icon: 'assets/ui/accessories/mzc_blueberry.png?v=1', price: 25, cat: 'accessory', category: 'headwear', scope: ['mu'], effect: 'MuMu专属', layers: { mu: 'assets/chars/mzc-adult-acc-blueberry.png?v=1' } },
  wlj_blueberry: { name: 'wlj蓝莓头套', icon: 'assets/ui/accessories/wlj_blueberry.png?v=1', price: 25, cat: 'accessory', category: 'headwear', scope: ['wang'], effect: 'LuLu专属', layers: { wang: 'assets/chars/wlj-adult-acc-blueberry.png?v=1' } },
  birthday_hat: { name: '生日帽', icon: 'assets/ui/accessories/birthday_hat.png?v=1', price: 20, cat: 'accessory', category: 'headwear', scope: ['wang', 'mu'], effect: '通用', layers: { wang: 'assets/chars/wlj-adult-acc-birthday-hat.png?v=1', mu: 'assets/chars/mzc-adult-acc-birthday-hat.png?v=1' } },
  headphones: { name: '耳机', icon: 'assets/ui/accessories/headphones.png?v=1', price: 25, cat: 'accessory', category: 'headwear', scope: ['wang', 'mu'], effect: '通用\n同时佩戴有特殊效果', layers: { wang: 'assets/chars/wlj-adult-acc-headphones.png?v=1', mu: 'assets/chars/mzc-adult-acc-headphones.png?v=1' } },
  collar: { name: '项圈', icon: 'assets/ui/accessories/collar.png?v=1', price: 20, cat: 'accessory', category: 'necklace', scope: ['wang', 'mu'], effect: '通用', layers: { wang: 'assets/chars/wlj-adult-acc-collar.png?v=1', mu: 'assets/chars/mzc-adult-acc-collar.png?v=1' } },
  star_clip: { name: '星星夹子', icon: 'assets/ui/accessories/star_clip.png?v=1', price: 15, cat: 'accessory', category: 'headwear', scope: ['wang', 'mu'], effect: '通用', layers: { wang: 'assets/chars/wlj-adult-acc-star-clip.png?v=1', mu: 'assets/chars/mzc-adult-acc-star-clip.png?v=1' } },
};

const STORY_BOOK = [
  { key: '磨牙棒', name: '磨牙期（幼年/少年）', emoji: '🍪', icon: 'assets/ui/item-teether.png?v=2' },
  { key: '磨牙棒_adult', name: '磨牙期（成年）', emoji: '🍪', icon: 'assets/ui/item-teether.png?v=2' },
  { key: '棉花娃娃', name: '玩偶', emoji: '🧸', icon: 'assets/ui/item-doll.png?v=2' },
  { key: '手机', name: '手机聊天', emoji: '📱', icon: 'assets/ui/item-phone.png?v=2' },
  { key: '头纱', name: '头纱（幼年/少年）', icon: 'assets/ui/item-veil.png?v=1' },
  { key: '头纱_adult', name: '头纱（成年）', icon: 'assets/ui/item-veil.png?v=1' },
  { key: '巧克力蛋糕', name: '巧克力蛋糕', icon: 'assets/ui/item-chocolate-cake.png?v=2' },
  { key: '哆啦A梦主题蛋糕', name: '哆啦A梦主题蛋糕', icon: 'assets/ui/item-robot-cat-cake.png?v=2' },
  { key: 'park', name: '公园散步', emoji: '🌳', icon: 'assets/ui/ticket-park.png?v=2' },
  { key: 'dessert', name: '甜品店', emoji: '🍰', icon: 'assets/ui/ticket-dessert.png?v=2' },
  { key: 'amusement', name: '游乐园', emoji: '🎡', icon: 'assets/ui/ticket-amusement.png?v=2' },
  { key: 'haunted', name: '鬼屋', icon: 'assets/ui/ticket-haunted-v2.png?v=1' },
  { key: 'hot_spring', name: '温泉', icon: 'assets/ui/ticket-hot-spring.png?v=2' },
  { key: 'camp', name: '露营', icon: 'assets/ui/ticket-camp.png?v=2' },
  { key: 'beach', name: '赶海', icon: 'assets/ui/ticket-beach.png?v=2' },
  { key: 'pop_up', name: '快闪', icon: 'assets/ui/ticket-pop-up.png?v=2' },
  { key: 'firework', name: '海边烟花', emoji: '🎆', icon: 'assets/ui/ticket-firework.png?v=2' },
];

const CHARACTERS = {
  wang: { id: 'wang', name: 'LuLu', faceClass: 'cool', tags: ['外冷内热','沉静寡言','坚韧隐忍','自有主见','内柔外刚'], likes: '喜欢 MuMu',
    lines: { bath: ['（面无表情地点头）','……洗好了。'], play: ['（嘴角微微上扬）','……还行。','（难得地笑了）'], sick: ['……没事。'] } },
  mu:   { id: 'mu', name: 'MuMu', faceClass: 'pink', tags: ['开朗温暖','真诚谦和','心思细腻','勇于担当','活泼稳重'], likes: '喜欢 LuLu',
    lines: { bath: ['洗香香啦！','嘿嘿，舒服！'], play: ['再来一次再来一次！','好好玩！','和你一起玩最开心！'], sick: ['好难受……呜……'] } },
};

let S = null;
let gameStarted = false;
let startingGame = false;
let openingAssetsPromise = null;
let openingStage = '';
let warmedStage = '';
let warmedNextStage = '';
const characterImageCache = new Map();
let pageVisible = true;
let lastTickAt = 0;
let merge = null;
let dance = null;
let danceTimer = null;
let danceAudioCtx = null;
let danceAssetsPromise = null;
let dancePaused = false;
let backgroundMusic = null;
let storyMusic = null;
let storyMusicSrc = '';
let headphonesMusic = null;
let sleepMusic = null;
let sleepMusicSrc = '';
let sleepMusicStage = '';
let selectedSleepSrc = '';
let danceMusic = null;
let currentMusic = null;
let danceKeySound = null;
let settingsFeedbackSound = null;
let lastSettingsFeedbackAt = 0;
let voiceAudio = null;
let voiceAudioCtx = null;
let voiceGainNode = null;
let voiceCompressor = null;
let voiceSourceNode = null;
let currentVoiceBoost = 1;
const VOICE_BOOST = {
  'wandoujian.m4a': 1,
  'hangbaole.m4a': 2.8,
  'wljplay.m4a': 2.6,
  'mzcplay.m4a': 2.6,
  'wljbadanmu.m4a': 2.8,
  'wljbupeng.m4a': 2.8,
  'wljjuhaochi.m4a': 2.8,
  'amusement-ending.m4a': 0.8
};
const DANCE_TUTORIAL_KEY = 'lm-dance-tutorial-v1';
const DANCE_DIRS = ['up', 'left', 'down', 'right'];
const DANCE_ARROWS = { up: '↑', left: '←', down: '↓', right: '→' };
const DANCE_POSES = {
  up: 'assets/chars/dance-up-stage.png',
  down: 'assets/chars/dance-down-stage.png',
  left: 'assets/chars/dance-left-stage.png',
  right: 'assets/chars/dance-right-stage.png'
};
let bubbleTimer = null;
let ZONES = { sit: [], sleep: [], stand: [] };
let ACTIVABLE_ZONE = { width: 0, height: 0, data: null };
// 黑白图只保留作房间布局参考。实际落点使用手工校准的锚点，
// 避免 JPG 边缘、缩放和大块黑色区域让人物抽到不合适的位置。
const SAFE_ZONE_SPOTS = {
  sit: [
    { left: 57, bottom: 39 }, { left: 66, bottom: 39 }, { left: 75, bottom: 38 }
  ],
  sleep: [
    { left: 24, bottom: 20 }, { left: 45, bottom: 20 }
  ],
  stand: [
    { left: 40, bottom: 25 }, { left: 51, bottom: 22 }, { left: 61, bottom: 20 },
    { left: 72, bottom: 19 }, { left: 79, bottom: 18 }
  ]
};
let placement = null;
let story = null;
let foodTab = 'staple';
let confirmCallback = null;
let confirmCancelCallback = null;

const DEFAULT_SETTINGS = { musicVol: 0.7, sfxVol: 0.7, voiceVol: 0.7, muted: false, fontSize: 'std' };

/* ================== 状态 ================== */
function newState() {
  return {
    gameHours: 0, gameHourRemainder: 0, clockBaseMs: Date.now(), clockBaseGameHours: 0, clockInitialized: false, speedIdx: 1, version: 12, guideSeen: false, hasEverBeenInLove: false, coins: 0, bond: CONFIG.bond.init,
    settings: Object.assign({}, DEFAULT_SETTINGS),
    dating: false, broken: false, celebrateLove: false,
    lastCareHour: 0, coldDone: false, sleepPairVariant: null, lastCompanionBondDay: 1,
    lastDateHour: -999, noDateDone: true,
    phoneOwned: false, phonePurchaseDay: -1, phonePurchaseHour: -1, phoneDailyStartDay: -1, phoneRomanceStartDay: -1, phoneReadIds: [], phoneRewardIds: [],
    lastRecoverDay: -1, checkInDay: -1,
    datesToday: 0, lastDateDay: -1, lastVenueId: null,
    danceHighScore: 0, danceRewardDay: -1, danceRewardCoins: 0, danceCapNoticeDay: -1,
    stats: { care: 0, date: 0, mergeCoins: 0, companionBond: 0 },
    log: [],
    stageNoticeQueue: [],
    inv: {},
    accessoriesOwned: {},
    equippedAccessories: { wang: { headwear: null, glasses: null, necklace: null }, mu: { headwear: null, glasses: null, necklace: null } },
    seen: {},
    chars: {
      wang: { hunger: 100, clean: 100, mood: 100, energy: 100, sick: false, sickStreak: 0, emotionOverride: null, emotionUntil: 0, manualPos: false, spot: 'bed', posture: 'baby', pos: { left: 34.2, bottom: 37 } },
      mu:   { hunger: 100, clean: 100, mood: 100, energy: 100, sick: false, sickStreak: 0, emotionOverride: null, emotionUntil: 0, manualPos: false, spot: 'bed', posture: 'baby', pos: { left: 65.4, bottom: 37 } },
    },
  };
}

const SAVE_KEY = 'yiluyimu_demo_v1';
const SURVEY_DONE_KEY = 'yiluyimu_survey_done';
const SURVEY_PENDING_KEY = 'yiluyimu_survey_pending';
let saveBlocked = false;
function showSaveWarning(text = '') {
  if (typeof document === 'undefined') return;
  const notice = $id('saveWarning');
  if (!notice) return;
  notice.textContent = text;
  notice.classList.toggle('hidden', !text);
}
function save(state = S, importing = false) {
  if (saveBlocked && !importing) return false;
  try {
    const timestamp = Date.now();
    localStorage.setItem(SAVE_KEY, JSON.stringify({ ...state, lastSaveTimestamp: timestamp }));
    state.lastSaveTimestamp = timestamp;
    saveBlocked = false;
    showSaveWarning();
    return true;
  } catch (e) {
    showSaveWarning('⚠️ 进度保存失败，请到设置中导出存档备份，暂勿关闭游戏。');
    return false;
  }
}
function prepareSave(d) {
  const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const requireValue = (valid, field) => { if (!valid) throw new Error('存档内容不完整或无效：' + field); };
  requireValue(record(d), '根结构');
  for (const field of ['gameHours', 'coins', 'bond']) requireValue(Number.isFinite(d[field]) && d[field] >= 0, field);
  requireValue(d.bond <= CONFIG.bond.max, 'bond');
  requireValue(record(d.chars), 'chars');
  const defaults = newState();
  const legacyVersion = d.version || 0;
  for (const [field, value] of Object.entries(defaults)) {
    if (d[field] === undefined) continue;
    if (typeof value === 'boolean') requireValue(typeof d[field] === 'boolean', field);
    if (typeof value === 'number') {
      const realDay = legacyVersion < 12 && ['checkInDay', 'danceRewardDay', 'danceCapNoticeDay'].includes(field) && /^\d+$/.test(d[field]);
      requireValue(Number.isFinite(d[field]) || realDay, field);
    }
    if (record(value)) requireValue(record(d[field]), field);
    if (Array.isArray(value)) requireValue(Array.isArray(d[field]), field);
  }
  for (const key of ['wang', 'mu']) {
    const c = d.chars[key];
    requireValue(record(c), 'chars.' + key);
    for (const field of ['hunger', 'clean', 'mood', 'energy']) requireValue(Number.isFinite(c[field]) && c[field] >= 0 && c[field] <= 100, key + '.' + field);
    if (c.pos !== undefined) requireValue(record(c.pos) && Number.isFinite(c.pos.left) && Number.isFinite(c.pos.bottom), key + '.pos');
    for (const field of ['sick', 'manualPos']) if (c[field] !== undefined) requireValue(typeof c[field] === 'boolean', key + '.' + field);
    for (const field of ['sickStreak', 'emotionUntil']) if (c[field] !== undefined) requireValue(Number.isFinite(c[field]), key + '.' + field);
    d.chars[key] = { ...defaults.chars[key], ...c, spot: c.spot || 'floor', posture: c.posture || 'stand' };
  }
  for (const [key, count] of Object.entries(d.inv || {})) requireValue(Number.isInteger(count) && count >= 0, 'inv.' + key);
  for (const [key, value] of Object.entries(d.stats || {})) requireValue(Number.isFinite(value) && value >= 0, 'stats.' + key);
  for (const field of ['musicVol', 'sfxVol', 'voiceVol']) if (d.settings?.[field] !== undefined) requireValue(Number.isFinite(d.settings[field]) && d.settings[field] >= 0 && d.settings[field] <= 1, field);
  if (d.settings?.fontSize !== undefined) requireValue(['small', 'std', 'large'].includes(d.settings.fontSize), 'fontSize');
  if (d.settings?.muted !== undefined) requireValue(typeof d.settings.muted === 'boolean', 'muted');
  for (const key of ['wang', 'mu']) if (d.equippedAccessories?.[key] !== undefined) requireValue(record(d.equippedAccessories[key]), 'equippedAccessories.' + key);
  if (d.log) for (const entry of d.log) requireValue(record(entry) && ['t', 'cat', 'msg'].every(key => typeof entry[key] === 'string'), 'log');
  if (d.phoneReadIds) requireValue(d.phoneReadIds.every(id => typeof id === 'string'), 'phoneReadIds');
  if (d.phoneRewardIds) requireValue(d.phoneRewardIds.every(id => typeof id === 'string'), 'phoneRewardIds');
  if (d.stageNoticeQueue) requireValue(d.stageNoticeQueue.every(stage => typeof stage === 'string'), 'stageNoticeQueue');
  if (d.lastSaveTimestamp !== undefined) requireValue(Number.isFinite(d.lastSaveTimestamp) && d.lastSaveTimestamp >= 0, 'lastSaveTimestamp');
  if (d.clockInitialized !== undefined) requireValue(typeof d.clockInitialized === 'boolean', 'clockInitialized');
  if (d.gameHourRemainder !== undefined) requireValue(d.gameHourRemainder >= 0 && d.gameHourRemainder < 1, 'gameHourRemainder');
  if (d.speedIdx !== undefined) requireValue(Number.isInteger(d.speedIdx) && !!CONFIG.speeds[d.speedIdx], 'speedIdx');
  const initialized = d.clockInitialized === undefined ? true : d.clockInitialized;
  if (d.clockBaseGameHours === undefined) d.clockBaseGameHours = d.gameHours;
  if (d.lastCompanionBondDay === undefined) d.lastCompanionBondDay = Math.floor(Math.max(0, d.gameHours - 8) / 24) + 1;
  d = { ...defaults, ...d, settings: { ...DEFAULT_SETTINGS, ...d.settings }, stats: { ...defaults.stats, ...d.stats } };
  d.clockInitialized = initialized;
  d.clockBaseGameHours = Number.isFinite(d.clockBaseGameHours) ? d.clockBaseGameHours : d.gameHours;
  // 缺失的旧存档字段按原迁移规则补齐，不改变已保存的时钟起点。
  if (legacyVersion < 5) d.speedIdx = 1;
  if (Number.isFinite(d.offlineRemainderMs) && d.offlineRemainderMs > 0) d.gameHourRemainder += d.offlineRemainderMs / (CONFIG.speeds[d.speedIdx].secPerHour * 1000);
  delete d.offlineRemainderMs;
  const displayMs = d.clockBaseMs + (d.gameHours + d.gameHourRemainder - d.clockBaseGameHours) * 3600000;
  requireValue(Number.isFinite(displayMs) && Math.abs(displayMs) <= 8640000000000000 - 72 * 3600000, '游戏时钟范围');
  d.version = Math.max(12, legacyVersion);
  if (legacyVersion < 11) for (const key of ['磨牙棒', '头纱']) {
    if (d.seen[key]) d.seen[key + '_adult'] = true;
  }
  d.hasEverBeenInLove = !!(d.hasEverBeenInLove || d.dating || d.broken);
  if (legacyVersion < 12) {
    const oldRealDay = Number(realDayKey());
    const currentGameDay = gameDayKey(d);
    const shift = currentGameDay - oldRealDay;
    // 旧版本已经排队但尚未关闭的成长弹窗，也要与新版奖励一致。
    d.coins += d.stageNoticeQueue.filter(stage => ['幼年', '少年', '成年'].includes(stage)).length * 50;
    d.checkInDay = String(d.checkInDay) === String(oldRealDay) ? currentGameDay : -1;
    if (d.danceRewardDay !== undefined) {
      if (String(d.danceRewardDay) === String(oldRealDay)) d.danceRewardDay = currentGameDay;
      else { d.danceRewardDay = -1; d.danceRewardCoins = 0; }
    }
    d.danceCapNoticeDay = String(d.danceCapNoticeDay) === String(oldRealDay) ? currentGameDay : -1;
    d.lastDateDay = d.lastDateDay === Math.floor(d.gameHours / 24) ? currentGameDay : -1;
    d.lastRecoverDay = d.lastRecoverDay === Math.floor(d.gameHours / 24) ? currentGameDay : -1;
    d.lastCompanionBondDay = currentGameDay - Math.floor((d.clockBaseMs + 8 * 3600000) / 86400000) + 1;
    if (d.phoneOwned) {
      d.phoneDailyStartDay = (d.phoneDailyStartDay < 0 ? oldRealDay : d.phoneDailyStartDay) + shift;
      if (d.hasEverBeenInLove) d.phoneRomanceStartDay = (d.phoneRomanceStartDay < 0 ? oldRealDay : d.phoneRomanceStartDay) + shift;
    }
    if (d.gameHours >= CONFIG.adultHours) for (const c of Object.values(d.chars)) {
      c.hunger = 100; c.clean = 100; c.mood = 100; c.energy = 100; c.sick = false; c.sickStreak = 0;
    }
    d.guideSeen = true;
  }
  if (d.phoneOwned) {
    if (d.phonePurchaseHour < 0) d.phonePurchaseHour = d.phonePurchaseDay >= 0 ? d.phonePurchaseDay * 24 : d.gameHours;
    if (d.phoneDailyStartDay < 0) d.phoneDailyStartDay = gameDayKey(d);
    if (d.hasEverBeenInLove && d.phoneRomanceStartDay < 0) d.phoneRomanceStartDay = gameDayKey(d);
  }
  d.lastCompanionBondDay = Number.isFinite(d.lastCompanionBondDay) ? d.lastCompanionBondDay : Math.floor(Math.max(0, d.gameHours - 8) / 24) + 1;
  for (const key of ['wang', 'mu']) d.equippedAccessories[key] = { ...defaults.equippedAccessories[key], ...d.equippedAccessories[key] };
  if (![1, 2].includes(d.sleepPairVariant)) d.sleepPairVariant = null;
  return d;
}
function load() {
  const previous = S;
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    S = prepareSave(JSON.parse(raw));
    applyOfflineProgress();
    return true;
  } catch (e) {
    S = previous;
    saveBlocked = true;
    showSaveWarning('⚠️ 本地存档无法读取，已保留原文件并暂停自动覆盖。请导入有效备份，或确认重置后重新开始。');
    return false;
  }
}
function reset() {
  openConfirm('确定要重置吗？当前进度会丢失。', () => {
    S = newState();
    if (gameStarted) initializeGameClock(Date.now());
    lastTickAt = Date.now();
    saveBlocked = false; // 用户明确确认重置后，允许替换无法读取的旧存档。
    save(); render();
  }, '确定重置');
}

/* ================== 工具 ================== */
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function $id(id) { return document.getElementById(id); }
function gameClockMs() {
  const baseHours = Number.isFinite(S.clockBaseGameHours) ? S.clockBaseGameHours : 8;
  return (Number(S.clockBaseMs) || Date.now()) + (S.gameHours + (Number(S.gameHourRemainder) || 0) - baseHours) * 3600000;
}
function clockText() {
  const displayMs = gameClockMs();
  const parts = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date(displayMs));
  const h = parts.find(p => p.type === 'hour')?.value || '00';
  const m = parts.find(p => p.type === 'minute')?.value || '00';
  // 天数按游戏内累计时间计算，不因重新打开页面或启动游戏而回到第 1 天。
  const d = displayDayNumber();
  return `第 ${Math.max(1, d)} 天 ${h}:${m}`;
}
function displayDayNumber() { return dayOf() - Math.floor((S.clockBaseMs + 8 * 3600000) / 86400000) + 1; }
function isAdult() { return S.gameHours >= CONFIG.adultHours; }
function getStage() {
  const h = S.gameHours;
  if (h < 12) return CONFIG.stages[0];
  if (h < 60) return CONFIG.stages[1];
  if (h < 180) return CONFIG.stages[2];
  return { name: '成年', hours: Infinity, decay: { hunger: 0, clean: 0, mood: 0, energy: 0 } };
}
const STAGE_NOTICE = {
  '幼年': '他们学会坐稳啦！现在可以一起坐在地毯上玩耍。',
  '少年': '他们进入少年期啦！手机功能也随之开放。',
  '成年': '他们成年啦！从现在起，可以安排约会，让羁绊继续成长。',
};
function queueStageNotice(stageName) {
  if (!STAGE_NOTICE[stageName]) return;
  if (!Array.isArray(S.stageNoticeQueue)) S.stageNoticeQueue = [];
  S.stageNoticeQueue.push(stageName);
  S.coins += 50;
  addLog('成长', `达到${stageName}阶段，获得 50 金币。`);
}
function ageLabel() { return Math.min(18, Math.floor(S.gameHours / 10)) + '岁'; }
function sleepingNow() {
  // 睡眠状态必须跟界面显示的北京时间一致，不能使用成长累计小时取余。
  const h = beijingHour();
  return isNightTime(h) || (!isAdult() && h >= 12 && h < 13);
}
function beijingHour() {
  const parts = new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', hour: '2-digit', hour12: false }).formatToParts(new Date(gameClockMs()));
  return Number(parts.find(p => p.type === 'hour')?.value || 0) % 24;
}
function isNightTime(hour = beijingHour()) { return hour >= 23 || hour < 8; }
function blockCharacterInteractionDuringSleep() {
  if (!sleepingNow()) return false;
  flash('他们正在睡觉，等醒来后再互动吧 😴');
  return true;
}
function gameDayKey(state = S) {
  const baseHours = Number.isFinite(state.clockBaseGameHours) ? state.clockBaseGameHours : 8;
  const ms = state.clockBaseMs + (state.gameHours + (state.gameHourRemainder || 0) - baseHours) * 3600000;
  return Math.floor((ms + 8 * 3600000) / 86400000);
}
function dayOf() { return gameDayKey(); }
// 仅用于旧存档转换；新玩法的每日额度均按游戏时钟结算。
function realDayKey(now = Date.now()) { return Math.floor((now + 8 * 3600000) / 86400000).toString(); }
function addLog(cat, msg) { S.log.unshift({ t: clockText(), cat, msg }); if (S.log.length > 80) S.log.length = 80; }
function flash(text) {
  const b = $id('bubble');
  b.classList.remove('bond-gain');
  b.style.top = '';
  b.textContent = text;
  b.classList.remove('hidden');
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(() => b.classList.add('hidden'), 3000);
}
function flashHud(text) {
  flash(text);
  const b = $id('bubble');
  b.classList.add('bond-gain');
  b.style.top = Math.ceil(document.querySelector('.hud-top').getBoundingClientRect().bottom + 2) + 'px';
}
function flashBondGain(gain) {
  if (!Number.isFinite(gain) || gain < 0) return;
  flashHud(gain ? `羁绊 +${gain}` : '羁绊已达上限');
}

/* ================== 黑白区域解析 ================== */
async function loadZones() {
  for (const key of ['sit', 'sleep', 'stand']) {
    try {
      const img = new Image();
      img.src = `assets/room/zones-${key}.jpg`;
      await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
      const cv = document.createElement('canvas');
      cv.width = img.width; cv.height = img.height;
      const ctx = cv.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, img.width, img.height).data;
      const cell = 36;
      const cols = Math.ceil(img.width / cell), rows = Math.ceil(img.height / cell);
      const grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({ n: 0, sx: 0, sy: 0 })));
      for (let y = 0; y < img.height; y += 2) {
        for (let x = 0; x < img.width; x += 2) {
          const i = (y * img.width + x) * 4;
          if (data[i] < 100 && data[i + 1] < 100 && data[i + 2] < 100) {
            const g = grid[Math.floor(y / cell)][Math.floor(x / cell)];
            g.n++; g.sx += x; g.sy += y;
          }
        }
      }
      const spots = [];
      for (let gy = 0; gy < rows; gy++) for (let gx = 0; gx < cols; gx++) {
        const g = grid[gy][gx];
        if (g.n > 15) {
          const cx = g.sx / g.n, cy = g.sy / g.n;
          spots.push({ left: (cx / img.width) * 100, bottom: 100 - (cy / img.height) * 100 });
        }
      }
      ZONES[key] = spots;
    } catch (e) { ZONES[key] = []; }
  }
  try {
    const img = new Image();
    img.src = 'assets/room/zones-activable.png';
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
    const cv = document.createElement('canvas');
    cv.width = img.width; cv.height = img.height;
    const ctx = cv.getContext('2d');
    ctx.drawImage(img, 0, 0);
    ACTIVABLE_ZONE = { width: img.width, height: img.height, data: ctx.getImageData(0, 0, img.width, img.height).data };
  } catch (e) { ACTIVABLE_ZONE = { width: 0, height: 0, data: null }; }
}
function isActivablePoint(left, bottom) {
  if (!ACTIVABLE_ZONE.data) return true;
  const x = Math.max(0, Math.min(ACTIVABLE_ZONE.width - 1, Math.round(left / 100 * ACTIVABLE_ZONE.width)));
  const y = Math.max(0, Math.min(ACTIVABLE_ZONE.height - 1, Math.round((1 - bottom / 100) * ACTIVABLE_ZONE.height)));
  const i = (y * ACTIVABLE_ZONE.width + x) * 4;
  const d = ACTIVABLE_ZONE.data;
  // 可活动图是黑白稿：黑色才是可放置区域，白色背景必须判定为不可放置。
  return d[i + 3] > 100 && d[i] < 90 && d[i + 1] < 90 && d[i + 2] < 90;
}
function zoneSpot(key) {
  const safeSpots = SAFE_ZONE_SPOTS[key];
  if (safeSpots && safeSpots.length) return pick(safeSpots);
  const spots = ZONES[key];
  const fb = { sit: { left: 20, bottom: 22 }, sleep: { left: 70, bottom: 24 }, stand: { left: 30, bottom: 20 } };
  if (!spots.length) return fb[key] || fb.stand;
  return pick(spots);
}
function freeSpot() { return { left: 15 + Math.random() * 70, bottom: 4 + Math.random() * 34 }; }

/* ================== 核心逻辑 ================== */
function tickOneHour() {
  const previousStage = getStage().name;
  S.gameHours++;
  const st = getStage();
  if (st.name !== previousStage) {
    if (st.name === '成年') for (const c of Object.values(S.chars)) {
      c.hunger = 100; c.clean = 100; c.mood = 100; c.energy = 100;
      c.sick = false; c.sickStreak = 0;
    }
    queueStageNotice(st.name);
    // 成长时立刻更新立绘和固定活动位置，不等下一轮自主活动。
    applyBehavior('wang');
    applyBehavior('mu');
  }
  const sleeping = sleepingNow();
  const adult = isAdult();
  for (const key of ['wang', 'mu']) {
    const c = S.chars[key];
    if (adult) { c.sick = false; c.sickStreak = 0; continue; }
    c.hunger = Math.max(0, c.hunger - (previousStage === '婴儿' ? CONFIG.decay.babyHunger : CONFIG.decay.hunger));
    c.clean = Math.max(0, c.clean - CONFIG.decay.clean);
    c.mood = Math.max(0, c.mood + getMoodDecay());
    if (sleeping) c.energy = Math.min(100, c.energy + 5); else c.energy = Math.max(0, c.energy - CONFIG.decay.energy);
    const underDanger = c.hunger < CONFIG.danger || c.clean < CONFIG.danger || c.mood < CONFIG.danger;
    c.sickStreak = underDanger ? c.sickStreak + 1 : 0;
    const wasSick = c.sick;
    c.sick = c.sickStreak >= CONFIG.sickHours;
    if (!wasSick && c.sick) addLog('🤒 生病', `${CHARACTERS[key].name} 生病了！快用药，并补足饱食、清洁和心情。`);
  }
  if (!adult) {
    let low = 0, sick = false;
    for (const key of ['wang', 'mu']) {
      const c = S.chars[key];
      if (c.sick) sick = true;
      low += (c.hunger < CONFIG.critical ? 1 : 0) + (c.clean < CONFIG.critical ? 1 : 0) + (c.mood < CONFIG.critical ? 1 : 0);
    }
    let loss = Math.min(CONFIG.bond.lowLossCap, low * CONFIG.bond.lowLoss);
    if (sick) loss *= 2;
    if (loss > 0) S.bond = Math.max(0, S.bond - loss);
  }
  if (!adult && !S.coldDone && S.gameHours - S.lastCareHour >= CONFIG.bond.coldHours) {
    S.bond = Math.max(0, S.bond - CONFIG.bond.coldPenalty); S.coldDone = true;
    addLog('💔 冷落', '他们已经很久没被理睬了……（羁绊 -3）');
  }
  // 恋爱期每完整 24 小时未约会都结算一次；推进基准时间，下一天会继续扣除。
  if (S.dating && S.gameHours - S.lastDateHour >= CONFIG.bond.noDateEvery) {
    S.bond = Math.max(0, S.bond - CONFIG.bond.noDatePenalty);
    if (adult) for (const c of Object.values(S.chars)) c.mood = Math.max(0, c.mood - 10);
    S.lastDateHour += CONFIG.bond.noDateEvery;
    addLog('😢 想念', adult ? '已经 24 小时没有约会了……（羁绊 -3，两人心情各 -10）' : '已经 24 小时没有约会了……（羁绊 -3）');
  }
  if (S.lastDateDay !== -1 && dayOf() !== S.lastDateDay) S.datesToday = 0;
  updateRelationship();
  settleDailyCompanionship();
}
function settleDailyCompanionship() {
  const today = displayDayNumber();
  if (today <= S.lastCompanionBondDay) return;
  S.lastCompanionBondDay = today;
  if (isAdult()) {
    const lowMood = Object.values(S.chars).filter(c => c.mood < CONFIG.critical).length;
    if (lowMood) {
      S.bond = Math.max(0, S.bond - lowMood);
      addLog('😢 心情低落', `${lowMood} 人心情过低，羁绊 -${lowMood}`);
      updateRelationship();
    }
  }
  const rel = relState();
  if (rel === 'qijiao' || rel === 'argue' || rel === 'broken') {
    addLog('💭 陪伴', `第 ${today} 天：关系不佳，今日未增加羁绊。`);
    return;
  }
  const max = S.dating ? CONFIG.bond.max : CONFIG.bond.maxPre;
  const before = S.bond;
  S.bond = Math.min(max, S.bond + CONFIG.bond.companionPerDay);
  const gain = S.bond - before;
  if (isAdult()) for (const c of Object.values(S.chars)) c.mood = Math.min(100, c.mood + 3);
  if (gain > 0) {
    S.stats.companionBond += gain;
    addLog('💞 每日陪伴', `一起度过第 ${today} 天，羁绊 +${gain}`);
    updateRelationship();
  }
}
function setEmotion(key, emotion, duration = 2200) {
  const c = S.chars[key];
  c.emotionOverride = emotion;
  c.emotionUntil = Date.now() + duration;
}
function activeEmotion(key) {
  const c = S.chars[key];
  if (c.emotionOverride && c.emotionUntil > Date.now()) return c.emotionOverride;
  c.emotionOverride = null;
  return null;
}
function showPlayFeedback(key) {
  const layer = $id('playFeedbackLayer');
  if (!layer) return;
  const c = S.chars[key];
  const node = document.createElement('div');
  node.className = 'play-feedback';
  node.style.left = `${c.lastLeft || c.pos?.left || 50}%`;
  node.style.bottom = `${Math.min(82, (c.lastBottom || c.pos?.bottom || 20) + 16)}%`;
  node.innerHTML = '<div class="play-hearts">♥ ♥</div><div class="play-values">心情 +15　精力 -15</div>';
  layer.appendChild(node);
  setTimeout(() => node.remove(), 1900);
}

function phoneAvailable() { return S.gameHours >= 60; } // 少年期起可购买与使用
// 按真实经过时间推进。余量以“游戏小时的小数部分”保存，切换速度也不会丢时间。
function advanceByElapsed(elapsedMs, offline = false) {
  const speed = CONFIG.speeds[S.speedIdx] || CONFIG.speeds[1];
  const hourMs = speed.secPerHour * 1000;
  const capMs = CONFIG.offlineCapHours * hourMs;
  const wasCapped = elapsedMs > capMs;
  const elapsed = Math.min(Math.max(0, elapsedMs), capMs);
  const totalHours = Math.max(0, Number(S.gameHourRemainder) || 0) + elapsed / hourMs;
  const requestedHours = Math.floor(totalHours);
  const hours = Math.min(CONFIG.offlineCapHours, requestedHours);
  const remainder = wasCapped ? 0 : totalHours - hours;
  S.gameHourRemainder = 0;
  for (let i = 0; i < hours; i++) tickOneHour();
  S.gameHourRemainder = remainder;
  // 游戏午夜可能落在两个整点之间；每日陪伴也要在跨日时结算。
  if (displayDayNumber() > S.lastCompanionBondDay) settleDailyCompanionship();
  if (offline && hours > 0) {
    addLog('⏳ 离线补算', wasCapped ? `离开时间较长，已补算上限 ${hours} 小时。` : `已补算离线期间 ${hours} 小时。`);
  }
  return hours;
}

// 关闭或休眠期间，按离开时所选速度补算；单次最多 72 游戏小时，避免久未打开直接崩盘。
function applyOfflineProgress() {
  if (S.clockInitialized === false) return 0;
  const savedAt = Number(S.lastSaveTimestamp);
  if (!Number.isFinite(savedAt) || savedAt <= 0) return 0;
  return advanceByElapsed(Date.now() - savedAt, true);
}
function initializeGameClock(now) {
  if (S.clockInitialized !== false) return;
  S.clockBaseMs = now;
  S.clockBaseGameHours = S.gameHours;
  S.gameHourRemainder = 0;
  S.clockInitialized = true;
}
function settleElapsed(now) {
  const hours = advanceByElapsed(now - lastTickAt);
  lastTickAt = now;
  return hours;
}
async function startGame() {
  if (startingGame || gameStarted) return;
  startingGame = true;
  try {
    voiceAudioCtx = voiceAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
    voiceAudioCtx.resume().catch(() => {});
  } catch (e) {}
  const loadingTimer = setTimeout(() => $id('startLoading').classList.remove('hidden'), 180);
  let openingTimeout;
  try {
    await Promise.race([preloadOpeningAssets(), new Promise(resolve => { openingTimeout = setTimeout(resolve, 10000); })]);
  }
  finally {
    clearTimeout(openingTimeout);
    clearTimeout(loadingTimer);
    $id('startLoading').classList.add('hidden');
    startingGame = false;
  }
  const enteredAt = Date.now();
  if (S.clockInitialized === false) initializeGameClock(enteredAt);
  else settleElapsed(enteredAt); // 已开始过的存档，开屏等待也延续游戏时间。
  lastTickAt = enteredAt;
  gameStarted = true;
  $id('startScreen').classList.add('hidden');
  const firstVisit = !S.guideSeen;
  S.guideSeen = true;
  save(); render();
  if (firstVisit && typeof document !== 'undefined') openGuide();
}
function changeSpeed(index) {
  if (!CONFIG.speeds[index]) return;
  const now = Date.now();
  if (S.clockInitialized !== false) settleElapsed(now); // 切换前按旧速度结清，不能追溯套用新速度。
  else lastTickAt = now;
  S.speedIdx = index;
  save(); render();
}

function updateRelationship() {
  if (!S.hasEverBeenInLove) {
    if (S.bond >= CONFIG.bond.love && isAdult()) {
      S.hasEverBeenInLove = true; S.dating = true;
      if (S.phoneOwned) S.phoneRomanceStartDay = dayOf();
      S.lastDateHour = S.gameHours; S.noDateDone = false; S.celebrateLove = true;
      addLog('🩵🩷 恋爱进行时', '成年后，王橹杰鼓起勇气，牵住了穆祉丞的手。');
    }
    return;
  }
  // 曾经恋爱：热恋≥99 · 恋爱90~98 · 吵架60~89 · 分手<60
  if (S.bond < CONFIG.bond.break) {
    if (!S.broken) { S.dating = false; S.broken = true; addLog('💔 分手', '他们分手了……（可以挽回复合，成功则回弹 99）'); }
  } else {
    if (S.broken) { S.broken = false; S.dating = true; addLog('💞 复合', '他们重新在一起了。'); }
    S.dating = true;
  }
}

function relState() {
  if (!S.hasEverBeenInLove) return S.bond <= CONFIG.bond.qijiao ? 'qijiao' : 'normal';
  if (S.bond < CONFIG.bond.break) return 'broken';
  if (S.bond < CONFIG.bond.argue) return 'argue';
  return S.bond >= CONFIG.bond.love ? 'hot' : 'love';
}
const REL_LABEL = { broken: '分手了', qijiao: '绝交', normal: '普通朋友', argue: '吵架中', love: '恋爱中', hot: '热恋中' };
const REL_HINT = {
  broken: '他们分手了……挽回成功会直接回到 99（热恋）。',
  qijiao: '他们彻底不说话了……快去挽回！（买小礼物 / 撒娇 / 谈心）',
  normal: '从小一起长大的两个人，羁绊在慢慢积累。',
  argue: '两人在冷战……快去约个会哄哄他们吧！',
  love: '恋爱中！继续约会提升热恋值吧（99 以上为热恋值，封顶 120）。',
  hot: '热恋值满格！记得每天约会维持（超 24h 不约会会 -3）。',
};
function getMoodDecay() {
  if (!S.hasEverBeenInLove) return S.bond <= CONFIG.bond.qijiao ? -2 : -1;
  if (S.bond < CONFIG.bond.break) return -4;
  if (S.bond < CONFIG.bond.argue) return -2;
  return -1;
}

/* ================== 自主活动 ================== */
function pickBehavior(key) {
  const c = S.chars[key];
  const rel = relState();
  const sleeping = sleepingNow();
  const other = key === 'wang' ? 'mu' : 'wang';
  const otherSpot = S.chars[other].spot;
  // 婴儿尚不能自主活动：全天固定留在床上，不随行为计时器换位置。
  if (getStage().name === '婴儿') return { spot: 'bed', posture: 'baby' };
  // 只有夜间睡觉才会上床；白天即使疲惫或生病，也在房间其他区域活动/休息。
  if (sleeping) return { spot: 'bed', posture: 'lie' };
  // 幼年阶段使用坐姿立绘，固定坐在地毯上的两个位置。
  if (getStage().name === '幼年') return { spot: 'rug', posture: 'sit' };
  const r = Math.random();
  let spot;
  if (rel === 'love' || rel === 'hot') {
    if (otherSpot === 'sofa' && Math.random() < 0.6) spot = 'sofa';
    else if (r < 0.3) spot = 'sofa';
    else if (r < 0.6) spot = 'floor';
    else spot = 'window';
  } else if (rel === 'argue' || rel === 'qijiao' || rel === 'broken') {
    const candidates = ['window', 'floor', 'sofa'].filter(s => s !== otherSpot);
    spot = pick(candidates);
  } else {
    if (r < 0.35) spot = 'sofa';
    else if (r < 0.6) spot = 'floor';
    else spot = 'window';
  }
  const posture = spot === 'bed' ? 'lie' : spot === 'sofa' ? 'sit' : 'stand';
  return { spot, posture };
}
function otherOf(key) { return key === 'wang' ? 'mu' : 'wang'; }
function pickSpot(key, zoneKey) {
  const o = S.chars[otherOf(key)];
  const otherPos = o.pos;
  const candidates = (SAFE_ZONE_SPOTS[zoneKey] && SAFE_ZONE_SPOTS[zoneKey].length)
    ? SAFE_ZONE_SPOTS[zoneKey]
    : ZONES[zoneKey];
  // 同一区域中至少预留 18% 的安全间距，避免两张立绘叠在一起。
  if (otherPos && candidates && candidates.length) {
    const available = candidates.filter(spot => Math.hypot(spot.left - otherPos.left, spot.bottom - otherPos.bottom) >= 18);
    if (available.length) return pick(available);
  }
  return zoneSpot(zoneKey);
}
function applyBehavior(key) {
  const stageName = getStage().name;
  if (stageName !== '婴儿' && S.chars[key].manualPos) return;
  const b = pickBehavior(key);
  S.chars[key].spot = b.spot;
  S.chars[key].posture = b.posture;
  // 婴儿期固定在床上：两人不会移动，也不受昼夜状态切换影响。
  if (stageName === '婴儿') {
    S.chars[key].manualPos = false;
    S.chars[key].pos = key === 'wang'
      ? { left: 34.2, bottom: 37 }
      : { left: 65.4, bottom: 37 };
    return;
  }
  if (stageName === '幼年') {
    S.chars[key].pos = key === 'wang'
      ? { left: 69, bottom: 23.5 }
      : { left: 45, bottom: 17 };
    return;
  }
  S.chars[key].pos = b.spot === 'sofa' ? pickSpot(key, 'sit') : b.spot === 'bed' ? pickSpot(key, 'sleep') : pickSpot(key, 'stand');
}
let muTimer = null;
function behaviorLoop() {
  applyBehavior('wang');
  renderScene();
  clearTimeout(muTimer);
  muTimer = setTimeout(() => { applyBehavior('mu'); renderScene(); }, 900 + Math.random() * 900);
}
let behaviorTimer = null;
function scheduleBehavior() {
  // 角色移动是画面表现，不随真实时间倍率慢到数小时一次。
  const delay = getStage().name === '婴儿'
    ? 60000
    : (CONFIG.speeds[S.speedIdx].behaviorMs || CONFIG.behaviorIntervalMs);
  clearTimeout(behaviorTimer);
  behaviorTimer = setTimeout(() => { behaviorLoop(); scheduleBehavior(); }, delay);
}
/* ================== 操作 ================== */
function targetKeys() { const t = $id('target').value; return t === 'both' ? ['wang', 'mu'] : [t]; }

function doCare(type) {
  if (blockCharacterInteractionDuringSleep()) return;
  if (isAdult()) { flash('已经成年啦，不需要再照顾了 🎓'); return; }
  const keys = targetKeys();
  const dual = keys.length === 2;
  const st = getStage();
  if (type === 'play') {
    if (st.name === '婴儿') { flash('婴儿还太小，还不能玩耍'); return; }
    const tired = keys.filter(key => S.chars[key].energy < 20);
    if (tired.length) { flash(tired.map(key => CHARACTERS[key].name).join('、') + ' 精力不足，先让他睡觉吧'); return; }
  }
  for (const key of keys) {
    const c = S.chars[key];
    if (type === 'bath') c.clean = Math.min(100, c.clean + CONFIG.care.bath);
    else if (type === 'play') {
      c.mood = Math.min(100, c.mood + CONFIG.care.play);
      c.energy = Math.max(0, c.energy - CONFIG.care.playEnergy);
      setEmotion(key, 'happy');
    }
  }
  S.lastCareHour = S.gameHours; S.coldDone = false;
  S.stats.care++;
  const speaker = dual ? (Math.random() < 0.5 ? 'wang' : 'mu') : keys[0];
  const line = type === 'bath' ? CARE_LINES.bath[speaker] : CARE_LINES.play[speaker][dual ? 'dual' : 'single'];
  flash(`${CHARACTERS[speaker].name}：${line}`);
  addLog({ bath: '🛁 洗澡', play: '🎈 玩耍' }[type], `${CHARACTERS[speaker].name}：${line}`);
  if (type === 'play' && dual && st.name === '少年') playVoice(PLAY_AUDIO[speaker]);
  setActionPanel(false);
  updateRelationship(); render();
  if (type === 'play') keys.forEach(showPlayFeedback);
}

/* ---- 喂食（主食/甜品 + 喜好 + 台词）---- */
function openFood() {
  if (blockCharacterInteractionDuringSleep()) return;
  if (isAdult()) { flash('已经成年啦，不需要喂食了 🎓'); return; }
  foodTab = 'staple';
  renderFood();
  $id('overlayFood').classList.remove('hidden');
}
function renderFood() {
  const baby = getStage().name === '婴儿';
  if (baby) foodTab = 'staple';
  $id('tabStaple').classList.toggle('active', foodTab === 'staple');
  $id('tabDessert').classList.toggle('active', foodTab === 'dessert');
  $id('tabDessert').classList.toggle('hidden', baby);
  const list = baby ? ['奶粉'] : (foodTab === 'staple' ? FOOD_STAPLES : FOOD_DESSERTS);
  const t = $id('target').value;
  const grid = $id('foodGrid');
  grid.innerHTML = '';
  for (const food of list) {
    const cell = document.createElement('button');
    cell.className = 'food-cell';
    const keys = t === 'both' ? ['wang', 'mu'] : [t];
    let cls = '';
    for (const k of keys) {
      const p = FOOD_PREF[k];
      if (p.dislike.includes(food)) cls = 'dislike';
      else if (p.super.includes(food)) cls = 'super';
      else if (p.like.includes(food)) cls = cls === 'dislike' ? 'dislike' : 'like';
    }
    if (cls) cell.classList.add(cls);
    cell.textContent = food;
    cell.addEventListener('click', () => feedFood(food));
    grid.appendChild(cell);
  }
  const t2 = t === 'both' ? '两个人' : CHARACTERS[t].name;
  $id('foodHint').textContent = baby ? `正在给 ${t2} 冲奶粉：婴儿期只能喝奶粉。` : `正在喂 ${t2}：绿色=喜欢 粉色=特别喜欢 红色=不喜欢（会拒绝）`;
}
function feedFood(food) {
  if (blockCharacterInteractionDuringSleep()) return;
  const keys = targetKeys();
  const dual = keys.length === 2;
  if (getStage().name === '婴儿') {
    for (const key of keys) {
      const c = S.chars[key];
      c.hunger = Math.min(100, c.hunger + 50);
      c.mood = Math.min(100, c.mood + 5);
      setEmotion(key, 'happy');
    }
    const t2 = dual ? '他们' : CHARACTERS[keys[0]].name;
    flash(`${t2}喝完奶粉啦！`);
    addLog('🍼 喂奶', `${t2}喝完奶粉。`);
    $id('overlayFood').classList.add('hidden');
    setActionPanel(false);
    S.lastCareHour = S.gameHours; S.coldDone = false; S.stats.care++;
    updateRelationship(); render();
    return;
  }
  const isStaple = FOOD_STAPLES.includes(food);
  const lines = [];
  let audioSrc = null;
  for (const key of keys) {
    const c = S.chars[key];
    const p = FOOD_PREF[key];
    let line;
    if (p.dislike.includes(food)) {
      c.mood = Math.max(0, c.mood - 10);
      setEmotion(key, 'angry');
      line = (FOOD_LINES[food] && FOOD_LINES[food][key]) || `${CHARACTERS[key].name} 拒绝进食`;
    } else if (p.super.includes(food)) {
      c.hunger = Math.min(100, c.hunger + 50);
      c.mood = Math.min(100, c.mood + 10);
      setEmotion(key, 'happy');
      line = (FOOD_LINES[food] && FOOD_LINES[food][key]) || '最喜欢这个！';
    } else if (p.like.includes(food)) {
      if (isStaple) c.hunger = Math.min(100, c.hunger + 50); else c.mood = Math.min(100, c.mood + 45);
      setEmotion(key, 'happy');
      line = (FOOD_LINES[food] && FOOD_LINES[food][key]) || '喜欢！';
    } else {
      if (isStaple) c.hunger = Math.min(100, c.hunger + 50); else c.mood = Math.min(100, c.mood + 30);
      line = (FOOD_LINES[food] && FOOD_LINES[food][key]) || FOOD_FALLBACK[isStaple ? 'staple' : 'dessert'][key];
    }
    if (getStage().name === '少年' && FEED_AUDIO[food]?.[key]) audioSrc = FEED_AUDIO[food][key];
    lines.push(`${CHARACTERS[key].name}：${line}`);
  }
  S.lastCareHour = S.gameHours; S.coldDone = false;
  S.stats.care++;
  addLog('🍚 喂食 ' + food, lines.join(' / '));
  flash(lines.join(' / '));
  playVoice(audioSrc);
  $id('overlayFood').classList.add('hidden');
  setActionPanel(false);
  updateRelationship(); render();
}

/* ---- 商店 ---- */
/* ---- 商店（购买进背包）---- */
let shopTab = 'func';
function openShop() { shopTab = 'func'; renderShop(); $id('overlayShop').classList.remove('hidden'); }
function setShopTab(t) { shopTab = t; renderShop(); }
function itemIcon(it) { return it.icon ? `<img${it.cat === 'accessory' ? ' class="accessory-preview"' : ''} src="${it.icon}" alt="${it.name}">` : it.emoji; }
function renderShop() {
  $id('shopTabFunc').classList.toggle('active', shopTab === 'func');
  $id('shopTabStory').classList.toggle('active', shopTab === 'story');
  $id('shopTabTicket').classList.toggle('active', shopTab === 'ticket');
  $id('shopTabAccessory').classList.toggle('active', shopTab === 'accessory');
  const grid = $id('shopList');
  grid.className = 'shop-list shop-grid';
  grid.innerHTML = '';
  for (const [key, it] of Object.entries(SHOP)) {
    if (it.cat !== shopTab || it.retired) continue;
    const cell = document.createElement('div');
    cell.className = 'shop-cell';
    const ownedPhone = key === '手机' && S.phoneOwned;
    const ownedAccessory = it.cat === 'accessory' && !!S.accessoriesOwned[key];
    const phoneLocked = key === '手机' && !phoneAvailable();
    const accessoryLocked = it.cat === 'accessory' && !isAdult();
    const buyLabel = ownedPhone || ownedAccessory ? '已拥有'
      : phoneLocked ? '少年期解锁'
      : accessoryLocked ? '成年后解锁'
      : `<img class="price-coin" src="assets/ui/coin-ribbon-badge.png?v=3" alt="金币"><span class="price-value">${it.price}</span>`;
    cell.innerHTML = `<div class="si-icon">${itemIcon(it)}</div><div class="si-name">${it.name}</div><div class="si-effect">${it.effect}</div><button class="btn shop">${buyLabel}</button>`;
    const btn = cell.querySelector('button');
    btn.disabled = ownedPhone || ownedAccessory || phoneLocked || accessoryLocked || S.coins < it.price;
    btn.addEventListener('click', () => confirmPurchase(key));
    grid.appendChild(cell);
  }
  if (!grid.children.length) grid.innerHTML = '<div class="hint">该分类暂无商品</div>';
}
function confirmPurchase(key) {
  const it = SHOP[key];
  if (!it || it.retired) return;
  if (key === '手机' && !phoneAvailable()) { flash('少年期才能开始使用手机'); return; }
  if (key === '手机' && S.phoneOwned) { flash('手机已经放在主页啦'); return; }
  if (it.cat === 'accessory' && !isAdult()) { flash('成年后才能购买和佩戴配饰'); return; }
  if (it.cat === 'accessory' && S.accessoriesOwned[key]) { flash('这个配饰已经拥有啦'); return; }
  if (S.coins < it.price) { flash('金币不够'); return; }
  openConfirm(`确定花费 ${it.price} 金币购买「${it.name}」吗？`, () => buyItem(key), '确认购买', '确认购买');
}
function buyItem(key) {
  const it = SHOP[key];
  if (!it || it.retired) return;
  if (S.coins < it.price) { flash('金币不够'); return; }
  if (it.cat === 'accessory') {
    if (!isAdult()) { flash('成年后才能购买和佩戴配饰'); return; }
    if (S.accessoriesOwned[key]) { flash('这个配饰已经拥有啦'); return; }
    S.coins -= it.price;
    S.accessoriesOwned[key] = true;
    addLog('✨ 购买配饰', `${it.name}（-${it.price}💰），已放入背包`);
    flash(`已购买：${it.name}，请到背包中佩戴`);
    renderShop(); render();
    return;
  }
  S.coins -= it.price;
  if (key === '手机') {
    S.phoneOwned = true;
    S.phonePurchaseDay = dayOf();
    S.phonePurchaseHour = S.gameHours;
    S.phoneDailyStartDay = dayOf();
    S.phoneRomanceStartDay = S.hasEverBeenInLove ? S.phoneDailyStartDay : -1;
    S.phoneReadIds = [];
    S.phoneRewardIds = [];
    addLog('📱 购买手机', `手机已解锁，主页出现了聊天入口（-${it.price}💰）`);
    flash('手机已放到主页，点它查看第一段聊天吧');
    renderShop(); render();
    return;
  }
  S.inv[key] = (S.inv[key] || 0) + 1;
  addLog('🛍️ 购买', `${it.emoji} ${it.name}（-${it.price}💰）`);
  flash(`已购买：${it.name}，进背包啦`);
  renderShop(); render();
}

/* ---- 背包 ---- */
let bagTab = 'func';
function openBag() { bagTab = 'func'; renderBag(); $id('overlayBag').classList.remove('hidden'); }
function setBagTab(t) { bagTab = t; renderBag(); }
function renderBag() {
  $id('bagTabFunc').classList.toggle('active', bagTab === 'func');
  $id('bagTabStory').classList.toggle('active', bagTab === 'story');
  $id('bagTabTicket').classList.toggle('active', bagTab === 'ticket');
  $id('bagTabAccessory').classList.toggle('active', bagTab === 'accessory');
  const grid = $id('bagList');
  grid.className = 'shop-list shop-grid';
  grid.innerHTML = '';
  let any = false;
  for (const [key, it] of Object.entries(SHOP)) {
    if (it.cat !== bagTab) continue;
    const isAccessory = it.cat === 'accessory';
    const n = isAccessory ? (S.accessoriesOwned[key] ? 1 : 0) : (S.inv[key] || 0);
    if (n <= 0) continue;
    any = true;
    const cell = document.createElement('div');
    cell.className = 'shop-cell';
    if (isAccessory) {
      cell.innerHTML = `<div class="si-icon">${itemIcon(it)}</div><div class="si-name">${it.name}</div><div class="si-effect">${it.effect}</div><div class="accessory-actions"></div>`;
      const actions = cell.querySelector('.accessory-actions');
      for (const charKey of it.scope) {
        const equipped = S.equippedAccessories[charKey][it.category] === key;
        const btn = document.createElement('button');
        btn.className = 'btn small';
        btn.textContent = equipped ? '取下' : `给 ${CHARACTERS[charKey].name} 佩戴`;
        btn.disabled = !isAdult();
        btn.addEventListener('click', () => toggleAccessory(key, charKey));
        actions.appendChild(btn);
      }
    } else if (key === 'medicine') {
      cell.classList.add('medicine-cell');
      cell.innerHTML = `<div class="si-icon">${itemIcon(it)}</div><div class="si-name">${it.name}</div><div class="si-effect">${it.effect}</div><div class="si-count">×${n}</div><div class="accessory-actions"></div>`;
      const actions = cell.querySelector('.accessory-actions');
      for (const charKey of ['wang', 'mu']) {
        const btn = document.createElement('button');
        btn.className = 'btn small';
        btn.textContent = `给 ${CHARACTERS[charKey].name} 用药`;
        btn.disabled = !S.chars[charKey].sick;
        btn.addEventListener('click', () => useItem(key, charKey));
        actions.appendChild(btn);
      }
    } else {
      cell.innerHTML = `<div class="si-icon">${itemIcon(it)}</div><div class="si-name">${it.name}</div><div class="si-effect">${it.effect}</div><div class="si-count">×${n}</div><button class="btn">使用</button>`;
      cell.querySelector('button').addEventListener('click', () => useItem(key));
    }
    grid.appendChild(cell);
  }
  if (!any) grid.innerHTML = '<div class="hint">背包是空的，去商店逛逛吧～</div>';
}
function toggleAccessory(key, charKey) {
  const it = SHOP[key];
  if (!it || it.cat !== 'accessory' || !S.accessoriesOwned[key] || !it.scope.includes(charKey)) return;
  if (!isAdult()) { flash('成年后才能佩戴配饰'); return; }
  if (blockCharacterInteractionDuringSleep()) return;
  const equipped = S.equippedAccessories[charKey][it.category] === key;
  S.equippedAccessories[charKey][it.category] = equipped ? null : key;
  addLog('✨ 配饰', `${CHARACTERS[charKey].name}${equipped ? '取下' : '佩戴'}了${it.name}`);
  flash(`${CHARACTERS[charKey].name}${equipped ? '取下' : '戴上'}了${it.name}`);
  setActionPanel(false);
  renderBag(); render();
}
function useItem(key, medicineTarget = null) {
  const it = SHOP[key];
  if (!it) return;
  if (blockCharacterInteractionDuringSleep()) return;
  // 兼容旧存档中已经买入背包的手机：首次使用时升级为永久主页入口。
  if (key === '手机') {
    if (!phoneAvailable()) { flash('少年期才能开始使用手机'); return; }
    if (!S.phoneOwned) {
      if ((S.inv[key] || 0) < 1) { flash('背包里没有手机'); return; }
      S.inv[key]--;
      S.phoneOwned = true;
      S.phonePurchaseDay = dayOf();
      S.phonePurchaseHour = S.gameHours;
      S.phoneDailyStartDay = dayOf();
      S.phoneRomanceStartDay = S.hasEverBeenInLove ? S.phoneDailyStartDay : -1;
      S.phoneReadIds = [];
      S.phoneRewardIds = [];
      flash('手机已放到主页，点它查看第一段聊天吧');
      setActionPanel(false);
      renderBag(); render();
    } else {
      setActionPanel(false);
      openPhone();
    }
    return;
  }
  if (it.cat === 'ticket') { useTicket(key); return; }
  if (it.cat === 'story') {
    const teenStoryItem = key === '棉花娃娃' || key === '巧克力蛋糕' || key === '哆啦A梦主题蛋糕';
    if (teenStoryItem && !phoneAvailable()) { flash('少年期起才能使用这个道具'); return; }
    if ((key === '磨牙棒' || key === '头纱') && getStage().name === '婴儿') { flash('幼年起才能使用这个道具'); return; }
    if ((S.inv[key] || 0) < 1) { flash('背包里没有这个道具'); return; }
    openConfirm(`使用「${it.name}」后将触发专属剧情，确定吗？`, () => {
      if (blockCharacterInteractionDuringSleep()) return;
      if (teenStoryItem && !phoneAvailable()) { flash('少年期起才能使用这个道具'); return; }
      if ((key === '磨牙棒' || key === '头纱') && getStage().name === '婴儿') { flash('幼年起才能使用这个道具'); return; }
      if ((S.inv[key] || 0) < 1) { flash('背包里没有这个道具'); return; }
      const storyKey = isAdult() && (key === '磨牙棒' || key === '头纱') ? key + '_adult' : key;
      setActionPanel(false);
      closeOverlays();
      const finishUse = () => {
        S.inv[key]--;
        const before = S.bond;
        S.bond = Math.min(S.dating ? CONFIG.bond.max : CONFIG.bond.maxPre, S.bond + (it.bond || 0));
        const gain = S.bond - before;
        addLog('🎬 道具剧情', `使用「${it.name}」，羁绊 +${gain}`);
        updateRelationship();
        renderBag(); render();
        return gain;
      };
      if (STORIES[storyKey]) startStory(storyKey, null, finishUse);
      else {
        const gain = finishUse();
        if (it.kind === 'chat') openPhone();
        else flashBondGain(gain);
      }
    });
    return;
  }
  // 药只作用于背包里明确点选的生病人物。
  if ((S.inv[key] || 0) < 1) { flash('背包里没有这个道具'); return; }
  if (key === 'medicine' && (!['wang', 'mu'].includes(medicineTarget) || !S.chars[medicineTarget].sick)) { flash('请选择生病的人物用药'); return; }
  S.inv[key]--;
  if (key === 'medicine') {
    const c = S.chars[medicineTarget];
    c.sick = false;
    c.sickStreak = 0;
  }
  const result = key === 'medicine' ? `${CHARACTERS[medicineTarget].name}已退烧` : `${it.emoji} ${it.name}`;
  addLog('🎒 使用', key === 'medicine' ? `${result}；其他数值不变` : result);
  setActionPanel(false);
  renderBag(); render();
  if (key === 'medicine') { $id('overlayBag').classList.add('hidden'); flashHud(result); }
}
function useTicket(id) {
  if (blockCharacterInteractionDuringSleep()) return;
  if (!S.dating || S.broken) { flash('还没有恋爱呢'); return; }
  if (dayOf() !== S.lastDateDay) { S.datesToday = 0; S.lastDateDay = dayOf(); }
  if (S.datesToday >= CONFIG.bond.maxDatesPerDay) { flash('今天约会次数已满（每日 2 次）'); return; }
  if ((S.inv[id] || 0) < 1) { flash('没有这张门票'); return; }
  if (!CONFIG.dates.some(d => d.id === id)) { flash('这张门票暂时无法使用'); return; }
  setActionPanel(false);
  closeOverlays();
  const finishDate = () => {
    S.inv[id]--;
    const gain = doDate(id, true);
    renderBag();
    return gain;
  };
  if (STORIES[id]) startStory(id, null, finishDate);
  else flashBondGain(finishDate());
}

function availablePhoneThreads() {
  if (!S.phoneOwned || !phoneAvailable()) return [];
  const today = dayOf();
  const ordinary = PHONE_CHAT_DATA.smallTalk.filter(thread => !thread.dating);
  const romance = PHONE_CHAT_DATA.smallTalk.filter(thread => thread.dating);
  const ordinaryCount = Math.max(0, today - S.phoneDailyStartDay + 1);
  const romanceStart = Math.max(S.phoneDailyStartDay + ordinary.length, S.phoneRomanceStartDay);
  const romanceCount = S.hasEverBeenInLove && S.phoneRomanceStartDay >= 0
    ? Math.max(0, today - romanceStart + 1) : 0;
  return [PHONE_CHAT_DATA.opening[0],
    ...(S.gameHours - S.phonePurchaseHour >= 3 ? [PHONE_CHAT_DATA.opening[1]] : []),
    ...ordinary.slice(0, ordinaryCount), ...romance.slice(0, romanceCount)];
}
function unreadPhoneCount() {
  const read = S.phoneReadIds || [];
  return availablePhoneThreads().filter(t => !read.includes(t.id)).length;
}
function renderPhone() {
  const list = $id('phoneThreadList');
  const read = S.phoneReadIds || [];
  list.innerHTML = '';
  for (const thread of availablePhoneThreads().reverse()) {
    const isRead = read.includes(thread.id);
    const row = document.createElement('button');
    row.className = 'phone-thread';
    row.innerHTML = `<span class="phone-thread-avatar"><img src="assets/chars/wlj-phone-touxiang.jpg" alt=""><img src="assets/chars/mzc-phone-touxiang.jpg" alt=""></span><span><b></b><small>${isRead ? '已读，点击回看' : '有一段新消息'}</small></span>${isRead ? '' : '<i class="unread-dot"></i>'}<span class="phone-thread-chevron" aria-hidden="true">›</span>`;
    row.querySelector('b').textContent = thread.title;
    row.addEventListener('click', () => openPhoneThread(thread.id));
    list.appendChild(row);
  }
  if (!list.children.length) list.innerHTML = '<div class="hint">暂时没有新消息，晚点再看看吧～</div>';
}
function openPhone() {
  if (!S.phoneOwned || !phoneAvailable()) { flash('少年期才能开始使用手机'); return; }
  renderPhone();
  $id('overlayPhone').classList.remove('hidden');
}
function openPhoneThread(id) {
  const thread = availablePhoneThreads().find(t => t.id === id);
  if (!thread) return;
  chat = { key: 'phone:' + id, lines: thread.lines, idx: 0 };
  $id('chatName').textContent = '271199';
  const list = $id('chatList');
  list.innerHTML = '';
  addChatMsg('center', '—— ' + thread.title + ' ——');
  $id('overlayPhone').classList.add('hidden');
  $id('overlayChat').classList.remove('hidden');
}
let chat = null;
function addChatMsg(from, text) {
  const list = $id('chatList');
  const row = document.createElement('div');
  row.className = 'chat-row ' + (from === 'wang' ? 'left' : from === 'mu' ? 'right' : 'center');
  if (from === 'wang' || from === 'mu') {
    const avatar = from === 'wang' ? 'wlj-phone-touxiang.jpg?v=1' : 'mzc-phone-touxiang.jpg?v=1';
    row.innerHTML = `<img class="chat-av" src="assets/chars/${avatar}" alt="${CHARACTERS[from].name}头像"><div class="chat-bubble"></div>`;
    row.querySelector('.chat-bubble').textContent = text;
  } else {
    row.innerHTML = '<span class="chat-time"></span>';
    row.querySelector('.chat-time').textContent = text;
  }
  list.appendChild(row);
  list.scrollTop = list.scrollHeight;
}
function chatClick() {
  if (!chat) return;
  if (chat.idx >= chat.lines.length) { flash(chat.key.startsWith('phone:') ? '消息看完了，点「返回」回到聊天记录' : '消息看完了，点「返回」结束'); return; }
  const line = chat.lines[chat.idx++];
  addChatMsg(line.from, line.text);
  if (chat.key.startsWith('phone:') && chat.idx === chat.lines.length) {
    const id = chat.key.slice(6);
    S.phoneReadIds ||= [];
    if (!S.phoneReadIds.includes(id)) S.phoneReadIds.push(id);
    S.phoneRewardIds ||= [];
    if (!S.phoneRewardIds.includes(id)) {
      S.phoneRewardIds.push(id);
      const before = S.bond;
      S.bond = Math.min(S.dating ? CONFIG.bond.max : CONFIG.bond.maxPre, S.bond + 3);
      const gain = S.bond - before;
      if (gain > 0) {
        addChatMsg('center', `羁绊 +${gain}`);
        addLog('💬 手机聊天', `看完聊天，羁绊 +${gain}`);
      }
      updateRelationship();
    }
    save(); render();
  }
}
function closeChat() {
  if (!chat) return;
  const fromPhone = chat.key.startsWith('phone:');
  if (fromPhone) {
    S.seen = S.seen || {}; S.seen['手机'] = true;
  } else {
    S.seen = S.seen || {}; S.seen[chat.key] = true;
  }
  chat = null;
  $id('overlayChat').classList.add('hidden');
  if (fromPhone) {
    renderPhone();
    $id('overlayPhone').classList.remove('hidden');
  }
  renderBag(); render();
}
function openGallery() { renderGallery(); $id('overlayGallery').classList.remove('hidden'); }
function renderGallery() {
  const list = $id('galleryList');
  list.innerHTML = '';
  for (const it of STORY_BOOK) {
    const seen = !!(S.seen && S.seen[it.key]);
    if (SHOP[it.key]?.retired && !seen) continue;
    const row = document.createElement('div');
    row.className = 'gal-item' + (seen ? ' seen' : ' locked');
    row.innerHTML = `<span class="gal-emoji">${itemIcon(it)}</span><span class="gal-name">${it.name}</span><span class="gal-state">${seen ? '✓ 点击重温' : '🔒 未收录'}</span>`;
    if (seen) row.addEventListener('click', () => replayStory(it.key));
    list.appendChild(row);
  }
}
function replayStory(key) {
  if (key === '手机') { openPhone(); return; }
  if (STORIES[key]) { startStory(key); return; }
  if (SHOP[key] && SHOP[key].cat === 'ticket') {
    const d = CONFIG.dates.find(x => x.id === key);
    if (d) flash(`💞 ${d.emoji} 重温：两人在${d.name}度过的美好时光～`);
    return;
  }
  startStory(key);
}
// 脚底锚点使用原始画布像素；身体和表情层共享整个画布及缩放系数。
const STORY_SPRITES = {
  child: { wang: [1664, 2025, 1438], mu: [1543, 2012, 1425] },
  teen: { wang: [2027, 3855, 3607], mu: [1668, 3657, 3360] },
  adult: { wang: [2027, 4789, 4556], mu: [2027, 4789, 4582] },
};
const STORY_NAMES = { wang: '王橹杰', mu: '穆祉丞' };
function storyExpressions(session, line) {
  const expressions = session.expressions ||= { wang: 'normal', mu: 'normal' };
  if (line.who === 'wang' || line.who === 'mu') expressions[line.who] = line.expression || 'normal';
  return expressions;
}
function fitStoryCharacters() {
  if (!story) return;
  const metrics = STORY_SPRITES[story.stage];
  const area = $id('storyStage').getBoundingClientRect();
  const isChild = story.stage === 'child';
  const scale = Math.min(area.width * .46 / Math.max(metrics.wang[0], metrics.mu[0]),
    area.height * .98 / Math.max(metrics.wang[2], metrics.mu[2])) * (isChild ? 1.08 : 1);
  const childLift = isChild ? area.height * .2 : 0;
  for (const key of ['wang', 'mu']) {
    const [width, height, sole] = metrics[key];
    const el = $id('lh-' + key);
    el.style.width = width * scale + 'px';
    el.style.height = height * scale + 'px';
    el.style.bottom = childLift - (height - sole) * scale + 'px';
  }
}
function setStoryScene(scene) {
  const overlay = $id('storyOverlay');
  if (!story) return;
  if (overlay.dataset.scene === scene) { story.queuedScene = null; return; }
  if (story.sceneFadeTimer) { story.queuedScene = scene; return; }
  const from = story.sceneFront;
  const to = from === $id('storyBgA') ? $id('storyBgB') : $id('storyBgA');
  from.style.zIndex = '0';
  to.style.zIndex = '1';
  to.dataset.scene = scene;
  to.classList.remove('active');
  void to.offsetWidth;
  to.classList.add('active');
  overlay.dataset.scene = scene;
  story.sceneFront = to;
  const session = story;
  session.sceneFadeTimer = setTimeout(() => {
    if (story !== session) return;
    from.classList.remove('active');
    session.sceneFadeTimer = null;
    if (session.queuedScene) {
      const queued = session.queuedScene;
      session.queuedScene = null;
      setStoryScene(queued);
    }
  }, 620);
}
async function startStory(itemName, bondGain = null, onReady = null) {
  const st = STORIES[itemName];
  if (!st || !st.lines.length) return;
  if (story) endStory();
  const session = { ...st, key: itemName, stage: st.stage || 'teen', idx: 0, bondGain,
    loading: true, auto: false, historyOpen: false, complete: false, returnFocus: document.activeElement };
  story = session;
  $id('storyOverlay').classList.remove('hidden');
  $id('storyOverlay').dataset.story = itemName;
  $id('storyOverlay').dataset.scene = st.scene || 'room';
  $id('storyBgA').dataset.scene = st.scene || 'room';
  $id('storyBgA').classList.add('active');
  $id('storyBgA').style.zIndex = '1';
  $id('storyBgB').classList.remove('active');
  $id('storyBgB').style.zIndex = '0';
  session.sceneFront = $id('storyBgA');
  syncBackgroundMusic();
  $id('storyOverlay').classList.add('loading');
  $id('storyVideoPanel').classList.add('hidden');
  $id('storyVideo').pause();
  $id('storyVideo').removeAttribute('src');
  $id('btnStoryVideo').classList.toggle('hidden', !st.video);
  $id('storyHistory').classList.add('hidden');
  $id('storyName').classList.add('hidden');
  $id('storyText').textContent = '正在准备剧情…';
  $id('storyNext').textContent = '';
  $id('storyTitle').textContent = st.title || itemName;
  $id('btnStoryAuto').textContent = '自动';
  $id('btnStoryAuto').setAttribute('aria-pressed', 'false');
  const preload = [];
  const loadImage = (src, className) => {
    const img = new Image();
    img.className = className;
    img.alt = '';
    img.src = src;
    preload.push(() => img.decode().catch(error => { console.error('剧情素材加载失败：' + src, error); throw error; }));
    return img;
  };
  const sceneProbe = $id('storyBgB');
  for (const scene of new Set([st.scene || 'room', ...st.lines.map(line => line.scene).filter(Boolean)])) {
    sceneProbe.dataset.scene = scene;
    const background = getComputedStyle(sceneProbe).backgroundImage;
    const src = background.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
    if (src) loadImage(src, '');
  }
  sceneProbe.dataset.scene = st.scene || 'room';
  session.stageAssets = {};
  session.expressionAssets = {};
  const neededExpressions = {};
  let lineStage = session.stage;
  for (const line of st.lines) {
    lineStage = line.stage || lineStage;
    if (line.who !== 'wang' && line.who !== 'mu') continue;
    (neededExpressions[lineStage] ||= {})[line.who] ||= new Set();
    neededExpressions[lineStage][line.who].add(line.expression || 'normal');
  }
  for (const stage of new Set([session.stage, ...st.lines.map(line => line.stage).filter(Boolean)])) {
    session.stageAssets[stage] = {};
    session.expressionAssets[stage] = {};
    for (const key of ['wang', 'mu']) {
      const stageName = { child: '幼年', teen: '少年', adult: '成年' }[stage];
      const pose = charPose(key, stageName, 'normal');
      const base = loadImage(pose.src, 'story-base');
      const face = loadImage(pose.faceSrc, 'story-face');
      face.dataset.expression = 'normal';
      session.stageAssets[stage][key] = [base, face];
      const faces = session.expressionAssets[stage][key] = { normal: face };
      for (const expression of neededExpressions[stage]?.[key] || []) {
        if (expression === 'normal') continue;
        faces[expression] = loadImage(charPose(key, stageName, expression).faceSrc, 'story-face');
        faces[expression].dataset.expression = expression;
      }
    }
  }
  for (const key of ['wang', 'mu']) $id('lh-' + key).replaceChildren(...session.stageAssets[session.stage][key]);
  const cg = $id('storyImg');
  cg.classList.add('hidden');
  $id('storyOverlay').classList.remove('has-cg');
  for (const src of new Set([st.image, ...st.lines.map(line => line.image)].filter(Boolean))) {
    const img = new Image();
    img.src = src;
    preload.push(() => img.decode().catch(error => { console.error('剧情素材加载失败：' + src, error); throw error; }));
  }
  try {
    for (const load of preload) await load();
  } catch (error) {
    if (story !== session) return;
    session.loading = false;
    session.failed = true;
    syncBackgroundMusic();
    $id('storyText').textContent = '剧情素材加载失败，请退出后重试。本次道具或门票未消耗。';
    $id('storyNext').textContent = '';
    return;
  }
  if (story !== session) return; // 快速退出/重开时，旧加载任务不能修改新剧情。
  session.bondGain = onReady ? onReady() : bondGain; // 素材成功后才消耗道具或门票；失败或刷新时仍在背包。
  if (st.video) {
    const video = $id('storyVideo');
    video.src = st.video + '?v=2';
    video.load(); // 阅读剧情时提前缓冲；年龄确认仍控制实际播放。
  }
  session.loading = false;
  $id('storyOverlay').classList.remove('loading');
  S.seen = S.seen || {}; S.seen[itemName] = true;
  save();
  fitStoryCharacters();
  renderStoryLine();
  $id('storyDialog').focus();
}
function scheduleStoryAuto() {
  if (!story || !story.auto || !story.complete || story.historyOpen || story.videoOpen) return;
  const session = story;
  if (session.lineAudio && !session.lineAudio.paused && !session.lineAudio.ended) return;
  clearTimeout(session.autoTimer);
  session.autoTimer = setTimeout(() => {
    if (story === session && session.auto && !session.historyOpen) storyClick();
  }, Math.max(1800, Array.from(session.lines[session.idx].text).length * 75));
}
function renderStoryLine() {
  if (!story || story.loading || story.failed) return;
  const session = story;
  clearInterval(session.typingTimer);
  clearTimeout(session.autoTimer);
  session.lineAudio?.pause();
  session.lineAudio = null;
  session.complete = false;
  session.imageShown = false;
  const line = session.lines[session.idx];
  if (line.stage && line.stage !== session.stage) {
    session.stage = line.stage;
    session.expressions = { wang: 'normal', mu: 'normal' };
    for (const key of ['wang', 'mu']) $id('lh-' + key).replaceChildren(...session.stageAssets[line.stage][key]);
    fitStoryCharacters();
  }
  const expressions = storyExpressions(session, line);
  syncBackgroundMusic();
  const image = session.idx === 0 ? session.image : null;
  const cg = $id('storyImg');
  if (image) cg.src = image;
  cg.classList.toggle('hidden', !image);
  $id('storyOverlay').classList.toggle('has-cg', !!image);
  $id('storyDialog').className = 'story-dialog ' + (line.who || 'narrator');
  $id('storyName').textContent = STORY_NAMES[line.who] || '';
  $id('storyName').classList.toggle('hidden', !line.who);
  for (const key of ['wang', 'mu']) {
    const holder = $id('lh-' + key);
    holder.classList.toggle('listening', !!line.who && line.who !== key);
    const face = holder.querySelector('.story-face');
    const expression = expressions[key];
    if (face.dataset.expression !== expression) {
      const readyFace = session.expressionAssets?.[session.stage]?.[key]?.[expression];
      if (readyFace) {
        readyFace.classList.add('active');
        holder.replaceChild(readyFace, face);
      } else {
        face.dataset.expression = expression;
        face.src = charPose(key, { child: '幼年', teen: '少年', adult: '成年' }[session.stage], expression).faceSrc;
      }
    }
    holder.querySelector('.story-face').classList.add('active');
  }
  const textEl = $id('storyText');
  textEl.textContent = '';
  textEl.scrollTop = 0;
  if (line.audio) {
    session.lineAudio = playVoice(line.audio);
    if (session.lineAudio) session.lineAudio.onended = () => { if (story === session) scheduleStoryAuto(); };
  }
  $id('storyNext').textContent = image ? '点击收起插画' : '点击显示全文';
  const chars = Array.from(line.text);
  let i = 0;
  session.typingTimer = setInterval(() => {
    if (story !== session) return;
    textEl.textContent = chars.slice(0, ++i).join('');
    if (i >= chars.length) finishStoryText();
  }, 35);
}
function finishStoryText() {
  if (!story) return;
  clearInterval(story.typingTimer);
  $id('storyText').textContent = story.lines[story.idx].text;
  story.complete = true;
  story.scene = story.lines[story.idx].scene || story.scene || 'room';
  setStoryScene(story.scene);
  $id('storyNext').textContent = !$id('storyImg').classList.contains('hidden')
    ? '点击收起插画' : story.lines[story.idx].image && !story.imageShown
      ? '点击查看插画 ▸' : story.idx === story.lines.length - 1 ? '点击结束 ▸' : '点击继续 ▸';
  scheduleStoryAuto();
}
function storyClick() {
  if (!story || story.loading || story.failed || story.historyOpen || story.videoOpen) return;
  if (!$id('storyImg').classList.contains('hidden')) {
    $id('storyImg').classList.add('hidden');
    $id('storyOverlay').classList.remove('has-cg');
    $id('storyNext').textContent = story.complete
      ? (story.lines[story.idx].image && !story.imageShown ? '点击查看插画 ▸'
        : story.idx === story.lines.length - 1 ? '点击结束 ▸' : '点击继续 ▸')
      : '点击显示全文';
    scheduleStoryAuto();
    return;
  }
  if (!story.complete) { finishStoryText(); return; }
  clearTimeout(story.autoTimer);
  const line = story.lines[story.idx];
  if (line.image && !story.imageShown) {
    story.imageShown = true;
    $id('storyImg').src = line.image;
    $id('storyImg').classList.remove('hidden');
    $id('storyOverlay').classList.add('has-cg');
    $id('storyNext').textContent = '点击收起插画';
    scheduleStoryAuto();
    return;
  }
  if (++story.idx >= story.lines.length) { endStory(); return; }
  renderStoryLine();
}
function toggleStoryAuto() {
  if (!story || story.loading || story.failed || story.videoOpen) return;
  story.auto = !story.auto;
  clearTimeout(story.autoTimer);
  $id('btnStoryAuto').textContent = story.auto ? '自动中' : '自动';
  $id('btnStoryAuto').setAttribute('aria-pressed', String(story.auto));
  scheduleStoryAuto();
}
function openStoryHistory() {
  if (!story || story.loading || story.failed || story.videoOpen) return;
  story.historyOpen = true;
  clearTimeout(story.autoTimer);
  const list = $id('storyHistoryList');
  list.replaceChildren();
  for (const line of story.lines.slice(0, story.idx + (story.complete ? 1 : 0))) {
    const entry = document.createElement('p');
    const name = document.createElement('b');
    name.textContent = (STORY_NAMES[line.who] || '旁白') + '　';
    entry.append(name, document.createTextNode(line.text));
    list.appendChild(entry);
  }
  $id('storyHistory').classList.remove('hidden');
  $id('btnStoryHistoryClose').focus();
  list.scrollTop = list.scrollHeight;
}
function closeStoryHistory() {
  if (!story) return;
  story.historyOpen = false;
  $id('storyHistory').classList.add('hidden');
  $id('storyDialog').focus();
  scheduleStoryAuto();
}
function openStoryVideo() {
  if (!story || !story.video || story.loading || story.failed || story.videoOpen) return;
  clearTimeout(story.autoTimer);
  openConfirm('视频可能包含少儿不宜情节。请确认是否已年满18岁；未成年人请勿观看。',
    playStoryVideo, '已满18岁', '观看前提示', '未满18岁', () => {
      $id('btnStoryVideo').focus();
      scheduleStoryAuto();
    });
}
function playStoryVideo() {
  if (!story || !story.video || story.loading || story.failed || story.videoOpen) return;
  story.lineAudio?.pause();
  if (!story.complete) finishStoryText();
  story.videoOpen = true;
  const video = $id('storyVideo');
  if (!video.src) video.src = story.video + '?v=2';
  video.muted = !!S.settings.muted;
  $id('storyVideoPanel').classList.remove('hidden');
  syncBackgroundMusic();
  $id('storyVideoError').textContent = '正在加载视频…';
  video.play().then(() => {
    if (story?.videoOpen) $id('storyVideoError').textContent = '';
  }).catch(() => {
    if (story?.videoOpen) $id('storyVideoError').textContent = '无法自动播放，请点击视频中的播放键。';
  });
  $id('btnStoryVideoClose').focus();
}
function closeStoryVideo() {
  const video = $id('storyVideo');
  video.pause();
  $id('storyVideoPanel').classList.add('hidden');
  $id('storyVideoError').textContent = '';
  if (story) {
    story.videoOpen = false;
    syncBackgroundMusic();
    $id('storyDialog').focus();
    scheduleStoryAuto();
  }
}
function endStory() {
  if (!story) return;
  const focus = story.returnFocus;
  const bondGain = story.bondGain;
  clearInterval(story.typingTimer);
  clearTimeout(story.autoTimer);
  clearTimeout(story.sceneFadeTimer);
  story.lineAudio?.pause();
  story = null;
  closeStoryVideo();
  $id('storyVideo').removeAttribute('src');
  $id('storyVideo').load();
  syncBackgroundMusic();
  $id('storyOverlay').classList.add('hidden');
  $id('storyImg').classList.add('hidden');
  $id('storyOverlay').classList.remove('has-cg');
  $id('storyHistory').classList.add('hidden');
  if (focus && focus.isConnected) focus.focus();
  flashBondGain(bondGain);
}

/* ---- 挽回 / 约会 / 签到 ---- */
function doRecover(type) {
  if (blockCharacterInteractionDuringSleep()) return;
  const rel = relState();
  if (rel !== 'qijiao' && rel !== 'argue' && rel !== 'broken') { flash('现在不需要挽回'); return; }
  if (S.lastRecoverDay === dayOf()) { flash('今天已经挽回过一次了，明天再来吧'); return; }
  if (type === 'gift') { if (S.coins < CONFIG.prices.gift) { flash('金币不够买小礼物（30 金币）'); return; } S.coins -= CONFIG.prices.gift; }
  S.lastRecoverDay = dayOf();
  let line, speaker, logMsg;
  if (type === 'gift') { speaker = 'wang'; line = '（接过礼物，别过脸）……谢谢。'; logMsg = '穆祉丞把精心挑的小礼物塞进王橹杰手里，王橹杰别过脸，耳根却红了。'; }
  else if (type === 'xiaojiao') { speaker = 'mu'; line = '（拉着王橹杰的袖子晃了晃）别不理我嘛——'; logMsg = '穆祉丞拉着王橹杰的袖子晃啊晃："别不理我嘛——"'; }
  else { speaker = 'mu'; line = '（拉着王橹杰坐下，认认真真聊到深夜）'; logMsg = '穆祉丞拉着王橹杰坐下来，认认真真地聊到深夜。'; }
  if (rel === 'broken') {
    S.bond = CONFIG.bond.love; // 分手挽回成功 → 羁绊回弹 99 → 热恋
    addLog('🕊️ 挽回成功', logMsg + '（羁绊回弹至 99，重新恋爱）');
  } else {
    const gain = rel === 'argue'
      ? (type === 'gift' ? 6 : type === 'xiaojiao' ? 3 : 5)
      : (type === 'gift' ? 15 : type === 'xiaojiao' ? 12 : 15);
    S.bond = Math.min(S.dating ? CONFIG.bond.max : CONFIG.bond.maxPre, S.bond + gain);
    addLog(rel === 'argue' ? '🕊️ 和好' : '🕊️ 挽回', logMsg + `（羁绊 +${gain}）`);
  }
  if (isAdult()) for (const c of Object.values(S.chars)) c.mood = Math.min(100, c.mood + 10);
  flash(`${CHARACTERS[speaker].name}：${line}`);
  updateRelationship(); render();
}
function doDate(id, alreadyStarted = false) {
  if (!alreadyStarted && blockCharacterInteractionDuringSleep()) return;
  if (!alreadyStarted && (!S.dating || S.broken)) { flash('还没有恋爱呢'); return; }
  if (dayOf() !== S.lastDateDay) { S.datesToday = 0; S.lastDateDay = dayOf(); }
  if (!alreadyStarted && S.datesToday >= CONFIG.bond.maxDatesPerDay) { flash('今天约会次数已满（每日 2 次）'); return; }
  const d = CONFIG.dates.find(x => x.id === id);
  if (!d) return;
  let eff = d.bond;
  if (S.lastVenueId === id) eff = Math.round(eff * (1 - CONFIG.bond.repeatPenalty));
  if (dayOf() !== S.lastDateDay) { S.datesToday = 0; S.lastDateDay = dayOf(); }
  S.datesToday++; S.lastVenueId = id;
  const before = S.bond;
  S.bond = Math.min(CONFIG.bond.max, S.bond + eff);
  const gain = S.bond - before;
  S.lastDateHour = S.gameHours; S.noDateDone = false; S.stats.date++;
  if (isAdult()) for (const c of Object.values(S.chars)) c.mood = Math.min(100, c.mood + 15);
  S.seen = S.seen || {}; S.seen[id] = true;
  addLog('💌 约会：' + d.name, `${d.emoji} 两人度过美好时光（羁绊 +${gain}）`);
  render();
  return gain;
}
function doCheckIn() {
  if (S.checkInDay === dayOf()) { flash('今天已经签到过啦'); return; }
  S.checkInDay = dayOf(); S.coins += CONFIG.checkIn;
  addLog('📅 每日签到', `获得 ${CONFIG.checkIn} 金币`);
  flash(`签到成功！+${CONFIG.checkIn} 金币`);
  render();
}

/* ================== 双人舞台 ================== */
function danceAvailable() { return S.gameHours >= 60; } // 少年期起开放
function danceDayKey() { return dayOf(); }
function danceEnsureDailyReward() {
  const day = danceDayKey();
  if (S.danceRewardDay !== day) { S.danceRewardDay = day; S.danceRewardCoins = 0; }
}
function loadDanceAssets() {
  danceAssetsPromise ||= Promise.all(Object.values(DANCE_POSES).map(src => {
    const image = new Image();
    image.src = src;
    return image.decode().catch(() => {}).then(() => image);
  }));
  return danceAssetsPromise;
}
async function openDance() {
  if (!danceAvailable()) { flash('双人舞台将在少年期解锁'); return; }
  if (blockCharacterInteractionDuringSleep()) return;
  dance = { sequence: [], index: 0, score: 0, combo: 0, earned: 0, round: 0, timeLeft: 0, maxTime: 0, running: false };
  const session = dance;
  syncBackgroundMusic();
  setDancePose('up', false);
  dancePaused = false;
  syncDanceMusic();
  $id('overlayDance').classList.remove('hidden');
  $id('dancePause').classList.add('hidden');
  $id('danceResult').classList.add('hidden');
  danceEnsureDailyReward();
  renderDance();
  $id('danceTime').textContent = '舞台准备中…';
  let seen = false;
  try { seen = localStorage.getItem(DANCE_TUTORIAL_KEY) === '1'; } catch (e) {}
  const startButton = $id('btnDanceTutorialOk');
  startButton.disabled = true;
  if (!seen) showDanceTutorial();
  await loadDanceAssets();
  if (dance !== session) return;
  startButton.disabled = false;
  if (seen) startDanceRound();
  else $id('danceTime').textContent = '—';
}
function pauseDance() {
  if (!dance || !dance.running) return;
  dance.running = false; dancePaused = true;
  if (danceTimer) { clearInterval(danceTimer); danceTimer = null; }
  syncDanceMusic();
  $id('dancePause').classList.remove('hidden');
}
function resumeDance() {
  if (!dance || !dancePaused) return;
  dancePaused = false; dance.running = true;
  syncDanceMusic();
  $id('dancePause').classList.add('hidden');
  startDanceClock(); renderDance();
}
function restartDanceFromPause() {
  if (!dance) return;
  commitDanceHighScore();
  dance.score = 0; dance.combo = 0; dance.earned = 0; dance.round = 0; dancePaused = false;
  syncDanceMusic();
  $id('dancePause').classList.add('hidden');
  startDanceRound();
}
function closeDance() {
  commitDanceHighScore();
  if (danceTimer) { clearInterval(danceTimer); danceTimer = null; }
  dance = null;
  dancePaused = false;
  syncDanceMusic();
  $id('dancePause').classList.add('hidden');
  $id('overlayDance').classList.add('hidden');
  syncBackgroundMusic();
}
function showDanceTutorial() {
  if (danceTimer) { clearInterval(danceTimer); danceTimer = null; }
  if (dance) dance.running = false;
  $id('danceTutorial').classList.remove('hidden');
}
function closeDanceTutorial() {
  $id('danceTutorial').classList.add('hidden');
  try { localStorage.setItem(DANCE_TUTORIAL_KEY, '1'); } catch (e) {}
  if (dance && dance.sequence.length) { dance.running = true; startDanceClock(); renderDance(); }
  else startDanceRound();
}
function nextDanceSequence() {
  const len = [2, 3, 4][Math.floor(Math.random() * 3)];
  dance.sequence = Array.from({ length: len }, () => DANCE_DIRS[Math.floor(Math.random() * DANCE_DIRS.length)]);
  dance.index = 0;
  dance.maxTime = danceTimeForLength(len);
  dance.timeLeft = dance.maxTime;
  dance.running = true;
  dance.round++;
}
function danceTimeForLength(len) {
  if (!dance) return len === 2 ? 6 : len === 3 ? 5 : 4;
  if (dance.combo > 27) return 3;
  if (dance.combo > 10) return len === 2 ? 3 : len === 3 ? 4 : 4;
  return len === 2 ? 6 : len === 3 ? 5 : 4;
}
function playDanceTone(kind) {
  try {
    if (S.settings.muted) return;
    danceAudioCtx = danceAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = danceAudioCtx.currentTime;
    const osc = danceAudioCtx.createOscillator();
    const gain = danceAudioCtx.createGain();
    const cfg = kind === 'bad' ? { freq: 180, end: 120, duration: .18 } : kind === 'good' ? { freq: 660, end: 880, duration: .14 } : { freq: 420, end: 500, duration: .07 };
    osc.type = 'sine'; osc.frequency.setValueAtTime(cfg.freq, now); osc.frequency.linearRampToValueAtTime(cfg.end, now + cfg.duration);
    gain.gain.setValueAtTime(0.0001, now); gain.gain.exponentialRampToValueAtTime(Math.max(0.01, S.settings.sfxVol * 0.16), now + .01); gain.gain.exponentialRampToValueAtTime(0.0001, now + cfg.duration);
    osc.connect(gain).connect(danceAudioCtx.destination); osc.start(now); osc.stop(now + cfg.duration + .02);
  } catch (e) {}
}
function playDanceKeySound() {
  if (S.settings.muted || S.settings.sfxVol <= 0) return;
  danceKeySound = danceKeySound || new Audio('assets/audio/anjian.mp3');
  danceKeySound.volume = S.settings.sfxVol;
  danceKeySound.currentTime = 0;
  danceKeySound.play().catch(() => {});
}
function startDanceRound() {
  if (!dance) return;
  $id('danceResult').classList.add('hidden');
  nextDanceSequence();
  startDanceClock();
  renderDance();
}
function startDanceClock() {
  if (danceTimer) clearInterval(danceTimer);
  danceTimer = setInterval(() => {
    if (!dance || !dance.running) return;
    dance.timeLeft = Math.max(0, dance.timeLeft - 0.1);
    $id('danceTime').textContent = dance.timeLeft.toFixed(1);
    if (dance.timeLeft <= 0) { playDanceTone('bad'); endDance(false, '时间到了'); }
  }, 100);
}
function dancePress(dir) {
  if (!dance || !dance.running || $id('danceTutorial').classList.contains('hidden') === false) return;
  playDanceKeySound();
  setDancePose(dir);
  const keys = document.querySelectorAll('[data-dance-dir]');
  keys.forEach(k => { if (k.dataset.danceDir === dir) { k.classList.add('pressed'); setTimeout(() => k.classList.remove('pressed'), 120); } });
  if (dance.sequence[dance.index] !== dir) { playDanceTone('bad'); endDance(false, '按错方向'); return; }
  dance.index++;
  dance.combo++;
  dance.score += 100 + dance.combo * 10;
  if (dance.index >= dance.sequence.length) {
    const base = dance.sequence.length - 1;
    danceEnsureDailyReward();
    const bonus = dance.round % 5 === 0 ? 1 : 0;
    const remain = Math.max(0, 50 - (S.danceRewardCoins || 0));
    const reward = Math.min(remain, base + bonus);
    S.danceRewardCoins = (S.danceRewardCoins || 0) + reward;
    dance.earned += reward;
    S.coins += reward;
    addLog('🎵 双人舞台', `完成 ${dance.sequence.length} 个方向，获得 ${reward} 金币`);
    save();
    playDanceTone('good');
    if (reward === 0 && S.danceCapNoticeDay !== danceDayKey()) {
      S.danceCapNoticeDay = danceDayKey();
      save();
      flash('今日舞台金币已达上限');
    }
    dance.running = false;
    renderDance();
    setTimeout(() => { if (dance) startDanceRound(); }, 260);
  } else renderDance();
}
function setDancePose(dir) {
  const pose = $id('dancePose');
  if (!pose || !DANCE_POSES[dir]) return;
  if (pose.getAttribute('src') !== DANCE_POSES[dir]) pose.src = DANCE_POSES[dir];
}
function endDance(success, reason) {
  if (!dance) return;
  dance.running = false;
  if (danceTimer) { clearInterval(danceTimer); danceTimer = null; }
  const isNewRecord = dance.score > (S.danceHighScore || 0);
  commitDanceHighScore();
  $id('danceResultTitle').textContent = success ? '舞台完成！' : '本轮结束';
  $id('danceResultText').innerHTML = `
    <div class="dance-result-row"><span>本轮得分</span><b>${dance.score}</b></div>
    <div class="dance-result-row record"><span>历史最高</span><b>${S.danceHighScore}</b></div>
    <div class="dance-result-row"><span>获得金币</span><b>${dance.earned}</b></div>
    ${isNewRecord ? '<div class="dance-new-record">✨ 创下新纪录！</div>' : ''}`;
  $id('danceResult').classList.remove('hidden');
  renderDance();
}
function commitDanceHighScore() {
  if (!dance || dance.score <= (S.danceHighScore || 0)) return false;
  S.danceHighScore = dance.score;
  save();
  return true;
}
function renderDance() {
  if (!dance) return;
  $id('danceScore').textContent = dance.score;
  $id('danceHighScore').textContent = Math.max(S.danceHighScore || 0, dance.score);
  $id('danceCombo').textContent = dance.combo;
  $id('danceCoins').textContent = dance.earned;
  $id('danceTime').textContent = dance.maxTime ? dance.timeLeft.toFixed(1) : '—';
  const seq = $id('danceSequence');
  seq.innerHTML = dance.sequence.map((dir, i) => `<span class="dance-arrow ${i < dance.index ? 'done' : i === dance.index ? 'current' : ''}">${DANCE_ARROWS[dir]}</span>`).join('');
}

/* ================== 合成小游戏（新素材）================== */
function mergeImg(item) {
  if (item.line === 'H') return 'assets/merge/heart.png';
  return `assets/merge/${item.line}${item.tier}.png`;
}
let mergeSound = null;
function playMergeSound() {
  try {
    if (!mergeSound) mergeSound = new Audio('assets/merge/audio/bo.mp3');
    mergeSound.volume = S.settings.muted ? 0 : S.settings.sfxVol;
    mergeSound.currentTime = 0;
    mergeSound.play();
  } catch (e) {}
}
function openMerge() {
  merge = { board: Array(16).fill(null), sel: -1, coins: 0 };
  let placed = 0;
  for (let i = 0; i < 16 && placed < 10; i++) {
    if (Math.random() < 0.62) { merge.board[i] = newMergeItem(); placed++; }
  }
  $id('overlayMerge').classList.remove('hidden');
  renderMerge();
}
function newMergeItem() {
  const a = merge.board.filter(item => item?.line === 'A').length;
  const b = merge.board.filter(item => item?.line === 'B').length;
  return { line: a === b ? (Math.random() < 0.5 ? 'A' : 'B') : (a < b ? 'A' : 'B'), tier: Math.random() < 0.85 ? 1 : 2 };
}
function closeMerge() {
  if (!merge) return;
  const coins = merge.coins;
  merge = null;
  $id('overlayMerge').classList.add('hidden');
  if (coins > 0) { S.coins += coins; S.stats.mergeCoins += coins; addLog('🧩 合成小游戏', `本局合成 ${coins} 金币`); flash(`🧩 本局赚了 ${coins} 金币！`); }
  else flash('🧩 本局没有合成金币……');
  render();
}
function renderMerge() {
  const boardEl = $id('mergeBoard');
  $id('mergeCoins').textContent = merge.coins;
  while (boardEl.children.length < 16) {
    const cell = document.createElement('div');
    cell.className = 'mcell';
    cell.addEventListener('click', () => onMergeClick(cell._i));
    boardEl.appendChild(cell);
  }
  for (let i = 0; i < 16; i++) {
    const cell = boardEl.children[i];
    cell._i = i;
    const it = merge.board[i];
    const itemKey = it ? `${it.line}${it.tier}` : '';
    cell.classList.toggle('sel', merge.sel === i);
    if (cell.dataset.itemKey === itemKey) continue;
    cell.dataset.itemKey = itemKey;
    cell.classList.toggle('heart', it?.line === 'H');
    cell.style.opacity = it ? '' : '0.3';
    if (!it) { cell.textContent = '·'; continue; }
    const img = document.createElement('img');
    img.src = mergeImg(it);
    img.alt = itemKey;
    cell.replaceChildren(img);
  }
}
function onMergeClick(i) {
  const b = merge.board;
  if (!b[i] || b[i].line === 'H') return;
  if (merge.sel === -1) { merge.sel = i; renderMerge(); return; }
  if (merge.sel === i) { merge.sel = -1; renderMerge(); return; }
  const a = b[merge.sel], c = b[i];
  const sameLineUp = a.line === c.line && a.tier === c.tier && a.tier < 5;
  const finalHeart = a.line !== c.line && a.tier === 5 && c.tier === 5;
  if (sameLineUp) {
    b[merge.sel] = { line: a.line, tier: a.tier + 1 };
    b[i] = null;
    playMergeSound();
    merge.sel = -1;
    refillAndCheck();
  } else if (finalHeart) {
    merge.coins += 5;
    playMergeSound();
    const aIdx = merge.sel, cIdx = i, session = merge;
    b[aIdx] = { line: 'H', tier: 0 };
    b[cIdx] = null;
    merge.sel = -1;
    renderMerge();
    setTimeout(() => {
      if (merge !== session) return;
      if (b[aIdx] && b[aIdx].line === 'H') b[aIdx] = null;
      refillAndCheck();
    }, 2000);
  } else { merge.sel = i; renderMerge(); return; }
}
function refillAndCheck() {
  for (let k = 0; k < 16; k++) if (!merge.board[k] && Math.random() < 0.55) merge.board[k] = newMergeItem();
  renderMerge();
  if (!mergeHasMove()) { flash('没有可合成的了，结束本局！'); closeMerge(); }
}
function mergeHasMove() {
  const b = merge.board;
  if (b.some(x => !x)) return true;
  for (let i = 0; i < 16; i++) for (let j = i + 1; j < 16; j++) {
    if (!b[i] || !b[j]) continue;
    const a = b[i], c = b[j];
    if ((a.line === c.line && a.tier === c.tier && a.tier < 5) || (a.line !== c.line && a.tier === 5 && c.tier === 5)) return true;
  }
  return false;
}
/* 主玩法指南：只展示说明，不修改进度或开始游戏。 */
let guidePage = 0, guideReturnFocus = null;
function renderGuide() {
  const pages = document.querySelectorAll('[data-guide-section]');
  guidePage = Math.max(0, Math.min(guidePage, pages.length - 1));
  pages.forEach((page, i) => page.classList.toggle('hidden', i !== guidePage));
  document.querySelectorAll('[data-guide-page]').forEach((button, i) => {
    if (i === guidePage) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  $id('guidePageCount').textContent = `${guidePage + 1} / ${pages.length}`;
  $id('btnGuidePrev').disabled = guidePage === 0;
  $id('btnGuideNext').textContent = guidePage === pages.length - 1 ? '知道啦' : '下一页';
  $id('guideBody').scrollTop = 0;
}
function openGuide() {
  guideReturnFocus = document.activeElement;
  guidePage = 0;
  renderGuide();
  $id('overlayGuide').classList.remove('hidden');
  $id('btnCloseGuide').focus();
}
function closeGuide() {
  $id('overlayGuide').classList.add('hidden');
  if (guideReturnFocus) guideReturnFocus.focus();
}
/* 手册翻页 */
let manualPage = 1;
function openManual() { manualPage = 1; renderManual(); $id('overlayManual').classList.remove('hidden'); }
function renderManual() {
  $id('manualImg').src = `assets/merge/shouce${manualPage}.png`;
  $id('manualPage').textContent = `${manualPage} / 2`;
}
/* 暂停 */
function openPause() { $id('overlayPause').classList.remove('hidden'); }
function pauseHome() {
  $id('overlayPause').classList.add('hidden');
  $id('overlayMerge').classList.add('hidden');
  merge = null;
}
function pauseRestart() {
  $id('overlayPause').classList.add('hidden');
  openMerge();
}

/* ================== 渲染 ================== */
function charPose(key, stageName = getStage().name, expression) {
  if (stageName === '婴儿') {
    const file = key === 'wang' ? 'wlj-baby.png?v=1' : 'mzc-baby.png?v=1';
    return { src: `assets/chars/${file}`, cls: 'sit baby-static' };
  }
  expression ||= expressionFor(key);
  if (stageName === '幼年') {
    const prefix = key === 'wang' ? 'wlj' : 'mzc';
    return {
      src: `assets/chars/${prefix}-child-base.png?v=2`,
      faceSrc: `assets/chars/${prefix}-child-exp-${expression}.png?v=2`,
      cls: 'sit child-static'
    };
  }
  if (stageName === '少年') {
    const prefix = key === 'wang' ? 'wlj' : 'mzc';
    return {
      // 素材更新后换版本号，避免浏览器沿用旧图。
      src: `assets/chars/${prefix}-teen-base.png?v=4`,
      faceSrc: `assets/chars/${prefix}-teen-exp-${expression}.png?v=4`,
      cls: 'stand teen-static'
    };
  }
  const prefix = key === 'wang' ? 'wlj' : 'mzc';
  return {
    src: `assets/chars/${prefix}-adult-base.png?v=1`,
    faceSrc: `assets/chars/${prefix}-adult-exp-${expression}.png?v=1`,
    cls: 'stand adult-static'
  };
}
function warmCharacterImage(src) {
  if (characterImageCache.has(src)) return characterImageCache.get(src).ready;
  const image = new Image();
  let ready;
  if (typeof image.decode === 'function') {
    image.src = src;
    ready = image.decode();
  } else {
    ready = new Promise(resolve => { image.onload = resolve; image.onerror = resolve; image.src = src; });
  }
  const settled = ready.catch(() => { characterImageCache.delete(src); });
  characterImageCache.set(src, { image, ready: settled });
  return settled;
}
function essentialStageImages(stageName) {
  const sources = [stageName === '婴儿' ? 'assets/room/room-baby-v1.png' : 'assets/room/room-bg.jpg'];
  for (const key of ['wang', 'mu']) {
    const pose = charPose(key, stageName, stageName !== '婴儿' && stageName === getStage().name ? expressionFor(key) : 'normal');
    sources.push(pose.src);
    if (pose.faceSrc) sources.push(pose.faceSrc);
  }
  if (stageName === '幼年') sources.push('assets/chars/child-sleep-pose.png?v=1');
  if (stageName === '少年') sources.push('assets/chars/teen-sleep-pose.png?v=1');
  return sources;
}
function preloadOpeningAssets() {
  const stageName = getStage().name;
  if (openingStage !== stageName) {
    openingStage = stageName;
    openingAssetsPromise = Promise.all(essentialStageImages(stageName).map(warmCharacterImage));
  }
  return openingAssetsPromise;
}
async function preloadStageExpressions(stageName) {
  for (const key of ['wang', 'mu']) for (const expression of ['normal', 'happy', 'sad', 'angry', ...(stageName === '少年' ? ['shy'] : [])]) {
    if (getStage().name !== stageName) return;
    const src = charPose(key, stageName, expression).faceSrc;
    if (src) await warmCharacterImage(src);
  }
}
function scheduleCharacterPreload() {
  if (!gameStarted) return;
  const stageName = getStage().name;
  if (warmedStage !== stageName) {
    warmedStage = stageName;
    warmedNextStage = '';
    const keep = stageName === '婴儿' ? 'baby' : stageName === '幼年' ? 'child' : stageName === '少年' ? 'teen' : 'adult';
    for (const src of characterImageCache.keys()) if (src.startsWith('assets/chars/') && !src.includes(`-${keep}`)) characterImageCache.delete(src);
    setTimeout(() => preloadStageExpressions(stageName), 400);
  }
  const stageIndex = CONFIG.stages.findIndex(stage => stage.name === stageName);
  const nextStage = ['幼年', '少年', '成年'][stageIndex];
  if (nextStage && warmedNextStage !== nextStage && S.gameHours + (S.gameHourRemainder || 0) >= CONFIG.stages[stageIndex].hours - 3) {
    warmedNextStage = nextStage;
    Promise.all(essentialStageImages(nextStage).map(warmCharacterImage));
  }
}
function expressionFor(key) {
  const c = S.chars[key];
  const override = activeEmotion(key);
  if (override) return override;
  const rel = relState();
  if (c.sick || c.hunger < CONFIG.critical || c.clean < CONFIG.critical || c.mood < CONFIG.critical) return 'sad';
  if (rel === 'qijiao' || rel === 'argue' || rel === 'broken') return 'sad';
  return 'normal';
}
function avatarEmojiFor(key) {
  const c = S.chars[key];
  if (sleepingNow()) return '😴';
  if (c.sick) return '🤒';
  const expression = expressionFor(key);
  if (expression === 'angry') return '😠';
  if (expression === 'sad') return '😢';
  if (expression === 'happy') return '😄';
  return c.mood >= 70 ? '😊' : c.mood >= 40 ? '😐' : '😟';
}

// 睡姿素材保持原始宽高比；两组中心点和高度取自用户提供的 SVG 位置示意图。
const SLEEP_POSE_LAYOUTS = {
  '幼年': [
    { centerX: 63.335, top: 63.371, height: 23.055 },
    { centerX: 31.506, top: 43.539, height: 27.936 }
  ],
  '少年': [
    { centerX: 32.386, top: 43.111, height: 27.565 },
    { centerX: 65.468, top: 38.626, height: 28.109 }
  ],
  '成年': [
    { centerX: 32.386, top: 43.111, height: 27.565 },
    { centerX: 65.468, top: 38.626, height: 28.109 }
  ]
};

function setExpressionSource(faceEl, src) {
  if (faceEl.getAttribute('src') === src) { faceEl.dataset.wantedSrc = src; return; }
  if (faceEl.dataset.wantedSrc === src) return;
  faceEl.dataset.wantedSrc = src;
  if (!faceEl.getAttribute('src')) { faceEl.src = src; return; }
  const next = new Image();
  const ready = typeof next.decode === 'function' ? null : new Promise((resolve, reject) => {
    next.onload = resolve;
    next.onerror = reject;
  });
  next.src = src;
  (ready || next.decode()).then(() => {
    if (faceEl.dataset.wantedSrc !== src) return;
    faceEl.src = src;
  }).catch(() => {
    if (faceEl.dataset.wantedSrc === src) faceEl.dataset.wantedSrc = '';
  });
}

function renderScene() {
  const stageName = getStage().name;
  const isBabyStage = stageName === '婴儿';
  const isChildStage = stageName === '幼年';
  const showSleepPose = sleepingNow() && (isChildStage || stageName === '少年' || stageName === '成年');
  const sleepPose = $id('sleepPose');
  const adultSleepPose = $id('adultSleepPose');
  if (showSleepPose) {
    if (![1, 2].includes(S.sleepPairVariant)) S.sleepPairVariant = Math.random() < 0.5 ? 1 : 2;
    const layout = SLEEP_POSE_LAYOUTS[stageName][S.sleepPairVariant - 1];
    const isAdultStage = stageName === '成年';
    const sleepScale = isAdultStage ? 0.39 : 0.9;
    const sourceAspect = isAdultStage ? 1546 / 1080 : 1668 / 2388;
    const sceneAspect = 1080 / 1922;
    const height = layout.height * sleepScale;
    const width = height * sourceAspect / sceneAspect;
    const activeSleepPose = isAdultStage ? adultSleepPose : sleepPose;
    if (!isAdultStage) sleepPose.src = isChildStage
      ? 'assets/chars/child-sleep-pose.png?v=1'
      : 'assets/chars/teen-sleep-pose.png?v=1';
    activeSleepPose.style.left = (layout.centerX - width / 2) + '%';
    activeSleepPose.style.top = (layout.top + (layout.height - height) / 2) + '%';
    activeSleepPose.style.width = width + '%';
    activeSleepPose.style.height = height + '%';
    // 少年睡姿的两个随机床位都以人物组合中心逆时针旋转 45°。
    activeSleepPose.style.transformOrigin = 'center center';
    activeSleepPose.style.transform = stageName === '少年' ? 'rotate(-40deg)' : 'none';
    sleepPose.classList.toggle('hidden', isAdultStage);
    adultSleepPose.classList.toggle('hidden', !isAdultStage);
    if (isAdultStage) adultSleepPose.play().catch(() => {});
    else adultSleepPose.pause();
  } else {
    S.sleepPairVariant = null;
    sleepPose.classList.add('hidden');
    adultSleepPose.classList.add('hidden');
    adultSleepPose.pause();
  }
  const roomBg = $id('roomBg');
  const roomSrc = isBabyStage ? 'assets/room/room-baby-v1.png' : 'assets/room/room-bg.jpg';
  // 婴儿期使用双婴儿床房间；到幼年及以后淡出并切回原卧室。
  switchRoomBackground(roomSrc);
  const bothSame = S.chars.wang.spot === S.chars.mu.spot;
  for (const key of ['wang', 'mu']) {
    const el = $id('fig-' + key);
    const c = S.chars[key];
    if (isBabyStage && !c.pos) {
      c.spot = 'bed'; c.posture = 'baby';
      c.pos = key === 'wang' ? { left: 34.2, bottom: 37 } : { left: 65.4, bottom: 37 };
    }
    const p = c.pos || { left: 30, bottom: 20 };
    // 旧存档或异常坐标也不允许把人物送到房间上方。
    let left = Math.max(8, Math.min(92, Number(p.left) || 30));
    let bottom = Math.max(2, Math.min(55, Number(p.bottom) || 20));
    // 每个人物预留完整的身体、表情、项链、眼镜、头饰层级组，避免不同人物的分层互相穿插。
    const depth = Math.round((60 - bottom) * 10);
    const z = depth * 10 + (key === 'wang' ? 5 : 0);
    if (bothSame && !isBabyStage && getStage().name !== '幼年' && (c.spot === 'sofa' || c.spot === 'bed')) left += key === 'wang' ? -9 : 9;
    el.style.left = left + '%';
    // 婴儿立绘与所有图层一起落在各自床垫，位置比原先上移 8px。
    const visualBottom = isBabyStage ? `calc(${bottom}% - 62px)`
      : isChildStage ? `calc(${bottom}% - 100px)`
      : bottom + '%';
    el.style.bottom = visualBottom;
    el.style.zIndex = z;
    if (showSleepPose) {
      $id('avface-' + key).textContent = avatarEmojiFor(key);
      el.style.visibility = 'hidden';
      delete el.dataset.imageSet;
      el.dataset.renderToken = String((Number(el.dataset.renderToken) || 0) + 1);
      $id('face-' + key).dataset.wantedSrc = '';
      $id('face-' + key).style.visibility = 'hidden';
      for (const category of ['necklace', 'glasses', 'headwear']) $id(`acc-${category}-${key}`).className = 'char-sprite char-accessory hidden';
      continue;
    }
    const pose = charPose(key);
    const baseChanged = el.dataset.baseSrc !== pose.src;
    el.dataset.baseSrc = pose.src;
    if (el.getAttribute('src') !== pose.src) el.src = pose.src;
    el.className = 'char-sprite ' + CHARACTERS[key].faceClass + ' ' + pose.cls;
    const faceEl = $id('face-' + key);
    const accessoryEls = ['necklace', 'glasses', 'headwear'].map(category => ({ category, el: $id(`acc-${category}-${key}`) }));
    const visibleLayers = [el];
    if (pose.faceSrc) {
      setExpressionSource(faceEl, pose.faceSrc);
      faceEl.style.left = left + '%';
      faceEl.style.bottom = visualBottom;
      faceEl.style.zIndex = z + 1;
      faceEl.className = 'char-sprite char-expression ' + CHARACTERS[key].faceClass + ' ' + pose.cls;
      visibleLayers.push(faceEl);
    } else {
      faceEl.className = 'char-sprite char-expression hidden';
    }
    const accessoryZ = { necklace: 2, glasses: 3, headwear: 4 };
    for (const { category, el: accessoryEl } of accessoryEls) {
      const accessoryKey = isAdult() ? S.equippedAccessories[key]?.[category] : null;
      const accessory = accessoryKey ? SHOP[accessoryKey] : null;
      const layerSrc = accessory?.layers?.[key];
      if (!layerSrc) {
        accessoryEl.className = 'char-sprite char-accessory hidden';
        continue;
      }
      if (accessoryEl.getAttribute('src') !== layerSrc) accessoryEl.src = layerSrc;
      accessoryEl.style.left = left + '%';
      accessoryEl.style.bottom = visualBottom;
      accessoryEl.style.zIndex = z + accessoryZ[category];
      accessoryEl.className = 'char-sprite char-accessory ' + CHARACTERS[key].faceClass + ' ' + pose.cls;
      visibleLayers.push(accessoryEl);
    }
    const imageSet = visibleLayers.map(layer => layer.getAttribute('src')).join('|');
    const syncLayerSize = () => {
      const { width, height } = getComputedStyle(el);
      for (const layer of visibleLayers.slice(1)) { layer.style.width = width; layer.style.height = height; }
    };
    if (el.dataset.imageSet === imageSet) {
      if (el.complete && el.naturalWidth > 0) syncLayerSize();
      c.lastLeft = left; c.lastBottom = bottom;
      $id('avface-' + key).textContent = avatarEmojiFor(key);
      continue;
    }
    el.dataset.imageSet = imageSet;
    const renderToken = (Number(el.dataset.renderToken) || 0) + 1;
    for (const layer of visibleLayers) {
      layer.dataset.renderToken = String(renderToken);
      if (baseChanged || !layer.complete || !layer.naturalWidth) layer.style.visibility = 'hidden';
    }
    // 同一套图片只监听一次；全部就绪后再同时显示身体、表情与配饰。
    const reveal = () => {
      const ready = visibleLayers.every(layer => layer.dataset.renderToken === String(renderToken) && layer.complete && layer.naturalWidth > 0);
      if (!ready) return;
      syncLayerSize();
      for (const layer of visibleLayers) layer.style.visibility = 'visible';
    };
    for (const layer of visibleLayers) layer.addEventListener('load', reveal, { once: true });
    reveal();
    c.lastLeft = left; c.lastBottom = bottom;
    $id('avface-' + key).textContent = avatarEmojiFor(key);
  }
}
let roomTransitionTimer = null;
let pendingRoomSrc = null;
function switchRoomBackground(roomSrc) {
  const roomBg = $id('roomBg');
  if (roomBg.getAttribute('src') === roomSrc && pendingRoomSrc !== roomSrc) return;
  if (pendingRoomSrc === roomSrc) return;
  pendingRoomSrc = roomSrc;
  const scene = $id('scene');
  scene.classList.add('room-transitioning');
  clearTimeout(roomTransitionTimer);
  roomTransitionTimer = setTimeout(() => {
    const finish = () => {
      if (pendingRoomSrc !== roomSrc) return;
      scene.classList.remove('room-transitioning');
      pendingRoomSrc = null;
    };
    roomBg.addEventListener('load', finish, { once: true });
    roomBg.setAttribute('src', roomSrc);
    if (roomBg.complete) requestAnimationFrame(finish);
    setTimeout(finish, 900);
  }, 280);
}
function statusIconsText(key) {
  const c = S.chars[key];
  const icons = [];
  if (isAdult()) return c.mood < CONFIG.critical ? '🎓 已成年 · 😢 心情低落' : c.mood < 60 ? '🎓 已成年 · 😐 有些低落' : '🎓 已成年 · 心情良好';
  if (c.sick) icons.push('🤒 生病');
  if (sleepingNow()) icons.push('😴 睡觉中');
  if (c.hunger < CONFIG.critical) icons.push('😫 饿了');
  if (c.clean < CONFIG.critical) icons.push('🤢 脏了');
  if (c.mood < CONFIG.critical) icons.push('😢 不开心');
  if (c.energy < 20) icons.push('🥱 累了');
  return icons.length ? icons.join(' ') : '状态良好';
}
function renderMini(key) {
  const c = S.chars[key];
  const adult = isAdult();
  $id('stage-' + key).textContent = adult ? '成年 · 18岁' : `${getStage().name} · ${ageLabel()}`;
  const map = { h: c.hunger, c: c.clean, m: c.mood, e: c.energy };
  for (const k of ['h', 'c', 'm', 'e']) {
    const fill = $id('b' + k + '-' + key);
    const num = $id('v' + k + '-' + key);
    const v = map[k];
    fill.style.width = (adult && k !== 'm' ? 100 : v) + '%';
    fill.className = 'fill ' + (v < CONFIG.critical ? 'bad' : v < 60 ? 'warn' : 'good');
    num.textContent = adult && k !== 'm' ? '—' : Math.round(v);
  }
  $id('status-' + key).textContent = statusIconsText(key);
}
function render() {
  const shownTime = clockText();
  $id('clock').textContent = shownTime;
  $id('phoneListClock').textContent = shownTime.slice(-5);
  $id('chatClock').textContent = shownTime.slice(-5);
  $id('coins').textContent = S.coins;
  const checkedIn = S.checkInDay === dayOf();
  $id('btnCheckIn').textContent = checkedIn ? '已签到' : '签到';
  $id('btnCheckIn').disabled = checkedIn;
  $id('btnDance').classList.toggle('hidden', !danceAvailable());
  document.body.classList.toggle('night-mode', isNightTime());
  renderScene();
  scheduleCharacterPreload();
  syncBackgroundMusic();
  renderStageNotice();
  const phoneBtn = $id('btnPhone');
  const unread = unreadPhoneCount();
  phoneBtn.classList.toggle('hidden', !S.phoneOwned || !phoneAvailable());
  $id('phoneBadge').classList.toggle('hidden', unread === 0);
  $id('phoneBadge').textContent = unread > 9 ? '9+' : unread;
  renderMini('wang'); renderMini('mu');
  const rel = relState();
  const max = S.dating ? CONFIG.bond.max : CONFIG.bond.maxPre;
  $id('bondFill').style.width = Math.min(100, S.bond / max * 100) + '%';
  $id('bondNum').textContent = `${S.bond} / ${max}`;
  const stateEl = $id('bondState');
  stateEl.textContent = REL_LABEL[rel];
  stateEl.className = 'bond-state' + (rel === 'argue' ? ' argue' : (rel === 'qijiao' || rel === 'broken' ? ' cold' : ''));
  $id('bondHint').textContent = REL_HINT[rel];
  const needRecover = rel === 'qijiao' || rel === 'argue' || rel === 'broken';
  $id('recoverPanel').classList.toggle('hidden', !needRecover);
  const recoverTitle = rel === 'broken' ? '分手了……挽回（每日限 1 次）'
    : rel === 'argue' ? '吵架了……和好（每日限 1 次）'
    : '绝交了……挽回（每日限 1 次）';
  $id('recoverTitle').innerHTML = '<img class="recover-status-icon" src="assets/ui/status-recover.png?v=1" alt="">' + recoverTitle;
  const sb = $id('speedBox'); sb.innerHTML = '';
  CONFIG.speeds.forEach((sp, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn small' + (i === S.speedIdx ? ' active' : '');
    btn.textContent = sp.label;
    btn.addEventListener('click', () => changeSpeed(i));
    sb.appendChild(btn);
  });
  const lb = $id('logBox');
  const escapeLog = text => String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  lb.innerHTML = S.log.map(l => `<div class="log-line"><span class="t">${escapeLog(l.t)}</span><span class="c">${escapeLog(l.cat)}</span> ${escapeLog(l.msg)}</div>`).join('') || '<div class="hint">还没有记录，去照顾一下他们吧～</div>';
  if (S.celebrateLove) { S.celebrateLove = false; $id('overlayLove').classList.remove('hidden'); }
  const adult = isAdult();
  document.querySelectorAll('#actionBar [data-care]').forEach(b => { b.disabled = adult; b.title = adult ? '已成年，不需要照顾' : ''; });
  // 所有互动都会触发 render，因此在界面稳定后立即持久化，避免刚操作就关闭页面而丢档。
  save();
}

function renderStageNotice() {
  const queue = S.stageNoticeQueue || [];
  if (!queue.length) return;
  const stageName = queue[0];
  $id('stageNoticeTitle').textContent = `达到${stageName}阶段啦！`;
  $id('stageNoticeText').textContent = `${STAGE_NOTICE[stageName] || '新的成长阶段已经开启。'}\n奖励 50 金币已到账！`;
  $id('overlayStage').classList.remove('hidden');
}
function closeStageNotice() {
  if (S.stageNoticeQueue && S.stageNoticeQueue.length) S.stageNoticeQueue.shift();
  $id('overlayStage').classList.add('hidden');
  save();
  renderStageNotice();
}

/* ================== 初始化 ================== */
function closeOverlays() {
  document.querySelectorAll('.overlay').forEach(o => o.classList.add('hidden'));
}
function syncSurveyCompletion() {
  let completed = false;
  try { completed = localStorage.getItem(SURVEY_DONE_KEY) === '1'; } catch (e) {}
  document.querySelectorAll('.survey-link, .survey-note').forEach(el => el.classList.toggle('hidden', completed));
}
function checkSurveyReturn() {
  try {
    if (localStorage.getItem(SURVEY_PENDING_KEY) !== '1') return;
    localStorage.removeItem(SURVEY_PENDING_KEY);
  } catch (e) { return; }
  openConfirm('你已经提交体验问卷了吗？确认提交后，问卷入口会在此浏览器中隐藏。', () => {
    try { localStorage.setItem(SURVEY_DONE_KEY, '1'); } catch (e) {}
    syncSurveyCompletion();
  }, '已提交', '问卷反馈', '还没提交');
}
function openSurvey(event) {
  event.preventDefault();
  const link = event.currentTarget;
  openConfirm('每人只需填写一次。现在打开问卷吗？填写后可用浏览器的返回按钮回到游戏。',
    () => { if (save()) { localStorage.setItem(SURVEY_PENDING_KEY, '1'); location.assign(link.href); } },
    '现在填写', '体验问卷', '稍后再填', () => link.focus());
}
function openConfirm(text, onConfirm, confirmLabel = '确定使用', title = '确认使用', cancelLabel = '取消', onCancel = null) {
  confirmCallback = onConfirm;
  confirmCancelCallback = onCancel;
  $id('confirmTitle').textContent = title;
  $id('confirmText').textContent = text;
  $id('btnConfirmOk').textContent = confirmLabel;
  $id('btnConfirmCancel').textContent = cancelLabel;
  $id('overlayConfirm').classList.remove('hidden');
  $id('btnConfirmCancel').focus();
}
function closeConfirm(cancelled = false) {
  const onCancel = cancelled ? confirmCancelCallback : null;
  confirmCallback = null;
  confirmCancelCallback = null;
  $id('overlayConfirm').classList.add('hidden');
  if (onCancel) onCancel();
}
function applyFontSize() {
  const fs = (S.settings && S.settings.fontSize) || 'std';
  document.body.classList.remove('fs-small', 'fs-std', 'fs-large');
  document.body.classList.add('fs-' + fs);
  requestAnimationFrame(updatePhoneShortcutPosition);
}
function updatePhoneShortcutPosition() {
  const scene = $id('scene');
  const avatars = document.querySelector('.avatars');
  if (scene && avatars) scene.style.setProperty('--phone-shortcut-top', `${Math.max(0, avatars.getBoundingClientRect().bottom - scene.getBoundingClientRect().top + 14)}px`);
}
function applyAudioSettings() {
  if (mergeSound) mergeSound.volume = S.settings.muted ? 0 : S.settings.sfxVol;
  if (danceKeySound) danceKeySound.volume = S.settings.muted ? 0 : S.settings.sfxVol;
  if (settingsFeedbackSound) settingsFeedbackSound.volume = S.settings.muted ? 0 : S.settings.sfxVol;
  if (voiceGainNode) voiceGainNode.gain.value = S.settings.muted ? 0 : S.settings.voiceVol * currentVoiceBoost;
  else if (voiceAudio) voiceAudio.volume = S.settings.muted ? 0 : Math.min(1, S.settings.voiceVol * currentVoiceBoost);
  syncBackgroundMusic();
}
function musicGain() { return S.settings.musicVol ** 2; }
function bothWearingHeadphones() {
  return isAdult() && ['wang', 'mu'].every(key => S.equippedAccessories[key].headwear === 'headphones');
}
function stopMusicTrack(track) {
  if (!track) return;
  track.pause();
  if (track !== backgroundMusic) track.currentTime = 0;
}
function syncMusicTrack(target, audible) {
  if (currentMusic && currentMusic !== target) stopMusicTrack(currentMusic);
  currentMusic = target;
  if (!target) return;
  if (!audible) { target.pause(); return; }
  target.volume = musicGain();
  if (target.paused) target.play().then(() => {
    if (currentMusic !== target || !pageVisible || document.hidden) target.pause();
  }).catch(() => {});
}
function syncBackgroundMusic() {
  if (!backgroundMusic) {
    backgroundMusic = new Audio('assets/audio/default-bgm.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.preload = 'auto';
  }
  const storyVideoOpen = !!(story && story.videoOpen);
  const activeStory = gameStarted && !!story && !story.failed;
  const useDateMusic = activeStory && CONFIG.dates.some(date => date.id === story.key);
  let markedBgm = '';
  if (activeStory) {
    for (let i = story.idx; i >= 0; i--) {
      if (story.lines[i]?.bgm) { markedBgm = story.lines[i].bgm; break; }
    }
  }
  const useStoryMusic = useDateMusic || !!markedBgm;
  if (useStoryMusic) {
    const desiredStorySrc = markedBgm || 'assets/audio/date-bgm.mp3';
    if (!storyMusic || storyMusicSrc !== desiredStorySrc) {
      storyMusic = new Audio(desiredStorySrc);
      storyMusicSrc = desiredStorySrc;
      storyMusic.loop = true;
      storyMusic.preload = 'auto';
    }
  }
  const asleep = gameStarted && sleepingNow();
  const currentSleepStage = asleep ? (isAdult() ? 'adult' : 'young') : '';
  if (currentSleepStage !== sleepMusicStage) {
    sleepMusicStage = currentSleepStage;
    selectedSleepSrc = currentSleepStage === 'adult'
      ? ['assets/audio/chegnniansleep.m4a', 'assets/audio/adult-sleep-alt.mp3'][Math.floor(Math.random() * 2)]
      : 'assets/audio/sleep.m4a';
  }
  const useSleepMusic = asleep && !useStoryMusic;
  // 舞台进行中只播放舞台音乐；退出后再按睡眠和耳机状态选择。
  const useHeadphonesMusic = gameStarted && !useStoryMusic && !asleep && bothWearingHeadphones();
  if (useHeadphonesMusic && !headphonesMusic) {
    headphonesMusic = new Audio('assets/audio/headphones-season.mp3');
    headphonesMusic.loop = true;
    headphonesMusic.preload = 'auto';
  }
  if (useSleepMusic && (!sleepMusic || sleepMusicSrc !== selectedSleepSrc)) {
    sleepMusic = new Audio(selectedSleepSrc);
    sleepMusicSrc = selectedSleepSrc;
    sleepMusic.loop = true;
    sleepMusic.preload = 'auto';
  }
  if (dance && !danceMusic) {
    danceMusic = new Audio('assets/audio/shuangrenwutai.m4a');
    danceMusic.loop = true;
    danceMusic.preload = 'auto';
  }
  const target = !gameStarted ? null : useStoryMusic ? storyMusic : dance ? danceMusic
    : useSleepMusic ? sleepMusic : useHeadphonesMusic ? headphonesMusic : backgroundMusic;
  syncMusicTrack(target, pageVisible && !!target && !storyVideoOpen && !(target === danceMusic && dancePaused) &&
    !S.settings.muted && S.settings.musicVol > 0);
}
function handlePageVisibility(forced = null) {
  pageVisible = forced === false ? false : !(document.hidden || document.webkitHidden);
  if (!pageVisible) {
    voiceAudio?.pause();
    danceKeySound?.pause();
    mergeSound?.pause();
    settingsFeedbackSound?.pause();
    $id('storyVideo').pause();
    $id('adultSleepPose').pause();
    voiceAudioCtx?.suspend().catch(() => {});
    danceAudioCtx?.suspend().catch(() => {});
    if (dance?.running) pauseDance();
  } else {
    voiceAudioCtx?.resume().catch(() => {});
    danceAudioCtx?.resume().catch(() => {});
    if (gameStarted && isAdult() && sleepingNow()) $id('adultSleepPose').play().catch(() => {});
  }
  syncBackgroundMusic();
}
function syncDanceMusic() {
  syncBackgroundMusic();
}
function playVoice(src) {
  if (!src || S.settings.muted || S.settings.voiceVol <= 0) return;
  if (voiceAudio) voiceAudio.pause();
  voiceAudio = new Audio(src);
  const audio = voiceAudio;
  currentVoiceBoost = VOICE_BOOST[src.split('/').pop().split('?')[0]] || 1;
  try {
    voiceAudioCtx = voiceAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (!voiceGainNode) {
      voiceGainNode = voiceAudioCtx.createGain();
      voiceCompressor = voiceAudioCtx.createDynamicsCompressor();
      voiceCompressor.threshold.value = -18;
      voiceCompressor.knee.value = 12;
      voiceCompressor.ratio.value = 4;
      voiceCompressor.attack.value = 0.003;
      voiceCompressor.release.value = 0.25;
      voiceGainNode.connect(voiceCompressor).connect(voiceAudioCtx.destination);
    }
    voiceSourceNode = voiceAudioCtx.createMediaElementSource(voiceAudio);
    voiceSourceNode.connect(voiceGainNode);
    voiceAudio.volume = 1;
    voiceGainNode.gain.value = S.settings.voiceVol * currentVoiceBoost;
    if (voiceAudioCtx.state === 'suspended') {
      voiceAudioCtx.resume().then(() => { if (voiceAudio === audio) audio.play().catch(() => {}); }).catch(() => {});
      return audio;
    }
  } catch (e) {
    voiceAudio.volume = Math.min(1, S.settings.voiceVol * currentVoiceBoost);
  }
  audio.play().catch(() => {});
  return audio;
}
function renderSettings() {
  const st = S.settings;
  $id('setMusic').value = Math.round(st.musicVol * 100);
  $id('setSfx').value = Math.round(st.sfxVol * 100);
  $id('setVoice').value = Math.round(st.voiceVol * 100);
  const mute = $id('setMute');
  mute.textContent = st.muted ? '🔇 已静音' : '🔊 未静音';
  mute.classList.toggle('active', st.muted);
  for (const f of ['small', 'std', 'large']) $id('fs-' + f).classList.toggle('active', st.fontSize === f);
}
function openSettings() {
  settingsFeedbackSound ||= new Audio('assets/audio/settings-bubblepop.mp3');
  settingsFeedbackSound.preload = 'auto';
  renderSettings();
  $id('overlaySettings').classList.remove('hidden');
}
function playSettingsFeedback(channel, force = false) {
  if (S.settings.muted || (!force && Date.now() - lastSettingsFeedbackAt < 220)) return;
  settingsFeedbackSound ||= new Audio('assets/audio/settings-bubblepop.mp3');
  settingsFeedbackSound.volume = channel === 'music' ? musicGain() : channel === 'voice' ? Math.min(1, S.settings.voiceVol * currentVoiceBoost) : S.settings.sfxVol;
  try { settingsFeedbackSound.currentTime = 0; } catch (e) {}
  settingsFeedbackSound.play().catch(() => {});
  lastSettingsFeedbackAt = Date.now();
}
let creditsReturnFocus = null;
function openCredits() {
  creditsReturnFocus = document.activeElement;
  $id('creditsBody').scrollTop = 0;
  $id('overlayCredits').classList.remove('hidden');
  $id('btnCloseCredits').focus();
}
function closeCredits() {
  $id('overlayCredits').classList.add('hidden');
  if (creditsReturnFocus) creditsReturnFocus.focus();
}
function exportSave() {
  try {
    save();
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '一橹一穆存档_' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    flash('📤 存档已导出');
  } catch (e) { flash('导出失败：' + e.message); }
}
function importSave(file) {
  if (!file) return;
  const fail = message => flash('导入失败：' + message + '。原进度未改变。');
  try {
    const reader = new FileReader();
    reader.onerror = () => fail('文件读取失败');
    reader.onabort = () => fail('文件读取已取消');
    reader.onload = () => {
      let candidate;
      try {
        candidate = prepareSave(JSON.parse(reader.result));
        if (gameStarted && candidate.clockInitialized === false) {
          candidate.clockBaseMs = Date.now();
          candidate.clockBaseGameHours = candidate.gameHours;
          candidate.gameHourRemainder = 0;
          candidate.clockInitialized = true;
        }
      } catch (e) { fail(e.message); return; }
      // 先验证、再持久化，两个步骤都成功后才替换当前游戏状态。
      if (!save(candidate, true)) { fail('无法保存导入文件'); return; }
      S = candidate;
      lastTickAt = Date.now();
      applyFontSize(); applyAudioSettings(); render();
      flash('📥 存档已导入');
    };
    reader.readAsText(file);
  } catch (e) { fail('文件读取失败'); }
}
function setActionPanel(open) {
  $id('actionBar').classList.toggle('open', open);
  $id('actionToggle').classList.toggle('hidden', open);
}
let dragState = null;
function charactersAreClose(p, other, scene) {
  return Math.hypot(p.left - other.left, (p.bottom - other.bottom) * scene.height / scene.width) <= 24;
}
function bindCharacterDrag() {
  for (const key of ['wang', 'mu']) {
    const el = $id('fig-' + key);
    el.addEventListener('pointerdown', (e) => {
      if (blockCharacterInteractionDuringSleep()) return;
      if (getStage().name === '婴儿') return;
      e.preventDefault();
      el.setPointerCapture?.(e.pointerId);
      const sceneRect = $id('scene').getBoundingClientRect();
      const c = S.chars[key];
      const startPos = c.pos || { left: 50, bottom: 25 };
      dragState = {
        key,
        pointerId: e.pointerId,
        moved: false,
        startX: e.clientX,
        startY: e.clientY,
        // 直接使用逻辑坐标，避免少年阶段的视觉下移偏移造成“抓起飞走”。
        startLeft: Number(startPos.left) || 50,
        startBottom: Number(startPos.bottom) || 25,
        sceneWidth: sceneRect.width,
        sceneHeight: sceneRect.height
      };
      el.classList.add('dragging');
      for (const layer of characterLayers(key)) layer.classList.add('dragging');
    });
    el.addEventListener('pointermove', (e) => {
      if (!dragState || dragState.key !== key || dragState.pointerId !== e.pointerId) return;
      const scene = $id('scene');
      const rect = scene.getBoundingClientRect();
      // 以抓取时的逻辑坐标为基准，仅叠加指针位移，避免透明画布/变换导致人物跳动。
      const dxPct = ((e.clientX - dragState.startX) / rect.width) * 100;
      const dyPct = ((dragState.startY - e.clientY) / rect.height) * 100;
      let left = dragState.startLeft + dxPct;
      let bottom = dragState.startBottom + dyPct;
      left = Math.max(8, Math.min(92, left));
      bottom = Math.max(2, Math.min(55, bottom));
      if (!isActivablePoint(left, bottom)) return;
      const other = S.chars[key === 'wang' ? 'mu' : 'wang'];
      const op = other.pos || { left: 50, bottom: 25 };
      let sepDx = left - op.left, sepDy = bottom - op.bottom;
      const dist = Math.hypot(sepDx, sepDy);
      const minDist = 15;
      if (dist < minDist) {
        if (!dist) { sepDx = key === 'wang' ? -1 : 1; sepDy = 0; }
        const scale = minDist / Math.hypot(sepDx, sepDy);
        left = Math.max(8, Math.min(92, op.left + sepDx * scale));
        bottom = Math.max(2, Math.min(55, op.bottom + sepDy * scale));
      }
      if (!isActivablePoint(left, bottom)) return;
      S.chars[key].pos = { left, bottom };
      S.chars[key].manualPos = true;
      S.chars[key].spot = 'floor';
      S.chars[key].posture = 'stand';
      dragState.moved = true;
      const visualBottom = getStage().name === '幼年' ? `calc(${bottom}% - 100px)` : bottom + '%';
      for (const layer of characterLayers(key)) {
        layer.style.left = left + '%';
        layer.style.bottom = visualBottom;
      }
      S.chars[key].lastLeft = left;
      S.chars[key].lastBottom = bottom;
      for (const layer of characterLayers(key)) layer.classList.add('dragging');
    });
    el.addEventListener('pointerup', (e) => {
      if (!dragState || dragState.key !== key || dragState.pointerId !== e.pointerId) return;
      const moved = dragState.moved;
      dragState = null;
      for (const layer of characterLayers(key)) layer.classList.remove('dragging');
      if (!moved) return;
      const other = S.chars[key === 'wang' ? 'mu' : 'wang'];
      const p = S.chars[key].pos, op = other.pos || { left: 50, bottom: 25 };
      const close = charactersAreClose(p, op, $id('scene').getBoundingClientRect());
      const mood = close ? 'happy' : 'sad';
      // 距离是两人的共同状态：靠近时双方开心，远离时双方难过。
      setEmotion(key, mood);
      setEmotion(key === 'wang' ? 'mu' : 'wang', mood);
      save();
      render();
      flash(close ? '他们靠近了，心情变好了～' : '他们离得有点远，似乎有些难过…');
    });
    el.addEventListener('pointercancel', () => { dragState = null; for (const layer of characterLayers(key)) layer.classList.remove('dragging'); });
  }
}
function characterLayers(key) {
  return ['fig-', 'face-', 'acc-necklace-', 'acc-glasses-', 'acc-headwear-'].map(prefix => $id(prefix + key)).filter(Boolean);
}
function bindEvents() {
  $id('btnStartSettings').addEventListener('click', openSettings);
  $id('btnCredits').addEventListener('click', openCredits);
  $id('btnCloseCredits').addEventListener('click', closeCredits);
  $id('overlayCredits').addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.stopPropagation(); closeCredits(); }
    if (e.key === 'Tab') {
      e.preventDefault();
      const close = $id('btnCloseCredits'), body = $id('creditsBody');
      (document.activeElement === close ? body : close).focus();
    }
  });
  $id('btnStartGuide').addEventListener('click', openGuide);
  $id('btnSettingsGuide').addEventListener('click', openGuide);
  $id('btnCloseGuide').addEventListener('click', closeGuide);
  $id('btnGuidePrev').addEventListener('click', () => { guidePage--; renderGuide(); });
  $id('btnGuideNext').addEventListener('click', () => {
    if (guidePage === document.querySelectorAll('[data-guide-section]').length - 1) closeGuide();
    else { guidePage++; renderGuide(); }
  });
  document.querySelectorAll('[data-guide-page]').forEach(button => button.addEventListener('click', () => {
    guidePage = Number(button.dataset.guidePage); renderGuide();
  }));
  $id('overlayGuide').addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.stopPropagation(); closeGuide(); }
    if (e.key === 'Tab') {
      const buttons = Array.from($id('overlayGuide').querySelectorAll('button:not(:disabled), [tabindex="0"]'));
      const first = buttons[0], last = buttons[buttons.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  $id('btnStartGame').addEventListener('click', startGame);
  document.addEventListener('pointerdown', () => {
    if (!pageVisible) return;
    voiceAudioCtx?.resume().catch(() => {});
    danceAudioCtx?.resume().catch(() => {});
    if (gameStarted && currentMusic?.paused) syncBackgroundMusic();
  }, { passive: true });
  document.querySelectorAll('#actionBar [data-care]').forEach(b => b.addEventListener('click', () => doCare(b.dataset.care)));
  document.querySelectorAll('#recoverPanel .btn[data-recover]').forEach(b => b.addEventListener('click', () => doRecover(b.dataset.recover)));
  $id('btnFeed').addEventListener('click', openFood);
  $id('btnCloseFood').addEventListener('click', () => $id('overlayFood').classList.add('hidden'));
  $id('tabStaple').addEventListener('click', () => { foodTab = 'staple'; renderFood(); });
  $id('tabDessert').addEventListener('click', () => { foodTab = 'dessert'; renderFood(); });
  $id('btnShop').addEventListener('click', openShop);
  $id('btnCloseShop').addEventListener('click', () => $id('overlayShop').classList.add('hidden'));
  $id('shopTabFunc').addEventListener('click', () => setShopTab('func'));
  $id('shopTabStory').addEventListener('click', () => setShopTab('story'));
  $id('shopTabTicket').addEventListener('click', () => setShopTab('ticket'));
  $id('shopTabAccessory').addEventListener('click', () => setShopTab('accessory'));
  $id('btnBag').addEventListener('click', openBag);
  $id('btnCloseBag').addEventListener('click', () => $id('overlayBag').classList.add('hidden'));
  $id('btnPhone').addEventListener('click', openPhone);
  $id('btnClosePhone').addEventListener('click', () => $id('overlayPhone').classList.add('hidden'));
  $id('btnConfirmCancel').addEventListener('click', () => closeConfirm(true));
  $id('btnConfirmOk').addEventListener('click', () => {
    const action = confirmCallback;
    closeConfirm();
    if (action) action();
  });
  $id('btnStageContinue').addEventListener('click', closeStageNotice);
  $id('bagTabFunc').addEventListener('click', () => setBagTab('func'));
  $id('bagTabStory').addEventListener('click', () => setBagTab('story'));
  $id('bagTabTicket').addEventListener('click', () => setBagTab('ticket'));
  $id('bagTabAccessory').addEventListener('click', () => setBagTab('accessory'));
  $id('btnStorySkip').addEventListener('click', endStory);
  $id('btnSettings').addEventListener('click', openSettings);
  $id('btnCloseSettings').addEventListener('click', () => $id('overlaySettings').classList.add('hidden'));
  document.querySelectorAll('.survey-link').forEach(link => link.addEventListener('click', openSurvey));
  $id('setMusic').addEventListener('input', (e) => { S.settings.musicVol = e.target.value / 100; applyAudioSettings(); playSettingsFeedback('music'); save(); });
  $id('setSfx').addEventListener('input', (e) => { S.settings.sfxVol = e.target.value / 100; applyAudioSettings(); playSettingsFeedback('sfx'); save(); });
  $id('setVoice').addEventListener('input', (e) => { S.settings.voiceVol = e.target.value / 100; applyAudioSettings(); playSettingsFeedback('voice'); save(); });
  for (const [id, channel] of [['setMusic', 'music'], ['setSfx', 'sfx'], ['setVoice', 'voice']]) $id(id).addEventListener('change', () => playSettingsFeedback(channel, true));
  $id('setMute').addEventListener('click', () => { S.settings.muted = !S.settings.muted; applyAudioSettings(); renderSettings(); save(); });
  for (const f of ['small', 'std', 'large']) $id('fs-' + f).addEventListener('click', () => { S.settings.fontSize = f; applyFontSize(); renderSettings(); save(); });
  $id('btnExport').addEventListener('click', exportSave);
  $id('btnImport').addEventListener('click', () => $id('importFile').click());
  $id('importFile').addEventListener('change', (e) => { importSave(e.target.files[0]); e.target.value = ''; });
  $id('btnResetSettings').addEventListener('click', reset);
  $id('overlayChat').addEventListener('click', (e) => {
    if (e.target.closest('.chat-head') || e.target.closest('button')) return;
    chatClick();
  });
  $id('btnCloseChat').addEventListener('click', closeChat);
  $id('btnGallery').addEventListener('click', openGallery);
  $id('btnCloseGallery').addEventListener('click', () => $id('overlayGallery').classList.add('hidden'));
  $id('btnMerge').addEventListener('click', openMerge);
  $id('btnCloseMerge').addEventListener('click', closeMerge);
  $id('btnDance').addEventListener('click', openDance);
  $id('btnDancePause').addEventListener('click', pauseDance);
  $id('btnDanceResume').addEventListener('click', resumeDance);
  $id('btnDancePauseRestart').addEventListener('click', restartDanceFromPause);
  $id('btnDanceExit').addEventListener('click', closeDance);
  $id('btnDanceHelp').addEventListener('click', showDanceTutorial);
  $id('btnDanceTutorialOk').addEventListener('click', closeDanceTutorial);
  $id('btnDanceRestart').addEventListener('click', () => {
    if (dance) { dance.score = 0; dance.combo = 0; dance.earned = 0; dance.round = 0; }
    startDanceRound();
  });
  $id('btnDanceCloseResult').addEventListener('click', closeDance);
  document.querySelectorAll('[data-dance-dir]').forEach(b => b.addEventListener('click', () => dancePress(b.dataset.danceDir)));
  document.addEventListener('keydown', (e) => {
    const map = { ArrowUp: 'up', ArrowLeft: 'left', ArrowDown: 'down', ArrowRight: 'right', w: 'up', a: 'left', s: 'down', d: 'right' };
    const dir = map[e.key];
    if (dir && dance && dance.running) { e.preventDefault(); dancePress(dir); }
  });
  $id('btnManual').addEventListener('click', openManual);
  $id('btnManualPrev').addEventListener('click', () => { manualPage = manualPage === 1 ? 2 : 1; renderManual(); });
  $id('btnManualNext').addEventListener('click', () => { manualPage = manualPage === 1 ? 2 : 1; renderManual(); });
  $id('btnCloseManual').addEventListener('click', () => $id('overlayManual').classList.add('hidden'));
  $id('btnPause').addEventListener('click', openPause);
  $id('btnPauseHome').addEventListener('click', pauseHome);
  $id('btnPauseRestart').addEventListener('click', pauseRestart);
  $id('btnCloseLove').addEventListener('click', () => $id('overlayLove').classList.add('hidden'));
  $id('btnCheckIn').addEventListener('click', doCheckIn);
  $id('btnSave').addEventListener('click', () => { if (save()) flash('已存档'); });
  $id('btnReset').addEventListener('click', reset);
  $id('btnMenu').addEventListener('click', () => $id('sidePanel').classList.toggle('open'));
  $id('btnSideClose').addEventListener('click', () => $id('sidePanel').classList.remove('open'));
  $id('actionToggle').addEventListener('click', () => setActionPanel(true));
  $id('btnCollapse').addEventListener('click', () => setActionPanel(false));
  bindCharacterDrag();
  // 右侧栏打开时，点击外部自动收起
  document.addEventListener('click', (e) => {
    const sp = $id('sidePanel');
    if (sp.classList.contains('open') && !sp.contains(e.target) && e.target.id !== 'btnMenu') sp.classList.remove('open');
  });
  $id('btnLog').addEventListener('click', () => { render(); $id('overlayLog').classList.remove('hidden'); });
  $id('btnCloseLog').addEventListener('click', () => $id('overlayLog').classList.add('hidden'));
  $id('fig-wang').addEventListener('click', () => { $id('target').value = 'wang'; flash('已选中 LuLu'); });
  $id('fig-mu').addEventListener('click', () => { $id('target').value = 'mu'; flash('已选中 MuMu'); });
  $id('av-wang').addEventListener('click', () => { $id('target').value = 'wang'; flash('已选中 LuLu'); });
  $id('av-mu').addEventListener('click', () => { $id('target').value = 'mu'; flash('已选中 MuMu'); });
  $id('storyDialog').addEventListener('click', storyClick);
  $id('storyStage').addEventListener('click', storyClick);
  $id('storyImg').addEventListener('click', storyClick);
  $id('btnStoryAuto').addEventListener('click', toggleStoryAuto);
  $id('btnStoryVideo').addEventListener('click', openStoryVideo);
  $id('btnStoryVideoClose').addEventListener('click', closeStoryVideo);
  $id('btnStoryHistory').addEventListener('click', openStoryHistory);
  $id('btnStoryHistoryClose').addEventListener('click', closeStoryHistory);
  $id('storyDialog').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); storyClick(); }
  });
  window.addEventListener('resize', fitStoryCharacters);
}

function init() {
  if (location.search.includes('reset')) { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }
  if (!load()) S = newState();
  lastTickAt = Date.now();
  applyFontSize(); applyAudioSettings();
  bindEvents();
  syncSurveyCompletion();
  window.addEventListener('resize', updatePhoneShortcutPosition);
  window.addEventListener('resize', () => {
    if (!window.matchMedia('(min-width: 1100px) and (min-aspect-ratio: 7/5)').matches) $id('sidePanel').classList.remove('open');
  });
  if (window.ResizeObserver) new ResizeObserver(updatePhoneShortcutPosition).observe(document.querySelector('.hud-left'));
  document.fonts?.ready.then(updatePhoneShortcutPosition);
  pageVisible = !(document.hidden || document.webkitHidden);
  document.addEventListener('visibilitychange', handlePageVisibility);
  document.addEventListener('webkitvisibilitychange', handlePageVisibility);
  document.addEventListener('freeze', () => handlePageVisibility(false));
  window.addEventListener('blur', () => handlePageVisibility(false));
  window.addEventListener('focus', () => handlePageVisibility());
  window.addEventListener('pagehide', () => handlePageVisibility(false));
  window.addEventListener('pageshow', handlePageVisibility);
  window.addEventListener('pageshow', checkSurveyReturn);
  if (window.matchMedia('(min-width: 1100px) and (min-aspect-ratio: 7/5)').matches) $id('sidePanel').classList.add('open');
  render();
  const startCover = document.querySelector('.start-cover');
  if (startCover.complete) preloadOpeningAssets();
  else startCover.addEventListener('load', preloadOpeningAssets, { once: true });
  checkSurveyReturn();
  requestAnimationFrame(updatePhoneShortcutPosition);
  loadZones().then(() => { applyBehavior('wang'); applyBehavior('mu'); render(); });
  setInterval(() => {
    if (!gameStarted) return;
    const now = Date.now();
    // 后台标签被节流时，仍以实际经过时间推进，而非以回调次数推进。
    const previousClock = clockText();
    const ticked = settleElapsed(now);
    if (ticked || previousClock !== clockText()) { save(); render(); }
  }, 250);
  scheduleBehavior();
}

init();
