let temp =115
let isfreez = temp <= 32

if(isfreez === true)
{
    console.log("It is freezing")
}

else if(isfreez === false && temp < 110)
{
    console.log("It is not freezing")
}
else if(temp >= 110)
{
    console.log("Its freaking hot!")
}