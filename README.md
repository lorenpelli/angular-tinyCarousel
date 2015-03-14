# angular-tinyCarousel

AngularJS TinyCarousel is a really simple carousel for web apps, written in Angular best approaches way. 
The idea of the module originally came from jQuery tinyCarousel plugin implementation, which is really cool, 
although can't be used in Angular projects due to different concepts confrontation between jQuery and Angular. 
This module built with idea of reducing DOM manipulation through jQuery and using Angular declarative coding approach instead.

## Demo

You can see the demo [here](http://yborunov.github.io/angular-tinyCarousel/repo/demo/).

Or clone the repo and run the demo/index.html file.

### Example of html element

```
<div class="tinycarousel" tiny-carousel="Carousel" tiny-carousel-interval="true"></div>
```

### Configuring in Controller

```
	$scope.items = [
	    'picture1.jpg',
	    'picture2.jpg',
	    'picture3.jpg',
	];

	$scope.tinyCarousels = {

	    'Carousel': {
	        items: 'items',
	        template: '<img ng-src="images/{{item}}">'
	    }
	}
```

## Installing

### Installing via Bower

```
bower install angular-tinycarousel
```

Then you just need to link `tinyCarousel.js` and `tinyCarousel.min.css` files to your project.
