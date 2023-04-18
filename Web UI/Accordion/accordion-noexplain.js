//類別class & 實例instance

(()=>{
	
	class Accordion {

		constructor(obj){
			// console.log('aoj', obj); //{hookName: '#js-faq', tagName: 'p'}
			// console.log('obj.hookName:', obj.hookName); 
			const $elm = document.querySelector(obj.hookName);
			const $trigger =  $elm.getElementsByTagName(obj.tagName);	
			// console.log('obj.tagName:',obj.tagName);
		
			const triggerLen = $trigger.length;
			let index = 0;
			while(index < triggerLen){
				$trigger[index].addEventListener('click', (e)=> this.clickHandler(e)
					);
				index++;
			};
		};


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

	const  questionAccordion = new Accordion({
		hookName: '#js-faq',
		tagName:'p'
	});

	const  testAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName:'a'
	});

	const  miniAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName:'dt'
	});

})();