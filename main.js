'use strict';
const startbtn = document.getElementById('startbtn');
const nextbtn = document.getElementById('nextbtn');
const mainImage = document.getElementById('main');
var useranswer;
var test;
{
  startbtn.addEventListener('click', () => {
    const results = [
      'picA.jpg',
      'picB.jpg',
      'picC.jpg',
      'picD.jpg',
      'picE.jpg',
      'picF.jpg',
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
     case 'picA.jpg':
         console.log('A');
         window.open('sortA.html', '_blank');
         break;
 
     case 'picB.jpg':
         console.log('B');
         window.open('sortB.html', '_blank');
         break;
 
     case 'picC.jpg':
         console.log('C');
         window.open('sortC.html', '_blank');
         break;

     case 'picD.jpg':
         console.log('D');
         window.open('sortD.html', '_blank');
          break;

     case 'picE.jpg':
          console.log('E');
          window.open('sortE.html', '_blank');
         break;

     case 'picF.jpg':
          console.log('F');
          window.open('sortF.html', '_blank');
          break;
 }
});
