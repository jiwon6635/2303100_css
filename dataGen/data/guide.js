const guideData = [
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

    // 출력해야할 코드
    // <div> <!-- 1 -->
    //   <span>Returns</span> <!-- 2 -->
    //   <String>String</String> <!-- 3 -->
    // </div>
  
    // 1
    const rtnContainer = createEl({
        tagName: 'div',
        parentEl: toggleContent,
    });
    // 2
    createEl({
        tagName: 'span',
        parentEl: rtnContainer,
        text: 'Returns',
    });
    // 3
    createEl({
        tagName: data.returns,
        parentEl: rtnContainer,
        text: data.returns,
  });
