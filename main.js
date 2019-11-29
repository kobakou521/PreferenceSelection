'use strict';
const startbtn = document.getElementById('startbtn');
const nextbtn = document.getElementById('nextbtn');
const mainImage = document.getElementById('main');
var useranswer;
var test;
{
  startbtn.addEventListener('click', () => {
    const results = [
      'img/picA.jpg',
      'img/picB.jpg',
      'img/picC.jpg',
      'img/picD.jpg',
      'img/picE.jpg',
      'img/picF.jpg',
    ];
    test = results[Math.floor(Math.random() * results.length)];
    mainImage.src = test;
    console.log(mainImage);
    console.log(test);
  });
}

function store(score) {
    useranswer = score;
    alert(useranswer + 'にしました！');
    console.log(useranswer);
    localStorage.setItem('userans', useranswer);
}

nextbtn.addEventListener('click', () => {
   switch(test) {
     case 'img/picA.jpg':
         console.log('A');
         window.open('sortA.html', '_blank');
         break;
 
     case 'img/picB.jpg':
         console.log('B');
         window.open('sortB.html', '_blank');
         break;
 
     case 'img/picC.jpg':
         console.log('C');
         window.open('sortC.html', '_blank');
         break;

     case 'img/picD.jpg':
         console.log('D');
         window.open('sortD.html', '_blank');
          break;

     case 'img/picE.jpg':
          console.log('E');
          window.open('sortE.html', '_blank');
         break;

     case 'img/picF.jpg':
          console.log('F');
          window.open('sortF.html', '_blank');
          break;
 }
});
