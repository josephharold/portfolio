import Glide from '@glidejs/glide';
import img1 from '../../assets/todoList/todoList.png';
import img2 from '../../assets/todoList/todoList(1).png';
import img3 from '../../assets/todoList/todoList(2).png';
import img4 from '../../assets/todoList/todoList(3).png';



const todoList = ()=>{

	const slider = new Glide('#todoList',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
	});

	slider.mount();
	document.getElementById('todoListImg1').src = img1;
	document.getElementById('todoListImg2').src = img2;
	document.getElementById('todoListImg3').src = img3;
	document.getElementById('todoListImg4').src = img4;
}

export default todoList;
