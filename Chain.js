class Chain{
    constructor(BodyA, BodyB){
        var options = {
           bodyA : BodyA,
           bodyB : BodyB,
           length : 4,
           stiffness : 0.2 
        }
        this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
    var posA = this.chain.bodyA.position
    var posB = this.chain.bodyB.position    
    line (posA.x, posA.y, poosB.x, posB.y)
    }

    
}