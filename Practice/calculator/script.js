// 계산결과
let runningTotal = 0;
// 입력된 숫자 혹은 연산자
let buffer = "0";
// 이전에 입력된 연산자
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    // 숫자가 아닐때
    if(isNaN(value)){
        handleSymbol(value);
    } 
    // 숫자일때
    else {
        handleNumber(value)
    }
    screen.innerText = buffer;
}

// 기호에 따라 동작을 처리하는 함수
function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator === null) {
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length ===1){
                buffer = '0';                
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }       
}

// 연산자에 따라 동작을 처리하는 함수
function handleMath(symbol){
    if(buffer === '0'){
        return;
    }
//  buffer를 정수로 변환한 값을 intBuffer에 저장
    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        // runningTotal이 0인 경우, 현재까지 계산된 값이 없으므로 intBuffer값을 runningTotal에 저장
        runningTotal = intBuffer;
    } else {
        //  그렇지 않을때 함수 호출로 연산을 수행후 intBuffer값을 runningTotal에 저장
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer;
    }else if(previousOperator === '−'){
        runningTotal -= intBuffer;
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer;
    }else if(previousOperator === '÷'){
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').
    addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}
init();

// 키보드 이벤트 리스너 등록
document.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(event) {
  // 키보드 입력을 처리할 함수 호출
  const keyValue = event.key;

  // key값이 숫자로 변환 가능한지 확인   
  if (!isNaN(parseInt(keyValue))) {
    // 숫자 입력 처리 실행
    handleNumber(keyValue);
    screen.innerText = buffer;
  }

  // 연산자 입력 처리
  switch (keyValue) {
    case '+':
    case '-':
      handleMath(keyValue);
      break;
     // 1. 최종 수정 => `/`와 `*` 키 처리
     case '/':
        handleMath('÷');
        screen.innerText = buffer;
        break;
      case '*':
        handleMath('×');
        screen.innerText = buffer;
        break;
    case '=':

    // 2. key 이름 반드시 대문자로 시작 할 것
    case 'Enter':
      handleSymbol('=');
      screen.innerText = buffer;
      break;
    case 'Backspace':
      handleSymbol('←');
      screen.innerText = buffer;
      break;
    case 'Escape':
      handleSymbol('C');
      screen.innerText = buffer;
      break;
  }
}
