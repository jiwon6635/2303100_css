<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        img {
            width: 200px;
        }
    </style>
</head>
<body>
    {/* 이렇게 한 다음에 main에 flex를 주어 article을 컨트롤 하시면 됩니다.   */}
    <nav>
        <ul>
            <li>about</li>
            <li>product</li>
            <li>contact</li>
        </ul>
    </nav>
    <script>
    fetch('http://test.api.weniv.co.kr/mall')
        .then(data => data.json())
        .then(data => {
            const main = document.createElement("main")
            data.forEach(item => {
                const productCard = document.createElement('article')

                const productimg = document.createElement('img')
                const productName = document.createElement('h2')
                const productPrice = document.createElement('p')

                productName.textContent = item.productName
                productPrice.textContent = item.price
                productimg.setAttribute('src', 'http://test.api.weniv.co.kr/' + item.thumbnailImg)

                productCard.appendChild(productimg)
                productCard.appendChild(productName)
                productCard.appendChild(productPrice)

                main.appendChild(productCard)
            })
            document.body.appendChild(main)
        })
    </script>
</body>
</html>