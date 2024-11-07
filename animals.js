sheep.addEventListener('click',function(){
	console.log("sheep");
	document.getElementById('sheep').src="sheep.webp";
    document.getElementById("moose").style.backgroundColor= "#97bf04";
    document.getElementById("wolf").style.backgroundColor= "#97bf04";
    document.getElementById("elk").style.backgroundColor= "#97bf04";
    document.getElementById("bear").style.backgroundColor= "#97bf04";
})

bear.addEventListener('click',function(){
	console.log("bear");
	document.getElementById('bear').src="bear.webp";
    document.getElementById("moose").style.backgroundColor= "#97bf04";
    document.getElementById("wolf").style.backgroundColor= "#97bf04";
    document.getElementById("elk").style.backgroundColor= "#97bf04";
    document.getElementById("sheep").style.backgroundColor= "#97bf04";
})

moose.addEventListener('click',function(){
	console.log("moose");
	document.getElementById('moose').src="moose.webp";
    document.getElementById("bear").style.backgroundColor= "#97bf04";
    document.getElementById("wolf").style.backgroundColor= "#97bf04";
    document.getElementById("elk").style.backgroundColor= "#97bf04";
    document.getElementById("sheep").style.backgroundColor= "#97bf04";
})

wolf.addEventListener('click',function(){
	console.log("wolf");
	document.getElementById('wolf').src="wolf.webp";
    document.getElementById("bear").style.backgroundColor= "#97bf04";
    document.getElementById("moose").style.backgroundColor= "#97bf04";
    document.getElementById("elk").style.backgroundColor= "#97bf04";
    document.getElementById("sheep").style.backgroundColor= "#97bf04";
})

elk.addEventListener('click',function(){
	console.log("Elk");
    document.getElementById('elk').src="elk.webp";
    document.getElementById("bear").style.backgroundColor= "#97bf04";
    document.getElementById("wolf").style.backgroundColor= "#97bf04";
    document.getElementById("moose").style.backgroundColor= "#97bf04";
    document.getElementById("sheep").style.backgroundColor= "#97bf04";

})
