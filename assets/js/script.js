let textarea1 = document.querySelector('textarea'),
 forminput = document.querySelector('.main__yearsubmit__year input'),
 div1 = document.querySelector('.main__menu__item__sun'),
 div2 = document.querySelector('.main__menu__item__mon'),
 div3 = document.querySelector('.main__menu__item__tue'),
 div4 = document.querySelector('.main__menu__item__wed'),
 div5 = document.querySelector('.main__menu__item__thu'),
 div6 = document.querySelector('.main__menu__item__fri'),
 div7 = document.querySelector('.main__menu__item__sat'),
 jsonerr=document.querySelector('.jsonerror'),
 yearerr=document.querySelector('.yearerror'),
 yearinput = document.querySelector(".yearbox"),
 person =[];

let manyDivs = document.querySelectorAll('.main__menu__item div');
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

    // function to validate JSON string
    function IsValidJSONString(str) {
      try { JSON.parse(str) }
      catch (e) { return false }
      return true;
  }

  yearinput.addEventListener("keyup",()=>{
    let yearval = yearinput.value;
    console.log(yearval);
    if(yearval.length !== 4) {
      yearerr.innerText = "year is not valid";
    }else {
      yearerr.innerText = "";
    }
  })

document.querySelector('.main__yearsubmit__submit input')
  .addEventListener('click', e => {
    e.preventDefault();
    let newobj = textarea1.value,
    daybox = document.querySelectorAll(".main__menu__item div span");
    // console.log(daybox.length);
    // console.log(newobj);
    
    if(!IsValidJSONString(newobj)) {
      jsonerr.innerText="jsson data passed is not valid";
    }else {
      jsonerr.innerText="";
      person=JSON.parse(newobj);
    }

    console.log(person);
    let checkdata = forminput.value;
    for (let j = 0; j < manyDivs.length; j++) {
      manyDivs[j].innerHTML = '';
    }
    for (let i = 0; i < person.length; i++) {
      
        let charx = person[i].name.split(' ');
        console.log(charx);
        let combine = charx[0].charAt(0).concat(charx[1].charAt(0));
        let d = new Date(person[i].birthday);
        let date1 = d.getDate();
        let date2 = d.getMonth() + 1;
        let date3 = yearinput.value;
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
    for(var i=1; i<=7; i++) {
      const spans = document.querySelectorAll(`.main__menu__item:nth-child(${i}) div span`);
      let boxlength=spans.length;
      console.log(boxlength);
      // spans.style.width="50%";
  }
  });

