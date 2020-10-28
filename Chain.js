class Slingshot{
    constructor(Body1,Point2){
        var options={
            bodyA:Body1,
            pointB:Point2,
            length: 100,
            stiffness:0.2

            
        }
        this.Sling=Constraint.create(options)
        World.add(world,this.Sling)


    }
    display(){
        if (this.Sling.bodyA!=null){

        
        var pointA= this.Sling.bodyA.position
        var pointB= this.Sling.pointB
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly(){
        this.Sling.bodyA=null;
    
    }
}