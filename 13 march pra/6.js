const person= {
    name:"mithun",
    age:21,
    address:{
        street:"b8,Block B,Industrial Area.",
        city:"Sector 62,Noida",
        state:"Utter Predesh",
    },
};


function fun(pers){
    console.log(pers.address.street)
    console.log(pers.name)
}

fun(person)