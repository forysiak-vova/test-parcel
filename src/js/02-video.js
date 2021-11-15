// console.log(localStorage);
// localStorage.setItem('my-data', 'qweqweqwe');
// console.log(localStorage.getItem('my-data'));
import common from '../css/common.css'
// const logMessage = () => {
//    console.log('Лог при визове функції через 3 сек');
// };
// console.log('До визова функції setTimeout');

// setTimeout((x,y) => {
//    console.log('всередині колбек для setTimeout');
//    console.log(x,y);
// }, 2000, 5, 50)
//       console.log('После визова функції setTimeout');
//  ===================================== setTimeout and clearTimeout  ================================
// const logger = time => {
//    console.log(`log через ${time} ms, тому що не відмінили таймаут`);
// };
// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);
// const showldChennelTimer = Math.random() > 0.3;
// console.log(showldChennelTimer);

// if (showldChennelTimer) {
//    clearTimeout(timerId);
//  };

// ==================================== setInterval ====================================================
// const logger = time => {
//    console.log(`визов функції через інтервал ${time} ms`);
// };
// const intervalId = setInterval(logger, 2000, 2000);

// const resOftrueFalse = Math.random() > 0.3;
// console.log(resOftrueFalse);
// if (resOftrueFalse) {
//    clearInterval(intervalId);
// }
let total = 0;
const timeId = setInterval(() => {
   if (total === 3) {
       console.log('видали');
      clearInterval(timeId);
      return;
   }
     console.log('hello');
   total += 1;
 
},1000);