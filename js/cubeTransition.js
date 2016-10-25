(function($) {

	var length = $('#cubeTransition>div').length,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;
	


		var bullet = $("<li class='active'><span>About</span></li><li><span>project</span></li><li><span>Experience</span></li><li><span>skill</span></li><li><span>info</span></li>");
		$("#bullets").append(bullet);


	function openIndex(i) {
		if (!onGoing && next != i) {
			onGoing = true;
			next = i
			outClass = current > i ? 'rotateCubeBottomOut top' : 'rotateCubeTopOut top'
			inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
			show()
		}
	}

	function trans(direction) {
		if (!onGoing) {
			onGoing = true;
			if (direction == 'up') {
				next = current > 1 ? current - 1 : length;
				outClass = 'rotateCubeBottomOut top';
				inClass = 'rotateCubeBottomIn';
			} else {
				next = current < length ? current + 1 : 1;
				outClass = 'rotateCubeTopOut top';
				inClass = 'rotateCubeTopIn';
			}
			show();
		}
	}

	function show() {
		$('#cubeTransition>div:eq(' + (current - 1) + ')').addClass(outClass);
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass(inClass);
		$('#bullets>li:eq(' + (current - 1) + ')').removeClass('active');
		$('#bullets>li:eq(' + (next - 1) + ')').addClass('active');
		$('#cubeTransition>div:eq(' + (next - 1) + ')').show();
		animationOut(current-1)
		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').hide();
		}, 500)

		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
			$('#cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
			animationIn(next-1)
			current = next;
			onGoing = false;
		}, 800)
	}
	
	
	
	
function animationIn(i){
switch(i) {
    case 1:
        $('.page2 h2').fadeIn();
        break;
    case 2:
        $('#experience-one').fadeIn(1000,function(){$('#experience-two').fadeIn(1000,function(){$('#experience-three').fadeIn(1000)})});
        break;
	case 3:
		$('#my-skill .javascript-bar').css('width','40rem');
		$('#my-skill .html-bar').css('width','40rem');
		$('#my-skill .css-bar').css('width','40rem');
		$('#my-skill .font-bar').css('width','25rem');
		$('#my-skill .color-bar').css('width','30rem');
		$('#my-skill .image-bar').css('width','32rem');
		$('#my-skill .animation-bar').css('width','30rem');
		$('#my-skill .layout-bar').css('width','40rem');
        break;
		case 4:
		
        break;
		default:;
}
}

function animationOut(i){
switch(i) {
    case 1:
        $('.page2 h2').fadeOut();
        break;
    case 2:
        $('#experience-one,#experience-two,#experience-three').fadeOut()
        break;
	case 3:
        $('#my-skill .javascript-bar').css('width','20rem')
		$('#my-skill .html-bar').css('width','20rem')
		$('#my-skill .css-bar').css('width','20rem')
		$('#my-skill .font-bar').css('width','20rem')
		$('#my-skill .color-bar').css('width','20rem')
		$('#my-skill .image-bar').css('width','20rem')
		$('#my-skill .animation-bar').css('width','20rem')
		$('#my-skill .layout-bar').css('width','20rem')
        break;
	case 4:
		
        break;
    default:
        ;
}
}
	
	
	
	$(document).ready(

	function() {
		$(document).mousewheel(function(e, delta) {
			e.preventDefault();
			if (delta < 0) {
				trans('down')
			} else {
				trans('up')
			}
		});
		$(document).keydown(function(e) {
			if (e.keyCode == 38 || e && e.keyCode == 37) {
				trans('up')
			}
			if (e.keyCode == 39 || e && e.keyCode == 40) {
				trans('down')
			}

		});

		$(document).swipe({
			swipe: function(event, direction, distance, duration, fingerCount) {
				if (direction == "up") {
					trans('down')
				} else if (direction == "down") {
					trans('up')
				}
			}
		});


		$('#bullets>li').on('click', function() {
			openIndex($(this).index() + 1);
		});

	});
})(jQuery);