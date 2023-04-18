//class & instance 
//目前的寫法，如果id js-accordion名稱更改，或者 a標籤更改非a標籤，現在的JS querySelector getElementsByTagName就不能動了

(()=>{
	
	//步驟一 ： 類別class 寫法 
	class Accordion {

		//constructor初期化（初始狀態，最一開始想執行的命令)
		//步驟四：constructor()加入任意參數，如obj
		constructor(obj){
			//步驟四：讀取出步驟三的key
			// console.log('aoj', obj); //{hookName: '#js-faq', tagName: 'p'}
			// console.log('obj.hookName:', obj.hookName); 
			const $elm = document.querySelector(obj.hookName);// const $elm = document.querySelector('#js-accordion');
			const $trigger =  $elm.getElementsByTagName(obj.tagName);	// const $trigger =  $elm.getElementsByTagName('a');
			// console.log('obj.tagName:',obj.tagName);
		
			const triggerLen = $trigger.length;
			let index = 0;
			while(index < triggerLen){
				//步驟五：clickHandler 為什麼undefined？ 因為讀取class的名稱要用 this >>> this.clickHandler(e)
				//this: class的類別參照 >>>這裡指的是參照 class Accordion 
				$trigger[index].addEventListener('click', (e)=> this.clickHandler(e)
					);
				index++;
			};

			//延伸應用--步驟六: 在class類別中想要呼叫函式的話，用this
			// this.actionHello();
		};

		//延伸應用--步驟六: 在class類別中想要呼叫函式的話，用this
		// actionHello(){
		// 	console.log('Hello World!');
		// };

		//步驟一 ： 點擊執行的處理，改成跟constructor一樣的寫法
		//步驟五： this.clickHandler 表示參照的是 class Accordion的clickHandler
		clickHandler(e){
			e.preventDefault();

			const $target = e.currentTarget;
			const $content = $target.nextElementSibling;
	
			if($content.style.display === 'block'){
				$content.style.display = 'none'
			}else{
				$content.style.display = 'block'
			}
		};
	}

	//步驟二 ： 使用類別class生成instance，一定要指定變數！
  // const  questionAccordion = new Accordion();

	//步驟三 ： 如果要更改標籤或id，要使用 Key
	const  questionAccordion = new Accordion({
		hookName: '#js-faq',
		tagName:'p'
	});


	//延伸應用--步驟七：
	const  testAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName:'a'
	});

	const  miniAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName:'dt'
	});


})();