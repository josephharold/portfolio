import Glide from '@glidejs/glide';
import img1 from '../../assets/iitrace/iitrace.png';
import img2 from '../../assets/iitrace/iitrace (2).png';
import img3 from '../../assets/iitrace/iitrace (4).png';
import img4 from '../../assets/iitrace/iitrace (6).png';


const iitrace = ()=>{

	const slider = new Glide('#iitrace',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
	});

	slider.mount();
	document.getElementById('iitraceImg1').src = img1;
	document.getElementById('iitraceImg2').src = img2;
	document.getElementById('iitraceImg3').src = img3;
	document.getElementById('iitraceImg4').src = img4;
}

export default iitrace;
