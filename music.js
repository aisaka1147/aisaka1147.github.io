document.addEventListener('DOMContentLoaded', function () {
    // ボタン要素を取得
    var musicButton = document.getElementById('musicButton');

    // ボタンがクリックされたときの処理
    musicButton.addEventListener('click', function () {
        // ここで次のページに遷移する処理を追加
        // 例: window.location.href = '次のページのURL';
        window.location.href = 'index.html'; // URLは適切なものに置き換えてください
    });
});
