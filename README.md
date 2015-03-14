# angular-tinyCarousel

AngularJS TinyCarousel is a really simple carousel for web apps, written in Angular best approaches way. 
The idea of the module originally came from jQuery tinyCarousel plugin implementation, which is really cool, 
although can't be used in Angular projects due to different concepts confrontation between jQuery and Angular. 
This module built with idea of reducing DOM manipulation through jQuery and using Angular declarative coding approach instead.

## Demo

The demo is available [here](http://yborunov.github.io/angular-tinyCarousel/repo/demo/).

Also you can clone the repo and run the `demo/index.html` file.

## Installing

### Regular way

1. Clone or download the repository to your local machine.

2. Add style file

	+ Find and copy `tinyCarousel.min.css` into your styles folder.
	+ Add following code in your html page:

	```
		<link rel="stylesheet" type="text/css" href="<Path to style folder>/tinyCarousel.min.css" />
	```

	+ Replace `<Path to style folder>` with your real style folder path

3. Add Angular and JQuery libraries

	_(for instance from CDN)_

	At the bottom of the html page add following:

	```
		<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
	```

4. Add angular-tinyCarousel module JS file 

	+ Find and copy `tinyCarousel.js` into your scripts folder.
	+ Add following code at the bottom of your html page (after Angular and jQuery):

	```
		<script src="<Path to scripts folder>/tinyCarousel.js"></script>
	```

	+ Replace `<Path to scripts folder>` with your real scripts folder path


5. Create Angular Controller

	You can use following code after all libraries to create controller:

	```
	<script>
	(function () {
	    'use strict';

	    angular.module('app', ['tinyCarousel'])
	        .controller('mainCtrl', ['$scope', function ($scope) {
			
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
		}]);
	}());
	</script>
	```

6. HTML code for adding angular-tinyCarousel

	```
		<div ng-controller="mainCtrl">
			<div class="tinycarousel" tiny-carousel="Carousel"></div>
		</div>
	```


### Installing via Bower

```
bower install angular-tinycarousel
```

Then you can find `tinyCarousel.js` and `tinyCarousel.min.css` in your bower's components directory.

Link those files to your html page and create controller and DIV-element with `tiny-carousel` directive inside that controller.

You can follow the process described above, if you have any concerns.

## Author and support

Angular tinyCarousel module created by Yuri Borunov <yuri@borunov.com>

If you have any troubles using this module, just let me know through [Issues](https://github.com/yborunov/angular-tinyCarousel/issues) and I'll do my best to fix the problem as soon as possible.
