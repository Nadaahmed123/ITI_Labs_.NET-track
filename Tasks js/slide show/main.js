var i = 0,imgarray = ["images/showcase.jpg","images/fashion1.jpg","images/fashion2.jpg", "images/trainer-1.jpg", "images/trainer-2.jpg","images/trainer-3.jpg"];


//startfunction();

function nextfunction() {
    i++;
    if (i >= imgarray.length) i = 0;
   myimg.src= imgarray[i];
}
function startfunction() {
    currentinterval=setInterval("nextfunction()", 1000);
}
function stopfunction() {
    clearInterval(currentinterval);
}
function prevfunction()
{
    i--;
    if (i < 0) i = imgarray.length - 1;
    myimg.src = imgarray[i];
}