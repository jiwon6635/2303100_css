const download = document.querySelector(".download");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const qrContainer = document.querySelector("#qr-code");
const qrText = document.querySelector(".qr-text");
const shareBtn = document.querySelector(".share-btn");
const sizes = document.querySelector(".sizes");

dark.addEventListener("input", handleDarkColor);
light.addEventListener("input", handleLightColor);
qrText.addEventListener("input", handleQRText);
sizes.addEventListener("change", handleSize);
shareBtn.addEventListener("click", handleShare);

// 기본 QR텍스트로 사용할 URL
const defaultUrl = "https://github.com/jiwon6635/JustDoIt/tree/main/Practice";
let colorLight = "#fff",
    colorDark = "#000",
    text = defaultUrl,
    size = 300;

    // 어두운 색상 변경
function handleDarkColor(e) {
    colorDark = e.target.value;
    generateQRCode();
}
    // 밝은 색상 변경
function handleLightColor(e) {
    colorLight = e.target.value;
    generateQRCode();
}
    // QR 코드에 표시할 텍스트를 변경하는 함수 TEXT를 업데이트하도록 함
function handleQRText(e) {
    const value = e.target.value;
    text = value;
    if (!value) {
        text = defaultUrl;
    }
    generateQRCode();
}
// QR코드 라이브러리를 사용하여 QR코드를 생성, 다운로드 링크 업데이트
async function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode("qr-code", {
        text,
        height: size,
        width: size,
        colorLight,
        colorDark,
    });
    download.href = await resolveDataUrl();
}
// QR코드의 크기를 변경하는 함수 navigator.share() 메서드 사용
async function handleShare() {
    setTimeout(async () => {
        try {
            const base64url = await resolveDataUrl();
            const blob = await (await fetch(base64url)).blob();
            const file = new File([blob], "QRCode.png", {
                type: blob.type,
            });
            await navigator.share({
                files: [file],
                title: text,
            });
        } catch (error) {
            alert("Your browser doesn't support sharing.");
        }
    }, 100);
}

// QR코드 사이즈를 조절하는 삼수
function handleSize(e) {
    size = e.target.value;
    generateQRCode();
}

// 비동기적으로 QR코드 라이브러리가 생성한 QR코드 이미지를 데이터 URL로 변경
function resolveDataUrl() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = document.querySelector("#qr-code img");
            if (img.currentSrc) {
                resolve(img.currentSrc);
                return;
            }
            const canvas = document.querySelector("canvas");
            resolve(canvas.toDataURL());
        }, 50);
    });
}
// 함수 호출
generateQRCode();