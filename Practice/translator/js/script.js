const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const exchageIcon = document.querySelector(".exchange");
const selectTag = document.querySelectorAll("select");
const icons = document.querySelectorAll(".row i");
const translateBtn = document.querySelector("button");


selectTag.forEach((tag, id) => {
    // 언어코드 순회 country_Code => 현재 언어 코드 할당
    for (let country_code in countries) {
        // 초기옵션 설정
        let selected = id == 0 ? country_code == "ko-KR" ? "selected" : "" : country_code == "en-GB" ? "selected" : "";
        // 선택된 옵션을 사용하여 드롭다운 메뉴 생성
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        // select된 언어 밑으로 생성
        tag.insertAdjacentHTML("beforeend", option);
    }
});

// 언어 교환 아이콘 동작
exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
        tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

// text 입력 가능하도록 이벤트 추가
// 번역할 text 비어있을때 번역완료 text에 빈배열로 설정 
// => 번역할 text 다 지우면 자동으로 번역된 기록도 지우는 역할
fromText.addEventListener("keyup", () => {
    if (!fromText.value) {
        toText.value = "";
    }
});


translateBtn.addEventListener("click", () => {
    // trim() => 문자열 양 끝의 공백 제거
    let text = fromText.value.trim(),
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    // 사용자가 텍스트 입력하지 않았을 때 함수종료
    if (!text) return;

    // to Text 입력 필드에 번역중임을 표시
    toText.setAttribute("placeholder", "Translating...");
    // 번역 api 요청
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            // data.id === 0
            // => api에서 제공하는 여러가지 번역 후보 중에서 가장 일치하거나 
            // 관련성 있는 번역을 뜻함
            if (data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
});

icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        // 텍스트가 입력되지 않았을 경우 함수를 종료
        if (!fromText.value || !toText.value) return;
        // 아이콘이 가지는 클래스 검사 후 복사
        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            // 음성 출력을 위한 utterance 객체를 생성
            let utterance;
            // from과 to 각각 해당하는 id 확인 후 브라우저 음성 엔진을 통해 읽어줌
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});