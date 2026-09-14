// 指定の武器リストデータ
const weaponCategories = {
  "シューター": [
    "ヒーローシューター レプリカ", 
    "ボールドマーカー", "ボールドマーカーネオ", "ボールドマーカー7",
    "わかばシューター", "もみじシューター","おちばシューター", 
    "シャープマーカー", "シャープマーカーネオ",
    "プロモデラーMG", "プロモデラーRG", "プロモデラーPG", 
    "スプラシューター", "スプラシューターコラボ", "スプラシューターベッチュー",
    ".52ガロン", ".52ガロンデコ", ".52ガロンベッチュー",
    "N-ZAP85", "N-ZAP89", "N-ZAP83",
    "プライムシューター", "プライムシューターコラボ", "プライムシューターベッチュー",
    ".96ガロン", ".96ガロンデコ",
    "ジェットスイーパー", "ジェットスイーパーカスタム",
  ],
  "ブラスター": [
    "ヒーローブラスター レプリカ",
    "ノヴァブラスター", "ノヴァブラスターネオ", "ノヴァブラスターベッチュー",
    "ホットブラスター", "ホットブラスターカスタム",
    "ロングブラスター", "ロングブラスターカスタム", "ロングブラスターネクロ",
    "クラッシュブラスター", "クラッシュブラスターネオ", 
    "ラピッドブラスター", "ラピッドブラスターデコ", "ラピッドブラスターベッチュー", 
    "Rブラスターエリート", "Rブラスターエリートデコ",
    "L3リールガン", "L3リールガンD", "L3リールガンベッチュー",
    "H3リールガン", "H3リールガンD", "H3リールガンチェリー",
    "ボトルガイザー", "ボトルガイザーフォイル"
  ],
  "ローラー": [
    "ヒーローローラー レプリカ", 
    "カーボンローラー", "カーボンローラーデコ",
    "スプラローラー", "スプラローラーコラボ", "スプラローラーベッチュー",
    "ダイナモローラー", "ダイナモローラーテスラ", "ダイナモローラーベッチュー",
    "ヴァリアブルローラー", "ヴァリアブルローラーフォイル"
  ],
  "フデ": [
    "ヒーローブラシ レプリカ",
    "パブロ", "パブロ・ヒュー", "パーマネント・パブロ",
    "ホクサイ", "ホクサイ・ヒュー", "ホクサイベッチュー", 
  ],
  "チャージャー": [
    "ヒーローチャージャー レプリカ", 
    "スクイックリンα", "スクイックリンβ", "スクイックリンγ",
    "スプラチャージャー", "スプラチャージャーコラボ", "スプラチャージャーベッチュー",
    "スプラスコープ", "スプラスコープコラボ", "スプラスコープベッチュー",
    "リッター4K", "リッター4Kカスタム",
    "4Kスコープ", "4Kスコープカスタム",
    "14式竹筒銃・甲", "14式竹筒銃・乙", "14式竹筒銃・丙",
    "ソイチューバー", "ソイチューバーカスタム"
  ],
  "スロッシャー": [
    "ヒーロースロッシャー レプリカ", 
    "バケットスロッシャー", "バケットスロッシャーデコ", "バケットスロッシャーソーダ",
    "ヒッセン", "ヒッセン・ヒュー",
    "スクリュースロッシャー", "スクリュースロッシャーネオ", "スクリュースロッシャーベッチュー",
    "オーバーフロッシャー", "オーバーフロッシャーデコ",
    "エクスプロッシャー", "エクスプロッシャーカスタム"
  ],
  "スピナー": [
    "ヒーロースピナー レプリカ", 
    "スプラスピナー", "スプラスピナーコラボ", "スプラスピナーベッチュー",
    "バレルスピナー", "バレルスピナーデコ", "バレルスピナーリミックス",
    "ハイドラント", "ハイドラントカスタム",
    "クーゲルシュライバー", "クーゲルシュライバー・ヒュー", 
    "ノーチラス47", "ノーチラス79", 
  ],
  "マニューバー": [
    "ヒーローマニューバー レプリカ",
    "スパッタリー", "スパッタリー・ヒュー", "スパッタリークリア",
    "スプラマニューバー", "スプラマニューバーコラボ", "スプラマニューバーベッチュー",
    "ケルビン525", "ケルビン525デコ", "ケルビン525ベッチュー",
    "デュアルスイーパー", "デュアルスイーパーカスタム",
    "クアッドホッパーブラック", "クアッドホッパーホワイト"
  ],
  "シェルター": [
    "ヒーローシェルター レプリカ",
    "パラシェルター", "パラシェルターソレーラ", 
    "キャンピングシェルター", "キャンピングシェルターソレーラ", "キャンピングシェルターカーモ",
    "スパイガジェット", "スパイガジェットソレーラ", "スパイガジェットベッチュー"
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

  // 保存されているチェック状態の復元
  loadSavedState();
});

// カテゴリ一括切り替え処理
function toggleCategory(catName, isChecked) {
  const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`);
  checkboxes.forEach(cb => cb.checked = isChecked);
  updateCounts();
  saveState();
}

// 個別武器変更処理
function updateCatCheckbox(catName) {
  const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`);
  const catCb = document.getElementById(`cat_${catName}`);
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
  
  catCb.checked = (checkedCount === checkboxes.length);
  updateCounts();
  saveState();
}

// 全選択・全解除処理
function toggleAll(status) {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  allCheckboxes.forEach(cb => cb.checked = status);
  updateCounts();
  saveState();
}

// リアルタイム選択数計算処理
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

// チェック状態の保存
function saveState() {
  const weaponCheckboxes = document.querySelectorAll('.weapon-cb');
  const savedState = {};

  weaponCheckboxes.forEach(cb => {
    savedState[cb.value] = cb.checked;
  });

  localStorage.setItem('spla2_weapon_selection', JSON.stringify(savedState));
}

// チェック状態の復元
function loadSavedState() {
  const savedData = localStorage.getItem('spla2_weapon_selection');
  
  if (savedData) {
    const savedState = JSON.parse(savedData);
    const weaponCheckboxes = document.querySelectorAll('.weapon-cb');

    weaponCheckboxes.forEach(cb => {
      if (savedState.hasOwnProperty(cb.value)) {
        cb.checked = savedState[cb.value];
      }
    });

    Object.keys(weaponCategories).forEach(catName => {
      const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`);
      const catCb = document.getElementById(`cat_${catName}`);
      const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
      if (catCb) {
        catCb.checked = (checkedCount === checkboxes.length);
      }
    });
  }

  updateCounts();
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