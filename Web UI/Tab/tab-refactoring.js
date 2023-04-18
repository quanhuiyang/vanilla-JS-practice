//	重構 refactoring

(()=>{

	const $doc = document;
	const $tab = $doc.getElementById('js-tab');
	const $nav = $tab.querySelectorAll('[data-nav]')	
	const $content = $tab.querySelectorAll('[data-content]') 
	//步驟一 分散出現的class命名：更改變數名稱的時候改一個地方就好了
	const ACTIVE_CLASS = 'is-active' //全部大寫的話，代表是常數
	//步驟二 縮短程式碼，常出現一樣的變數名可以縮短名稱
	const navLen = $nav.length;

	const init = ()=>{
		$content[0].style.display = 'block';
	};

	init();

	const handleClick = (e) =>{
		e.preventDefault();

		const $this  = e.target;
		const targetVal =	$this.dataset.nav;

		let index = 0;
		while (index < navLen){
			$content[index].style.display = 'none';
			$nav[index].classList.remove(ACTIVE_CLASS);

			index ++;
		}

		$tab.querySelectorAll('[data-content="' +targetVal+ '"]')[0].style.display = 'block';
		$nav[targetVal].classList.add(ACTIVE_CLASS);

	};

	// $nav[0].addEventListener('click', (e)=> handleClick(e));

	let index = 0;
	while(index < navLen){
		$nav[index].addEventListener('click', (e)=> handleClick(e));

		index++;
	}

	
})();
