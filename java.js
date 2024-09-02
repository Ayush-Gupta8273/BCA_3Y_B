var arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

for (let i=0; i<arr.length; i++)
{
    if(arr[i]%2==0)
    {
        console.log("Divisible by 2")
    }
    elseif(arr[i]%3==0)
    {
        console.log("Divisible by 3")
    }
    elseif(arr[i]%5==0)
    {
        console.log("Divisible by 5")
    }
}