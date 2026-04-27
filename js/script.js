const MENUS = [
  {
    cat: 'エアコン', icon: '❄️', items: [
      {
        id: 1, name: '壁掛けタイプエアコン（お掃除機能なし）', tax: 11000, unit: '台', campaign: true,
        note: '2台以上 ¥9,900/台',
        options: [
          { id: 'o1_1', name: '完全分解洗浄', tax: 8800, unit: '台' },
          { id: 'o1_2', name: '防カビチタンコーティング', tax: 3300, unit: '台' },
          { id: 'o1_3', name: '室外機', tax: 5500, unit: '台' },
          { id: 'o1_4', name: '防虫キャップ', tax: 1100, unit: '台' },
          { id: 'o1_5', name: 'エコ洗浄', tax: 1100, unit: '台' },
          { id: 'o1_6', name: 'スチーム除菌', tax: 1100, unit: '台' },
          { id: 'o1_7', name: '空気清浄機クリーニング', tax: 9900, unit: '台' },
          { id: 'o1_8', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o1_9', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      {
        id: 2, name: '壁掛けタイプエアコン（お掃除機能付き）', tax: 19800, unit: '台', campaign: true,
        note: '通常¥20,900 → キャンペーン価格。2台以上 ¥18,700/台',
        options: [
          { id: 'o2_1', name: '完全分解洗浄', tax: 8800, unit: '台' },
          { id: 'o2_2', name: '防カビチタンコーティング', tax: 3300, unit: '台' },
          { id: 'o2_3', name: '室外機', tax: 5500, unit: '台' },
          { id: 'o2_4', name: '防虫キャップ', tax: 1100, unit: '台' },
          { id: 'o2_5', name: 'エコ洗浄', tax: 1100, unit: '台' },
          { id: 'o2_6', name: 'スチーム除菌', tax: 1100, unit: '台' },
          { id: 'o2_7', name: '空気清浄機クリーニング', tax: 9900, unit: '台' },
          { id: 'o2_8', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o2_9', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      {
        id: 3, name: '天井埋め込みタイプエアコン', tax: 27500, unit: '台',
        options: [
          { id: 'o3_1', name: 'お掃除機能付き', tax: 8800, unit: '台' },
          { id: 'o3_2', name: '4方向', tax: 0, unit: '台', consultation: true },
          { id: 'o3_3', name: '防カビチタンコーティング', tax: 5500, unit: '台' },
          { id: 'o3_4', name: '室外機', tax: 8800, unit: '台' },
          { id: 'o3_5', name: 'エコ洗浄', tax: 3300, unit: '台' },
          { id: 'o3_6', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o3_7', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
          { id: 'o3_8', name: '空気清浄機クリーニング', tax: 9900, unit: '台' },
        ]
      },
    ]
  },
  {
    cat: 'パックサービス', icon: '📦', items: [
      {
        id: 4, name: 'お引越し前・後まるごとクリーニング', tax: 23760, unit: '式', campaign: true,
        note: 'マンション1K/1DK～。通常¥26,400 → キャンペーン価格',
        options: [
          { id: 'o4_1', name: '壁紙染色5㎡以下', tax: 5500, unit: '式' },
          { id: 'o4_2', name: '壁紙染色10㎡以下', tax: 13200, unit: '式' },
          { id: 'o4_3', name: 'フローリング洗浄ワックス（10帖以下）', tax: 13200, unit: '式' },
          { id: 'o4_4', name: 'フローリング洗浄ワックス（追加1帖）', tax: 1320, unit: '帖' },
          { id: 'o4_5', name: 'フローリングハクリ＆ワックス（10帖以下）', tax: 46200, unit: '式' },
          { id: 'o4_6', name: 'フローリングハクリ＆ワックス（追加1帖）', tax: 4620, unit: '帖' },
        ]
      },
      {
        id: 5, name: '在宅まるごとクリーニング', tax: 31680, unit: '式', campaign: true,
        note: 'マンション1K/1DK～。通常¥35,200 → キャンペーン価格',
        options: [
          { id: 'o5_1', name: '壁紙染色5㎡以下', tax: 5500, unit: '式' },
          { id: 'o5_2', name: '壁紙染色10㎡以下', tax: 13200, unit: '式' },
          { id: 'o5_3', name: 'フローリング洗浄ワックス（10帖以下）', tax: 13200, unit: '式' },
          { id: 'o5_4', name: 'フローリング洗浄ワックス（追加1帖）', tax: 1320, unit: '帖' },
          { id: 'o5_5', name: 'フローリングハクリ＆ワックス（10帖以下）', tax: 46200, unit: '式' },
          { id: 'o5_6', name: 'フローリングハクリ＆ワックス（追加1帖）', tax: 4620, unit: '帖' },
        ]
      },
    ]
  },
  {
    cat: '水まわり', icon: '🚿', items: [
      {
        id: 6, name: '風呂・浴室クリーニング', tax: 19800, unit: '式',
        options: [
          { id: 'o6_1', name: 'お手入れ簡単コーティング', tax: 9900, unit: '式' },
          { id: 'o6_2', name: '鏡の水アカ除去＆曇り止めフィルム仕上げ', tax: 5500, unit: '式' },
          { id: 'o6_3', name: '浴室乾燥機クリーニング', tax: 7700, unit: '台' },
          { id: 'o6_4', name: '特殊汚れ/追加範囲（0.5㎡ごと）', tax: 3300, unit: '式' },
          { id: 'o6_5', name: '浴室（風呂釜）追い焚き配管除菌クリーニング', tax: 22000, unit: '式' },
          { id: 'o6_6', name: '浴室防カビコート（1坪以上/タイル壁）', tax: 5500, unit: '式' },
          { id: 'o6_7', name: '浴室防カビコート', tax: 3300, unit: '式' },
          { id: 'o6_8', name: 'エプロン内部高圧洗浄＆防カビ仕上げ', tax: 7700, unit: '式' },
          { id: 'o6_9', name: 'エプロン内部洗浄', tax: 3300, unit: '式' },
          { id: 'o6_10', name: '鏡の水アカ除去＆コーティング仕上げ', tax: 3300, unit: '式' },
          { id: 'o6_11', name: '1坪(3.3㎡)以上の場合（1㎡ごと）', tax: 3300, unit: '㎡' },
          { id: 'o6_12', name: '洗面台クリーニングセット', tax: 8250, unit: '式' },
          { id: 'o6_13', name: '空気清浄機クリーニング', tax: 9900, unit: '台' },
          { id: 'o6_14', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o6_15', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      {
        id: 7, name: '浴室（風呂釜）の追い焚き配管除菌クリーニング', tax: 22000, unit: '式'
      },
      {
        id: 8, name: 'ウルル消毒サービス', tax: 11000, unit: '式'
      },
      {
        id: 9, name: '浴室乾燥機クリーニング', tax: 7700, unit: '台'
      },
      {
        id: 10, name: 'トイレクリーニング', tax: 9900, unit: '式',
        options: [
          { id: 'o10_1', name: 'お手入れ簡単コーティング', tax: 5500, unit: '式' },
          { id: 'o10_2', name: 'トイレ換気扇クリーニング', tax: 3300, unit: '台' },
          { id: 'o10_3', name: '便器追加', tax: 5500, unit: '台' },
          { id: 'o10_4', name: '特殊汚れ/追加範囲（0.5㎡ごと）', tax: 3300, unit: '式' },
          { id: 'o10_5', name: '床ワックス塗布', tax: 1100, unit: '式' },
          { id: 'o10_6', name: '壁紙染色10㎡以下', tax: 13200, unit: '式' },
          { id: 'o10_7', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o10_8', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      {
        id: 11, name: '洗面台クリーニング', tax: 9900, unit: '式',
        options: [
          { id: 'o11_1', name: 'お手入れ簡単コーティング', tax: 3300, unit: '式' },
          { id: 'o11_2', name: '洗面台鏡の水アカ除去＆曇り止めコーティング', tax: 3300, unit: '式' },
          { id: 'o11_3', name: '特殊汚れ/追加範囲（0.5㎡ごと）', tax: 3300, unit: '式' },
          { id: 'o11_4', name: '洗面台収納扉クリーニング', tax: 3300, unit: '式' },
          { id: 'o11_5', name: '洗面所換気扇クリーニング', tax: 3300, unit: '台' },
          { id: 'o11_6', name: '床ワックス塗布', tax: 1100, unit: '式' },
          { id: 'o11_7', name: '壁紙染色10㎡以下', tax: 13200, unit: '式' },
          { id: 'o11_8', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o11_9', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
    ]
  },
  {
    cat: '洗濯機', icon: '🫧', items: [
      {
        id: 12, name: '縦型洗濯機クリーニング', tax: 12100, unit: '台',
        options: [
          { id: 'o12_1', name: '完全分解洗浄', tax: 11000, unit: '台' },
          { id: 'o12_2', name: '日立製', tax: 5500, unit: '台' },
          { id: 'o12_3', name: '空気清浄機クリーニング', tax: 9900, unit: '台' },
          { id: 'o12_4', name: '洗濯パン', tax: 2200, unit: '台' },
          { id: 'o12_5', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o12_6', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      {
        id: 13, name: 'ドラム式洗濯機クリーニング', tax: 18700, unit: '台',
        options: [
          { id: 'o13_1', name: '空気清浄機クリーニング', tax: 9900, unit: '台' },
          { id: 'o13_2', name: '洗濯パン', tax: 2200, unit: '台' },
          { id: 'o13_3', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o13_4', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      {
        id: 14, name: 'ドラム式乾燥機能分解クリーニング（一部機種限定）', tax: 33000, unit: '台',
        options: [
          { id: 'o14_1', name: '完全分解洗浄', tax: 19800, unit: '台' },
          { id: 'o14_2', name: '洗濯パン', tax: 2200, unit: '台' },
          { id: 'o14_3', name: 'かさ上げ台設置', tax: 9900, unit: '台' },
          { id: 'o14_4', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o14_5', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
          { id: 'o14_6', name: '空気清浄機クリーニング', tax: 9900, unit: '台' },
        ]
      },
    ]
  },
  {
    cat: 'キッチン', icon: '🍳', items: [
      {
        id: 15, name: 'レンジフード・換気扇クリーニング', tax: 19800, unit: '式',
        options: [
          { id: 'o15_1', name: 'コンロセット', tax: 5500, unit: '式' },
          { id: 'o15_2', name: '食器洗い乾燥機クリーニングセット', tax: 8800, unit: '台' },
          { id: 'o15_3', name: 'キッチンクリーニングセット', tax: 16500, unit: '式' },
          { id: 'o15_4', name: '特殊汚れ/追加範囲（0.5㎡ごと）', tax: 3300, unit: '式' },
          { id: 'o15_5', name: 'お掃除機能付き', tax: 6600, unit: '式' },
          { id: 'o15_6', name: 'アイランド型', tax: 2200, unit: '式' },
          { id: 'o15_7', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o15_8', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      {
        id: 16, name: 'キッチンクリーニング', tax: 19800, unit: '式',
        options: [
          { id: 'o16_1', name: 'コンロ焦げ付き落とし', tax: 3300, unit: '式' },
          { id: 'o16_2', name: 'シンク鏡面仕上げ', tax: 3300, unit: '式' },
          { id: 'o16_3', name: '魚焼きグリル（内部）', tax: 3300, unit: '式' },
          { id: 'o16_4', name: '食器洗い機（外部）', tax: 3300, unit: '台' },
          { id: 'o16_5', name: 'キッチン下・裏側洗浄', tax: 3300, unit: '式' },
          { id: 'o16_6', name: 'レンジフード（換気扇）クリーニングセット', tax: 15400, unit: '式' },
          { id: 'o16_7', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o16_8', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      { id: 17, name: '冷蔵庫クリーニング', tax: 11000, unit: '台' },
      { id: 18, name: '食器洗い乾燥機クリーニング', tax: 11000, unit: '式' },
    ]
  },
  {
    cat: 'お部屋', icon: '🏠', items: [
      {
        id: 19, name: 'フローリング洗浄ワックス（10帖以下一律料金）', tax: 13200, unit: '式',
        options: [
          { id: 'o19_1', name: 'ワックス剥離（ハクリ）10帖以下', tax: 33000, unit: '式' },
          { id: 'o19_2', name: '追加1帖', tax: 1320, unit: '帖' },
          { id: 'o19_3', name: '給気口クリーニング', tax: 2200, unit: '台' },
          { id: 'o19_4', name: '給気口クリーニング フィルター交換付き', tax: 2750, unit: '台' },
        ]
      },
      {
        id: 20, name: 'ソファ・椅子クリーニング（通常2人掛け）', tax: 11000, unit: '台',
        options: [
          { id: 'o20_1', name: '防汚コート', tax: 3300, unit: '台' },
          { id: 'o20_2', name: '1人掛け', tax: 5500, unit: '台' },
          { id: 'o20_3', name: '1人掛け（オットマン）', tax: 3300, unit: '台' },
          { id: 'o20_4', name: '3人掛け', tax: 16500, unit: '台' },
        ]
      },
      {
        id: 22, name: 'ガラス・サッシクリーニング', tax: 11000, unit: '式',
        options: [
          { id: 'o22_1', name: '網戸1枚', tax: 550, unit: '枚' },
          { id: 'o22_2', name: '雨戸1枚', tax: 1100, unit: '枚' },
          { id: 'o22_3', name: 'サッシ追加（1㎡ごと）', tax: 1100, unit: '㎡' },
        ]
      },
      {
        id: 23, name: '壁紙染色（20㎡以下一律料金）', tax: 24200, unit: '式',
        options: [
          { id: 'o23_1', name: '追加1㎡', tax: 1210, unit: '㎡' },
          { id: 'o23_2', name: '消臭・抗菌コート', tax: 3300, unit: '式' },
        ]
      },
      {
        id: 24, name: '壁紙クリーニング（20㎡以下一律料金）', tax: 19800, unit: '式',
        options: [
          { id: 'o24_1', name: '追加1㎡', tax: 990, unit: '㎡' },
        ]
      },
      { id: 25, name: 'カーペットクリーニング（10帖以下一律料金）', tax: 16500, unit: '式' },
      { id: 26, name: '室内ダクトクリーニング・コーティング（2m程度まで）', tax: 16500, unit: '式' },
      { id: 27, name: '室内ダクトクリーニング・コーティング（2m超〜4m以下）', tax: 22000, unit: '式' },
    ]
  },
  {
    cat: 'コーティング', icon: '✨', items: [
      { id: 31, name: '浴室リニューアルコーティング', tax: 22000, unit: '式' },
      { id: 32, name: 'キッチンリニューアルコーティング', tax: 13200, unit: '式' },
      { id: 33, name: 'トイレリニューアルコーティング', tax: 11000, unit: '式' },
      { id: 34, name: '洗面台リニューアルコーティング', tax: 11000, unit: '式' },
      { id: 35, name: 'フロアコーティング（1帖あたり）', tax: 6600, unit: '帖' },
      { id: 36, name: 'UVコーティング（1帖あたり）', tax: 9900, unit: '帖' },
      { id: 37, name: 'フローリング補修（リペア）※5箇所', tax: 33000, unit: '式' },
    ]
  },
  {
    cat: 'その他', icon: '🔧', items: [
      {
        id: 38, name: '光触媒抗菌コーティング（10帖まで一律）', tax: 17600, unit: '式',
        options: [
          { id: 'o38_1', name: '追加1帖', tax: 1760, unit: '帖' },
        ]
      },
      {
        id: 39, name: 'ベランダ・外回り高圧洗浄', tax: 11000, unit: '式',
        options: [
          { id: 'o39_1', name: '追加1㎡', tax: 1100, unit: '㎡' },
        ]
      },
      {
        id: 40, name: 'お墓のお掃除', tax: 19800, unit: '基',
        options: [
          { id: 'o40_1', name: 'お墓のコーティング', tax: 11000, unit: '基' },
        ]
      },
    ]
  },
];

let cart = {};

function fmt(n) { return '¥' + Math.round(n).toLocaleString(); }

function findItem(id) {
  const key = String(id);
  for (const sec of MENUS) {
    const f = sec.items.find(i => String(i.id) === key);
    if (f) return f;
    for (const item of sec.items) {
      if (item.options) {
        const opt = item.options.find(o => String(o.id) === key);
        if (opt) return opt;
      }
    }
  }
  return null;
}

function getCartPrice(item, qty) {
  return item.tax * qty;
}

function calcTotals() {
  let total = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const item = findItem(id);
    if (!item) return;
    total += item.tax * qty;
  });
  const pretax = Math.round(total / 1.1);
  const tax = total - pretax;
  return { pretax, tax, total, discount: 0 };
}

function renderMenus() {
  const col = document.getElementById('menu-col');
  if (!col) return;
  col.innerHTML = '';
  MENUS.forEach(sec => {
    const secDiv = document.createElement('div');
    secDiv.className = 'section';
    secDiv.id = 'sec-' + sec.cat;
    secDiv.innerHTML = `<div class="section-title">${sec.icon} ${sec.cat}</div>`;
    sec.items.forEach(item => {
      const qty = cart[item.id] || 0;
      const hasOptions = item.options && item.options.length > 0;
      const accItem = document.createElement('div');
      accItem.className = 'accordion-item';

      // Build options HTML
      let optHtml = '';
      if (hasOptions) {
        optHtml = '<div class="options-title">■ オプションを選ぶ</div><div class="option-grid">';
        item.options.forEach(opt => {
          const oqty = cart[opt.id] || 0;
          if (opt.consultation) {
            optHtml += `<div class="option-card"><div class="option-info">
              <div class="option-name">${opt.name}</div>
              <div class="option-consult">ご相談ください</div>
              </div></div>`;
          } else {
            const disBtn = oqty === 0 ? 'disabled' : '';
            optHtml += `<div class="option-card"><div class="option-info">
              <div class="option-name">${opt.name}</div>
              <div class="option-price">¥${opt.tax.toLocaleString()}<span class="option-price-sub">（税込）／${opt.unit}</span></div>
              </div><div class="option-counter">
              <button class="counter-btn" id="dec-${opt.id}" onclick="changeQty('${opt.id}',-1)" ${disBtn} style="width:26px;height:26px;font-size:16px;">−</button>
              <span class="counter-val" id="qty-${opt.id}" style="font-size:14px;min-width:20px;">${oqty}</span>
              <button class="counter-btn" onclick="changeQty('${opt.id}',1)" style="width:26px;height:26px;font-size:16px;">+</button>
              </div></div>`;
          }
        });
        optHtml += '</div>';
      }

      // Changed + to ⌄ (chevron) for better rotation feel
      accItem.innerHTML = `
        <div class="accordion-header" id="acc-hdr-${item.id}" onclick="toggleAccordion(${item.id})">
          <div class="menu-icon-placeholder">${sec.icon}</div>
          <div class="menu-info">
            <div class="menu-name">${item.name}</div>
          </div>
          <div class="accordion-toggle">+</div>
        </div>
        <div class="accordion-body" id="acc-body-${item.id}">
          <div class="main-price-row">
            ${item.campaign ? '<span class="campaign-tag">キャンペーン価格</span>' : ''}
            <span class="main-price">¥${item.tax.toLocaleString()}</span>
            <span class="main-price-unit">（税込）／${item.unit}</span>
          </div>
          ${item.note ? `<div class="menu-note">${item.note}</div>` : ''}
          <div class="counter" style="margin-bottom:${hasOptions ? '12px' : '0'};">
            <button class="counter-btn" id="dec-${item.id}" onclick="changeQty(${item.id},-1)" ${qty === 0 ? 'disabled' : ''}>−</button>
            <span class="counter-val" id="qty-${item.id}">${qty}</span>
            <button class="counter-btn" onclick="changeQty(${item.id},1)">+</button>
            <span style="font-size:12px;color:#666;margin-left:6px;">カートに追加</span>
          </div>
          ${optHtml}
        </div>
      `;
      secDiv.appendChild(accItem);
    });
    col.appendChild(secDiv);
  });
}

function toggleAccordion(id) {
  const hdr = document.getElementById('acc-hdr-' + id);
  const body = document.getElementById('acc-body-' + id);
  const isOpen = hdr.classList.contains('open');
  hdr.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}

function changeQty(id, delta) {
  const key = String(id);
  const cur = cart[key] || 0;
  const next = Math.max(0, cur + delta);
  if (next === 0) delete cart[key]; else cart[key] = next;
  const qEl = document.getElementById('qty-' + key);
  const dEl = document.getElementById('dec-' + key);
  if (qEl) qEl.textContent = next;
  if (dEl) dEl.disabled = next === 0;
  updateSidebar();
}

function updateSidebar() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const badgeEl = document.getElementById('cart-badge');
  if (badgeEl) badgeEl.textContent = count + '点';
  const goCartBtn = document.getElementById('go-cart-btn');
  if (goCartBtn) goCartBtn.disabled = count === 0;
  const { total } = calcTotals();
  const stotalEl = document.getElementById('s-total');
  if (stotalEl) stotalEl.textContent = fmt(total);
}

function scrollToSection(cat, btn) {
  document.querySelectorAll('.cat-icon-btn').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const el = document.getElementById('sec-' + cat);
  if (el) {
    const yOffset = -100; // Header height approx
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function goToPage(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById('page' + n);
  if (targetPage) targetPage.classList.add('active');
  
  document.querySelectorAll('.step-list li').forEach((li, i) => {
    li.classList.remove('active', 'done');
    const s = i + 1;
    if (s === n) li.classList.add('active');
    else if (s < n) li.classList.add('done');
  });
  
  window.scrollTo(0, 0);
  updateStickyCart();
}

function goToConfirm() {
  const sei = document.getElementById('f-sei').value.trim();
  const mei = document.getElementById('f-mei').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const tel1 = document.getElementById('f-tel1').value.trim();
  const tel2 = document.getElementById('f-tel2').value.trim();
  const tel3 = document.getElementById('f-tel3').value.trim();
  const pref = document.getElementById('f-pref').value;
  const city = document.getElementById('f-city').value.trim();
  const date = document.getElementById('f-date').value;
  const policy = document.getElementById('f-policy').checked;

  let valid = true;
  function setErr(id, errId, show) {
    const el = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el || !err) return;
    if (show) { el.classList.add('error'); err.classList.add('show'); valid = false; }
    else { el.classList.remove('error'); err.classList.remove('show'); }
  }
  setErr('f-sei', 'err-sei', !sei);
  setErr('f-mei', 'err-mei', !mei);
  setErr('f-email', 'err-email', !email);
  setErr('f-tel1', 'err-tel', !tel1 || !tel2 || !tel3);
  setErr('f-pref', 'err-pref', !pref);
  setErr('f-city', 'err-city', !city);
  setErr('f-date', 'err-date', !date);

  if (!policy) { alert('プライバシーポリシーへの同意が必要です。'); valid = false; }
  if (!valid) {
    window.scrollTo({top: document.querySelector('.error')?.offsetTop - 100, behavior: 'smooth'});
    return;
  }

  const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
  const seiKana = document.getElementById('f-sei-kana').value.trim();
  const meiKana = document.getElementById('f-mei-kana').value.trim();
  const zip1 = document.getElementById('f-zip1').value.trim();
  const zip2 = document.getElementById('f-zip2').value.trim();
  const addr = document.getElementById('f-addr').value.trim();
  const apt = document.getElementById('f-apt').value.trim();
  const time = document.getElementById('f-time').value;
  const note = document.getElementById('f-note').value.trim();

  document.getElementById('c-name').textContent = sei + ' ' + mei;
  document.getElementById('c-kana').textContent = (seiKana || meiKana) ? (seiKana + ' ' + meiKana) : '（未入力）';
  document.getElementById('c-gender').textContent = gender;
  document.getElementById('c-email').textContent = email;
  document.getElementById('c-tel').textContent = tel1 + '-' + tel2 + '-' + tel3;
  const fullAddr = (zip1 || zip2 ? '〒' + zip1 + '-' + zip2 + ' ' : '') + pref + city + (addr ? ' ' + addr : '') + (apt ? ' ' + apt : '');
  document.getElementById('c-addr').textContent = fullAddr;
  const dateStr = date ? new Date(date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  document.getElementById('c-datetime').textContent = dateStr + (time ? ' ' + time : ' 時間指定なし');
  document.getElementById('c-note').textContent = note || '（なし）';

  const menuEl = document.getElementById('c-menu-items');
  menuEl.innerHTML = '';
  let total = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const item = findItem(id);
    if (!item) return;
    const sub = item.tax * qty;
    total += sub;
    const row = document.createElement('div');
    row.className = 'summary-row';
    row.innerHTML = `<span>${item.name} × ${qty}${item.unit}</span><span style="font-weight:bold;color:#1a56a0;">${fmt(sub)}</span>`;
    menuEl.appendChild(row);
  });
  document.getElementById('c-total').textContent = fmt(total);
  goToPage(3);
}

function submitForm() {
  const sei = document.getElementById('f-sei').value.trim();
  const mei = document.getElementById('f-mei').value.trim();
  const date = document.getElementById('f-date').value;
  let total = 0;
  let itemsHtml = '';
  Object.entries(cart).forEach(([id, qty]) => {
    const item = findItem(id);
    if (!item) return;
    const sub = item.tax * qty;
    total += sub;
    itemsHtml += `<tr><th>${item.name} × ${qty}${item.unit}</th><td style="text-align:right;font-weight:bold;color:#1a56a0;">${fmt(sub)}</td></tr>`;
  });
  const dateStr = date ? new Date(date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  document.getElementById('complete-summary').innerHTML = `
<div class="confirm-box-head" style="background:#1a56a0;color:#fff;padding:10px 16px;font-size:14px;font-weight:bold;">申込み概要</div>
<table class="confirm-table">
  <tr><th>お名前</th><td>${sei} ${mei} 様</td></tr>
  <tr><th>ご希望日</th><td>${dateStr}</td></tr>
  ${itemsHtml}
  <tr><th>概算合計（税込）</th><td style="font-size:18px;font-weight:bold;color:#1a56a0;">${fmt(total)}</td></tr>
</table>
`;
  goToPage(4);
}

function resetAll() {
  cart = {};
  ['f-sei', 'f-mei', 'f-sei-kana', 'f-mei-kana', 'f-email', 'f-tel1', 'f-tel2', 'f-tel3',
    'f-zip1', 'f-zip2', 'f-city', 'f-addr', 'f-apt', 'f-date', 'f-coupon', 'f-note'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  document.getElementById('f-pref').value = '長野県';
  document.getElementById('f-time').value = '';
  document.getElementById('f-policy').checked = false;
  renderMenus();
  updateSidebar();
  updateStickyCart();
  goToPage(1);
}

function updateStickyCart() {
  const isPage1 = document.getElementById('page1').classList.contains('active');
  const stickyCart = document.getElementById('sticky-cart');
  if (stickyCart) stickyCart.style.display = isPage1 ? 'flex' : 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMenus();
  updateSidebar();
  updateStickyCart();
});
