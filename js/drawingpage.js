// https://github.com/tsuyopon-xyz/drawing_app_part1/blob/master/main.js
// 上記のコードを元に以下の追加機能を追加します。
// - 線の色を変更する機能
// - 消しゴム機能
//
// 元々書かれてた説明のコメントは削除しました。理由は次のとおりです。
// - 今回の変更差分の説明コメントのみにすることで、どの部分で変更があったかわかりやすくするため
window.addEventListener('load', () => {
  const canvas = document.querySelector('#drawingpage__board__draw-area');
  const context = canvas.getContext('2d');

  canvas.addEventListener("mousemove", event => {
    draw(event.layerX, event.layerY);
  });
  canvas.addEventListener("touchmove", event => {
    draw(event.layerX, event.layerY);
  });
  //パソコンでクリックしてる間だけ描けるようにした機能
  canvas.addEventListener("mousedown", () => {
    context.beginPath();
    isDrag = true;
  });
  canvas.addEventListener("mouseup", () => {
    context.closePath();
    isDrag = false;
  });
  //スマホで描けるようにする機能
  canvas.addEventListener("touchstart", () => {
    context.beginPath();
    isDrag = true;
  });
  canvas.addEventListener("touchend", () => {
    context.closePath();
    isDrag = false;
  });
  //お絵かきするところをきれいにする機能
  const clearButton = document.querySelector("#drawingpage__pen__clear-button");
  clearButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
  //ペンの色を変える機能
  const colorRed = document.querySelector("#drawingpage__pen__color-red");
  colorRed.addEventListener("click", () => {
    context.strokeStyle = "red";
  });
  const colorBlue = document.querySelector("#drawingpage__pen__color-blue");
  colorBlue.addEventListener("click", () => {
    context.strokeStyle = "blue";
  });
  const colorGreen = document.querySelector("#drawingpage__pen__color-green");
  colorGreen.addEventListener("click", () => {
    context.strokeStyle = "green";
  });
  const colorYellow = document.querySelector("#drawingpage__pen__color-yellow");
  colorYellow.addEventListener("click", () => {
    context.strokeStyle = "yellow";
  });
  const colorBlack = document.querySelector("#drawingpage__pen__color-black");
  colorBlack.addEventListener("click", () => {
    context.strokeStyle = "black";
  });
  //消しゴムの機能
  const eraser = document.querySelector("#drawingpage__pen__eraser-button");
  eraser.addEventListener("click", () => {
    context.strokeStyle = "white";
  });
  //ぺんの太さを変える機能
  const penSS = document.querySelector("#drawingpage__pensize__pen-ss");
  penSS.addEventListener("click", () => {
    context.lineWidth = 1;
  });
  const penS = document.querySelector("#drawingpage__pensize__pen-s");
  penS.addEventListener("click", () => {
    context.lineWidth = 5;
  });
  const penM = document.querySelector("#drawingpage__pensize__pen-m");
  penM.addEventListener("click", () => {
    context.lineWidth = 10;
  });
  const penL = document.querySelector("#drawingpage__pensize__pen-l");
  penL.addEventListener("click", () => {
    context.lineWidth = 15;
  });
  const penLL = document.querySelector("#drawingpage__pensize__pen-ll");
  penLL.addEventListener("click", () => {
    context.lineWidth = 20;
  });
  
  let isDrag = false;
  //線をかく機能
  function draw(x, y) {
    if (!isDrag) {
      return;
    }
    context.lineTo(x, y);
    context.stroke();
  }

    initEventHandler();
    
    // カラーパレット情報を初期化する
  initColorPalette();
});

