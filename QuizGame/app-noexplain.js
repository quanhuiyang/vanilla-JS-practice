
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

const quizLength = quiz.length;

let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = ()=>{

	let buttonIndex = 0;
	while (buttonIndex < buttonLength){

		document.getElementById('js-question').textContent = quiz[quizIndex].question;
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];

		buttonIndex++;
	}
}
setupQuiz();



const clickHandler = (e) => {

		if(quiz[quizIndex].correct === e.target.textContent){
			window.alert('正確！');
			score++;
			}else{
			window.alert('錯誤！');
		}

		quizIndex++;

		if(quizIndex < quizLength){
			setupQuiz();

		}else{
			window.alert('您已完成測驗。答對題數為' + score +'/' + quizLength +'。');
		}
}

let handlerIndex = 0
while ( handlerIndex < buttonLength ) {

	$button[handlerIndex].addEventListener('click',(e) => {
		clickHandler(e);
	});
	
	handlerIndex++;
}



