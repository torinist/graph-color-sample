function graphDraw(red, green, blue, alpha) {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('graphcolor');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /* 四角を描く */
  ctx.beginPath();
  ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  ctx.moveTo(20, 140);    // スタート地点
  ctx.lineTo(120, 60);   // 横終わり
  ctx.lineTo(300, 300);   // 横終わり→縦終わり
  ctx.lineTo(20, 300);    // 横始まり→縦終わり
  ctx.closePath();
  ctx.fill();
}

function backDraw(red, green, blue, alpha) {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('backcolor');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /* 四角を描く */
  ctx.beginPath();
  ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  ctx.moveTo(20, 20);     // スタート地点
  ctx.lineTo(300, 20);    // 横終わり
  ctx.lineTo(300, 300);   // 横終わり→縦終わり
  ctx.lineTo(20, 300);    // 横始まり→縦終わり
  ctx.closePath();
  ctx.fill();
}

function commentDraw(red, green, blue, alpha) {
  let x = 200;   // 左上の頂点x座標
  let y = 50;  // 左上の頂点y座標
  let w = 90;   // 横の長さ
  let h = 50;   // 縦の長さ
  let r　= 10;  //角丸の半径

  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('commentcolor');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /* 四角を描く */
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  ctx.moveTo(x,y + r);
  ctx.arc(x+r,y+h-r,r,Math.PI,Math.PI*0.5,true);
  ctx.arc(x+w-r,y+h-r,r,Math.PI*0.5,0,1);
  ctx.arc(x+w-r,y+r,r,0,Math.PI*1.5,1);
  ctx.arc(x+r,y+r,r,Math.PI*1.5,Math.PI,1);       
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

function getColor() {
  var jsonHtml = "";
  let spanTag = document.getElementsByTagName('span');
  var count = 1;
  for (var i = 0; i < spanTag.length; i++) {
    let res = spanTag[i].style.color.split(',');
    if (res != "") {
      var amari = i % 4;
      if (amari === 0) {
        jsonHtml += '"' + count + '" : {<br>';
        count++;
        jsonHtml += '&nbsp;&nbsp;&nbsp;&nbsp;"graph" : {<br>';
      }
      if (amari === 1) {
        jsonHtml += '&nbsp;&nbsp;&nbsp;&nbsp;"bg" : {<br>';
      }
      if (amari === 2) {
        jsonHtml += '&nbsp;&nbsp;&nbsp;&nbsp;"accent" : {<br>';
      }
      for (var k = 0; k < res.length; k++) {
        var str = res[k].replace(/[rgb(]/g, "")
        str = str.replace(/[)]/g, "")
        if (k === 0) {
          jsonHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"r" : ' + str.trim() + ',<br>';
        }
        if (k === 1) {
          jsonHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"g" : ' + str.trim() + ',<br>';
        }
        if (k === 2) {
          jsonHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"b" : ' + str.trim() + ',<br>';
          jsonHtml += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"a" : 1<br>';
        }
      }
      if (amari == 2) {
        jsonHtml += "&nbsp;&nbsp;&nbsp;&nbsp;}<br>"
      } else {
        jsonHtml += "&nbsp;&nbsp;&nbsp;&nbsp;},<br>"
      }

      if (amari === 2) {
        jsonHtml += "},<br>"
      }
    }
  }
  document.getElementById('json').innerHTML = jsonHtml;
}

(function(){
    window.onload = function() {
        graphDraw(255,255,255,1);
        backDraw(0,0,0,1);
        commentDraw(100,100,100,1);
        getColor();
    };
})();