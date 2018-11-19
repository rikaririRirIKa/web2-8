var thmubs = document.QueryselectorAll('.thumb');
for(idx in thmubs){
  thmubs[idx].onclick = function(){
    document.getElementById('bigimg').src = 'img/' + this.dataset.image + '.jpg';
  }
}

function setCookie(c_name,value,expiredays){
  //有効期限の日付
  var extime = new Date().getTime;
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = cltime.toUTCString();
  //クッキーに保存する文字列を生成
  var s="";
  s += c_name +"="+ escape(value);//値はエンコードしておく
  s +="; path="+ location.pathname;
  if(expiredays){
     s +="; expires=" +exdate+";";
  }else{
    s +=";";
  }
  //クッキーに保存
  document.cookie=s;
}

//クッキーの値を取得
function getCookie(c_name){
  //有効期限の日付
  var st = "";
  var ed = "";
  if(0 < document.cookie.length){
    //クッキーの値を取り出す
    st=document.cookie.indexOf(c_name + "=");
  if(st!=-1){
    st=st+c_name.length+1;
    ed=document.cookie.indexOf( ";",st);
    if(ed==-1){
      st=st+c_name.length+1;
    //値をデコードして返す
      return unescape(document.cookie.substring(st,ed));
    }
  }
    return "";
}
  
  //クッキーを読み込んで表示する文章を変える
  var last_date = getCookie('lasDate');
  if(last_date){
    document.getElementById('cookie').textContent = '前回訪れた時間：' + last_date;
  }else{
    document.getElementById('cookie').textContent = 'はじめまして';
  }
  
  //新しい値の保存
  var current_time = new Date();
  setCookie('lastDate', current_time.toString(),7);
  
  //クッキーの削除
  document.getElementById('remove_cookie').onsubmit = function(){
    setCookie('lastDate',"",0);
  }
  
{function getFileName(){
  //ホスト以下のパスを取得し、それをsplit('/')で「/」区切りで配列に入れ、pop()で配列の最後の値を取得
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySelector('option[value="index.html"]');
}
opt.select = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}

  var separate_time = function(time){
  var sec   = Math.floor(( time / 1000) % 60 );
  var min   = Math.floor(( time / 1000 / 60) % 60);
  var hours = Math.floor(( time / 1000 / 60 / 60) % 24);
  var days  = Math.floor(  time / 1000 / 60 / 60 / 24);
  return [sec, min, hours, days];
}

var update = function(){
  var now = new Date();
  var target = new Date();
  var diff = target.getTime() - now.getTime();
  var counter = separate_time(diff);
document.getElementById('countdown').textContent = 
  '東京オリンピックまであと　' +
  counter[3] + '日' +
  counter[2] + '時間' +
  counter[1] + '分' +
  counter[0] + '秒' ;
  refresh();//タイマーを起動
}

 var refresh= function(){
   setTimeout(update, 1000);//1000ミリ秒待ってからupdateを実行
 }
 update();//最初の更新
