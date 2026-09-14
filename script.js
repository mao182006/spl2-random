// 武器種ごとに分類したデータ（辞書型）
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
    "スプラマニューバー", "スプラマニューバーコラボ",  "スプラマニューバーベッチュー",
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

// 画面（HTML）が読み込まれたら自動的に実行される処理
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('weaponContainer'); // 武器リストを入れる枠を取得
  let weaponIdCounter = 0; // チェックボックスのIDを作る用のカウンター

  // カテゴリ（シューター、ローラー等）ごとにループ処理
  Object.keys(weaponCategories).forEach(catName => {
    const weapons = weaponCategories[catName]; // そのカテゴリに含まれる武器配列
    const details = document.createElement('details'); // 折りたたみタグ（<details>）を作成
    
    const summary = document.createElement('summary'); // 見出しタグ（<summary>）を作成
    summary.innerHTML = `
      <span class="category-title">
        <input type="checkbox" checked id="cat_${catName}">
        <label for="cat_${catName}">${catName} (${weapons.length})</label>
      </span>
    `; // カテゴリ名と一括チェックボックスのHTMLを生成

    const catCheckbox = summary.querySelector(`#cat_${catName}`); // カテゴリのチェックボックスを取得
    
    // チェックボックス直接クリック時にアコーディオンが開閉しないようにする設定
    catCheckbox.addEventListener('click', (e) => {
      e.stopPropagation(); // クリックイベントが親要素に伝わるのを止める
    });

    // カテゴリのチェック状態が変わった時の処理
    catCheckbox.addEventListener('change', (e) => {
      toggleCategory(catName, e.target.checked); // 配下の武器のチェックをまとめて変更
    });

    const itemsDiv = document.createElement('div'); // 個別武器を入れる容器を作成
    itemsDiv.className = 'category-items';

    // カテゴリ内の武器1個ずつに対してループ処理
    weapons.forEach(weapon => {
      const id = `w_${weaponIdCounter++}`; // ユニークなIDを生成（例: w_0, w_1...）
      const item = document.createElement('div');
      item.className = 'weapon-item';
      item.innerHTML = `
        <input type="checkbox" class="weapon-cb cat-cb-${catName}" id="${id}" value="${weapon}" checked onchange="updateCatCheckbox('${catName}')">
        <label for="${id}">${weapon}</label>
      `; // 武器ごとのチェックボックスとラベルを作成
      itemsDiv.appendChild(item); // 容器に追加
    });

    details.appendChild(summary); // 折りたたみ枠に見出しを追加
    details.appendChild(itemsDiv); // 折りたたみ枠に武器リストを追加
    container.appendChild(details); // 画面の枠に折りたたみ枠を追加
  });
});

// カテゴリ一括切り替え処理（親チェックボックス変更時）
function toggleCategory(catName, isChecked) {
  const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`); // 該当カテゴリの全武器チェックボックスを取得
  checkboxes.forEach(cb => cb.checked = isChecked); // すべてのチェック状態を親と合わせる
}

// 子要素（武器）の変更に合わせてカテゴリのチェック状態を更新する処理
function updateCatCheckbox(catName) {
  const checkboxes = document.querySelectorAll(`.cat-cb-${catName}`); // 該当カテゴリの全武器を取得
  const catCb = document.getElementById(`cat_${catName}`); // 親カテゴリのチェックボックスを取得
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length; // チェックされている武器の数をカウント
  catCb.checked = (checkedCount === checkboxes.length); // すべてチェックされている時のみ親もチェックONにする
}

// 全選択・全解除ボタンが押された時の処理
function toggleAll(status) {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]'); // ページ内の全チェックボックスを取得
  allCheckboxes.forEach(cb => cb.checked = status); // 全て指定された状態（true/false）に変更
}

// 「くじを引く」ボタンが押された時の処理
function drawWeapon() {
  const checkedBoxes = document.querySelectorAll('.weapon-cb:checked'); // チェックが入っている武器だけを取得
  
  if (checkedBoxes.length === 0) { // チェックが1つもない場合
    alert('武器を1つ以上選択してください！'); // 警告を出す
    return; // 処理を中断
  }

  const activeWeapons = Array.from(checkedBoxes).map(cb => cb.value); // 選択された武器の名前だけを配列にする
  const resultDiv = document.getElementById('result'); // 結果表示枠を取得
  let count = 0; // アニメーションの回数カウンター
  
  // 0.05秒ごとにランダムで表示を変えるルーレットアニメーション
  const interval = setInterval(() => {
    const randomTemp = activeWeapons[Math.floor(Math.random() * activeWeapons.length)]; // 仮のランダム武器を選ぶ
    resultDiv.textContent = randomTemp; // 画面に表示
    count++; // カウントを＋1
    
    if (count > 10) { // 10回動いたらルーレット停止
      clearInterval(interval); // アニメーションタイマーを停止
      const finalChoice = activeWeapons[Math.floor(Math.random() * activeWeapons.length)]; // 最終結果を決定
      resultDiv.textContent = finalChoice; // 最終結果を表示
    }
  }, 50); // 50ミリ秒（0.05秒）間隔で実行
}