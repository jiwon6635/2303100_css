const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("form");
const fileInp = document.querySelector("input");
const infoText = document.querySelector("p");
const closeBtn = document.querySelector(".close");
const copyBtn = document.querySelector(".copy");


// file과 formData 받는 함수
// file : 업로드할 파일, formData : file을 포함한 다른 데이터를 담는 FormData객체
function fetchRequest(file, formData) {
    infoText.innerText = "Scanning QR Code...";
    
    // QR 코드를 스캔하는 API에 POST 요청
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        // HTML 요소 내용 설정
        infoText.innerText = result ? "Upload QR Code To Scan" : "Couldn't Scan QR Code";
        if (!result) return;
        // 스캔 결과가 있을경우 페이지 내의 textarea 요소에 설정하여 사용자에게 표시
        document.querySelector("textarea").innerText = result;
        // img요소의 src 속성을 file에 대한 URL로 설정(업로드한 QR코드 이미지 보여주기)
        form.querySelector("img").src = URL.createObjectURL(file);
        // QR코드 스캔이 성공적으로 실행되었을때 활성화 시킴
        wrapper.classList.add("active");
    }).catch(() => {
        infoText.innerText = "Couldn't Scan QR Code...";
    });
}

// Send QR Code File With Request To Api
fileInp.addEventListener("change", async e => {
    let file = e.target.files[0];
    if (!file) return;
    let formData = new FormData();
    formData.append('file', file);
    fetchRequest(file, formData);
});

// Copy Text To Clipboard
copyBtn.addEventListener("click", () => {
    let text = document.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
});

// When user click on form do fileInp Evenetlistener function
form.addEventListener("click", () => fileInp.click());

closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));