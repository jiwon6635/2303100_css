// 이미지 압축을 위한 커스텀 훅
import React, { useEffect, useState } from "react";
import useImageCompress from "./hook/useImageCompress";
// 데이터 URI를 파일로 변환하는 함수
import { dataURItoFile } from "./utils/common";

function App() {
  // useState 사용하여 두개의 상태변수 초기화
  const [uploadImage, setUploadImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  // 커스텀 훅을 사용하여 이미지 압축 관련 상태와 함수 가져옴
  const { isLoading: isCompressLoading, compressImage } = useImageCompress();
  // 이미지를 업로드 했을때 호출, uplaodImage 상태를 업데이트하여 업로드된 이미지의 URI 저장  
  const handleUploadImage = (image) => setUploadImage(image);
  // 업로드 된 이미지를 압축하는 역할
  const handleCompressImage = async () => {
    if (!uploadImage) return;

    const imageFile = dataURItoFile(uploadImage);
    const compressedImage = await compressImage(imageFile);

    // 이미지 서버 저장 로직
    if (!compressedImage) return;
    const imageUrl = URL.createObjectURL(compressedImage);
    setCompressedImage(imageUrl);
  };

  // useEffect 훅을 사용해서 uploadImage 상태가 변경될때 handleCompressImage 함수를 자동호출
  useEffect(() => {
    if (uploadImage) {
      handleCompressImage();
    }
  }, [uploadImage]);

  return (
    <div className="App">
      <div className="profile">
        {compressedImage ? (
          <img src={compressedImage} alt="Compressed" />
        ) : (
          <div className="cover">
            {isCompressLoading ? "이미지 압축 중.." : "이미지가 없어요."}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
