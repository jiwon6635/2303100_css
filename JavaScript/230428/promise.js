function sayHello() {
    // 성공했을때 resolve, 실패했을때 reject
    return new Promise((resolve, reject) => {
        const hello = "Hello Hello";
        resolve(hello);
        // reject(new Error());
    });
}

// then을 통해 일련의 흐름을 제어
sayHello()
.then((resolvedData) => {
    console.log(resolvedData); // Hello Hello
    return resolvedData
})
// 연속으로 then 쓰고싶을때 (ex 회원가입 과정에서 정보를 확인하고 다양한 단계 필요할때 사용가능)
// .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData
// })
// .then((resolvedData) => {
//     console.log(resolvedData);
// })
// .catch((error) => {
//     console.log(error);
// });


// .then쓰는거 보다 나은 방법

async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();