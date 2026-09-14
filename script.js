// 武器種ごとに分類したデータ
const weaponCategories = {
  "シューター": [
    "ボールドマーカー", "ボールドマーカーネオ", "ボールドマーカー7",
    "わかばシューター", "もみじシューター",
    "シャープマーカー", "シャープマーカーネオ",
    "プロモデラーMG", "プロモデラーRG", "プロモデラーPG", 
    "スプラシューター", "スプラシューターコラボ", "スプラシューターベッチュー",
    "ヒーローシューター レプリカ", 
    ".52ガロン", ".52ガロンデコ", ".52ガロンベッチュー",
    "N-ZAP85", "N-ZAP89", "N-ZAP83",
    "プライムシューター", "プライムシューターコラボ", "プライムシューターベッチュー",
    ".96ガロン", ".96ガロンデコ",
    "ジェットスイーパー", "ジェットスイーパーカスタム",
    "ボトルガイザー", "ボトルガイザーフォイル"
  ],
  "ブラスター": [
    "ノヴァブラスター", "ノヴァブラスターネオ", "ノヴァブラスターベッチュー",
    "ホットブラスター", "ホットブラスターカスタム",
    "ヒーローブラスター レプリカ",
    "ロングブラスター", "ロングブラスターカスタム", "ロングブラスターネクロ",
    "クラッシュブラスター", "クラッシュブラスターネオ", 
    "ラピッドブラスター", "ラピッドブラスターベッチュー", 
    "Rブラスターエリート", "Rブラスターエリートデコ",
    "L3リールガン", "L3リールガンD", "L3リールガンベッチュー",
    "H3リールガン", "H3リールガンD", "H3リールガンチェリー"
  ],
  "ローラー": [
    "カーボンローラー", "カーボンローラーデコ",
    "スプラローラー", "スプラローラーコラボ", "スプラローラーベッチュー",
    "ヒーローローラー レプリカ", 
    "ダイナモローラー", "ダイナモローラーテスラ", "ダイナモローラーベッチュー",
    "ヴァリアブルローラー", "ヴァリアブルローラーフォイル"
  ],
  "フデ": [
    "パブロ", "パブロ・ヒュー", "パーマネント・パブロ",
    "ホクサイ", "ホクサイ・ヒュー", "ホクサイベッチュー", 
    "ヒーローブラシ レプリカ"
  ],
  "チャージャー": [
    "スクイックリンα", "スクイックリンβ", "スクイックリンγ",
    "スプラチャージャー", "スプラチャージャーコラボ", "スプラチャージャーベッチュー",
    "ヒーローチャージャー レプリカ", 
    "スプラスコープ", "スプラスコープコラボ", "スプラスコープベッチュー",
    "リッター4K", "リッター4Kカスタム",
    "4Kスコープ", "4Kスコープカスタム",
    "14式竹筒銃・甲", "14式竹筒銃・乙", "14式竹筒銃・丙",
    "ソイチューバー", "ソイチューバーカスタム"
  ],
  "スロッシャー": [
    "バケットスロッシャー", "バケットスロッシャーデコ", "バケットスロッシャーベッチュー",
    "ヒーロースロッシャー レプリカ", 
    "ヒッセン", "ヒッセン・ヒュー",
    "スクリュースロッシャー", "スクリュースロッシャーネオ", "スクリュースロッシャーベッチュー",
    "オーバーフロッシャー", "オーバーフロッシャーデコ",
    "エクスプロッシャー", "エクスプロッシャーカスタム"
  ],
  "スピナー": [
    "バレルスピナー", "バレルスピナーデコ", "ヒーロースピナー レプリカ", "バレルスピナーベッチュー",
    "ハイドラント", "ハイドラントカスタム",
    "スプラスピナー", "スプラスピナーコラボ", "スプラスピナーベッチュー"
  ],
  "マニューバー": [
    "スパッタリー", "スパッタリー・ヒュー", "スパッタリークリア",
    "スプラマニューバー", "スプラマニューバーコラボ", "スプラマニューバーベッチュー",
    "ヒーローマニューバー レプリカ",
    "ケルビン525", "ケルビン525デコ", "ケルビン525ベッチュー",
    "デュアルスイーパー", "デュアルスイーパーカスタム",
    "クアッドホッパーブラック", "クアッドホッパーホワイト"
  ],
  "シェルター": [
    "パラシェルター", "パラシェルターソレラ", 
    "ヒーローシェルター レプリカ",
    "キャンピングシェルター", "キャンピングシェルターソレラ", "キャンピングシェルターカーモ",
    "スパイガジェット", "スパイガジェットソレラ", "スパイガジェットベッチュー"
  ]
};

// 初期表示処理
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('weaponContainer');
  let weaponIdCounter = 0;

  Object.keys(weaponCategories).forEach(catName => {
    const weapons = weaponCategories[catName];
    const details = document.createElement('details');
    
    const summary = document.createElement('summary');
    summary.innerHTML = `
      <span class="category-title">
        <input type="checkbox" checked id="cat_${catName}">
        <label for="cat_${catName}">${catName} (<span id="cat_count_${catName}">0/0</span>)</label>
      </span>
    `;

    const catCheckbox = summary.querySelector(`#cat_${catName}`);
    
    catCheckbox.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    catCheckbox.addEventListener('change', (e) => {
      toggleCategory(catName, e.target.checked);
    });

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'category-items';

    weapons.forEach(weapon => {
      const id = `w_${weaponIdCounter++}`;
      const item = document.createElement('div');
      item.className = 'weapon-item';
      item.innerHTML = `
        <input type="checkbox" class="weapon-cb cat-cb-${catName}" id="${id}" value="${weapon}" checked>
        <label for="${id}">${weapon}</label>
      `;

      // チェック変更時にイベント発火
      const cbInput = item.querySelector('input');
      cbInput.addEventListener('change', () => {
        updateCatCheckbox(catName);
      });

      itemsDiv.appendChild(item);
    });

    details.appendChild(summary);
    details.appendChild(itemsDiv);
    container.appendChild(details);
  });

  // 初期ロード時の選択数計算
  updateCounts();
});

// カテゴリ一括切り替え処理
function toggleCategory(catName, isChecked) {
  const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`);
  checkboxes.forEach(cb => cb.checked = isChecked);
  updateCounts();
}

// 個別武器変更の処理
function updateCatCheckbox(catName) {
  const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`);
  const catCb = document.getElementById(`cat_${catName}`);
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
  
  catCb.checked = (checkedCount === checkboxes.length);
  updateCounts();
}

// 全選択・全解除処理
function toggleAll(status) {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  allCheckboxes.forEach(cb => cb.checked = status);
  updateCounts();
}

// リアルタイム選択数計算関数
function updateCounts() {
  let totalWeapons = 0;
  let totalChecked = 0;

  Object.keys(weaponCategories).forEach(catName => {
    const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`);
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const catCountSpan = document.getElementById(`cat_count_${catName}`);

    if (catCountSpan) {
      catCountSpan.textContent = `${checkedCount}/${checkboxes.length}`;
    }

    totalWeapons += checkboxes.length;
    totalChecked += checkedCount;
  });

  const totalCountDiv = document.getElementById('totalCount');
  if (totalCountDiv) {
    totalCountDiv.textContent = `選択中: ${totalChecked} / ${totalWeapons}`;
  }
}

// くじ引き処理
function drawWeapon() {
  const checkedBoxes = document.querySelectorAll('.weapon-cb:checked');
  
  if (checkedBoxes.length === 0) {
    alert('武器を1つ以上選択してください！');
    return;
  }

  const activeWeapons = Array.from(checkedBoxes).map(cb => cb.value);
  const resultDiv = document.getElementById('result');
  let count = 0;
  
  const interval = setInterval(() => {
    const randomTemp = activeWeapons[Math.floor(Math.random() * activeWeapons.length)];
    resultDiv.textContent = randomTemp;
    count++;
    
    if (count > 10) {
      clearInterval(interval);
      const finalChoice = activeWeapons[Math.floor(Math.random() * activeWeapons.length)];
      resultDiv.textContent = finalChoice;
    }
  }, 50);
}