(()=>{

	const $elm = document.querySelector('#js-accordion');
	// console.log('$elm',$elm);//抓div id="js-accordion底下全部元素"
	const $trigger =  $elm.getElementsByTagName('a');
	// console.log('$trigger', $trigger);//抓 a 裡面的 class="accordion-trigger"

	$trigger[0].addEventListener('click', (e)=> clickHandler(e));//針對"accordion-trigger"的第一個a 建立事件處理器，可觸發點擊事件。也就是點擊後，呼叫clickHandler()
	
	//點擊後執行的處理
	const clickHandler = (e)=>{
		e.preventDefault();//呼叫取消事件，但不會影響事件的傳遞，事件仍會繼續傳遞。（即取消事件的預設行為：例如a會傳送link重新渲染頁面）。
		// console.log('click!');

		const $content = $trigger[0].nextElementSibling;//<a></a> class="accordion-trigger"的下一個鄰居要素 <div></div>
		if($content.style.display === 'block'){
			$content.style.display = 'none'
		}else{
			$content.style.display = 'block'
		}
	};
	})();