//	ES6

//寫在外面會影響到其他js >>> const Text = "test"


//即時函式
// (()=>{})() >>> 不會污染全域
(()=>{

	//步驟1. 區域宣告常數
	const $doc = document;//網頁整體html構成要素
	const $tab = $doc.getElementById('js-tab');//js用id 	// console.log('$tab',$tab);
	const $nav = $tab.querySelectorAll('[data-nav]')	// console.log('$nav',$nav);
	const $content = $tab.querySelectorAll('[data-content]') // console.log('$content',$content);

	//步驟2. 初始化 JavaScript最一開始想要執行的命令
	const init = ()=>{
		//content的內容0的CSS改成顯示
		$content[0].style.display = 'block';
	};
	//執行命令:呼叫函數
	init();

	//步驟3.按鈕按下去的時候會執行的event >>> 除了click以外也有很多屬性，所以要加入e參數
	const handleClick = (e) =>{
		e.preventDefault();//畫面不會重新渲染一次

		// console.log('e', e); //看event所有的情報
		// console.log('Clicked!');

		//步驟5.按下按鈕時候，nav和data要素取得
		const $this  = e.target;//target:哪一個被按到，就對應到該DOM要素 // console.log('$this', $this);
		const targetVal =	$this.dataset.nav;//dataset.属性:取得DOM要素的data屬性 //data-nav // console.log('targetVal', targetVal); //targetValue 

		//步驟7.對象外的nav，content內容先重新reset
		let index = 0;
		while (index < $nav.length){
			$content[index].style.display = 'none';//可以看檢查工具的Element變化 多了style="display:none"
			$nav[index].classList.remove('is-active');
			index ++;
		}

		//步驟6.按下按鈕時候，相對標籤的內容出現
		$tab.querySelectorAll('[data-content="' +targetVal+ '"]')[0].style.display = 'block';//CSS由none變block
		$nav[targetVal].classList.add('is-active');//class添加is-active文字列 // console.log('$nav[targetVal].classList', $nav[targetVal].classList);

};

	//步驟3.先做第一個按鈕
	// $nav[0].addEventListener('click', (e)=> handleClick(e));

	//步驟4.迴圈設定全部nav要素觸發event
	let index = 0;
	while(index<$nav.length){
		$nav[index].addEventListener('click', (e)=> handleClick(e));

		index++;
	}

	
})();

//解說[$]：變數名前面加[$]代表為DOM要素

//解說[data-nav屬性]：  用data-●● 可以賦予任意的data屬性
//使用: 想要用JavaScript操作DOM （html文件），但是不想要使用id跟class

//解說[querySelector]： 查詢符合條件的DOM要素
//解說[(e)參數]: 點擊的時候，取得Event事件自己的物件
//解說[e.preventDefault()]: 讓a連結的 anchor link要素無效化，不會連結到其他頁面

//解說 [dataset]：dataset.屬性，取得DOM要素的data屬性的值
//解說 [classList]：一覽DOM要素的class屬性 classList.add / classList.move
//解說 [style]: style.屬性， 取得css樣式屬性