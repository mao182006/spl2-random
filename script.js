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
    "ジェットスイーパー", "ジェットスイーパーカスタム"
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
    "ホクサイ", "ホクサイ・ヒュー", "ホクサイベッチュー"
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
    "ノーチラス47", "ノーチラス79"
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

const DATASET_STORAGE_KEY = 'spla2_datasets_v1';

let datasets = [
  { id: 1, name: "データセット 1", data: null },
  { id: 2, name: "データセット 2", data: null },
  { id: 3, name: "データセット 3", data: null },
  { id: 4, name: "データセット 4", data: null },
  { id: 5, name: "データセット 5", data: null }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('weaponContainer');
  let weaponIdCounter = 0;

  // 武器リスト生成
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
    catCheckbox.addEventListener('click', (e) => e.stopPropagation());
    catCheckbox.addEventListener('change', (e) => toggleCategory(catName, e.target.checked));

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
      cbInput.addEventListener('change', () => updateCatCheckbox(catName));

      itemsDiv.appendChild(item);
    });

    details.appendChild(summary);
    details.appendChild(itemsDiv);
    container.appendChild(details);
  });

  loadDatasetsFromStorage();
  renderDatasets();
  updateCounts();
});

// カテゴリ切り替え
function toggleCategory(catName, isChecked) {
  const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`);
  checkboxes.forEach(cb => cb.checked = isChecked);
  updateCounts();
}

// チェックボックス連動
function updateCatCheckbox(catName) {
  const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`);
  const catCb = document.getElementById(`cat_${catName}`);
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
  
  if (catCb) {
    catCb.checked = (checkedCount === checkboxes.length);
  }
  updateCounts();
}

// 全選択・全解除
function toggleAll(status) {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  allCheckboxes.forEach(cb => cb.checked = status);
  updateCounts();
}

// カウント更新
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

// データセット描画
function renderDatasets() {
  const container = document.getElementById('datasetContainer');
  container.innerHTML = '';

  datasets.forEach(ds => {
    const card = document.createElement('div');
    card.className = 'dataset-card';

    const isSaved = ds.data !== null;
    const countText = isSaved ? `（${Object.values(ds.data).filter(v => v).length}種保存中）` : '（未保存）';

    card.innerHTML = `
      <div class="dataset-header">
        <div class="dataset-name-area">
          <span>${ds.name}</span>
          <button class="ds-edit" onclick="renameDataset(${ds.id})">編集</button>
        </div>
        <span class="dataset-status">${countText}</span>
      </div>
      <div class="dataset-btn-group">
        <button class="ds-btn ds-save" onclick="saveToDataset(${ds.id})">現在の選択を保存</button>
        ${isSaved ? `<button class="ds-btn ds-load" onclick="loadFromDataset(${ds.id})">読み込む</button>` : ''}
        ${isSaved ? `<button class="ds-btn ds-delete" onclick="deleteDataset(${ds.id})">✕</button>` : ''}
      </div>
    `;

    container.appendChild(card);
  });
}

// 保存
function saveToDataset(id) {
  const weaponCheckboxes = document.querySelectorAll('.weapon-cb');
  const currentState = {};

  weaponCheckboxes.forEach(cb => {
    currentState[cb.value] = cb.checked;
  });

  const target = datasets.find(d => d.id === id);
  if (target) {
    target.data = currentState;
    saveDatasetsToStorage();
    renderDatasets();
    showToast(`「${target.name}」に保存しました`);
  }
}

// 呼び出し
function loadFromDataset(id) {
  const target = datasets.find(d => d.id === id);
  if (!target || !target.data) return;

  const weaponCheckboxes = document.querySelectorAll('.weapon-cb');
  weaponCheckboxes.forEach(cb => {
    if (target.data.hasOwnProperty(cb.value)) {
      cb.checked = target.data[cb.value];
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

  updateCounts();
  showToast(`「${target.name}」を読み込みました`);
}

// 削除
function deleteDataset(id) {
  const target = datasets.find(d => d.id === id);
  if (!target || !target.data) return;

  if (confirm(`「${target.name}」の保存データを削除しますか？`)) {
    target.data = null;
    saveDatasetsToStorage();
    renderDatasets();
    showToast(`「${target.name}」を削除しました`);
  }
}

// 名前変更
function renameDataset(id) {
  const target = datasets.find(d => d.id === id);
  if (!target) return;

  const newName = prompt('新しい名前を入力してください:', target.name);
  if (newName !== null && newName.trim() !== '') {
    target.name = newName.trim();
    saveDatasetsToStorage();
    renderDatasets();
  }
}

// ローカルストレージ処理
function saveDatasetsToStorage() {
  try {
    localStorage.setItem(DATASET_STORAGE_KEY, JSON.stringify(datasets));
  } catch (e) {
    console.error('保存エラー:', e);
  }
}

function loadDatasetsFromStorage() {
  try {
    const saved = localStorage.getItem(DATASET_STORAGE_KEY);
    if (saved) {
      datasets = JSON.parse(saved);
    }
  } catch (e) {
    console.error('読み込みエラー:', e);
  }
}

// トースト通知
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
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