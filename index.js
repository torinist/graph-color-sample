(function(){
    function graphDraw() {
        /* canvas要素のノードオブジェクト */
        var canvas = document.getElementById('graphcolor');
        /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
        if ( ! canvas || ! canvas.getContext ) {
          return false;
        }
        /* 2Dコンテキスト */
        var ctx = canvas.getContext('2d');
        /* 四角を描く */
        ctx.beginPath();
        ctx.fillStyle = 'rgba(128, 100, 162, 0.7)'; // 紫
        ctx.moveTo(20, 140);    // スタート地点
        ctx.lineTo(120, 60);   // 横終わり
        ctx.lineTo(240, 240);   // 横終わり→縦終わり
        ctx.lineTo(20, 240);    // 横始まり→縦終わり
        ctx.closePath();
        ctx.fill();
    }

    function backDraw() {
        /* canvas要素のノードオブジェクト */
        var canvas = document.getElementById('backcolor');
        /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
        if ( ! canvas || ! canvas.getContext ) {
          return false;
        }
        /* 2Dコンテキスト */
        var ctx = canvas.getContext('2d');
        /* 四角を描く */
        ctx.beginPath();
        ctx.fillStyle = 'rgba(192, 80, 77, 0.7)'; // 赤
        ctx.moveTo(20, 20);     // スタート地点
        ctx.lineTo(240, 20);    // 横終わり
        ctx.lineTo(240, 240);   // 横終わり→縦終わり
        ctx.lineTo(20, 240);    // 横始まり→縦終わり
        ctx.closePath();
        ctx.fill();
    }
    
    window.onload = function() {
        graphDraw();
        backDraw();
    };
})();