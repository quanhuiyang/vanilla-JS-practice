//步驟零 #問題#答案#正確答案
const question = '遊戲市場中，銷量最好的遊戲機是下列何者？';//問題一個

const answers =	[
	'超級任天堂',
	'playstation2',
	'任天堂switch',
	'任天堂DS'
];//答案多個選項，用陣列

const correct = '任天堂DS';

//步驟一 #問題
// document.getElementById('js-question').textContent//取得文字情報
// document.getElementById('js-question').textContent = 'Question';//覆蓋文字值
document.getElementById('js-question').textContent = question;//覆蓋變數

//步驟二 #答案
// document.getElementsByTagName('div')
// console.log(document.getElementById('js-question'));

// const button = document.getElementsByTagName('button');
//常數的文字列反映到HTML
//變數button加上$表示是HTML的物件
const $button = document.getElementsByTagName('button');


//步驟三 #答案選項
// document.getElementsByTagName('button')[0].textContent = answers[0];//覆蓋陣列的第一個答案
// document.getElementsByTagName('button')[1].textContent = answers[1];//覆蓋陣列的第二個答案
// document.getElementsByTagName('button')[2].textContent = answers[2]; //覆蓋陣列的第三個答案
// document.getElementsByTagName('button')[3].textContent = answers[3];//覆蓋陣列的第四個答案

$button[0].textContent = answers[0];//覆蓋陣列的第一個答案
$button[1].textContent = answers[1];//覆蓋陣列的第二個答案
$button[2].textContent = answers[2]; //覆蓋陣列的第三個答案
$button[3].textContent = answers[3];//覆蓋陣列的第四個答案



//步驟四 #正確答案
//按下按鈕，判斷正確與否
$button[0].addEventListener('click',() => {
	if(correct === $button[0].textContent){
	window.alert('正確！');
	}else{
	window.alert('錯誤！')
	}
});

$button[1].addEventListener('click',() => {
	if(correct === $button[1].textContent){
	window.alert('正確！');
	}else{
	window.alert('錯誤！')
	}
});

$button[2].addEventListener('click',() => {
	if(correct === $button[2].textContent){
	window.alert('正確！');
	}else{
	window.alert('錯誤！')
	}
});


$button[3].addEventListener('click',() => {
	if(correct === $button[3].textContent){
	window.alert('正確！');
	}else{
	window.alert('錯誤！')
	}
});


//refactoring リファタリング重構 
//參考比對app.js
