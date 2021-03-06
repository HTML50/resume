(function($) {

	var length = $('#cubeTransition>div').length,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;



	var bullet = $("<li class='active'><span>About</span></li><li><span>Project</span></li><li><span>Experience</span></li><li><span>Skill</span></li><li><span>Infomation</span></li>");
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
		animationOut(current - 1)
		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').hide();
		}, 500)

		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
			$('#cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
			animationIn(next - 1)
			current = next;
			onGoing = false;
		}, 800)
	}


	function animationIn(i) {
		switch (i) {
		case 0:
			$('#who-am-i #avatar img').css('transform', 'rotateX(360deg)');
			setTimeout(function() {
				$('#who-am-i #avatar img').css('transform', 'rotateX(0deg)')
			}, 3000)
			break;
		case 1:
			$('#my-project .project-item').eq(0).animate({
				'opacity': '1'
			}, function() {
				$('#my-project .project-item').eq(1).animate({
					'opacity': '1'
				}, function() {
					$('#my-project .project-item').eq(2).animate({
						'opacity': '1'
					}, function() {
						$('#my-project .project-item').eq(3).animate({
							'opacity': '1'
						}, function() {
							$('#my-project .project-item').eq(4).animate({
								'opacity': '1'
							}, function() {
								$('#my-project .project-item').eq(5).animate({
									'opacity': '1'
								});
							})
						})
					})
				})
			})
			break;
		case 2:
			$('#experience-one').fadeIn(1000, function() {
				$('#experience-two').fadeIn(1000, function() {
					$('#experience-three').fadeIn(1000, function() {
						$('#my-experience .line').css('width', '100%');
					})
				})
			});
			break;
		case 3:
			$('#my-skill .javascript-bar').css('width', '40rem');
			$('#my-skill .html-bar').css('width', '40rem');
			$('#my-skill .css-bar').css('width', '40rem');
			$('#my-skill .font-bar').css('width', '25rem');
			$('#my-skill .color-bar').css('width', '30rem');
			$('#my-skill .image-bar').css('width', '32rem');
			$('#my-skill .animation-bar').css('width', '30rem');
			$('#my-skill .layout-bar').css('width', '40rem');
			break;
		case 4:
			$('#my-info .hello').fadeIn(1000, function() {
				$('#my-info .more').fadeIn(2000);
			})
			break;
		default:
			;
		}
	}

	function animationOut(i) {
		switch (i) {
		case 0:
			$('#who-am-i #avatar img').css('transform', 'rotateX(0deg)');
			break;
		case 1:
			$('#my-project .project-item').css('opacity', 0);
			break;
		case 2:
			$('#experience-one,#experience-two,#experience-three').fadeOut(300);
			$('#my-experience .line').css('width', '0');
			break;
		case 3:
			$('#my-skill .javascript-bar').css('width', '20rem')
			$('#my-skill .html-bar').css('width', '20rem')
			$('#my-skill .css-bar').css('width', '20rem')
			$('#my-skill .font-bar').css('width', '20rem')
			$('#my-skill .color-bar').css('width', '20rem')
			$('#my-skill .image-bar').css('width', '20rem')
			$('#my-skill .animation-bar').css('width', '20rem')
			$('#my-skill .layout-bar').css('width', '20rem')
			break;
		case 4:
			$('#my-info .more').fadeOut(200, function() {
				$('#my-info .hello').fadeOut(100);
			})
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
		$('#scroll-arrow').on('click', function() {
			openIndex(2);
		});

	});
})(jQuery);