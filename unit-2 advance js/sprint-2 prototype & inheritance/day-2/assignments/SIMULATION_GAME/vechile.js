

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

function Car(numberOfWheels,brand, model, speed, fuelType ){
    Vehicle.call(this,brand, model, speed, fuelType)
this.numberOfWheels=numberOfWheels;
}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype)

Car.prototype.honk=function(){
    console.log('peeee.........,peeeee......... ')
}


    let c1=new Car(4,'asdf','maruti',123,'petrol')
    console.log(c1)
    c1.accelerate(20)
    c1.brake(15)
    c1.refuel()
    c1.honk()




