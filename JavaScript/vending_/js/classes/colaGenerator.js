// 연결 잘 됐는지 확인용 ^_^
console.log('hello! cola');

class ColaGenerator {
    // constructor - class를 쓰면 안에서 실행되는 함수
    constructor() {
        this.itemList = document.querySelector('.section1 .cola-list');
    }

    async setup() {
        const response = await this.loadData();
        this.colaFactory(response);
    }

    async loadData() {
        // try ~ catch 문 : 
        try {
            // fetch는 promise보다 try ~ catch문 사용하기
            const response = await fetch('./items.json');
            // 비동기처리 해야지 fetch다음에 바로 if로 감 아니면 else로 바로 동작 js는 기다려주지않음^_^ => async와 await로 비동기처리 해주기
            // 응답이 잘되었는지 확인 respons.ok 400~이면 오류
            if (response.ok) { // 서버의 응답 코드가 200~299일경우 정상
                // json을 js에서 사용하기위해 자바스크립트 객체로 변경해줌
                return response.json();
            } else {
                // try ~ catch문 가까운 인자로 error 출력 하도록 보내줌
                throw new Error(response.status);
            }
        }  catch (error) {
            console.log(error);
        }
    }

    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>
            `;

            item.innerHTML = itemTemplate;
            docFrag.append(item);
        })
        this.itemList.append(docFrag);
    }
}

export default ColaGenerator;