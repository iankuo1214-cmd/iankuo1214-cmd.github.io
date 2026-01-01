// 每張作品的資料（多系列共用）
const PHOTO_DATA = {
    /* ---------------- 路上隨影 ---------------- */
    "ls-01": {
        src: "photo/Portfolio/路上隨影/街拍-1.jpg",
        title: "市口",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "嘈雜裡有秩序，混沌裡有節奏而\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0畫面卻剛好停在這一個瞬間。",
        back: "路上隨影.html"
    },
    "ls-02": {
        src: "photo/Portfolio/路上隨影/街拍-2.jpg",
        title: "光角",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "光在屋簷間穿過，替日常留下輪廓。\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0人群還在走，巷口卻靜了一下。",
        back: "路上隨影.html"
    },
    "ls-03": {
        src: "photo/Portfolio/路上隨影/街拍-3.jpg",
        title: "蒸氣",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "熱氣往上散，攤販的節奏卻一刻沒停。\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0一整天的生活，都從這些小動作裡冒出來。",
        back: "路上隨影.html"
    },
    "ls-04": {
        src: "photo/Portfolio/路上隨影/街拍-4.jpg",
        title: "攤前",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "攤位還在原地，前景卻被路過的速度刷了一層。\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0好像所有人都很忙，只有這個攤還在等。",
        back: "路上隨影.html"
    },
    "ls-05": {
        src: "photo/Portfolio/路上隨影/街拍-5.jpg",
        title: "擦身",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "在騎樓底下，大家各自等著要去的地方。",
        back: "路上隨影.html"
    },
    "ls-06": {
        src: "photo/Portfolio/路上隨影/街拍-6.jpg",
        title: "熟客",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "他只是坐在老位子，做每天都會做的事。\n光從側邊照進來，連安靜都變得很清楚。",
        back: "路上隨影.html"
    },
    "ls-07": {
        src: "photo/Portfolio/路上隨影/街拍-7.jpg",
        title: "巷弄",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "買賣的聲音停下來，巷口只剩兩個人的對話。\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0日常就是這樣，被一句一句講過去的。",
        back: "路上隨影.html"
    },
    "ls-08": {
        src: "photo/Portfolio/路上隨影/街拍-8.jpg",
        title: "影",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "走路的人沒有回頭，但照片把他們留住了。",
        back: "路上隨影.html"
    },
    "ls-09": {
        src: "photo/Portfolio/路上隨影/街拍-9.jpg",
        title: "街口",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "夜裡的步伐比較慢，但人卻變得更多。\n巷子在這時候特別像一條故事的入口。",
        back: "路上隨影.html"
    },
    "ls-10": {
        src: "photo/Portfolio/路上隨影/街拍-10.jpg",
        title: "過門",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "門口的燈打得很暖，把外面的夜都融進來了。\n\u00A0\u00A0\u00A0\u00A0有人進來、有人出去，像一口會呼吸的光。",
        back: "路上隨影.html"
    },
    "ls-11": {
        src: "photo/Portfolio/路上隨影/P1050549.jpg",
        title: "午後",
        series: "路上隨影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "光線很硬，風景卻不急著移動。\n午後讓所有細節都變得有點慵懶。",
        back: "路上隨影.html"
    },
    "ls-12": {
        src: "photo/Portfolio/路上隨影/P1050488.jpg",
        title: "加油",
        series: "路上隨影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "光線太硬，風景被壓成一塊一塊的。\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0熱得讓整個午後都有點恍神。",
        back: "路上隨影.html"
    },
    "ls-13": {
        src: "photo/Portfolio/路上隨影/8BA1310D-C251-48A2-9715-56F4204B2CAD.jpg",
        title: "她",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "她躺在那裡，看起來很輕。\n\u00A0\u00A0\u00A0\u00A0那一刻我沒有拍風景，只是想記下她。",
        back: "路上隨影.html"
    },
    "ls-14": {
        src: "photo/Portfolio/路上隨影/A2156924-4B8D-4C8B-95B5-B48A0C881216.jpg",
        title: "逆光",
        series: "路上隨影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "她看著海，風把時間吹得很慢。\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0那天什麼都不用急。",
        back: "路上隨影.html"
    },
    "ls-15": {
        src: "photo/Portfolio/路上隨影/DSC00094.jpg",
        title: "靠岸",
        series: "路上隨影",
        meta: "2025 · Tainan",
        caption: "船還沒停，動作已經開始。",
        back: "路上隨影.html"
    },
    "ls-16": {
        src: "photo/Portfolio/路上隨影/C6FD01F1-5C0A-4E8F-9EAB-0982B7A44184.jpg",
        title: "喝一瓶",
        series: "路上隨影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "下午的路邊，有人開始喝酒。",
        back: "路上隨影.html"
    },
    "ls-17": {
        src: "photo/Portfolio/路上隨影/DSC00095.jpg",
        title: "收網",
        series: "路上隨影",
        meta: "2024 · Tainan",
        caption: "網被拉上來，船也慢慢停下來。\n事情結束在一個很日常的動作裡。",
        back: "路上隨影.html"
    },
    "ls-18": {
        src: "photo/Portfolio/路上隨影/DSC00237.jpg",
        title: "巷口",
        series: "路上隨影",
        meta: "2024 · Tainan",
        caption: "燈還亮著，但街已經慢下來了。",
        back: "路上隨影.html"
    },
    "ls-19": {
        src: "photo/Portfolio/路上隨影/DSC00339.jpg",
        title: "我們",
        series: "路上隨影",
        meta: "2025 · Tainan",
        caption: "這天什麼都沒有發生， 但我記得很清楚",
        back: "路上隨影.html"
    },
    "ls-20": {
        src: "photo/Portfolio/路上隨影/DSC09377.jpg",
        title: "望👀",
        series: "路上隨影",
        meta: "2025 · Taipei",
        caption: "她在前面，風景在遠處。",
        back: "路上隨影.html"
    },
    "ls-21": {
        src: "photo/Portfolio/路上隨影/IMG_2417.jpg",
        title: "她",
        series: "路上隨影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "她看著光， 我看著她。",
        back: "路上隨影.html"
    },
    "ls-22": {
        src: "photo/Portfolio/路上隨影/IMG_9478.jpg",
        title: "多多🐶",
        series: "路上隨影",
        meta: "2025 · Home",
        caption: "可愛的多多在曬太陽",
        back: "路上隨影.html"
    },
    "ls-23": {
        src: "photo/Portfolio/路上隨影/P1050506.jpg",
        title: "海",
        series: "路上隨影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "那一刻沒有被留下來，只剩畫面。",
        back: "路上隨影.html"
    },
    "ls-24": {
        src: "photo/Portfolio/路上隨影/P1050511.jpg",
        title: "現場",
        series: "路上隨影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "———————",
        back: "路上隨影.html"
    },
    "ls-25": {
        src: "photo/Portfolio/路上隨影/P1050652.jpg",
        title: "傍晚之前",
        series: "路上隨影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "海還沒暗下來，人也還沒走。",
        back: "路上隨影.html"
    },
    "ls-26": {
        src: "photo/Portfolio/路上隨影/IMG_2051.jpg",
        title: "未停下來的那一刻",
        series: "路上隨影",
        meta: "2025 · New Taipei",
        caption: "有些地方不需要被看清楚。\n人、車、聲音都在各自的方向裡移動，只有這一瞬間被留下來。\n不是為了紀念什麼，只是剛好在那裡。",
        back: "路上隨影.html"
    },

    /* ---------------- 光與影 ---------------- */
    "gy-01": {
        src: "photo/Portfolio/光與影/IMG_0373.jpg",
        title: "影子",
        series: "光與影",
        meta: "2024 · New Taipei",
        caption: "影子拉得很長， 但沒有人經過。",
        back: "光與影.html"
    },
    "gy-02": {
        src: "photo/Portfolio/光與影/IMG_0454.jpg",
        title: "影子",
        series: "光與影",
        meta: "2024 · New Taipei",
        caption: "影子拉得很長， 但沒有人經過。",
        back: "光與影.html"
    },
    "gy-03": {
        src: "photo/Portfolio/光與影/IMG_0468.jpg",
        title: "伴",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "夜已經很深了，有些人還不急著離開。",
        back: "光與影.html"
    },
    "gy-04": {
        src: "photo/Portfolio/光與影/IMG_0510.jpg",
        title: "前進",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "腳步很慢。",
        back: "光與影.html"
    },
    "gy-05": {
        src: "photo/Portfolio/光與影/IMG_7161.jpg",
        title: "紅茶冰",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "紅茶冰三十元， 沒多問就買了",
        back: "光與影.html"
    },
    "gy-06": {
        src: "photo/Portfolio/光與影/IMG_7641.jpg",
        title: "她",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "她先拍我， 但我比較會構圖。",
        back: "光與影.html"
    },
    "gy-07": {
        src: "photo/Portfolio/光與影/IMG_9122.jpg",
        title: "三人行",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "我在說話， 但有人沒在聽",
        back: "光與影.html"
    },
    "gy-08": {
        src: "photo/Portfolio/光與影/IMG_9124.JPG",
        title: "阿美",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "要剪頭髮嗎？",
        back: "光與影.html"
    },
    "gy-09": {
        src: "photo/Portfolio/光與影/IMG_9459.jpg",
        title: "還開著",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "夜很晚了，\n有些地方不會先休息。",
        back: "光與影.html"
    },
    "gy-10": {
        src: "photo/Portfolio/光與影/IMG_9486.jpg",
        title: "無題",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "有些地方靜著， 是讓人繞進來的。",
        back: "光與影.html"
    },
    "gy-11": {
        src: "photo/Portfolio/光與影/IMG_9506.JPG",
        title: "許ㄅ堯",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "是在拍啥？",
        back: "光與影.html"
    },
    "gy-12": {
        src: "photo/Portfolio/光與影/IMG_9511.JPG",
        title: "迷茫",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "I don't know",
        back: "光與影.html"
    },
    "gy-13": {
        src: "photo/Portfolio/光與影/IMG_9730.jpg",
        title: "寧",
        series: "光與影",
        meta: "2025 · Taipei",
        caption: "一直存在。",
        back: "光與影.html"
    },
    "gy-14": {
        src: "photo/Portfolio/光與影/IMG_9740.JPG",
        title: "早晨",
        series: "光與影",
        meta: "2025 · Taipei",
        caption: "陽光、街道、汽車，收費員",
        back: "光與影.html"
    },
    "gy-15": {
        src: "photo/Portfolio/光與影/IMG_9754.jpg",
        title: "匆忙/悠閑？",
        series: "光與影",
        meta: "2025 · Taipei",
        caption: "光落在他身上， 但他沒發現",
        back: "光與影.html"
    },
    "gy-16": {
        src: "photo/Portfolio/光與影/IMG_9860.JPG",
        title: "紅燈",
        series: "光與影",
        meta: "2025 · Taipei",
        caption: "每個人都在動， 只有光沒事做。",
        back: "光與影.html"
    },
    "gy-17": {
        src: "photo/Portfolio/光與影/IMG_9862.JPG",
        title: "紅燈",
        series: "光與影",
        meta: "2025 · Taipei",
        caption: "每個人都在動， 只有光沒事做。",
        back: "光與影.html"
    },
    "gy-18": {
        src: "photo/Portfolio/光與影/IMG_9871.jpg",
        title: "巷內",
        series: "光與影",
        meta: "2025 · Taipei",
        caption: "不是目的地，\n只是剛好經過。",
        back: "光與影.html"
    },
    "gy-19": {
        src: "photo/Portfolio/光與影/P1060502.jpg",
        title: "光",
        series: "光與影",
        meta: "2025 · Home",
        caption: "樓梯上的光，只照亮了一半的步伐。",
        back: "光與影.html"
    },
    "gy-20": {
        src: "photo/Portfolio/光與影/P1050507.jpg",
        title: "人群",
        series: "光與影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "人群停在光沒有繼續的地方。",
        back: "光與影.html"
    },
    "gy-21": {
        src: "photo/Portfolio/光與影/P1060498.jpg",
        title: "階梯",
        series: "光與影",
        meta: "2025 · Home",
        caption: "亮部像是主角，陰影卻撐起了整個畫面。",
        back: "光與影.html"
    },
    "gy-22": {
        src: "photo/Portfolio/光與影/P1050632.jpg",
        title: "在想什麼？",
        series: "光與影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "那個時候還未開始",
        back: "光與影.html"
    },
    "gy-23": {
        src: "photo/Portfolio/光與影/IMG_0006.jpg",
        title: "我",
        series: "光與影",
        meta: "2024 · Taipei",
        caption: "他拍的我。",
        back: "光與影.html"
    },
    "gy-24": {
        src: "photo/Portfolio/光與影/IMG_9520.jpg",
        title: "多多",
        series: "光與影",
        meta: "2025 · Taipei",
        caption: "可愛小狗狗。",
        back: "光與影.html"
    },
    "gy-25": {
        src: "photo/Portfolio/光與影/IMG_2186.jpg",
        title: "邊界形成",
        series: "光與影",
        meta: "2025 · Taipei",
        caption: "亮暗各自成立。",
        back: "光與影.html"
    },
    "gy-26": {
        src: "photo/Portfolio/光與影/P1050589.jpg",
        title: "殘光",
        series: "光與影",
        meta: "2024 · Pingtung\u00A0Kenting",
        caption: "仍在運轉。",
        back: "光與影.html"
    },

    /* ---------------- 商業攝影 ---------------- */
    "cm-01": {
        src: "photo/Portfolio/商業攝影/商業攝影1.jpg",
        title: "香水 01",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-02": {
        src: "photo/Portfolio/商業攝影/商業攝影2.jpg",
        title: "香水 02",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-03": {
        src: "photo/Portfolio/商業攝影/商業攝影3.jpg",
        title: "香水 03",
        series: "商業攝影",
        meta: "22025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-04": {
        src: "photo/Portfolio/商業攝影/商業攝影4.jpg",
        title: "Marshall Major V",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-05": {
        src: "photo/Portfolio/商業攝影/商業攝影5.jpg",
        title: "Nikon FM2",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-06": {
        src: "photo/Portfolio/商業攝影/商業攝影6.jpg",
        title: "馬杜拉斯 01",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-07": {
        src: "photo/Portfolio/商業攝影/商業攝影7.jpg",
        title: "馬杜拉斯 02",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-08": {
        src: "photo/Portfolio/商業攝影/商業攝影8.jpg",
        title: "馬杜拉斯 03",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-09": {
        src: "photo/Portfolio/商業攝影/商業攝影9.jpg",
        title: "馬杜拉斯 04",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-10": {
        src: "photo/Portfolio/商業攝影/商業攝影10.jpg",
        title: "夏日涼感 01",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "復古機身被單獨放在木頭上，自帶一種收藏感。",
        back: "商業攝影.html"
    },
    "cm-11": {
        src: "photo/Portfolio/商業攝影/商業攝影11.jpg",
        title: "夏日涼感 02",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-12": {
        src: "photo/Portfolio/商業攝影/商業攝影12.jpg",
        title: "夏日涼感 03",
        series: "商業攝影",
        meta: "2025 · Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-13": {
        src: "photo/Portfolio/商業攝影/商業攝影13.jpg",
        title: "GAZE 01",
        series: "商業攝影",
        meta: "2025 · New Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-14": {
        src: "photo/Portfolio/商業攝影/商業攝影14.jpg",
        title: "GAZE 02",
        series: "商業攝影",
        meta: "2025 · New Taipei",
        caption: "",
        back: "商業攝影.html"
    },
    "cm-15": {
        src: "photo/Portfolio/商業攝影/商業攝影15.jpg",
        title: "金色首部曲：金色歲月 01",
        series: "商業攝影",
        meta: "2025 · New Taipei",
        caption: "在金色光芒中再次誕生，綻放屬於我的金色序曲\n灑落在肌膚、記憶與夢裡的光",
        back: "商業攝影.html"
        },
    "cm-16": {
        src: "photo/Portfolio/商業攝影/商業攝影16.jpg",
        title: "金色首部曲：金色歲月 02",
        series: "商業攝影",
        meta: "22025 · New Taipei",
        caption: "在金色光芒中再次誕生，綻放屬於我的金色序曲\n灑落在肌膚、記憶與夢裡的光",
        back: "商業攝影.html"
        },
    "cm-17": {
        src: "photo/Portfolio/商業攝影/商業攝影17.jpg",
        title: "金色首部曲：金色歲月 03",
        series: "商業攝影",
        meta: "2025 · New Taipei",
        caption: "在金色光芒中再次誕生，綻放屬於我的金色序曲\n灑落在肌膚、記憶與夢裡的光",
        back: "商業攝影.html"
    },
    "cm-18": {
        src: "photo/Portfolio/商業攝影/商業攝影18.jpg",
        title: "金色首部曲：金色歲月 04",
        series: "商業攝影",
        meta: "2025 · New Taipei",
        caption: "在金色光芒中再次誕生，綻放屬於我的金色序曲\n灑落在肌膚、記憶與夢裡的光",
        back: "商業攝影.html"
    }
};

// 讀網址上的 ?id=xxxx
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 找對應資料，找不到就用第一張當預設
//const data = PHOTO_DATA[id] || Object.values(PHOTO_DATA)[0];

// 找對應資料，找不到就回作品頁
const data = PHOTO_DATA[id];

if (!data) {
  window.location.href = "Portfolio.html";
}


if (data) {
    document.getElementById("detail-image").src = data.src;
    document.getElementById("detail-title").textContent = data.title;
    document.getElementById("detail-series").textContent = data.series;
    document.getElementById("detail-meta").textContent = data.meta;
    document.getElementById("detail-caption").textContent = data.caption;

    // 動態設定「返回」按鈕要回到哪一個瀑布頁
    const backLink = document.getElementById("global-back-link");
    const backText = document.getElementById("global-back-text");

    if (backLink && data.back) {
        backLink.href = data.back;
    }
    if (backText) {
        backText.textContent = `返回${data.series}`;
    }
}