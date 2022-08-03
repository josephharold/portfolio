const navUl = document.getElementById('navUl');
// navigation icons
const dropDownButton = document.getElementById('dropDownButton');
const backToTopButton = document.getElementById('backToTopButton');
// navigation list item buttons
const aboutMeNav = document.getElementsByClassName('aboutMeNav');
const projectsNav = document.getElementsByClassName('projectsNav');
const servicesNav = document.getElementsByClassName('servicesNav');
const contactsNav = document.getElementsByClassName('contactsNav');
// views
const aboutMe = document.getElementById('aboutMe');
const projects = document.getElementById('projects');
const services = document.getElementById('services');
const contacts = document.getElementById('contacts');
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

const scrollToSection = (id)=>{
	document.getElementById(id).scrollIntoView({behavior:"smooth", block:"start"});
	toggleNavUl();
}
dropDownButton.addEventListener('click', ()=>toggleNavUl());
window.addEventListener('click', (e)=>closeNavUl(e));
backToTopButton.addEventListener('click',()=>{backToTop()});
// list item buttons onScroll event

for(let i=0; i<2; i++){
	projectsNav[i].addEventListener('click',()=>{scrollToSection('projects')});
	aboutMeNav[i].addEventListener('click',()=>{scrollToSection('aboutMe')});
	contactsNav[i].addEventListener('click',()=>{scrollToSection('contacts')});
	servicesNav[i].addEventListener('click',()=>{scrollToSection('services')});
}
