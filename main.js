//랜덤번호 지정
//유저가 번호를 입력 그리고 go라는 버튼 클릭
//만약에 유저가 랜덤번호를 맞추면 , 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!
//fosejaqjsghrk > dbwjqjsgh up!!
//Rest버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다,기회를 깍지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chances = 5; // 남은기회
let gameover=false;
let chanceArea = document.getElementById("chance-area");
let history=[]; // 입력한 숫자 리스트

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function() {
    userInput.value = "";
});

function pickRandomNum(){
    // 랜덤숫자 뽑기
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}
function play(){
    // 숫자 추측
    let userValue=userInput.value;

    if(userValue<1 || userValue>100){
        resultText.textContent="1과100사이 숫자를 입력해 주세요"
        return;
    }

    if(history.includes(userValue)){
        resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
        return;
    }
    chances -- ;
    chanceArea.textContent = `남은기회:${chances}번`;
    console.log("chances",chances);

    if(userValue < computerNum){
        resultAreaImg.src =
        "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMjlfNTQg/MDAxNjE2OTUyNzczNjgx.LHBy87VylLEg2hf8xui3u3LFIHqvLde7lHYEITT5Lakg.H7sAyMeAovSXcVt1AHerl0ANq55nPeK7E_r2hNdD64Eg.GIF.131www92/Screen%EF%BC%BFRecording%EF%BC%BF20210329%EF%BC%8D023131%EF%BC%BFYouTube%EF%BC%BF1.gif?type=w800";
        resultText.textContent = "UP!!!";
    }else if(userValue > computerNum){
        resultAreaImg.src = "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMDVfMTc1/MDAxNTc4MjMxNjAxMTE3.p2lr44fQHZHnrHHbpeJoq5YdDQWY2HgWYRW0EVwM2Ewg.eOWayO1RvHrLwSxaBXNgDyjfkTWsp0kebvU7tjRWBRQg.GIF.hurucin/97f2f62b.gif?type=w2";
        resultText.textContent = "DOWN!!!";
    }else{
        resultAreaImg.src =
        "https://blog.kakaocdn.net/dn/HASeZ/btqwIjW0e6F/bqfLWy2huJuSsKO787JV3K/img.gif";
        resultText.textContent = "맞추셨습니다!!!";
        gameover=true;
    }
    history.push(userValue);
    console.log(history);

    if(chances < 1){
        gameover = true;
    }
    if(gameover == true){
        playButton.disabled = true;
    }


}
function reset(){
    //리셋
    // user input창이 깨끗하게 정리
    userInput.value = "";
    resultAreaImg.src =
    "https://mblogthumb-phinf.pstatic.net/MjAxODAzMzBfMTk4/MDAxNTIyMzU2ODk4MzUz.gq8-eO0iljGefpdMZ8T7nEjk-YinQFEERpxw1hLMO-cg.tNB1ir1QlqjZgJkOkUlK_2k2wfd6lWvCykxL2dI5zgIg.GIF.kma9501/IMG_4670.GIF?type=w800";
    // 새로운 번호 생성
    pickRandomNum();
    resultText.textContent="결과값이 여기 나옵니다!";
    gameOver = false;
    playButton.disabled = false;
    chances = 5;
    chanceArea.innerHTML = `남은 기회:${chances}`;
    history = [];
}

pickRandomNum();