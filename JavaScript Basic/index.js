//1.變數
let unko = 'Hello World!';

// unko = 'Hello World!!2';
console.log(unko);

//2.常數（定數）
const bigUnko ='Hello Hello';

// bigUnko ='Hello Hello2'; //Uncaught TypeError: Assignment to constant variable.
console.log(bigUnko);

//3.陣列（配列）

let run = ['one','two','three','go!']

// console.log(run); //(4) ['one', 'two', 'three', 'go!']

// console.log(run[4]); //undefined 叫出第n+1個 從零開始算

console.log(run[3]); //要叫出第四個，要n-1 //go!
console.log(run[0]);//one

//4.迴圈 （ループ文）
let index = 0;
while(index < 5){
  //想要重複的命令 
  console.log(index);
  index++;
}
//0 1 2 3 4 


//5.陣列 + 迴圈  配列＋ループ文
let index2 = 0;

while (index2 < run.length){//run.length = 4 
  console.log(index2);
  index2++;
}
// 0 1 2 3 

let index3= 0;

while (index3 < run.length){//run.length = 4 
  console.log(run[index3]);//run[0-3] 
  index3++;
}

//one two three go!

//6. if else分 條件命令
if(run.length>3){
  console.log('Goal-!');
} else {
  console.log('Go...');
}

if(run.length>5){
  console.log('Goal-!');
} else {
  console.log('Go...');
}

//7. 函數 関数 (一個函數表示每個輸入值對應唯一輸出值)

//箭頭函數 アロー関数
const text = () => {
  //実行したい命令
  if(run.length=4){
    console.log('GoGoGo');
  } else {
    console.log('Go...');
  }
}

// const text2 = function(){
//     //実行したい命令
//     if(run.length=4){
//       console.log('GoGoGo');
//     } else {
//       console.log('Go...');
//     }
// } 

text();//可以任意時刻呼叫，也能呼叫多次 

//8.引数
//同じ命令を一部だけ変えて使い回したい時に引数が有効   把數字改成參數可帶入不同參數執行

const text3 = (arg) => {
  //実行したい命令
  if(run.length > arg){
    console.log('Good');
  } else {
    console.log('Bad');
  }
}

text3(0);
text3(5);

//9.物件 オブジェクト
//たくさん情報を持てる 存有很多屬性跟值
const ob = {
  color:'pink',
  size:'small',
  purfume:'rose'
};

console.log(ob);
// {color: 'pink', size: 'small', purfume: 'rose'}
// [[Prototype]]:Object

//どのプロパッティを参照するのか 參照哪個屬性值
console.log(ob.color);
console.log(ob.size);
console.log(ob.purfume);

//10.物件 オブジェクト+ 関数

const ob2 = {
  color:'white',
  size:'big',
  purfume:'mint',
  canBuy: ()=>{
    console.log('a flower');
  }
};

console.log(ob2);
console.log(ob2.canBuy);

console.log(ob2.canBuy());
//a flower// undefined

//11.特殊物件 JavaScript 預設 

//①window物件 網站全體的物件，可以從瀏覽器端拿的屬性值
console.log(window);
console.log(window.innerHeight);//拿高度 712
console.log(window.innerWidth);//拿高度 940

// window.alert('Try Window alert');


//②document物件 //瀏覽器顯示的網頁整體的物件
console.log(document);

console.log(
  document.getElementsByTagName('button')
  );
  //HTMLCollection(4)

  // console.log(
  //   document.getElementsByTagName('button')[0]
  //   );

  //３Event物件
  document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
    //命令を書く
    window.alert('Hi')
  });