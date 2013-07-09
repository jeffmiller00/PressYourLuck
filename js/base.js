var numTeams = 5;
var spinnerID;
var start;
var stop;

var frames=new Array();
frames[0]=new Array();
frames[0][1]=["img/100spin_orange.jpg", 100];
frames[0][2]=["img/800_dkgreen.jpg", 800];
frames[0][3]=["img/whammie.jpg", -1];

frames[1]=new Array();
frames[1][1]=["img/100_dkgreen.jpg", 100];
frames[1][2]=["img/400_dkorange.jpg", 400];
frames[1][3]=["img/whammie.jpg", -1];

frames[2]=new Array();
frames[2][1]=["img/400_pink.jpg", 400];
frames[2][2]=["img/600_orange.jpg", 600];
frames[2][3]=["img/2spaces_green.jpg", 0]; // update this.

frames[3]=new Array();
frames[3][1]=["img/500_green.jpg", 500];
frames[3][2]=["img/opposite2_pink.jpg", 0]; // update this.
frames[3][3]=["img/whammie.jpg", -1];

frames[4]=new Array();
frames[4][1]=["img/200_green.jpg", 200];
frames[4][2]=["img/600spin_dkorange.jpg", 600]; // update this.
frames[4][3]=["img/900_green.jpg", 900];

frames[5]=new Array();
frames[5][1]=["img/1500_dkorange.jpg", 1500];
frames[5][2]=["img/1spin_pink.jpg", 0];
frames[5][3]=["img/whammie.jpg", -1];

frames[6]=new Array();
frames[6][1]=["img/1space_dkorange.jpg", 0]; // update this.
frames[6][2]=["img/500_dkpink.jpg", 500];
frames[6][3]=["img/whammie.jpg", -1];

frames[7]=new Array();
frames[7][1]=["img/200_green.jpg", 200];
frames[7][2]=["img/300_green.jpg", 300];
frames[7][3]=["img/whammie.jpg", -1];

frames[8]=new Array();
frames[8][1]=["img/100_dkpink.jpg", 100];
frames[8][2]=["img/whammie.jpg", -1];
frames[8][3]=["img/whammie.jpg", -1];

frames[9]=new Array();
frames[9][1]=["img/100_orange.jpg", 100];
frames[9][2]=["img/1000_dkgreen.jpg", 1000];
frames[9][3]=["img/1spin_dkpink.jpg", 0];

frames[10]=new Array();
frames[10][1]=["img/300_green.jpg", 300];
frames[10][2]=["img/400_green.jpg", 400];
frames[10][3]=["img/whammie.jpg", -1];

frames[11]=new Array();
frames[11][1]=["img/500_dkpink.jpg", 500];
frames[11][2]=["img/opposite13_dkgreen.jpg", 0]; // update this.
frames[11][3]=["img/whammie.jpg", -1];

frames[12]=new Array();
frames[12][1]=["img/1000spin_green.jpg", 1000];
frames[12][2]=["img/200_dkpink.jpg", 200];
frames[12][3]=["img/400_dkorange.jpg", 400];

frames[13]=new Array();
frames[13][1]=["img/100_dkgreen.jpg", 100];
frames[13][2]=["img/300_pink.jpg", 300];
frames[13][3]=["img/whammie.jpg", -1];

frames[14]=new Array();
frames[14][1]=["img/200_orange.jpg", 200];
frames[14][2]=["img/2spaces_green.jpg", 0]; // update this.
frames[14][3]=["img/opposite8_dkorange.jpg", 0]; // update this.

frames[15]=new Array();
frames[15][1]=["img/1500_green.jpg", 1500];
frames[15][2]=["img/whammie.jpg", -1];
frames[15][3]=["img/whammie.jpg", -1];

frames[16]=new Array();
frames[16][1]=["img/200_dkpink.jpg", 200];
frames[16][2]=["img/whammie.jpg", -1];
frames[16][3]=["img/600_orange.jpg", 600]; // check this.

frames[17]=new Array();
frames[17][1]=["img/200spin_pink.jpg", 200];
frames[17][2]=["img/400or1_dkpink.jpg", 400]; // update this.
frames[17][3]=["img/800_green.jpg", 800];

var sound = document.createElement("audio");
sound.setAttribute('src','media/spin20.wav');
sound.setAttribute('controls','false');
sound.setAttribute('preload','auto');
sound.setAttribute('loop','true');
sound.setAttribute('id','spinSound');


function initFrames(){
	var whichTile = -1;
	for (var i=0; i<18; i++) {
		whichTile = Math.floor(Math.random()*(frames[i].length-1))+1;
		$("#bigboard #tile"+i).css("background-image", "url("+frames[i][whichTile][0]+")");
		$("#bigboard #tile"+i).attr("value", frames[i][whichTile][1]);
	}
}

function moveSpinner(){
	$("#bigboard td").removeClass("selected");
	$("#bigboard #tile"+(Math.floor(Math.random()*18)+1)).addClass("selected");
}

function changeTile(whichFrame){
	var whichTile = Math.floor(Math.random()*(frames[whichFrame].length-1))+1;

	while (frames[whichFrame][whichTile][1] == $("#bigboard #tile"+whichFrame).val()) {
		whichTile = Math.floor(Math.random()*(frames[whichFrame].length-1))+1;
	}

	$("#bigboard #tile"+whichFrame).css("background-image", "url("+frames[whichFrame][whichTile][0]+")");
	$("#bigboard #tile"+whichFrame).attr("value", frames[whichFrame][whichTile][1]);	
}

function startChanging(){
	sound.play();
	start = Date.parse(Date());
	var i;
	for (i=0;i<18;i++){
		frames[i][0]=setInterval("changeTile("+i+")", Math.floor(Math.random()*2300)+900);
	}

	spinnerID = setInterval(moveSpinner, 250);
}

function stopChanging(){
	var i;
	for (i=0;i<18;i++)
		clearInterval(frames[i][0]);

	clearInterval(spinnerID);
	sound.pause();
	sound.currentTime = 0;
	
	//$("#imgSmile").show();
	//$("#imgSmile").animate({width: "500px"}, 'slow');
}

function getScore(squareName){
	return parseInt($(squareName).text()) + parseInt($(".selected").attr("value"));
}
