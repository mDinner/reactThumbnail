var React = require('react');
var ThumbnailList = require('./thumbnail-list');
	
	var options = {
		thumbnailData: [{
			title : 'See tutorials',
			number: 32,
			header: 'Learn React',
			description: 'React is an awesome library. I hope it doesn\'t piss me off like Angular',
			imageURL: 'http://formatjs.io/img/react.svg'
		},{
			title : 'See tutorials',
			number: 25,
			header: 'Learn Gulp',
			description: 'Gulp will help your pages render faster',
			imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
		}]
	};

	
	// ask react to render class
	var element = React.createElement(ThumbnailList, options);
	
	// when we ask react to render we will tell where to render element in the dom
	React.render(element, document.querySelector('.container'));