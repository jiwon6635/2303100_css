export default async function GetSearch(value, token) {
    const response = await fetch(`https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${value}`,
    {
        method: 'GET',
        headers: {
          Authorization : `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkwOTgwYjJjYjIwNTY2MzMzYjQyYSIsImV4cCI6MTY5MTk4NjMxOCwiaWF0IjoxNjg2ODAyMzE4fQ.QfSaENpQz1KpNArVe9p14KMiLMSJheS5URXCMfdjB_g'}`,
          'Content-type': 'application/json',
        },
      });
    const json = await response.json();
    // 15개로 잘라서 검색확인
    console.log(json.slice(0, 10));
    return json.slice(0, 10);
  } 