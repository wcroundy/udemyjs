let tipcalc = function(total, rate = 20)
{
    rate = rate * 0.01
    return rate * total
}

let out = tipcalc()
console.log("Default Tip: ",out)
out = tipcalc(100,18)
console.log("actual Tip: ",out)
