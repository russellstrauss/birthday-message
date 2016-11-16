function makeNewPosition(){
	
	// Get viewport dimensions (remove the dimension of the div)
	var h = $(window).height() - 50;
	var w = $(window).width() - 50;
	
	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);
	
	return [nh,nw];    
	
}

function animateCake(){
	var newq = makeNewPosition();
	var oldq = $('#bounce').offset();
	var speed = calcSpeed([oldq.top, oldq.left], newq);
	
	$('#bounce').animate({ top: newq[0], left: newq[1] }, speed, function(){
	  animateCake();        
	});
	
};

function calcSpeed(prev, next, speedMod) {
	var x = Math.abs(prev[1] - next[1]);
	var y = Math.abs(prev[0] - next[0]);
	var greatest = x > y ? x : y;
	var speedModifier = 0.25;
	var speed = Math.ceil(greatest/speedModifier);
	return speed;
}

var colors = [
	"#482344",
	"#2B5166",
	"#429867",
	"#FAB243",
	"#E02130"
];

$(document).ready(function(){
	$('#message span').each(function(i){
		$(this).css('color', colors[i % 5]);
	});
	
	animateCake();
});
