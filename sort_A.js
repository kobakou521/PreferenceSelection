'use strict'

var useranswer = localStorage.getItem("userans");

var imagesArrey = [
  [
  'pic00.jpg',
  'pic01.jpg',
  'pic02.jpg',
  'pic03.jpg',
  'pic04.jpg',
  'pic05.jpg',
  'pic06.jpg',
  'pic07.jpg',
  'pic08.jpg',
  'pic09.jpg',
  'pic10.jpg',
  'pic11.jpg',
  'pic12.jpg',
  'pic13.jpg',
  'pic14.jpg',
  'pic15.jpg',
  'pic16.jpg',
  'pic17.jpg',
  'pic18.jpg',
  'pic19.jpg',
  'pic20.jpg',
  'pic21.jpg',
  'pic22.jpg',
  'pic23.jpg'
],[
  9.20,
  9.20,
  18.20,
  9.60,
  16.80,
  8.90,
  9.40,
  9.50,
  10.10,
  28.60,
  37.90,
  23.70,
  10.10,
  10.10,
  10.40,
  12.90,
  9.50,
  17.10,
  8.50,
  9.20,
  10.40,
  9,
  26.60,
  10.10
]
];

var imageset = new Array;
var parset = new Array;

var answerimage = new Array;
var answerparset = new Array;

var i = 0;
var j = 0;

var A01Image = document.getElementById('A01'); A01Image.src = imagesArrey[0][i];
var A02Image = document.getElementById('A02'); A02Image.src = imagesArrey[0][i+1];
var A03Image = document.getElementById('A03'); A03Image.src = imagesArrey[0][i+2];
var A04Image = document.getElementById('A04'); A04Image.src = imagesArrey[0][i+3];
var A05Image = document.getElementById('A05'); A05Image.src = imagesArrey[0][i+4];
var A06Image = document.getElementById('A06'); A06Image.src = imagesArrey[0][i+5];

var A01_2Image = document.getElementById('A01_2'); A01_2Image.src = "test.jpg";
var A02_2Image = document.getElementById('A02_2'); A02_2Image.src = "test.jpg";
var A03_2Image = document.getElementById('A03_2'); A03_2Image.src = "test.jpg";
var A04_2Image = document.getElementById('A04_2'); A04_2Image.src = "test.jpg";

A01_2Image.style.display ="none"; // スタイルで非表示
A02_2Image.style.display ="none";
A03_2Image.style.display ="none";
A04_2Image.style.display ="none";

// 画像をset(１回目のソート)
function setimages1(i) {
  A01Image.style.display ="inline"; 
  A02Image.style.display ="inline";
  A03Image.style.display ="inline";
  A04Image.style.display ="inline";
  A05Image.style.display ="inline";
  A06Image.style.display ="inline";
  
  A01Image.src = imagesArrey[0][i];
  A02Image.src = imagesArrey[0][i+1];
  A03Image.src = imagesArrey[0][i+2];
  A04Image.src = imagesArrey[0][i+3];
  A05Image.src = imagesArrey[0][i+4];
  A06Image.src = imagesArrey[0][i+5];
}
 // 画像をset(２回目のソート)
function setimages2(i) {
  A01_2Image.style.display ="inline"; // スタイルで非表示だったのを表示
  A02_2Image.style.display ="inline";
  A03_2Image.style.display ="inline";
  A04_2Image.style.display ="inline";

  A01_2Image.src = imageset[i];
  A02_2Image.src = imageset[i+6];
  A03_2Image.src = imageset[i+12];
  A04_2Image.src = imageset[i+18];
}

/* ---------- １回目のソート（6枚）---------- */

A01Image.addEventListener('click', () => {
  imageset.push(imagesArrey[0][i]);
  console.log(imageset);
  parset.push(imagesArrey[1][i]);
  console.log(parset);
  A01Image.style.display = "none";
  j++;
  
  if(j === 6){
    if(i === 18){
      i=0;
      j=0;
      alert('end');
      $("#div1").remove();
      setimages2(i);
     }else{
       i+=6;
       setimages1(i);
       j=0;
    }
  }
});

A02Image.addEventListener('click', () => {
imageset.push(imagesArrey[0][i+1]);
console.log(imageset);
parset.push(imagesArrey[1][i+1]);
console.log(parset);
j++;
A02Image.style.display = "none";

if(j === 6){
  if(i === 18){
    i=0;
    j=0;
    alert('end');
    $("#div1").remove();
    setimages2(i);
   }else{
     
     i+=6;
     setimages1(i);
     j=0;
  }
}
});

A03Image.addEventListener('click', () => {
imageset.push(imagesArrey[0][i+2]);
console.log(imageset);
parset.push(imagesArrey[1][i+2]);
console.log(parset);
j++;
A03Image.style.display = "none";

if(j === 6){
  if(i === 18){
    i=0;
    j=0;
    alert('end');
    $("#div1").remove();
    setimages2(i);
   }else{
     
     i+=6;
     setimages1(i);
     j=0;
  }
}
});

A04Image.addEventListener('click', () => {
imageset.push(imagesArrey[0][i+3]);
console.log(imageset);
parset.push(imagesArrey[1][i+3]);
console.log(parset);
j++;
A04Image.style.display = "none";

if(j === 6){
  if(i === 18){
    i=0;
    j=0;
    alert('end');
    $("#div1").remove();
    setimages2(i);
   }else{
     
     i+=6;
     setimages1(i);
     j=0;
  }
}
});

A05Image.addEventListener('click', () => {
imageset.push(imagesArrey[0][i+4]);
console.log(imageset);

parset.push(imagesArrey[1][i+4]);
console.log(parset);
j++;
A05Image.style.display = "none";

if(j === 6){
  if(i === 18){
    i=0;
    j=0;
    alert('end');
    $("#div1").remove();
    setimages2(i);
   }else{
     
     i+=6;
     setimages1(i);
     j=0;
  }
}
});

A06Image.addEventListener('click', () => {
imageset.push(imagesArrey[0][i+5]);
console.log(imageset);
parset.push(imagesArrey[1][i+5]);
console.log(parset);
j++;
A06Image.style.display = "none";

if(j === 6){
  if(i === 18){
    i=0;
    j=0;
    alert('end');
    $("#div1").remove();
    setimages2(i);
   }else{
     
     i+=6;
     setimages1(i);
     j=0;
  }
}
});

/* ---------- ２回目のソート（4枚）---------- */

A01_2Image.addEventListener('click', () => {
  answerimage.push(imageset[i]);
  console.log(answerimage);
  answerparset.push(parset[i]);
  console.log(answerparset);
  j++;
  A01_2Image.style.display ="none";
  
  if(j === 4){
    if(i === 5){
      alert('end');
      $("#div2").remove();
      answer();
    }else{
      
      i++;
      setimages2(i);
      j=0;
    }
  }
});

A02_2Image.addEventListener('click', () => {
  answerimage.push(imageset[i+6]);
  console.log(answerimage);
  answerparset.push(parset[i+6]);
  console.log(answerparset);
  j++;
  A02_2Image.style.display ="none";
  
  if(j === 4){
    if(i === 5){
      alert('end');
      $("#div2").remove();
      answer();
    }else{
      
      i++;
      setimages2(i);
      j=0;
      
    }
  }
});

A03_2Image.addEventListener('click', () => {
  answerimage.push(imageset[i+12]);
  console.log(answerimage);
  answerparset.push(parset[i+12]);
  console.log(answerparset);
  j++;
  A03_2Image.style.display ="none";
  
  if(j === 4){
    if(i === 5){
      alert('end');
      $("#div2").remove();
      answer();
    }else{
      
      i++;
      setimages2(i);
      j=0;
      
    }
  }
});

A04_2Image.addEventListener('click', () => {
  answerimage.push(imageset[i+18]);
  console.log(answerimage);
  answerparset.push(parset[i+18]);
  console.log(answerparset);
  j++;
  A04_2Image.style.display ="none";
  
  if(j === 4){
    if(i === 5){
      alert('end');
      $("#div2").remove();
      answer();
    }else{
      
      i++;
      setimages2(i);
      j=0;
      
    }
  }
});

/* ---------- 結果発表 ---------- */

function answer() {
  var verygood=0;
  var good=0;
  var hate=0;
  var veryhate=0;

  var AIanswer;
  var totalanswer;

  for(var i=0; i<6; i++){
    verygood += answerparset[i];    // [0]+[1]+[2]+[3]+[4]+[5]
    good += answerparset[i+6];      // [6]+[7]+[8]+[9]+[10]+[11]
    hate += answerparset[i+12];     // [12]+[13]+[14]+[15]+[16]+[17]
    veryhate += answerparset[i+18]; // [18]+[19]+[20]+[21]+[22]+[23]
  }
  const div3 = document.getElementById("div3");
	// 要素の追加
  const p1 = document.createElement("p");
	const text1 = document.createTextNode("いいね！率 :" + verygood/6 + "%");
	p1.appendChild(text1);
  div3.appendChild(p1);
  
  const p2 = document.createElement("p");
	const text2 = document.createTextNode("まぁまぁ率 :" + good/6 + "%");
	p2.appendChild(text2);
  div3.appendChild(p2);
  
  const p3 = document.createElement("p");
	const text3 = document.createTextNode("あんまり率 :" + hate/6 + "%");
	p3.appendChild(text3);
  div3.appendChild(p3);
  
  const p4 = document.createElement("p");
  const text4 = document.createTextNode("う～ん率 :" + veryhate/6 + "%");
	p4.appendChild(text4);
  div3.appendChild(p4);
  
  if(verygood >= good && verygood >= hate && verygood >= veryhate){
    AIanswer = "いいね！";
  }else if(good >= hate && good >= veryhate){
    AIanswer = "まぁまぁ";
  }else if(hate >= veryhate){
    AIanswer = "あんまり";
  }else{
    AIanswer = "う～ん";
  }

  const div4 = document.getElementById("div4");
	// 要素の追加
  const p5 = document.createElement("p");
	const text5 = document.createTextNode("AIの思うあなたの選んだ評価は" + AIanswer + "でした！");
	p5.appendChild(text5);
  div4.appendChild(p5);

  const p6 = document.createElement("p");
	const text6 = document.createTextNode("あなたの答えは" + useranswer + "でした！");
	p6.appendChild(text6);
  div4.appendChild(p6);

  if(AIanswer === useranswer){
    const p7 = document.createElement("p");
	  const text7 = document.createTextNode("結果は一致です！！！");
	  p7.appendChild(text7);
    div4.appendChild(p7);
  }else{
    const p8 = document.createElement("p");
	  const text8 = document.createTextNode("結果は一致しませんでした・・・");
	  p8.appendChild(text8);
    div4.appendChild(p8);
  }
}
