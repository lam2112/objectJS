//* forEach
//** Duyet tung phan tu trong Object */

{
  // var courses = [
  //     'Java script',
  //     'php',
  //     'ruby'
  // ]
  // Array.prototype.forEach2 = function(callback){
  //     for (var index in this){
  //         if (this.hasOwnProperty(index)){ //loai bo phuong thuc proto
  //             callback(this[index], index, this); //goi lai phuong thuc trong forEach2
  //         }
  //     }
  // }
  // courses. forEach2(function(course, index, array){
  //    console.log(course, index, array);
  // })
}

//*filter
//**Loc phan tu thoa man dieu kien */

{
  //     var courses = [
  //     {
  //         name: 'javascrip',
  //         coin: 680
  //     },
  //     {
  //         name: 'php',
  //         coin: 880
  //     },
  //     {
  //         name: 'ruby',
  //         coin: 980
  //     }
  // ]
  // Array.prototype.filter2 = function(callback){
  //     var outPush = [];
  //     for (var index in this){
  //         if ( this.hasOwnProperty(index)){
  //             var result = callback(this[index], index, this);
  //             if (result) {
  //                 outPush.push(this[index]);
  //             }
  //         }
  //     }
  //     return outPush;
  // }
  // var filterCourse = courses.filter2(function(course, index, array){
  //     //? dua vao dieu kien
  //     return course.coin > 700;
  // })
  // console.log(filterCourse);
}

//*some
//**Kiem tra phan tu thoa man dieu kien (1 -> true) */
{
  // ll
//   var courses = [
//     {
//       name: "javascrip",
//       coin: 680,
//       isFinish: false,
//     },
//     {
//       name: "php",
//       coin: 880,
//       isFinish: false,
//     },
//     {
//       name: "ruby",
//       coin: 980,
//       isFinish: true,
//     },
//   ];

//   Array.prototype.some2 = function(callback){
//     for( var index in this ){
//         if ( this.hasOwnProperty(index)){
            
//             if (callback(this[index], index, this) == true){
//                 return true;
//             }
//         }
//     }
//     return false;

//   }


//   var result = courses.some2(function(course, index, array){
//       return course.isFinish;
//   })

//   console.log(result);
}
