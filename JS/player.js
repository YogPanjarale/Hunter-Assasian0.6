
class Player {
	constructor(i,j,arr){
		this.sprite =createSprite((i+1)*gb,(j+1)*gb,gb*0.5,gb*0.5); 
		this.sprite.shapeColor = "green"
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
			console.log(this.i,this.j)
				this.pth=level.path(this.arr,{i:this.i,j:this.j},{i:9,j:5})
				console.log(this.pth)
	}
	display(){
		drawSprites();
		this.i=int((1/gb)*this.sprite.y -1)
		this.j=int((1/gb)*this.sprite.x -1)
		 this.move()
		//console.log(this.i,this.j)
		//replace pth with pathfinder result
		 this.drawPath()
	}
	move(){
		var pth=this.pth,idx=this.idx
		if(pth){
			if(idx<pth.length){
				this.moveTo(pth[0][0],pth[0][1])
		   }
		   else{this.idx;}
		   }
	   
		   var t=this.target;var s =this.sprite;var speed=gb/8
	   //console.log(gi(s.x,s.y),gi(t.x,t.y))
	   //var gs=gi(s.x,s.y),gt=gi(t.x,t.y)
	  // this.cone(s.x,s.y,s.rotation)
		   s.setVelocity(0,0)
		   if(t.x>s.x){s.velocity.x=speed;}
		   else if(t.x<s.x){s.velocity.x=-speed;}
		   else if(t.y>s.y){s.velocity.y=speed;}
		   else if(t.y<s.y){s.velocity.y=-speed;}
		   if(t.x==s.x&&t.y==s.y&&idx<pth.length){this.pth.shift();}
		   var h=s.velocity.heading();
		   if(s.velocity.x==0&&s.velocity.y==0)h=s.rotation+=2
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
		//var gs={x:int(((1/gb)*x)-1),
		//		y:int(((1/gb)*y)-1)}
		//console.log("gs: ",gs)
		//var result=getNeighbor(this.arr,gs.x-1,gs.y-1)
		//console.log(result) 
		push()
		translate(x,y)
		rotate(a)
		//console.log(get(x+gb, y))
		fill(255,100)
		noStroke();
		arc(0, 0, gb*4, gb*3, -45,45, PIE);
		pop()
	}
	moveTo(i,j){
	  this.target.x=(i+1)*gb
	  this.target.y=(j+1)*gb
	}
	drawPath(){
		push()
		stroke(255,255,50)
		scale(gb)
		strokeWeight(5/gb)
		noFill();
		if(this.pth.length<1)return
		beginShape()
		
        // this.pth.forEach(e=>{
        //    curveVertex(e[0]+1, e[1]+1)
		// })
		curveVertex(this.pth[0][0], this.pth[0][1])

		for (let i = 0; i < this.pth.length; i++) {
			const e = this.pth[i];
			curveVertex(e[0]+1, e[1]+1)
		}
		curveVertex(this.pth[this.pth.length-1][0], this.pth[this.pth.length-1][1])
		endShape()
		
		pop()
	}
	moveToPos(x=camera.mouseX,y=camera.mouseY){
	    x+=gb/2;y+=gb/2
		var i=int((1/gb)*y -1)
	
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

