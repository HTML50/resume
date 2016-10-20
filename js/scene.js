//this file is the main logic of animation

var typer;
var firstLoad=false;
//for pace.restart()

//when page is full loaded
Pace.on('done', function() {

if(!firstLoad){
$('.title').fadeOut('slow',function(){
	$(this).text('FRANK').fadeIn('slow',function(){
		$('#loader').delay(1000).fadeOut('slow',function(){
			//show first page from 'display:none'	
	$('#cubeTransition>div:eq(0)').fadeIn('slow');

//change background color
setTimeout(function(){
$('#who-am-i').css('background','#000')
},1000)

//typer
setTimeout(function(){
typer = new typer('i-am-frank');
typer.type(3000).type('Hello, I am frank').type(100).type(1500).del().type('i like creating interesting things').type(2000).del().repeat();
},3000)


//load cubeTransition.js & scroll tip after few seconds
setTimeout(function(){
	
var bullet = $('<ul id="bullets" style="display:none"></ul>');
var arrow = $('');

$("#cubeTransition").append(bullet);
$("#who-am-i").append(arrow);
$("#bullets").fadeIn(3000);
$("#scroll-arrow").fadeIn(3000);
$('#who-am-i').css('background','#81ced0')
jQuery.getScript("js/cubeTransition.js")
},15000)
				
		});
	});
});
firstLoad = true;
}	
	
	
	
});





//project page
(function(){
$('.box').click(function(e){
e.preventDefault();
Pace.restart()
$('.boxMask').show();
$('#boxLayer').fadeIn();
$('#boxLayer').attr('src',this.href);
$('.boxMask').click(function(){
$('#boxLayer').attr('src','about:blank');
$('#boxLayer').fadeOut();
$('.boxMask').off('click');
$('.boxMask').hide();
});
});
})();