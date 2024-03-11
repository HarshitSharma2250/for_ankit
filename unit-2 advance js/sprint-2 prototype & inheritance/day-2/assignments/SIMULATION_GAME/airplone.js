

function Vehicle(brand, model, speed, fuelType){

    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fuelType=fuelType;
    
    }
    
    Vehicle.prototype.accelerate=function(speedincrease){
    this.speed+=speedincrease;
    console.log(`your speed is not ${this.speed}`)
    }
    Vehicle.prototype.brake=function(breakspeed){
    if(this.speed>0){
        this.speed-=breakspeed;
    }
    console.log(`your speed is not ${this.speed}`)
    }
    
    Vehicle.prototype.refuel=function(){
        console.log(`Vehicle is refuling`)
    }


    function Airplane (brand, model, speed, fuelType,numberOfEngines, hasLandingGear ){
        Vehicle.call(this,brand, model, speed, fuelType)
        this.numberOfEngines=numberOfEngines;
        this.hasLandingGear=hasLandingGear
        }
    
    
        Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)
        Airplane.prototype.takeOff=function(){
            console.log('the airplane is taking off ')
        }
    
        let a1=new Airplane('kingfisher','dont know',1200,'special type',2,true)

console.log(a1)
a1.accelerate(300)
a1.brake(100)
a1.refuel()
a1.takeOff()