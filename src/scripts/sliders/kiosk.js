import Glide from '@glidejs/glide';
import img1 from '../../assets/kiosk/kiosk.png';
import img2 from '../../assets/kiosk/kiosk (2).png';
import img3 from '../../assets/kiosk/kiosk (3).png';
import img4 from '../../assets/kiosk/kiosk (4).png';
import img5 from '../../assets/kiosk/kiosk (5).png';
import img6 from '../../assets/kiosk/kiosk (6).png';



const kiosk = ()=>{

	const slider = new Glide('#kiosk',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
	});

	slider.mount();
	document.getElementById('kioskImg1').src = img1;
	document.getElementById('kioskImg2').src = img2;
	document.getElementById('kioskImg3').src = img3;
	document.getElementById('kioskImg4').src = img4;
	document.getElementById('kioskImg5').src = img5;
	document.getElementById('kioskImg6').src = img6;
}

export default kiosk;
