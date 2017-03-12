var rounds=50;
var level=1;
var dif=0.05;
var kills= 0;
var gid=0;
var wins=0;
function unit(id,name,atk,armor,life){
	this.id=id;
	this.name=name;
	this.atk=atk;
	this.armor=armor;
	this.maxarmor=armor;
	this.maxlife=life;
	this.life=life;
}

function army(){
	this.u=new Array()
	this.id=gid;
	gid++;
}

army.prototype.newUnit = function(un){
	this.u[this.u.length]=un;
}
function planet(){
	var rnd=Math.round(Math.random()*400*dif)+50
	dif+=dif/10
	this.pmetal=rnd*Math.round(Math.round(Math.random()*100))
	this.pcrystal=rnd*Math.round(Math.random()*40)
	this.puranium=rnd*Math.round(Math.random()*15)
	this.arm=new army();

		var n1=Math.floor(rnd*Math.round(Math.random()*10)*0.08);
		var n2=Math.floor(rnd*Math.round(Math.random()*10)*0.017);
		var n3=Math.floor(rnd*Math.round(Math.random()*10)*0.0015);
		var n4=Math.floor(rnd*Math.round(Math.random()*10)*0.0008);
		var n5=Math.floor(rnd*Math.round(Math.random()*10)*0.0001);
	for(i=0;i<n1;i++){
		var uni2=new unit(1,"caza",10,5,120);
		this.arm.newUnit(uni2);
	}
	for(i=0;i<n2;i++){
			var uni=new unit(2,"Crucero",50,25,400);
			this.arm.newUnit(uni);
	}
		for(i=0;i<n3;i++){
			var uni=new unit(3,"Fragata",150,50,2000);
			this.arm.newUnit(uni);
	}
		for(i=0;i<n4;i++){
			var uni=new unit(4,"Galeon",500,100,800);
			this.arm.newUnit(uni);
	}
		for(i=0;i<n5;i++){
			var uni=new unit(5,"Acorazado",5000,2000,30000);
			this.arm.newUnit(uni);
	}

}
function galaxy(){
	this.planets=new Array();
}
function fight(a1,a2){

		document.getElementById('batalla').innerHTML=""
		if(a1.u.length==0){
			return 0;
		}
		if(a2.u.length==0){
			return 1;
		}
	for(var i=0; i<rounds;i++)
	{

		for(var j=0 ; j<a1.u.length ; j++){
			var rnd=Math.round(Math.random()*(a2.u.length-1));
			var atk=a1.u[j].atk;
			var e=a2.u[rnd];

			if(atk<=e.armor){
				e.armor-=atk;
			}
			else
			{	
				e.life-=(atk-e.armor)
				e.armor=0;
			}
		}
		for(var j=0 ; j<a2.u.length ; j++){
			var rnd=Math.round(Math.random()*(a1.u.length-1));
			var atk=a2.u[j].atk;
			var e=a1.u[rnd]

			if(atk<=e.armor){
				e.armor-=atk;
			}
			else
			{	
				e.life-=(atk-e.armor)
				e.armor=0;
			}
		}
		clear(a1);
		clear(a2);
		document.getElementById('batalla').innerHTML+=("Round "+(i+1)+"<br>"+state(a1)+state(a2)+"<br><br>")
		if(a1.u.length==0){
			return 0;
		}
		if(a2.u.length==0){
			wins++;
			return 1;
		}
	}
	actualizar();
}

function state(a){
var echo=""
var u1=0;
var u2=0;
var u3=0;
var u4=0;
var u5=0;
for(i=0;i<a.u.length;i++){
	switch(a.u[i].id){
		case 1:u1++;break;
		case 2:u2++;break;
		case 3:u3++;break;
		case 4:u4++;break;
		case 5:u5++;break;
	}
}
echo+="<img class='ico2' src='http://vignette2.wikia.nocookie.net/ogamer/images/2/2b/Cazador_Ligero.jpg/revision/latest/scale-to-width/180?cb=20120619093501&path-prefix=es'></img>: "+u1+" \n"
echo+="<img class='ico2' src='http://vignette2.wikia.nocookie.net/ogamer/images/e/ec/Xlarge_206.jpg/revision/latest/scale-to-width/180?cb=20110525140708&path-prefix=es'></img>: "+u2+" \n"
echo+="<img class='ico2' src='http://vignette1.wikia.nocookie.net/ogamer/images/d/de/Xlarge_215.jpg/revision/latest?cb=20110604185253&path-prefix=es'></img>: "+u3+" \n"
echo+="<img class='ico2' src='http://vignette4.wikia.nocookie.net/ogamer/images/e/eb/Nave_Batalla.jpg/revision/latest/scale-to-width/180?cb=20120619093443&path-prefix=es'></img>: "+u4+" \n"
echo+="<img class='ico2' src='http://vignette4.wikia.nocookie.net/ogamer/images/9/95/Xlarge_214.jpg/revision/latest/scale-to-width/180?cb=20110725101500&path-prefix=es'></img>: "+u5+" <br>"

return echo;
}

function clear(a){
	for(var i=0 ; i<a.u.length ; i++){
		a.u[i].armor=a.u[i].maxarmor;
		if(a.u[i].life<=0){
			a.u.splice(i,1);
			i--
			if (a.id!=0){
				kills++
			}
		}
	}
}
	var army1=new army();
	var army2=new army();

	for(i=0;i<30;i++){
		var uni2=new unit(1,"caza",10,5,100);
		army2.newUnit(uni2);
	}




	function actualizar(){
		document.getElementById('numeros').innerHTML=state(army1);
		document.getElementById('met').innerHTML=metal;
		document.getElementById('cri').innerHTML=crystal;
		document.getElementById('ura').innerHTML=uranium;
		document.getElementById('muertes').innerHTML="Kills: "+kills;
		document.getElementById('victorias').innerHTML="Wins: "+wins;
		var u1=0;
		var u2=0;
		var u3=0;
		var u4=0;
		var u5=0;
		for(i=0;i<army1.u.length;i++){
			switch(army1.u[i].id){
				case 1:u1++;break;
				case 2:u2++;break;
				case 3:u3++;break;
				case 4:u4++;break;
				case 5:u5++;break;
			}
		}
		for(var i=0 ; i<army1.u.length ; i++){
		army1.u[i].armor=army1.u[i].maxarmor;
		army1.u[i].life=army1.u[i].maxlife;
		}
	

		document.getElementById('ncaza').innerHTML=u1;
		document.getElementById('ncruc').innerHTML=u2;
		document.getElementById('nfrag').innerHTML=u3;
		document.getElementById('ngal').innerHTML=u4;
		document.getElementById('nAco').innerHTML=u5;
	}

	function newCaza(){
		number=parseInt(document.getElementById("numCaza").value);
	for(i=0;i<number;i++){
		if (metal>=200 && crystal>=50){
			metal-=200;
			crystal-=50;
			var uni=new unit(1,"Caza",10,5,120);
			army1.newUnit(uni);
		}
	}
		actualizar();
	}
	function newCrucero(){
				number=parseInt(document.getElementById("numCrucero").value);
	for(i=0;i<number;i++){
		if (metal>=500 && crystal>=300 && uranium>=50){
			metal-=500;
			crystal-=300;
			uranium-=50;
			var uni=new unit(2,"Crucero",50,25,400);
			army1.newUnit(uni);
		}
	}
		actualizar();
	}
	function newFragata(){
				number=parseInt(document.getElementById("numFragata").value);
	for(i=0;i<number;i++){
		if (metal>=1000 && crystal>=3000 && uranium>=500){
			metal-=1000;
			crystal-=3000;
			uranium-=500;
			var uni=new unit(3,"Fragata",150,50,2000);
			army1.newUnit(uni);
		}
	}
		actualizar();
	}
	function newGaleon(){
				number=parseInt(document.getElementById("numGaleon").value);
	for(i=0;i<number;i++){
		if (metal>=10000 && crystal>=2000 && uranium>=3000){
			metal-=10000;
			crystal-=2000;
			uranium-=3000;
			var uni=new unit(4,"Galeon",500,100,8000);
			army1.newUnit(uni);
		}
	}
		actualizar();
	}
	function newAcorazado(){
				number=parseInt(document.getElementById("numAcorazado").value);
	for(i=0;i<number;i++){
		if (metal>=50000 && crystal>=20000 && uranium>=10000){
			metal-=50000;
			crystal-=20000;
			uranium-=10000;
			var uni=new unit(5,"Acorazado",5000,2000,30000);
			army1.newUnit(uni);
		}
	}
		actualizar();
	}
	function luchar(nm){

		if(fight(army1,galaxia.planets[nm].arm)==1){
		metal+=galaxia.planets[nm].pmetal;
		crystal+=galaxia.planets[nm].pcrystal;
		uranium+=galaxia.planets[nm].puranium;
				galaxia.planets[nm]=new planet();
		}

		drawPlanets();
		actualizar();
	}

	actualizar();

	function newRound(){
		level++
		metal+=Math.round(level*1000+(level*level*80))
		crystal+=Math.round(level*500+(level*level*40))
		uranium+=Math.round(level*100+(level*level*15))
		var n1=Math.round((level*level*1.5)+(level*level*level*0.0015)+5)
		var n2=Math.round((level*level*0.2)+(level*level*level*0.0002))
		var n3=Math.round((level*level*0.02)+(level*level*level*0.00002))
		var n4=Math.round((level*level*0.007)+(level*level*level*0.000007))
	for(i=0;i<n1;i++){
		var uni2=new unit(1,"caza",10,5,120);
		army2.newUnit(uni2);
	}
	for(i=0;i<n2;i++){
			var uni=new unit(2,"Crucero",50,25,400);
			army2.newUnit(uni);
	}
		for(i=0;i<n3;i++){
			var uni=new unit(3,"Fragata",150,50,2000);
			army2.newUnit(uni);
	}
		for(i=0;i<n4;i++){
			var uni=new unit(4,"Galeon",500,100,800);
			army2.newUnit(uni);
	}

	document.getElementById("lvl").innerHTML=level;
	}

	/*function draw(a){
		d=255;
	var c=document.getElementById("canv");
	var ctx=c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.fillStyle="#000000";
	ctx.rect(0,0,c.width,c.height);
	ctx.fill();
	ctx.closePath();
		

				for(var i=0 ; i<a.u.length ; i++){
					x=Math.floor((i*5)/500);
					y=(i*5)-(x*500)
					ctx.beginPath();
					ctx.fillStyle="rgb("+d+","+d+","+d+")";
					ctx.arc(5+x*5,y,a.u[i].id,0,2*Math.PI);
					ctx.fill();
					ctx.closePath();
			}
	}

	function drawb(a){
		d=255;
	var c=document.getElementById("canv");
	var ctx=c.getContext("2d");

			

				for(var i=0 ; i<a.u.length ; i++){
					x=Math.floor((i*5)/500);
					y=(i*5)-(x*500)
					ctx.beginPath();
					ctx.fillStyle="rgb("+d+","+d+","+d+")";
					ctx.arc(495-(x*5),y,a.u[i].id,0,2*Math.PI);
					ctx.fill();
					ctx.closePath();
			}
	}*/


	galaxia=new galaxy();
	for(var z=0;z<=11;z++){
		planeta=new planet()
		galaxia.planets[galaxia.planets.length]=planeta
	}

	function drawPlanets(){

		p=document.getElementById("planets")
		p.innerHTML="";
		for(var i=0;i<galaxia.planets.length;i++){
			var pla=document.createElement("div")
			
			var par=document.createElement("p")
			par.innerHTML=state(galaxia.planets[i].arm);
			par.innerHTML+="<br> <img class='ico' src='http://vignette3.wikia.nocookie.net/ogamer/images/a/aa/Metal.jpg/revision/latest?cb=20120620190117&path-prefix=es'/> "+
			galaxia.planets[i].pmetal+
			" <img class='ico' src='http://vignette2.wikia.nocookie.net/ogame/images/8/88/Crystal.PNG/revision/latest?cb=20130914121323'/> "
			+galaxia.planets[i].pcrystal+
			" <img class='ico' src='http://www.icon100.com/up/3495/256/10-Radioactive.png'/> "
			+galaxia.planets[i].puranium;
			pla.appendChild(par)
			bot=document.createElement("button")
			bot.setAttribute("onclick","luchar("+i+")")
			bot.textContent="Fight"
			pla.appendChild(bot);
			p.appendChild(pla)

		}
	}	drawPlanets();
