import Glide from '@glidejs/glide';
import img1 from '../../assets/clubConnect/clubConnect.png';
import img2 from '../../assets/clubConnect/clubConnect (2).png';
import img3 from '../../assets/clubConnect/clubConnect (3).png';
import img4 from '../../assets/clubConnect/clubConnect (4).png';


const clubConnect = ()=>{
	console.log('triggered');

	const slider = new Glide('#clubConnect',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
	});

	slider.mount();
	document.getElementById('clubConnectImg1').src = img1;
	document.getElementById('clubConnectImg2').src = img2;
	document.getElementById('clubConnectImg3').src = img3;
	document.getElementById('clubConnectImg4').src = img4;
}

export default clubConnect;
