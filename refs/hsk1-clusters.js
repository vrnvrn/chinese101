// Semantic clusters for HSK 1 words.
// Used by the sentence-completion drill to avoid offering distractors that
// would be just as valid as the answer in the blank.
//
// The rule of thumb for clustering: if word A and word B occupy the same
// syntactic slot AND a learner could plausibly read the source sentence as
// asking for either one, they should share a cluster.
//
// Words that are unique enough that no swap would mislead a learner do not
// need a tag and are absent from this map.
window.HSK1_CLUSTERS = {
    // Time: when something happens (day/year labels, parts of day)
    '今天': 'time-when', '明天': 'time-when', '昨天': 'time-when',
    '今年': 'time-when', '明年': 'time-when', '去年': 'time-when',
    '星期日': 'time-when', '星期天': 'time-when',
    '白天': 'time-when', '早上': 'time-when', '上午': 'time-when',
    '中午': 'time-when', '下午': 'time-when', '晚上': 'time-when',
    '现在': 'time-when',

    // Time: units / durations
    '时候': 'time-unit', '时间': 'time-unit',
    '小时': 'time-unit', '分钟': 'time-unit',
    '点': 'time-unit', '分': 'time-unit',
    '年': 'time-unit', '月': 'time-unit', '日': 'time-unit',
    '号': 'time-unit', '天': 'time-unit', '星期': 'time-unit',

    // Family
    '家人': 'family', '爸爸': 'family', '妈妈': 'family',
    '哥哥': 'family', '姐姐': 'family', '弟弟': 'family', '妹妹': 'family',
    '儿子': 'family', '女儿': 'family', '孩子': 'family',
    '男朋友': 'family', '女朋友': 'family',

    // Person roles / professions
    '人': 'person-role', '先生': 'person-role', '女士': 'person-role',
    '朋友': 'person-role', '小朋友': 'person-role',
    '老师': 'person-role', '学生': 'person-role',
    '大学生': 'person-role', '中学生': 'person-role', '小学生': 'person-role',
    '同学': 'person-role', '医生': 'person-role',

    // Personal pronouns
    '我': 'pron', '你': 'pron', '他': 'pron', '她': 'pron', '它': 'pron', '您': 'pron',
    '我们': 'pron', '你们': 'pron', '他们': 'pron', '她们': 'pron', '它们': 'pron',
    '大家': 'pron',

    // Demonstratives
    '这': 'demo', '那': 'demo',
    '这个': 'demo', '那个': 'demo',
    '这里': 'demo', '那里': 'demo',
    '这儿': 'demo', '那儿': 'demo',
    '这些': 'demo', '那些': 'demo',
    '这边': 'demo', '那边': 'demo',
    '有的': 'demo', '有些': 'demo',

    // Question words
    '什么': 'question', '谁': 'question',
    '哪': 'question', '哪个': 'question', '哪里': 'question', '哪儿': 'question', '哪些': 'question',
    '几': 'question', '多少': 'question',
    '怎么': 'question', '怎么样': 'question',

    // Numbers
    '零': 'number', '一': 'number', '二': 'number', '两': 'number',
    '三': 'number', '四': 'number', '五': 'number', '六': 'number',
    '七': 'number', '八': 'number', '九': 'number', '十': 'number',
    '百': 'number', '千': 'number', '半': 'number', '一半': 'number',

    // Measure words / classifiers
    '个': 'measure', '本': 'measure', '件': 'measure', '块': 'measure',
    '口': 'measure', '只': 'measure', '元': 'measure', '些': 'measure',
    '一些': 'measure', '一点儿': 'measure', '一下': 'measure', '岁': 'measure',

    // Places / buildings / countries (where you go)
    '学校': 'place', '大学': 'place', '中学': 'place', '小学': 'place',
    '医院': 'place', '商店': 'place', '超市': 'place', '书店': 'place',
    '饭店': 'place', '电影院': 'place', '公司': 'place', '房间': 'place',
    '店': 'place', '中国': 'place', '国': 'place', '家': 'place',

    // Spatial directions / positions
    '里': 'direction', '外': 'direction',
    '前': 'direction', '后': 'direction',
    '边': 'direction', '外边': 'direction',
    '上': 'direction', '下': 'direction',

    // Food (including meals)
    '饭': 'food', '菜': 'food', '米饭': 'food',
    '面包': 'food', '面条儿': 'food',
    '包子': 'food', '饺子': 'food', '鸡蛋': 'food',
    '水果': 'food', '苹果': 'food',
    '早饭': 'food', '午饭': 'food', '晚饭': 'food',

    // Drinks
    '茶': 'drink', '水': 'drink', '牛奶': 'drink',

    // Weather
    '雨': 'weather', '雪': 'weather', '天气': 'weather',

    // Vehicles
    '车': 'vehicle', '出租车': 'vehicle', '飞机': 'vehicle', '火车': 'vehicle',

    // Electronics / 电X family
    '电话': 'electronics', '电脑': 'electronics', '电视': 'electronics',
    '电影': 'electronics', '手机': 'electronics',

    // Chinese language words
    '汉语': 'language', '汉字': 'language', '中文': 'language',

    // Animals
    '狗': 'animal', '猫': 'animal',

    // Common room objects
    '杯子': 'object-room', '椅子': 'object-room', '桌子': 'object-room',

    // Illness
    '病': 'illness', '生病': 'illness', '看病': 'illness',

    // Verbs of motion
    '来': 'verb-motion', '去': 'verb-motion',
    '回': 'verb-motion', '到': 'verb-motion',

    // Verbs of perception (taking in info)
    '看': 'verb-perceive', '看见': 'verb-perceive',
    '听': 'verb-perceive', '听见': 'verb-perceive',
    '读': 'verb-perceive', '读书': 'verb-perceive',

    // Verbs of speech / production
    '说': 'verb-produce', '说话': 'verb-produce',
    '写': 'verb-produce', '唱': 'verb-produce',

    // Verbs of consumption
    '吃': 'verb-consume', '喝': 'verb-consume',

    // Verbs of desire / preference
    '想': 'verb-want', '要': 'verb-want',
    '喜欢': 'verb-want', '爱': 'verb-want',

    // Modal / ability verbs
    '会': 'verb-modal', '能': 'verb-modal', '可以': 'verb-modal',

    // Verbs of cognition
    '认识': 'verb-know', '知道': 'verb-know', '觉得': 'verb-know',

    // Verbs of transaction / search
    '买': 'verb-transact', '卖': 'verb-transact',
    '找': 'verb-transact', '给': 'verb-transact',

    // Greetings / courtesy phrases
    '你好': 'greeting', '谢谢': 'greeting',
    '再见': 'greeting', '对不起': 'greeting',
    '没事': 'greeting', '没关系': 'greeting',
    '不客气': 'greeting',
    '请': 'greeting', '请问': 'greeting',

    // Daily routine verbs
    '起床': 'verb-daily', '睡': 'verb-daily', '睡觉': 'verb-daily',
    '休息': 'verb-daily',
    '上学': 'verb-daily', '上班': 'verb-daily', '下班': 'verb-daily',
    '上课': 'verb-daily', '下课': 'verb-daily',
    '工作': 'verb-daily',
    '做': 'verb-daily', '做饭': 'verb-daily',
    '学': 'verb-daily', '学习': 'verb-daily',
    '玩': 'verb-daily', '穿': 'verb-daily',
    '打电话': 'verb-daily', '开车': 'verb-daily', '开': 'verb-daily',

    // Identity / state verbs
    '是': 'verb-state', '有': 'verb-state', '没有': 'verb-state',
    '在': 'verb-state', '叫': 'verb-state',

    // Adjectives by axis
    '大': 'adj-size', '小': 'adj-size', '多': 'adj-size', '少': 'adj-size',
    '好': 'adj-quality', '漂亮': 'adj-quality',
    '好看': 'adj-quality', '好听': 'adj-quality',
    '好玩儿': 'adj-quality', '好吃': 'adj-quality',
    '冷': 'adj-temp', '热': 'adj-temp',
    '贵': 'adj-price', '便宜': 'adj-price',
    '早': 'adj-time-rel', '晚': 'adj-time-rel',
    '男': 'adj-gender', '女': 'adj-gender',
    '高兴': 'adj-state', '忙': 'adj-state',
    '新': 'adj-newness',

    // Adverbs by axis
    '很': 'adv-degree', '太': 'adv-degree', '真': 'adv-degree',
    '非常': 'adv-degree', '有点儿': 'adv-degree',
    '也': 'adv-also', '还': 'adv-also', '再': 'adv-also',
    '都': 'adv-also', '正在': 'adv-also',
    '不': 'adv-neg', '不要': 'adv-neg',

    // Sentence-final / structural particles
    '的': 'particle', '了': 'particle',
    '吗': 'particle', '呢': 'particle', '吧': 'particle',
};
