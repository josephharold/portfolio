import Glide from '@glidejs/glide'

const typingGame = new Glide('#typingGame',{
	autoplay: 2500,
	hoverpause: false,
	gap: 20,
	animationDuration: 1000,
});
const cardMemoryGame = new Glide('#cardMemoryGame',{
	autoplay: 2500,
	hoverpause: false,
	gap: 20,
	animationDuration: 1000,
});
const todoList =  new Glide('#todoList',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
	});
const weatherApp = new Glide('#weatherApp',{
		autoplay: 2500,
		hoverpause: false,
		gap: 20,
		animationDuration: 1000,
});

export {
	typingGame,
	cardMemoryGame,
	todoList,
	weatherApp
}