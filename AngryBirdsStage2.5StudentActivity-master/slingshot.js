class Slingshot
{
    constructor(body1,pointB)
    {
        var option={bodyA:body1,pointB:pointB,length:10,stiffness:0.04}
        this.sling=Matter.Constraint.create(option)
        World.add(world,this.sling)

    }

    display()
    {
        if(this.sling.bodyA!==null)
        {
        stroke("blue")
        strokeWeight(7)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        noStroke()
        }

    }

    fly()
    {
        this.sling.bodyA=null
    }
    

}