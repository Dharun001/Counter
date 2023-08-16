let count=document.getElementById("num").value
function add()
{
        count++;
        document.getElementById("num").innerHTML=count;
}
function sub()
{
    if(count>0)
    {
    count--;
    document.getElementById("num").innerHTML=count;
    }
}
function reset()
{
    count=0;
    document.getElementById("num").innerHTML=count;
}