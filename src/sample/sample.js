// function increase(number, callback){
  
//   setTimeout(() => {
//     const result = number + 10;
//     if(callback){
//       callback(result);
//     }
//   }, 1000);
// }

// 초기값을 0으로 두고 result 값 콘솔 기록
// console.log("작업 시작");
// increase(0, result => {
//   console.log(result);
//   increase(result, result => {
//     console.log(result);
//     increase(result, result => {
//       console.log(result);
//       increase(result, result => {
//         console.log(result);
//         console.log("작업 완료");
//       })
//     })
//   })
// })

function increase(number){
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 19;
      if(result > 50){
        // 50보다 높으면 에러 발생시키기 
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  })
  return promise;
}

// increase(0)
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .catch(e => {
//     // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
//     console.log(e);
//   })


async function runTasks(){
  try {
    let result = await increase(0); 
    console.log(result);

    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
runTasks();