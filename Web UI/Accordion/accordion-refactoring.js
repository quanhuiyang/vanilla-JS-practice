//重構 refactoring

(()=>{

	const $elm = document.querySelector('#js-accordion');
	const $trigger =  $elm.getElementsByTagName('a');

	const triggerLen = $trigger.length;
	let index = 0;
	while(index < triggerLen){
		$trigger[index].addEventListener(
			'click', (e)=> clickHandler(e)
			);
		index++;
	}
	
	//點擊後執行的處理
	const clickHandler = (e)=>{
		e.preventDefault();

		//點擊到的按鈕 currentTarget
		const $target = e.currentTarget;// console.log($target);
		const $content = $target.nextElementSibling;

		//只有第一個按鈕
		// const $content = $trigger[0].nextElementSibling;
		if($content.style.display === 'block'){
			$content.style.display = 'none'
		}else{
			$content.style.display = 'block'
		}
	};
	})();