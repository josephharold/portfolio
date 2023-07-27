import Glide from '@glidejs/glide';
import img1 from '../../assets/typingGame/typingGame_light.png';
import img2 from '../../assets/typingGame/typingGame.png';


const typingGame = ()=>{
	console.log('triggered');

	const slider = new Glide('#typingGame',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
	});

	slider.mount();
	document.getElementById('typingGameImg').src = img1;
	document.getElementById('typingGameImg1').src = img2;
}

export default typingGame;
