class tiles { 
    constructor(){ 
        this.gapBetween=gb;
    }
    ground1(x,y,n){
        push()
        fill("#C2C2C2")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.05)
        stroke("#636350")
        translate(x,y)
        scale(0.8)
        strokeWeight(2)
      // rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
      if(n){
          var gap=2
        if(n.t==0)line(-gb/gap, -gb/gap,gb/gap ,-gb/gap)
        if(n.b==0)line(-gb/gap, gb/gap,gb/gap ,gb/gap)
        if(n.l==0)line(-gb/gap, -gb/gap,-gb/gap ,gb/gap)
        if(n.r==0)line(gb/gap, -gb/gap,gb/gap ,gb/gap)
      }
        pop()
    }
    ground2(x,y,n){
        push()
        fill("#E68222")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.05)
        stroke("#636350")
        translate(x,y)
        scale(0.8)
        strokeWeight(2)
      // rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
      if(n){
          var gap=2
        if(n.t==0)line(-gb/gap, -gb/gap,gb/gap ,-gb/gap)
        if(n.b==0)line(-gb/gap, gb/gap,gb/gap ,gb/gap)
        if(n.l==0)line(-gb/gap, -gb/gap,-gb/gap ,gb/gap)
        if(n.r==0)line(gb/gap, -gb/gap,gb/gap ,gb/gap)
      }
        pop()
    }
    wall1(x,y,n,noi=false){
        push()
        fill("#9D9D9D")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        translate(x,y)
      //  rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
        if(n){
          if(n.t==0)line(-gb/2, -gb/2,gb/2 ,-gb/2)
          if(n.b==0)line(-gb/2, gb/2,gb/2 ,gb/2)
          if(n.l==0)line(-gb/2, -gb/2,-gb/2 ,gb/2)
          if(n.r==0)line(gb/2, -gb/2,gb/2 ,gb/2)
        }
        if(noi){ 
            stroke(0,100)
            strokeWeight(3)
            for (let i = 0; i <10;i++){
          //  point(gb*0.2+1*gb, gb*0.3)
            }
        }
        pop()
    }
    wall2(x,y,n){
        push()
        fill("#915C16")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        translate(x,y)
        //  rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
          if(n){
            if(n.t==0)line(-gb/2, -gb/2,gb/2 ,-gb/2)
            if(n.b==0)line(-gb/2, gb/2,gb/2 ,gb/2)
            if(n.l==0)line(-gb/2, -gb/2,-gb/2 ,gb/2)
            if(n.r==0)line(gb/2, -gb/2,gb/2 ,gb/2)
          }        pop()
    }
    wall3(x,y,n){
        push()
        fill("#F54F0A")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        translate(x,y)
        //  rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
          if(n){
            if(n.t==0)line(-gb/2, -gb/2,gb/2 ,-gb/2)
            if(n.b==0)line(-gb/2, gb/2,gb/2 ,gb/2)
            if(n.l==0)line(-gb/2, -gb/2,-gb/2 ,gb/2)
            if(n.r==0)line(gb/2, -gb/2,gb/2 ,gb/2)
          }        pop()
    }
    wall4(x,y,n){
        push()
        fill("#6C688E")
        rectMode(CENTER);
        noStroke();
        rect(x, y,this.gapBetween*1,this.gapBetween*1);
        strokeWeight(this.gapBetween*0.1)
        stroke(0)
        translate(x,y)
        //  rect(0, 0,this.gapBetween*0.8,this.gapBetween*0.9);
          if(n){
            if(n.t==0)line(-gb/2, -gb/2,gb/2 ,-gb/2)
            if(n.b==0)line(-gb/2, gb/2,gb/2 ,gb/2)
            if(n.l==0)line(-gb/2, -gb/2,-gb/2 ,gb/2)
            if(n.r==0)line(gb/2, -gb/2,gb/2 ,gb/2)
          }        pop()
    }
}