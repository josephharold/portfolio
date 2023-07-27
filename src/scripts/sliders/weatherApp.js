import Glide from '@glidejs/glide';
import img1 from '../../assets/weatherApp/weatherApp.png';
import img2 from '../../assets/weatherApp/weatherApp(1).png';
import img3 from '../../assets/weatherApp/weatherApp(2).png';


const weatherApp = ()=>{
	console.log('triggered');

	const slider = new Glide('#weatherApp',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
	});

	slider.mount();
	document.getElementById('weatherAppImg1').src = img1;
	document.getElementById('weatherAppImg2').src = img2;
	document.getElementById('weatherAppImg3').src = img3;
}

export default weatherApp;
