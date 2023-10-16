const prompt = require("prompt-sync")({ sigint: true });

//1. 랜덤 숫자 뽑기 & 답안
let answer = function () {
    //1-1. 랜덤 숫자 뽑기
    let arr = [];
    while (arr.length < 3) {
        let randomNum = ~~(Math.random() * 10);
        if (!arr.includes(randomNum)) {
            arr += randomNum;
        };
    };
    //1-2. 답안
    let count = 0;
    console.log(`컴퓨터가 숫자(${arr})를 생성하였습니다. 답을 맞춰보세요!`);
    checkNum(arr, count);
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
let checkNum = function (randomNum, count) {
    let inputNum = getInputNum();
    count++;
    console.log(`${count}번째 시도 : ${inputNum}`);

    let sCount = 0;
    let bCount = 0;
    let str=0;
    inputNum.split("").forEach((e, idx) => { //forEach is not a function: 문자열은 배열이 아니라서 생김=> split로 나눠서 배열로 만들면 해결
        if(randomNum.indexOf(e)===idx){ //인덱스값 반환하여 맞는지 확인
            sCount++;
        } else if (randomNum.split('').includes(e)){
            bCount++;
        };
    });
    
    if (sCount === 3) {
        str = `${sCount}S`
    } else if (bCount === 3) {
        str = `${bCount}B`
    } else { 
        str = `${bCount}B${sCount}S`
    };

    //처음 시도한거: 
    // for (let i = 0; i < randomNum.length; i++) {
    //     if (randomNum.includes(inputNum[i])) { //1. randomNum에 inputNum[i]이 있으면 true. 숫자 확인 여부 확인
    //         if (inputNum.indexOf(randomNum[i]) === randomNum.indexOf(inputNum[i])) { //2. inputNum안에 randomNum[i] 요소가 있으면 인덱스값 반환하여 둘의 값 확인
    //             sCount++;
    //             return console.log(`${bCount}B${sCount}S`);
    //         } else {
    //             bCount++;
    //             return console.log(`${bCount}B${sCount}S`);
    //         };
    //     };
    // };

    console.log(str);
    (randomNum !== inputNum) ? checkNum(randomNum, count) : console.log(`${count}번만에 맞히셨습니다.\n게임을 종료합니다.`);
};

//4. 답안 내기
answer()