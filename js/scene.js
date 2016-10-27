//this file is the main logic of animation
console.log("%cAny application that can be written in JavaScript, will eventually be written in JavaScript----Atwood's Law", "line-height:80px;font-family:arial;font-size:20px;padding:50px 30px;background: #fff");

var typer,typerFrank;
var firstLoad=false;
//for pace.restart()

//when page is full loaded
Pace.on('done', function() {
if(!firstLoad){
	
	$('#loader').delay(1000).fadeOut('slow',function(){
			//show first page from 'display:none'	
	$('#cubeTransition>div:eq(0)').fadeIn('slow');

//change background color
setTimeout(function(){
$('#who-am-i').css('background','#000')
},1000)

//typer
setTimeout(function(){
typerFrank=new typer('i-am-frank');
typerFrank.type(1000).type('Hello!').type(1000).del().type(500).type('I am 2Byte').type(500).end();
},3000)
setTimeout(function(){
typer = new typer('what-i-do');
typer.type(3000).type('i enjoy creating interesting things').type(2000).del(18).type(1000).type('beautiful things').type(2000).del(16).type(1000).type('simple things').type(2000).del().type(1000).type('be happy.').type(2000).del().repeat();
},8780)


//load cubeTransition.js & scroll tip after few seconds
setTimeout(function(){
	
var bullet = $('<ul id="bullets" style="display:none"></ul>');
$("#cubeTransition").append(bullet);
$("#bullets").fadeIn(3000);
$("#scroll-arrow").fadeIn(3000);
$('#who-am-i').css('background','#81ced0')
jQuery.getScript("js/cubeTransition.js")
setTimeout(function(){
		$('#who-am-i #avatar img').css({'opacity':'1','margin-top':'0'});
		},1000);
		setTimeout(function(){
		$('#who-am-i #contact img').eq(0).css('opacity','1')
		},4000);
		setTimeout(function(){
		$('#who-am-i #contact img').eq(1).css('opacity','1')
		},4500);
		setTimeout(function(){
		$('#who-am-i #contact img').eq(2).css('opacity','1')
		},5000);
		setTimeout(function(){
		$('#who-am-i #contact img').eq(3).css('opacity','1')
		},5500);
},5000)
				
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