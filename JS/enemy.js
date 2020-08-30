
class Enemy {
	constructor(i,j,arr){
		this.sprite =createSprite((i+1)*gb,(j+1)*gb,gb*0.5,gb*0.5); 
		this.sprite.shapeColor = rgb(200,100,0)
		this.target={x:this.sprite.x,y:this.sprite.y,r:this.sprite.rotation}
		this.arr=arr
		this.idx=0
		this.i=int((1/gb)*this.sprite.y -1)
		this.j=int((1/gb)*this.sprite.x -1)
		this.pth=[[1,14],[1,13],[1,12],
				 [1,11],[2,11],[3,11],
				 [3,10],[3,9],[3,8],
				 [3,7],[4,7],[5,7],
				 [6,7],[6,8],[6,9],[5,9],
				 [5,10],[5,11],[4,11],
				 [4,12],[4,13],[5,13],
				 [5,14],[5,15],

				]
	 this.state="roam"
	 this.pth=level.path(this.arr,{i:this.i,j:this.j},
		{i:int(random(0,this.arr[0].length-1)),j:int(random(0,this.arr[0].length-1))})
	 
			//console.log(this.i,this.j)
				// this.pth=level.path(this.arr,{i:this.i,j:this.j},{i:1,j:6})
				// console.log(this.pth)
	}
	display(){
		drawSprites();
		this.i=int((1/gb)*this.sprite.y -1)
		this.j=int((1/gb)*this.sprite.x -1)
		 this.move()
	
		 if(this.pth.length<1){this.pth=level.path(this.arr,{i:this.i,j:this.j},
			{i:int(random(0,this.arr[0].length-1)),j:int(random(0,this.arr[0].length-1))})
		 }
	}
	move(){
		var pth=this.pth,idx=this.idx
		if(pth){
			if(idx<pth.length){
				this.moveTo(pth[0][0],pth[0][1])
		   }
		   else{this.idx;}
		   }
	   
		   var t=this.target;var s =this.sprite;var speed=gb/16
	   //console.log(gi(s.x,s.y),gi(t.x,t.y))
	   //var gs=gi(s.x,s.y),gt=gi(t.x,t.y)
	   this.cone(s.x,s.y,s.rotation)
		   s.setVelocity(0,0)
		   if(t.x>s.x){s.velocity.x=speed;}
		   else if(t.x<s.x){s.velocity.x=-speed;}
		   else if(t.y>s.y){s.velocity.y=speed;}
		   else if(t.y<s.y){s.velocity.y=-speed;}
		   if(t.x==s.x&&t.y==s.y&&idx<pth.length){this.pth.shift();}
		   var h=s.velocity.heading();
		 //  if(this.pth.length<1)h=s.rotation+=2
		   if(s.rotation-h>180)h=360+h
		   if(s.rotation>h){
		  s.rotation-=10
		}   else if(s.rotation<h){
		   s.rotation+=10
		}
		if(s.rotation==360)s.rotation=0
		//console.log("rotation: "+s.rotation,"heading: "+s.velocity.heading(),"idx:"+this.idx)
		   this.sprite=s;
		 
	}
	cone(x,y,a){		
		var da=44
		var result=(isInsideSector({x:player.sprite.x,
			y:player.sprite.y},{x:x,y:y},a+da,a-da,gb*2))
   push()
		fill(250,125)
  		if(result==true){fill(255,100,100,200)}  
		noStroke();
		arc(x, y, gb*4, gb*4, a-da,a+da, PIE);
   pop()
	}
	moveTo(i,j){
	  this.target.x=(i+1)*gb
	  this.target.y=(j+1)*gb
	  //this.moveToPos(player.sprite.x,player.sprite.y)
	}
	moveToPos(x=camera.mouseX,y=camera.mouseY){
	    x+=gb/2;y+=gb/2
		var i=int((1/gb)*y -1)
	    if(player.i==i&&player.j==i){return}
		var j=int((1/gb)*x -1)
		if(i>this.arr.length)return
		if(j>this.arr[0].length)return
		this.pth=level.path(this.arr,{i:this.i,j:this.j},{i:i,j:j})
	   this.idx=0
	   console.log(i,j)
	   fill(255)
	   click.i=i;click.j=j
	}	
}
function isInsideSector(p,c,sa,ea,r){
	var relative=cartesian2Polar(p.x-c.x,p.y-c.y)
   if(relative.distance<=r&&
	 ( (relative.angle>=sa&&relative.angle<=ea)||
	  (relative.angle<=sa&&relative.angle>=ea))
	   )return true
	return false
 }
 function cartesian2Polar(x, y){
   push()
   //angleMode(RADIANS)
	 di = sqrt(x*x + y*y)
	 rad = atan2(y,x) //This takes y first
	 polarCoor = { distance:di, angle:rad }
   pop()
	 return polarCoor
 }
