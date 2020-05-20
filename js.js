var x = document.getElementById("eight");
x.addEventListener("mouseenter", myFunction);
var abc=1;

function myFunction()
{
        console.log("dziala");
      if(abc<=26)
        {
                var jebac="kropka"+abc;
                document.getElementById(jebac).style.opacity = "1";
                document.getElementById(jebac).style.background= "#e1c076";
                abc++;
                setTimeout(myFunction,300);
        }
        else {x.removeEventListener("mouseenter", myFunction);}
}

var xd=true;

function znikanie()
{
        if(xd){
                document.getElementById("a").style.display = "none";
                //alert(xd);
                xd=false;
                setTimeout(znikanie,750);
        }
        else {
                document.getElementById("a").style.display = "inline";
                //alert(xd);
                xd=true;
                setTimeout(znikanie,750);
        }
}