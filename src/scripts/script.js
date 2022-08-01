const navUl = document.getElementById('navUl');
const dropDownButton = document.getElementById('dropDownButton');
const backToTopButton = document.getElementById('backToTopButton');
const toggleNavUl = ()=>{
	navUl.classList.toggle('dropdown-active');
	console.log('asdfasd');
}

const closeNavUl = (e)=>{
	const isOutsideNavUl  = !navUl.contains(e.target);
	const isOutsideDropDownButt = !dropDownButton.contains(e.target);
	if(isOutsideDropDownButt && isOutsideNavUl){
		navUl.classList.remove('dropdown-active');
	}
}

const backToTop = ()=>{
	window.scrollTo({top: 0, behavior: "smooth"});
}


dropDownButton.addEventListener('click', ()=>toggleNavUl());
window.addEventListener('click', (e)=>closeNavUl(e));
backToTopButton.addEventListener('click',()=>{backToTop()});
