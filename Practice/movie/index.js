let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let movieName = movieNameRef.value.toUpperCase();

// API에서 데이터를 가져오는 함수 getMovie
let getMovie = () => {
    let movieName = movieNameRef.value.toUpperCase();
    
    // url에 OMDb API에 요청할 URL 저장 영화 이름, api키를 사용해서 url 생성
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    
    // 입력창이 비어있는지 if문 사용해서 확인
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`;
    }

    // 입력창이 비어있지 않으면 fetch함수 사용해서 url에 GET요청 보냄
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            
            // Ture일때 결과 표시 
            // result요소에는 영화 포스터, 제목, 평점, 개봉년도, 상영시간, 장르, 줄거리 및 출연 배우에 관한 정보 포함

            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="star-icon.svg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                `;
            }

            // 응답받지 못한경우 오류 메시지 표시하기
            else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })
            // catch 메서드를 사용해서 에러가 발생한 경우 해당 에러문 표시
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
            });
    }
};

// 클릭할시 getMovie 함수가 호출되도록 버튼에 이벤트 리스너 추가
searchBtn.addEventListener("click", getMovie);

// 페이지가 로드될때 getMovie 함수가 호출되도록 윈도우 객체에 이리추
window.addEventListener("load", getMovie);
