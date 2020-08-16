// // var sec = 60;

// // function startfunction() {
// // var starttime = Date.now();
// // var endtime = new Date(starttime.getTime() + sec * 1000);

// // var showtime = document.getElementById("drawingpage__timer-id"); 

// // var cnt = sec;
// // var id = setInterval(
// //   function() {
// //     cnt--;
// //     showtime.innerHTML(cnt);
// //     dt = new Date();
// //     if(dt.getTime() >= endtime.getTime()){
// //       clearInterval(id);
// //       showtime.innerHTML("Finish!");
// //     }
// //   }, 1000);

// // };

// var timer1; //タイマーを格納する変数（タイマーID）の宣言
// //カウントダウン関数を1000ミリ秒毎に呼び出す関数
// function cntStart()
// {
//   document.timer.elements[2].disabled=true;
//   timer1=setInterval("countDown()",1000);
// }

// //タイマー停止関数
// function cntStop()
// {
//   document.timer.elements[2].disabled=false;
//   clearInterval(timer1);
// }

// //カウントダウン関数
// function countDown()
// {
//   var min=document.timer.elements[0].value;
//   var sec=document.timer.elements[1].value;
  
//   if( (min=="") && (sec=="") )
//   {
//     alert("時刻を設定してください！");
//     reSet();
//   }
//   else
//   {
//     if (min=="") min=0;
//     min=parseInt(min);
    
//     if (sec=="") sec=0;
//     sec=parseInt(sec);
    
//     tmWrite(min*60+sec-1);
//   }
// }

// //残り時間を書き出す関数
// function tmWrite(int)
// {
//   int=parseInt(int);
  
//   if (int<=0)
//   {
//     reSet();
//     alert("時間です！");
//   }
//   else
//   {
//     //残り分数はintを60で割って切り捨てる
//     document.timer.elements[0].value=Math.floor(int/60);
//     //残り秒数はintを60で割った余り
//     document.timer.elements[1].value=int % 60;
//   }
// }

// //フォームを初期状態に戻す（リセット）関数
// function reSet()
// {
//   document.timer.elements[0].value="0";
//   document.timer.elements[1].value="0";
//   document.timer.elements[2].disabled=false;
//   clearInterval(timer1);
// }  

//自動的にスタートへ戻る
setTimeout(function(){
  window.location.href = '/startpage.html';
}, 60*1000);

// $(function(){
//   $('.timer').startTimer({
//       onComplete: function(element){
//           element.addClass('is-complete');
//       }
//   });
// });