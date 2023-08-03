const nav = document.querySelector('#tab-button-nav')
const sections = document.querySelectorAll('.tab-section');

  // nav요소에 클릭 이벤트를 등록 -> 탭 버튼을 클릭할 때 마다 실행
    nav.addEventListener('click', (e) => {

      // 이벤트가 발생한 요소가 tab-button 클래스를 포함하고 있는지 확인
      // 포함하고 있지 않다면 중단하고 그대로 종료
      if (!e.target.classList.contains('tab-button')) {
        return;
      }
      
      // 클릭된 탭 버튼의 data-tab-section 속성 값을 가져와 focusedTabId 변수에 저장
      const focusedTabId = e.target.dataset.tabSection;
    
    // sections 변수에 저장된 모든 섹션 요소들에 대해 반복문 실행
    sections.forEach((section) => {
      if (section.id === focusedTabId) {
        // 탭버튼과 일치할 경우 hidden 속성 제거
        section.removeAttribute('hidden');

        // if (focusedTabId === 'tab-section-1') {
        //   // section1.js 파일을 동적으로 로드하고 실행합니다.
        //   const script = document.createElement('script');
        //   script.src = 'generator.js';
        //   document.head.appendChild(script);
        // } else if (focusedTabId === 'tab-section-2') {
        //   // section2.js 파일을 동적으로 로드하고 실행합니다.
        //   const script = document.createElement('script');
        //   script.src = 'reader.js';
        //   document.head.appendChild(script);
        // }
        // 아닌경우 hidden 속성 추가
      } else {
        section.setAttribute('hidden', true);
      }
    });

  });
