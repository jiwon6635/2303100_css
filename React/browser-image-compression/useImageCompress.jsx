// useState 훅을 사용하여 이미지 압축 작업의 상태를 관리
// "browser-image-compression" 라이브러리를 사용하여 이미지 압축
// hook폴더에 넣기

import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const useImageCompress = () => {
  // useState 사용하여 이미지 압축 작업의 상태 관리 
	// 이미지 압축 작업이 진행중인지 확인 초기값(false)
  const [isLoading, setIsLoading] = useState(false);
	// compressImage => 이미지 압축을 수행하는 비동기 함수
	// 사용자가 업로드한 이미지 파일을 매개변수로 받음
  const compressImage = async (imageFileFile) => {
    // 이미지 압축 작업이 진행중이면 함수 종료 
		if (isLoading) return;
		// isLoading의 상태를 true로 설정하여 작업이 진행중임을 나타냄
    setIsLoading(true);
		// 콘솔에 원본 이미지 파일의 크기를 출력
    console.log(`원본 이미지 사이즈 : ${imageFile.size / 1024 / 1024} MB`);
		// 옵션 설정
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
    };

    try {
			// imageCompression 함수를 사용하여 이미지 압축 저장을 수행
			// 압축된 파일을 compressedFile 변수에 저장
      const compressedFile = await imageCompression(imageFile, options);

      console.log(
        `압축된 이미지 사이즈 : ${compressedFile.size / 1024 / 1024} MB`
      );
			// isLoading 상태를 다시 'false'로 설정하여 작업 완료 나타내기
      setIsLoading(false);
			// 압축된 이미지 파일을 반환
      return compressedFile;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
	// compressImage 함수와 isLoading 상태 변수 반환
  return { compressImage, isLoading };
};

export default useImageCompress;