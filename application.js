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
	ReactDOM.render(element, document.querySelector('.container'));
	var Badge = React.createClass({displayName: "Badge",
		render: function() {
			return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
			   this.props.title, " ", React.createElement("span", {className: "badge"},  this.props.number)
			)

		}
	});


	var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render: function(){
			var list = this.props.thumbnailData.map(function(thumbnailProps){
				return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
			});

			return React.createElement("div", null, 
			list
			)
		}
	});
	var Thumbnail = React.createClass({displayName: "Thumbnail",
		render: function(){
			return React.createElement("div", {className: "thumbnail col-sm-6 col-md-4"}, 
				      React.createElement("img", {src: this.props.imageURL}), 
				      React.createElement("div", {className: "caption"}, 
				        React.createElement("h3", null, this.props.header), 
				        React.createElement("p", null, this.props.description), 
				        React.createElement("p", null, 
				        React.createElement(Badge, {title: this.props.title, number: this.props.number})
				        )
				      )
				    )
		}
	});

