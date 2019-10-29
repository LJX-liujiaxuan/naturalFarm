
//banner轮播图
var mySwiper = new Swiper('.swiper-container', {
	loop: true, 
	autoplay:true,
	pagination: {
		el: '.swiper-pagination',
		bulletElement : 'li',
	},
})

//倒计时
//var myTimer=-1;
function daoJiShi(){
//	if((hours=="" && minutes=="" && seconds=="") || myTimer!=-1){
//		return;
//	}
	var hours= document.getElementById("hours").innerHTML;
	var minutes= document.getElementById("minutes").innerHTML;
	var seconds= document.getElementById("seconds").innerHTML;
	var myTimer=setInterval(function(){
		seconds--;
		if(seconds==-1){
			minutes--;
			if(minutes==-1){
				hours--;
				minutes=59;
			}
			seconds=59;
		}
		if(hours==0 &&  minutes==0 && seconds==0){
			clearInterval(myTimer);
		}
		 document.getElementById("seconds").innerHTML = seconds;
   		 document.getElementById("minutes").innerHTML =minutes;
   		 document.getElementById("hours").innerHTML =hours;
	},1000);
}


window.onload=function(){
	daoJiShi();
}
