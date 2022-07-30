const navUl = document.getElementById('navUl');
const dropDownButton = document.getElementById('dropDownButton');

const toggleNavUl = ()=>{
	navUl.classList.toggle('h-0');
}




dropDownButton.addEventListener('click', ()=>toggleNavUl());


