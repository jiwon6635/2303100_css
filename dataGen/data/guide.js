const guide = [
        {
          keyname: 'boolean',
          description: 'true 혹은 false를 반환합니다.',
          usage: '&lt;boolean()&gt;',
          arguments: [],
          returns: 'boolean',
        },
        {
          keyname: 'random',
          description:
            'input의 item 항목에 들어있는 값들 중 하나를 반환합니다.',
          usage: '&lt;random("item1","item2","item3", ...)&gt;',
          arguments: [
            { param: 'item', type: 'string', detail: '' },
          ],
          returns: 'string',
        },
        {
          keyname: 'lorem',
          description: '랜덤한 문장을 반환합니다.',
          usage: '&lt;lorem(number, unit)&gt;',
          arguments: [
            { param: 'number', type: 'integer', detail: '1이상, default = 5' },
            { param: 'unit', type: 'string', detail: ' "word", "paragraph" 중 하나, default = "word"' }
          ],
          returns: 'string',
        },
        {
          keyname: 'picture',
          description: '입력받은 픽셀크기의 이미지가 담긴 링크를 반환합니다.',
          usage: '&lt;picture(width, height)&gt;',
          arguments:  [
            { param: 'width', type: 'integer', detail: '가로 픽샐값, 1이상' },
            { param: 'height', type: 'integer', detail: '세로 픽셀값, 1이상' }
          ],
          returns: 'string',
        },
        {
          keyname: 'color',
          description: '랜덤한 RGB코드를 반환합니다. (16진수 6자리 컬러값)',
          usage: '&lt;color()&gt;',
          arguments: [],
          returns: 'string',
        },
      ]


      

  // 스타일 클래스를 적용하여 요소를 생성하는 함수 정의
  function createStyledElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    element.innerText = text;
    return element;
  }

  // 출력하는 함수 정의
  function printReturnsValue() {
    const outputElement = document.getElementById('output');

    guide.forEach((item) => {
      const tagName = item.returns;
      const className = tagName.toLowerCase();

      const element = createStyledElement(tagName, className, item.keyname);
      outputElement.appendChild(element);
    });
  }

  // 함수 호출하여 returns 값 출력
  printReturnsValue();