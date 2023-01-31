/*------------------------------------------Assignment (Mathematical Shapes)-------------------------------------------------------*/

//diagonal of a square where the length of each side is 9.

function diagonal(sides=9){
    let value = sides * Math.sqrt(2);
    return value;
}

diagonal(); //Answer: 12.727922061357857

//area of a triangle where lengths of the three of its sides are 5, 6 and 7

function area_triangle(a = 5, b = 6, c = 7 ){
    let semi_perimeter = (a+b+c)/2;
    let area = Math.sqrt(semi_perimeter*(semi_perimeter-a)
                * (semi_perimeter-b) * (semi_perimeter-c));
    return area;
}

area_triangle(); //Answer: 14.696938456699069

//circumference and surface area of a circle whose radius is 4.

function circle_data (radius = 4) {
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * (radius ** 2);

    return `The circumference is ${circumference} and surface area is ${area}`;
}

circle_data(); //Answer: 'The circumference is 25.132741228718345 and surface area is 50.26548245743669'

/*-------------------------------------------------Assignment (Conditional Statements & Loops)------------------------------------------*/

//accepts two integers and displays the larger of the two

let largerInteger = (num1, num2) => num1 > num2 ? num1 : num2;

function largerIntegerThorough(num1,num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        return num1 > num2 ? num1 : num2;
    }else {
        return "PLease input integer numbers"
    }
}

//checks whether an integer is an even or an odd number

function evenOrOdd(num) {
    if(Number.isInteger(num)){
        return num%2 === 0 ? "Even" : "Odd"
    }else {
        return "PLease input an integer number"
    }
}