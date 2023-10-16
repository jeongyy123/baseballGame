const prompt=require("prompt-sync")({sigint:true}); 

//1. 랜덤 숫자 뽑기
let getRandomNum = function () {
    let arr = [];
    while (arr.length < 3) {
        let randomNum = ~~(Math.random() *10);
        if (!arr.includes(randomNum)) {
            arr += randomNum;
        }
    return arr;
    }
};

//2. input으로 사용자 숫자 입력
let getInputNum = function () {
    let value = prompt("숫자 3개를 입력해주세요");
    if (value === null) {
        console.log("다시 입력해주세요");
        return getInputNum();
    } else if (value.match(/\D/)) {
        console.log("3자리 수의 숫자만 입력해야합니다.");
        return getInputNum();
    } else if (value.length > 3) {
        console.log("입력한 값의 길이는 3을 넘을 수 없습니다.");
        return getInputNum();
    }
    return value;
};

//3. 랜덤 숫자와 input 숫자 비교하기
let checkNumbers = function (randomNum) {
    let inputNum = getInputNum();
    let sCount = 0;
    let bCount = 0;
    let count = 0;

    for (let i = 0; i < randomNum.length; i++) {
        if (randomNum.includes(inputNum[i])) { //randomNum에 inputNum[i]이 있으면 true. 숫자 확인
            if (inputNum.indexOf(randomNum[i]) === randomNum.indexOf(inputNum[i])) { //inputNum안에 randomNum[i] 요소가 있으면 인덱스값 반환
                sCount++
                count++;
                return console.log(`${bCount}B${sCount}S`)
            } else {
                bCount++;
                count++
                return console.log(`${bCount}B${sCount}S`)
            }
        }
    }
}
