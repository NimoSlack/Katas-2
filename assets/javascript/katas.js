//Katas 01:Add

function add(x, y) {
        return x+y;
}
console.log(add(2,3));

//Katas 02: Multiply

function Multiply(x,y) {
        let nimo=0
        for(let i= 0;i<y;i+=1)
            {z= add(x,0)
            nimo=add(z,nimo)}
            return nimo
        }
        console.log(Multiply(3,4))

//Katas 03: Power
function Power(x,y) {
    let nimo=1
    for(let i= 0;i<y;i+=1)
        {z= add(x,0)
        nimo=Multiply(z,nimo)}
        return nimo
     }
        console.log(Power(2,6));

    //Katas 04: Factorial
    function factorial(x) {
        let nimo=1
        let exponent=x
        for(let i= 0;i<x;i+=1)
            {z= Multiply(exponent,1)
            nimo=Multiply(z,nimo)
            exponent=add(exponent,-1)}
            return nimo
            }
            console.log(factorial(2);)

