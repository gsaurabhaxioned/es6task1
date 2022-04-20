let textarea1 = document.querySelector('textarea');
let forminput = document.querySelector('.main__yearsubmit__year input');
let div1 = document.querySelector('.main__menu__item__sun');
let div2 = document.querySelector('.main__menu__item__mon');
let div3 = document.querySelector('.main__menu__item__tue');
let div4 = document.querySelector('.main__menu__item__wed');
let div5 = document.querySelector('.main__menu__item__thu');
let div6 = document.querySelector('.main__menu__item__fri');
let div7 = document.querySelector('.main__menu__item__sat');

let person =[];
// [
//   {
//     name: 'Tryan Lannister',
//     birthday: '12/02/1978',
//   },
//   {
//     name: 'Cersei Lannister',
//     birthday: '1/30/1975',
//   },
//   {
//     name: 'Daeneryes Targeryan',
//     birthday: '11/24/1991',
//   },
//   {
//     name: 'Arya Stark',
//     birthday: '11/5/1996',
//   },
//   {
//     name: 'Jon Snow',
//     birthday: '12/03/1989',
//   },
//   {
//     name: 'Sansa Stark',
//     birthday: '08/06/1992',
//   },
//   {
//     name: 'Sansa Stark',
//     birthday: '08/06/1992',
//   },
//   {
//     name: 'Sansa Stark',
//     birthday: '08/06/1992',
//   },
//   {
//     name: 'Sansa Stark',
//     birthday: '08/06/1992',
//   },
//   {
//     name: 'Sansa Stark',
//     birthday: '08/06/1992',
//   },
//   {
//     name: 'Jorah Mormath',
//     birthday: '10/12/1988',
//   },
//   {
//     name: 'Ice Cube',
//     birthday: '01/01/1980',
//   },
//   {
//     name: 'Jacob Dsouza',
//     birthday: '02/15/1995',
//   },
//   {
//     name: 'Nicola Tesla',
//     birthday: '05/08/2000',
//   },
//   {
//     name: 'Bacon Comedy',
//     birthday: '02/25/2001',
//   },
//   {
//     name: 'Jason Momoa',
//     birthday: '04/30/2014',
//   },
//   {
//     name: 'Omega Shenron',
//     birthday: '11/24/2014',
//   },
//   {
//     name: 'Akon Konvict',
//     birthday: '11/5/2014',
//   },
//   {
//     name: 'Moses Gaddam',
//     birthday: '10/03/2015',
//   },
//   {
//     name: 'Savio Chauri',
//     birthday: '08/06/2010',
//   },
//   {
//     name: 'Sharuk Khan',
//     birthday: '10/12/1989',
//   },
//   {
//     name: 'Salman Khan',
//     birthday: '05/05/1982',
//   },
//   {
//     name: 'Robert Jr',
//     birthday: '03/15/1995',
//   },
//   {
//     name: 'Captian America',
//     birthday: '06/09/2001',
//   },
//   {
//     name: 'Black Widow',
//     birthday: '11/02/2000',
//   },
//   {
//     name: 'Osama Ladin',
//     birthday: '11/26/2011',
//   },
//   {
//     name: 'Obama Barak',
//     birthday: '09/24/1991',
//   },
//   {
//     name: 'Rick Martin',
//     birthday: '07/10/1996',
//   },
//   {
//     name: 'Drake Bling',
//     birthday: '08/06/2015',
//   },
//   {
//     name: 'Mayuresh Bhaskar',
//     birthday: '08/06/1992',
//   },
//   {
//     name: 'Kapil Sharma',
//     birthday: '10/12/2006',
//   },
//   {
//     name: 'Sunny Deol',
//     birthday: '10/20/2005',
//   },
//   {
//     name: 'Amit Mane',
//     birthday: '02/15/1997',
//   },
//   {
//     name: 'Deepankar Jadhav',
//     birthday: '03/05/1997',
//   },
// ];
let manyDivs = document.querySelectorAll('.main__menu__item div');
// console.log('manyDivs', manyDivs);
// for (let i = 0; i < person.length; i++) {
//   let textmsg = `{
//     name: "${person[i].name}"
//     birthday: "${person[i].birthday}"
// }, `;
//   textarea1.innerHTML += textmsg;
// }
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

document
  .querySelector('.main__yearsubmit__submit input')
  .addEventListener('click', e => {
    e.preventDefault();
    let newobj = textarea1.value;
    // console.log(newobj);
    person=JSON.parse(newobj);
    console.log(person);
    let checkdata = forminput.value;
    for (let j = 0; j < manyDivs.length; j++) {
      manyDivs[j].innerHTML = '';
    }
    for (let i = 0; i < person.length; i++) {
      if (checkdata === person[i].birthday.slice(-4)) {
        let charx = person[i].name.split(' ');
        console.log(charx);
        let combine = charx[0].charAt(0).concat(charx[1].charAt(0));
        let d = new Date(person[i].birthday);
        let date1 = d.getDate();
        let date2 = d.getMonth() + 1;
        let date3 = d.getFullYear();
        let con = date3 + '/' + date2 + '/' + date1;
        let dayss = new Date(con);
        let days = dayss.getDay();
        switch (days) {
          case 0:
            let span1 = document.createElement('span');
            span1.innerText = combine;
            rndCol =
              'rgb(' +
              random(255) +
              ',' +
              random(255) +
              ',' +
              random(255) +
              ')';
            span1.style.backgroundColor = rndCol;
            span1.style.width="50%";
            span1.style.height="100%";
            div1.appendChild(span1);
            break;
          case 1:
            let span2 = document.createElement('span');
            span2.innerText = combine;
            rndCol =
              'rgb(' +
              random(255) +
              ',' +
              random(255) +
              ',' +
              random(255) +
              ')';
            span2.style.backgroundColor = rndCol;
            div2.appendChild(span2);
            break;
          case 2:
            let span3 = document.createElement('span');
            span3.innerText = combine;
            rndCol =
              'rgb(' +
              random(255) +
              ',' +
              random(255) +
              ',' +
              random(255) +
              ')';
            span3.style.backgroundColor = rndCol;
            div3.appendChild(span3);
            break;
          case 3:
            let span4 = document.createElement('span');
            span4.innerText = combine;
            rndCol =
              'rgb(' +
              random(255) +
              ',' +
              random(255) +
              ',' +
              random(255) +
              ')';
            span4.style.backgroundColor = rndCol;
            div4.appendChild(span4);
            break;
          case 4:
            let span5 = document.createElement('span');
            span5.innerText = combine;
            rndCol =
              'rgb(' +
              random(255) +
              ',' +
              random(255) +
              ',' +
              random(255) +
              ')';
            span5.style.backgroundColor = rndCol;
            div5.appendChild(span5);
            break;
          case 5:
            let span6 = document.createElement('span');
            span6.innerText = combine;
            rndCol =
              'rgb(' +
              random(255) +
              ',' +
              random(255) +
              ',' +
              random(255) +
              ')';
            span6.style.backgroundColor = rndCol;
            div6.appendChild(span6);
            break;
          case 6:
            let span7 = document.createElement('span');
            span7.innerText = combine;
            rndCol =
              'rgb(' +
              random(255) +
              ',' +
              random(255) +
              ',' +
              random(255) +
              ')';
            span7.style.backgroundColor = rndCol;
            div7.appendChild(span7);
        }
      }
    }
  });

// function makeRequest() {
//         // let request = new XMLHttpRequest();
//         // request.open("GET", "./assets/js/person.jason");
//         // console.log("yagibf",request);
//         // request.onreadystatechange =()=>{
//             // let response=request.responseText;
//             let rep=JSON.parse(person);
//             // console.log("datas",rep);
//             let j= [];
//                 for(let i=0;i<9;i++){
//                     j.push(rep[i]);
//                 }
//         // }
//         // request.send();
//       }

//   document.querySelector(".main__yearsubmit__submit input").addEventListener('click', (e)=> {
//     e.preventDefault();
//     makeRequest();
// });
