//#問題改成三個
//陣列裡面可以放物件[{},{},{}]

//步驟零 #測驗 >>> #問題#答案選項#正確答案
const quiz = [
	{
		question: 'Q1:貓的口腔保健應該如何進行？',
		answers:[
			'每周刷牙',
			'每天刷牙',
			'定期檢查牙齒',
			'不需要進行口腔保健'
		],
		correct :'定期檢查牙齒'
	},
	{
		question: 'Q2:貓每天應該喝多少水？',
		answers:[
			'一杯',
			'兩杯',
			'三杯',
			'取決於貓的體重與活動量'
		],
		correct :'取決於貓的體重與活動量'
	},
	{
		question: 'Q3:貓應該每天吃多少食物？',
		answers:[
			'固定量，不需要根據貓的體重和活動量調整',
			'取決於貓的體重與活動量',
			'只要貓想吃就可以隨便吃',
			'取決於貓的品種'
		],
		correct :'取決於貓的體重與活動量'
	}

]

const quizLength = quiz.length;//以下while迴圈用
let quizIndex = 0;
//增加：答對數
let score = 0;


//步驟二 #答案選項
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;//以下while迴圈用

//步驟三 #答案選項
const setupQuiz = ()=>{

	let buttonIndex = 0;

	while (buttonIndex < buttonLength){

		//步驟一 #問題
		// document.getElementById('js-question').textContent = question;//覆蓋變數
		document.getElementById('js-question').textContent = quiz[quizIndex].question;//quiz陣列中的問題


		// $button[buttonIndex].textContent = answers[buttonIndex];
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
		buttonIndex++;
	}
}
setupQuiz();//呼叫


//步驟四 #正確答案 
const clickHandler = (e) => {
	// if( correct === e.target.textContent ){
	// 	window.alert('正確！');
	// 	}else{
	// 	window.alert('錯誤！')
	// 	}

		if(quiz[quizIndex].correct === e.target.textContent){
			window.alert('正確！');
			score++;
			}else{
			window.alert('錯誤！');
		}

		//增加：選出正確答案後，換成下一個測驗
		quizIndex++;

		//現在是第幾個測驗題，總共幾個測驗題
		if(quizIndex < quizLength){
			//還有測驗題的話執行
			setupQuiz();

		}else{
			//已經沒有測驗題的話執行
			window.alert('您已完成測驗。答對題數為' +score +'/' +quizLength +'。');
		}
}

let handlerIndex = 0
while ( handlerIndex < buttonLength ) {

	$button[handlerIndex].addEventListener('click',(e) => {
		clickHandler(e);
	});
	
	handlerIndex++;
}

//步驟零 #問題#答案選項#正確答案
// const question = '遊戲市場中，銷量最好的遊戲機是下列何者？';//問題一個
// const answers =	[
// 	'超級任天堂',
// 	'playstation2',
// 	'任天堂switch',
// 	'任天堂DS'
// ];//答案多個選項，用陣列
// const correct = '任天堂DS';

