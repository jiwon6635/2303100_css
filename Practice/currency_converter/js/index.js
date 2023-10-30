const fromCur = document.querySelector(".from select");
const toCur = document.querySelector(".to select");
const getBtn = document.querySelector("form button");
const exIcon = document.querySelector("form .reverse");
const amount = document.querySelector("form input");
const exRateTxt = document.querySelector("form .result");

// 이벤트 리스너
[fromCur, toCur, amount].forEach((input, i) => {
    if (i === 2) { // amount 입력란에 대해서만 이벤트 리스너 추가
        input.addEventListener("input", () => {
            input.value = formatNumberWithCommas(input.value.replace(/,/g, '')); // 쉼표 제거 후 포맷팅
        });
    }
    for (let curCode in Country_List) {
        const selected = (i === 0 && curCode === "USD") || (i === 1 && curCode === "KRW") ? "selected" : "";
        input.insertAdjacentHTML("beforeend", `<option value="${curCode}" ${selected}>${curCode}</option>`);
    }
    input.addEventListener("change", () => {
        const code = input.value;
        const imgTag = input.parentElement.querySelector("img");
        imgTag.src = `https://flagcdn.com/48x36/${Country_List[code].toLowerCase()}.png`;
    });
});
async function getExchangeRate() {

    // amount 입력란에서 쉼표를 제거하고 숫자로 변환
    const amountVal = Number(amount.value.replace(/,/g, '')) || 1;
    exRateTxt.innerText = "Getting exchange rate...";
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/cef5337d80e964d451201e94/latest/${fromCur.value}`);
        const result = await response.json();
        const exchangeRate = result.conversion_rates[toCur.value];
        const totalExRate = (amountVal * exchangeRate).toFixed(2);

        // 쉼표를 추가하는 부분
        const formattedAmount = amountVal.toLocaleString();
        // 쉼표를 추가하는 부분
        const formattedTotalExRate = formatNumberWithCommas(totalExRate);
        exRateTxt.innerText = `${formattedAmount} ${fromCur.value} = ${formattedTotalExRate} ${toCur.value}`;
    } catch (error) {
        exRateTxt.innerText = "Something went wrong...";
    }
}

// 세 자리 수에 쉼표를 추가하는 함수
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.addEventListener("load", getExchangeRate);
getBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getExchangeRate();
});

exIcon.addEventListener("click", () => {
    [fromCur.value, toCur.value] = [toCur.value, fromCur.value];
    [fromCur, toCur].forEach((select) => {
        const code = select.value;
        const imgTag = select.parentElement.querySelector("img");
        imgTag.src = `https://flagcdn.com/48x36/${Country_List[code].toLowerCase()}.png`;
    });
    getExchangeRate();
});