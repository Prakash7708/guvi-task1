//day8 task 1
class Movie{
    constructor(title,studio,rating) {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(){
        return this.rating;
    }   
}
const  CasinoRoyal= new Movie ("Casinoroyal","Eon","PG13");
console.log(CasinoRoyal);


//task 2
class Person{
    constructor(name,age,gender,religion,nationalty){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.religion=religion;
        this.nationalty=nationalty;

    }
};
const prakash= new Person("prakash",23,"male","hindu","indian");
console.log(prakash);

//task 3
class Uperprice{
    constructor(car,normal,vip) {
        this.car=car;
        this.normal=normal;
        this.vip= vip;
    }
    minimumCharge(a){
       //var withraw =(this.balance-
        
        if(this.normal=a){
            
            return "car booked";
        }else{
            console.log(" want more money to booking");
        }
        
    }vIp(c){
        if(c=this.vip){
            return "car booked"
        }
        
    }
};
const booking= new Uperprice ("car",2_000,5_000);
console.log(booking.minimumCharge(2000));
console.log(booking.vIp(5000));
