// 초기값을 설정
let count = 0;

// value값이랑 button들을 선언
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click",function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }


        if (count > 0) {
            value.style.color = "white";
            document.body.style.backgroundColor = "skyblue"
        } else if (count < 0) {
            value.style.color = "white";
            document.body.style.backgroundColor = "salmon"
        } else {
            value.style.color = "black"
            document.body.style.backgroundColor = "white"
        }
        
        value.textContent = count;
    });
});