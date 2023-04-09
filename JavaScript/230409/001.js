function repeat(n, f) {
	for (let i=0; i<n; i++){
		f(i)
	}
}
const print = x => console.log(x);

repeat(8, print)

function sum(a, b, callback){ // 세 번째 변수에서 함수를 매개 변수로 받음
    var result = a + b;   // 부모함수의 처리가 끝난 후 callback 함수를 실행
    
    callback();   // 매개 변수로 익명 함수를 전달합니다.
    return result;
    }

    // 콜백 함수
    var r = sum(10, 20, function(){
        alert('a + b를 더했습니다.');
    });
    document.write(r);  