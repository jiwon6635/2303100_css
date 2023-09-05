// URI(Uniform Resource Identifier)를 파일로 변환하는 함수
export const dataURItoFile = (dataURI) => {
    // atob 함수를 사용하여 Base64로 인코딩된 문자열을 디코딩합니다.
    const byteString = atob(dataURI.split(",")[1]);
    // 데이터 URI의 첫 번째 부분을 분석하여 MIME 타입을 추출합니다. 데이터 URI에서 ":" 다음에 오는 문자열을 MIME 타입으로 간주
    // 필요한 경우 세미콜론(;)을 기준으로 잘라냄
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    // 데이터 저장
    const ab = new ArrayBuffer(byteString.length);
    // ArrayBuffer를 Uint8Array로 변환,  데이터를 저장하고 Blob을 생성하는 데 사용
    const ia = new Uint8Array(ab);


    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    // ArrayBuffer를 사용하여 Blob 객체를 생성 ,Blob 객체가 나타내는 데이터의 MIME 타입을 지정
    const blob = new Blob([ab], { type: mimeString });
    //  blob 객체를 기반으로 File 객체를 생성
    return new File([blob], "uploadImage", { type: mimeString });
  };