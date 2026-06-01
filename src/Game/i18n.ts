// Lightweight 2-locale i18n. zh / en.
// - Voice + decorative titles ("Last Cigarette" / "Showtime") stay English on
//   purpose (user direction 2026-06-01).
// - UI hints + spoken-line subtitles + button labels translate.

type Locale = 'zh' | 'en';

const STORAGE_KEY = 'stt_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    'hint.firstTap': "tap his place at the table",
    'btn.onceMore': 'set it again',

    'hotspot.mug':     "walter's chipped coffee mug",
    'hotspot.glasses': "his reading glasses",
    'hotspot.sweater': "his navy cashmere",
    'hotspot.fork':    "the fork at his place",
    'hotspot.photo':   "the family photograph",
    'hotspot.showtime': 'pick up',

    'sub.mug':     "He likes the chipped side. Says it kisses better.",
    'sub.glasses': "He'll need these for the crossword. Fourteen-across — I always say it wrong.",
    'sub.sweater': "I keep telling him to take it off the chair. He forgets. Every time.",
    'sub.fork':    "Yes. Yes, on the left. He noticed once. Once.",
    'sub.photo':   "He always closes one eye when the camera flashes. So vain.",
  },
  zh: {
    'hint.firstTap': "点他坐的位置",
    'btn.onceMore': '再摆一次',

    'hotspot.mug':     "Walter 缺口的咖啡杯",
    'hotspot.glasses': "他的老花眼镜",
    'hotspot.sweater': "他的海军蓝 cashmere",
    'hotspot.fork':    "他位置的银叉",
    'hotspot.photo':   "全家福照片",
    'hotspot.showtime': '接电话',

    'sub.mug':     "他喜欢缺口那一边。他说亲起来更好。",
    'sub.glasses': "他做填字游戏要用。14 横——我每次都念错。",
    'sub.sweater': "我一直让他把它从椅背上拿走。他每次都忘。",
    'sub.fork':    "对。对,放左边。他注意过一次。一次。",
    'sub.photo':   "拍照时他总是闭一只眼。爱美。",
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE]?.[key] ?? STRINGS.en[key] ?? key;
}

export function getLocale(): Locale {
  return LOCALE;
}
