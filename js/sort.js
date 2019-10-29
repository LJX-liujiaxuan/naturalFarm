
//搜索框提示的显示和隐藏
hh("#content").onfocus=function(){
	hh("#ts").style.display="none";
}
hh("#content").onmouseleave=function(){
	let conn=hh("#content").value;
	if(conn==""){
		hh("#ts").style.display="block";
	}else{
		hh("#ts").style.display="none";
	}
}

hh("#b1").onclick=function(){
	hh("#b2").style.background="gainsboro";
	hh("#b3").style.background="gainsboro";
	hh("#b4").style.background="gainsboro";
	hh("#b5").style.background="gainsboro";
	hh("#b6").style.background="gainsboro";
	hh("#b7").style.background="gainsboro";
	hh("#b8").style.background="gainsboro";
	hh("#shucai").style.display="none";
	hh("#tutechan").style.display="none";
	hh("#roudannai").style.display="none";
	hh("#jingdian").style.display="none";
	hh("#minsu").style.display="none";
	hh("#wenhua").style.display="none";
	hh("#yingshi").style.display="none";
	
	hh("#b1").style.background="white";
	hh("#shuiguo").style.display="block";
}
hh("#b2").onclick=function(){
	hh("#b1").style.background="gainsboro";
	hh("#b3").style.background="gainsboro";
	hh("#b4").style.background="gainsboro";
	hh("#b5").style.background="gainsboro";
	hh("#b6").style.background="gainsboro";
	hh("#b7").style.background="gainsboro";
	hh("#b8").style.background="gainsboro";
	hh("#shuiguo").style.display="none";
	hh("#tutechan").style.display="none";
	hh("#roudannai").style.display="none";
	hh("#jingdian").style.display="none";
	hh("#minsu").style.display="none";
	hh("#wenhua").style.display="none";
	hh("#yingshi").style.display="none";
	
	hh("#b2").style.background="white";
	hh("#shucai").style.display="block";
}
hh("#b3").onclick=function(){
	hh("#b1").style.background="gainsboro";
	hh("#b2").style.background="gainsboro";
	hh("#b4").style.background="gainsboro";
	hh("#b5").style.background="gainsboro";
	hh("#b6").style.background="gainsboro";
	hh("#b7").style.background="gainsboro";
	hh("#b8").style.background="gainsboro";
	hh("#shucai").style.display="none";
	hh("#shuiguo").style.display="none";
	hh("#roudannai").style.display="none";
	hh("#jingdian").style.display="none";
	hh("#minsu").style.display="none";
	hh("#wenhua").style.display="none";
	hh("#yingshi").style.display="none";
	
	hh("#tutechan").style.display="block";
	hh("#b3").style.background="white";
}
hh("#b4").onclick=function(){
	hh("#b1").style.background="gainsboro";
	hh("#b2").style.background="gainsboro";
	hh("#b3").style.background="gainsboro";
	hh("#b5").style.background="gainsboro";
	hh("#b6").style.background="gainsboro";
	hh("#b7").style.background="gainsboro";
	hh("#b8").style.background="gainsboro";
	hh("#shucai").style.display="none";
	hh("#shuiguo").style.display="none";
	hh("#tutechan").style.display="none";
	hh("#jingdian").style.display="none";
	hh("#minsu").style.display="none";
	hh("#wenhua").style.display="none";
	hh("#yingshi").style.display="none";
	
	hh("#roudannai").style.display="block";
	hh("#b4").style.background="white";
}
hh("#b5").onclick=function(){
	hh("#b1").style.background="gainsboro";
	hh("#b2").style.background="gainsboro";
	hh("#b3").style.background="gainsboro";
	hh("#b4").style.background="gainsboro";
	hh("#b6").style.background="gainsboro";
	hh("#b7").style.background="gainsboro";
	hh("#b8").style.background="gainsboro";
	hh("#shucai").style.display="none";
	hh("#shuiguo").style.display="none";
	hh("#tutechan").style.display="none";
	hh("#roudannai").style.display="none";
	hh("#minsu").style.display="none";
	hh("#wenhua").style.display="none";
	hh("#yingshi").style.display="none";
	
	hh("#jingdian").style.display="block";
	hh("#b5").style.background="white";
}
hh("#b6").onclick=function(){
	hh("#b1").style.background="gainsboro";
	hh("#b2").style.background="gainsboro";
	hh("#b3").style.background="gainsboro";
	hh("#b4").style.background="gainsboro";
	hh("#b5").style.background="gainsboro";
	hh("#b7").style.background="gainsboro";
	hh("#b8").style.background="gainsboro";
	hh("#shucai").style.display="none";
	hh("#shuiguo").style.display="none";
	hh("#tutechan").style.display="none";
	hh("#roudannai").style.display="none";
	hh("#jingdian").style.display="none";
	hh("#wenhua").style.display="none";
	hh("#yingshi").style.display="none";
	
	hh("#minsu").style.display="block";
	hh("#b6").style.background="white";
}
hh("#b7").onclick=function(){
	hh("#b1").style.background="gainsboro";
	hh("#b2").style.background="gainsboro";
	hh("#b3").style.background="gainsboro";
	hh("#b4").style.background="gainsboro";
	hh("#b5").style.background="gainsboro";
	hh("#b6").style.background="gainsboro";
	hh("#b8").style.background="gainsboro";
	hh("#shucai").style.display="none";
	hh("#shuiguo").style.display="none";
	hh("#tutechan").style.display="none";
	hh("#roudannai").style.display="none";
	hh("#jingdian").style.display="none";
	hh("#minsu").style.display="none";
	hh("#yingshi").style.display="none";
	
	hh("#wenhua").style.display="block";
	hh("#b7").style.background="white";
}
hh("#b8").onclick=function(){
	hh("#b1").style.background="gainsboro";
	hh("#b2").style.background="gainsboro";
	hh("#b3").style.background="gainsboro";
	hh("#b4").style.background="gainsboro";
	hh("#b5").style.background="gainsboro";
	hh("#b6").style.background="gainsboro";
	hh("#b7").style.background="gainsboro";
	hh("#shucai").style.display="none";
	hh("#shuiguo").style.display="none";
	hh("#tutechan").style.display="none";
	hh("#roudannai").style.display="none";
	hh("#jingdian").style.display="none";
	hh("#minsu").style.display="none";
	hh("#wenhua").style.display="none";
	
	hh("#yingshi").style.display="block";
	hh("#b8").style.background="white";
}


function hh(str){
	if(str[0]=="#"){
		return document.getElementById(str.substring(1));
	}else if(str[0]=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}