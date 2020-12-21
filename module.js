// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.


//
//--------------------------------------------------------------------------------------------------------------------------------------------
//
//
//
// function wakeUp(time, callback) {
//
//     if (time >= 8) {
//         callback('Overslept!');
//     } else {
//         callback('Good morning!');
//
//
//         setTimeout(() => {
//
//             morningRoutine('false', () => {
//                 console.log('No water!!!');
//                 console.log('Need to turn on the boiler!');
//                 console.log('The water is heated.......................');
//
//                 setTimeout(() => {
//                     console.log('The water is warm.');
//                     setTimeout(() => {
//                         console.log('Morning routine is done!');
//
//
//                         breakfast('apple', (food) => {
//                             console.log(`Very tasty ${food}!`);
//
//
//                             studyTime(true, 4, (countLecture) => {
//                                 for (let i = 1; i <= countLecture; i++) {
//                                     console.log(`${i} lecture is over!`);
//                                 }
//
//
//                                 goToOkten(false, (money) => {
//                                     console.log('No tram!');
//                                     console.log('Call a taxi.......');
//
//                                     setTimeout(() => {
//                                         if (money > 80) {
//                                             console.log('Taxi come');
//                                             setTimeout(() => {
//                                                 console.log('I came to Okten!');
//
//                                                 setTimeout(() => {
//                                                     console.log('Performing the task.....');
//
//
//                                                     goToSleep(true, () => {
//                                                         console.log('Tasks is done! Doing to bed');
//                                                         setTimeout(() => {
//                                                             console.log('ZZZZZZzzzzzzzzz');
//                                                         }, 3000);
//                                                     })
//
//                                                 }, 3000);
//
//                                             }, 2000);
//                                         } else {
//                                             console.log('Go to home(');
//                                         }
//                                     }, 2000);
//                                 });
//                             });
//                         });
//                     }, 3000);
//                 }, 5000);
//             });
//         }, 2000);
//     }
// }
//
// wakeUp(7, (message) => {
//     console.log(message);
// });
//
//
// function morningRoutine(water, cb) {
//     console.log('I go to the shower');
//     setTimeout((water) => {
//         if (!water) {
//             cb();
//             return;
//         }
//         console.log('Morning routine is done!');
//
//     }, 2000)
//
// }
//
//
// function breakfast(food, callBackEat) {
//     console.log('Time for breakfast!');
//
//     setTimeout(() => {
//
//         if (!food) {
//             console.log('Oops! No food');
//             return;
//         }
//         callBackEat(food);
//
//     }, 2000)
// }
//
//
// function studyTime(internet, lectures, studyCallBack) {
//     console.log('Time to study!');
//     setTimeout(() => {
//         if (!internet) {
//             console.log('No internet, no lectures!');
//             return;
//         }
//
//         setTimeout(() => {
//             studyCallBack(lectures);
//         }, 2000)
//
//
//     }, 2000)
// }
//
//
// function goToOkten(tram, cb) {
//     setTimeout(() => {
//         console.log('Time to go to Okten!!!');
//
//         if (!tram) {
//             cb(100);
//             return;
//         }
//
//         setTimeout(() => {
//             console.log('I came to Okten!');
//         }, 3000);
//     })
// }
//
//
// function goToSleep(tasks, callback) {
//     setTimeout(() => {
//         console.log('Time to sleep..........');
//
//         if (!tasks) {
//             console.log('Study until morning......');
//             return;
//         }
//         callback();
//
//     }, 5000);
// }
















//----------------------------------------------------------------------------------------------------------------------------------------------

//
// function wakeUp(time) {
//     return new Promise((resolve, reject) => {
//         if (time >= 8) {
//             reject('Overslept!');
//         } else {
//             resolve('Good morning!');
//         }
//     })
// }
//
//
// function morningRoutine(water) {
//     console.log('I go to the shower');
//
//     return new Promise((resolve, reject) => {
//
//         if (!water) {
//             reject('No water!!!');
//             console.log('Need to turn on the boiler!');
//             console.log('The water is heated.......................');
//
//             setTimeout(() => {
//                 console.log('The water is warm.');
//                 setTimeout(() => {
//                     console.log('Morning routine is done!');
//                 }, 2000);
//             }, 2000);
//             return;
//
//         } else {
//             resolve('Morning routine is done!')
//         }
//     })
// }
//
//
// function breakfast(food) {
//     return new Promise((resolve, reject) => {
//         console.log('Time for breakfast!');
//
//         setTimeout(() => {
//
//             if (!food) {
//                 reject('Oops! No food');
//                 return;
//             } else {
//                 resolve(`Very tasty ${food}!`);
//             }
//
//         }, 2000)
//     })
// }
//
//
// function studyTime(internet, lectures) {
//     return new Promise((resolve, reject) => {
//         console.log('Time to study!');
//         setTimeout(() => {
//             if (!internet) {
//                 reject('No internet, no lectures!');
//                 return;
//             } else {
//                 setTimeout(() => {
//                     resolve(lectures);
//                 }, 2000)
//             }
//         }, 2000)
//     })
// }
//
//
// function goToOkten(tram) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Time to go to Okten!!!');
//
//             if (!tram) {
//                 reject(100);
//                 return;
//             } else {
//                 setTimeout(() => {
//                     resolve('I came to Okten!');
//                 }, 3000);
//             }
//         })
//     })
// }
//
//
// function goToSleep(tasks) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Time to sleep..........');
//
//             if (!tasks) {
//                 reject('Study until morning......');
//                 return;
//             } else {
//                 console.log('Tasks is done! Doing to bed');
//                 setTimeout(() => {
//                     resolve('ZZZZZZzzzzzzzzz');
//                 }, 3000);
//             }
//
//         }, 5000);
//     })
// }
//
//
// wakeUp(7)
//     .then(water => {
//         return morningRoutine(false);
//     })
//     .then(food => {
//         return breakfast('peach');
//     })
//     .then((internet, lectures) => {
//         return studyTime(true, 4);
//     })
//     .then(tram => {
//         return goToOkten(false);
//     })
//     .then(tasks => {
//         return goToSleep(true);
//     })
//     .catch(reason => {
//         console.log(reason);
//     })
