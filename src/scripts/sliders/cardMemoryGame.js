import Glide from '@glidejs/glide';
import img1 from '../../assets/cardMemoryGame/cardMemory.png';
import img2 from '../../assets/cardMemoryGame/cardMemory(1).png';
import img3 from '../../assets/cardMemoryGame/cardMemory(2).png';
import img4 from '../../assets/cardMemoryGame/cardMemory(3).png';
// import img4 from '../../assets/cardMemoryGame/cardMemoryGame (4).png';


const cardMemoryGame = ()=>{
	console.log('triggered');

	const slider = new Glide('#cardMemoryGame',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
	});

	slider.mount();
	document.getElementById('cardMemoryGameImg1').src = img1;
	document.getElementById('cardMemoryGameImg2').src = img2;
	document.getElementById('cardMemoryGameImg3').src = img3;
	document.getElementById('cardMemoryGameImg4').src = img4;
}

export default cardMemoryGame;
