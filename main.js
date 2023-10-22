var startButton;    
var stopButton;     
var resetButton;    
var showTime;       

var timer;              
var startTime;          
var elapsedTime = 0;    
var holdTime = 0;       

window.onload = function () {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
}

/*スタートボタン押下時*/
function start(){
    // 開始時間を現在の時刻に設定
    startTime = Date.now();

    // 時間計測
    measureTime();

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

/*ストップボタン押下時*/
function stop(){
    // タイマー停止
    clearInterval(timer);

    // 停止時間を保持
    holdTime += Date.now() - startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

/*リセットボタン押下時*/
function reset(){
    // タイマー停止
    clearInterval(timer);

    // 変数、表示を初期化
    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "0:0:0:0";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

/*時間を計測（再帰関数）*/
function measureTime() {
    timer = setTimeout(function () {
        elapsedTime = Date.now() - startTime + holdTime;
        showTime.textContent = new Date(elapsedTime).toISOString().slice(11, 22);
        measureTime();
    }, 10);
}