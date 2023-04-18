//refactoring リファタリング重構 

//步驟零 #問題#答案選項#正確答案
const question = '遊戲市場中，銷量最好的遊戲機是下列何者？';//問題一個

const answers =	[
	'超級任天堂',
	'playstation2',
	'任天堂switch',
	'任天堂DS'
];//答案多個選項，用陣列

const correct = '任天堂DS';

//步驟一 #問題
document.getElementById('js-question').textContent = question;//覆蓋變數

//步驟二 #答案選項
//常數的文字列反映到HTML
//變數button加上$表示是HTML的物件
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;//以下while迴圈用

//步驟三 #答案選項
// Quiz的答案選項定義
const setupQuiz = ()=>{
//refactoring リファタリング重構 
//$button.length=4 所以迴圈會執行四次
let buttonIndex = 0;
// let buttonLength = $button.length;

while (buttonIndex < buttonLength){

	$button[buttonIndex].textContent = answers[buttonIndex];

	buttonIndex++;
}
}
setupQuiz();//呼叫



//步驟四 #正確答案

// if correct重複四次 可以用函式
const clickHandler = (e)=>{
	// $button[0].textContent換成e.target.textContent
	// e是什麼？ >>>event的物件
	// console.log(e);//可以看到 target: button.btn.btn-primary
	// 所以可以不用寫button，寫成e.target也能抓到button
	if(correct === e.target.textContent){
		window.alert('正確！');
		}else{
		window.alert('錯誤！')
		}
}

// button[]重複四次 可以用迴圈
let handlerIndex = 0
// const buttonLength = $button.length;

while (handlerIndex < buttonLength){

	$button[handlerIndex].addEventListener('click',(e) => {
		clickHandler(e);
	});
	
	handlerIndex++;
}

//按下按鈕，判斷正確與否
// $button[0].addEventListener('click',(e) => {
// 	// if(correct === e.target.textContent){
// 	// 	window.alert('正確！');
// 	// 	}else{
// 	// 	window.alert('錯誤！')
// 	// 	}
// 	clickHandler(e);
// });

// $button[1].addEventListener('click',(e) => {
	
// 	clickHandler(e);
// });

// $button[2].addEventListener('click',(e) => {

// 	clickHandler(e);
// });


// $button[3].addEventListener('click',(e) => {

// 	clickHandler(e);
// });


