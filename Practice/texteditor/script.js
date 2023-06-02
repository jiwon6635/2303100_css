let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

// 폰트 이름들을 배열로 저장
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];


// 초기화 
const intializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    // 폰트 목록을 옵션으로 추가
    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    // fontSizeRef 요소에 1 부터 7까지 값 옵션으로 추가
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }
    // 기본값 설정
    fontSizeRef.value = 3;
};

// 명령, 기본 사용자 인터페이스, 선택적으로 사용되는 값
const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

//
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});


const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

window.onload = intializer();

// 이미지 삽입 버튼, 이미지 입력 필드 상수 선언
const insertImageButton = document.getElementById("insertImage");
const imageInput = document.getElementById("image-input");

// 이미지 삽입 버튼 클릭 시 동작
insertImageButton.addEventListener("click", () => {
  imageInput.click();
});

// 이미지 입력 필드 값이 변경
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];

  if (file) {
    // FileReader 객체
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageElement = document.createElement("img");
      imageElement.src = event.target.result;
      writingArea.appendChild(imageElement);
    };

    reader.readAsDataURL(file);
  }
});
