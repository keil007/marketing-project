document.addEventListener("load", begone());

function begone()
{
        setTimeout(function(){$("#start").addClass("gone");},5000);
        setTimeout(function(){
                document.getElementById("listone").style.display = "block";
                document.getElementById("listone").style.WebkitAnimation = "fadeInUp 1.8s ease-in-out";
                document.getElementById("listone").style.animation = "fadeInUp 1.8s ease-in-out";
        },6000);
}

var x = document.getElementById("eight");
x.addEventListener("mouseenter", myFunction);
var abc=1;
var pochuj=1;

function myFunction()
{
        if(abc<=26)
        {
                var jebac="kropka"+abc;
                document.getElementById(jebac).style.opacity = "1";
                document.getElementById(jebac).style.background= "#e1c076";
                abc++;
                pochuj++;
                setTimeout(myFunction,150);
        }
        if(pochuj==2)
        {
                document.getElementById("mocne").style.left="+7vw";
                document.getElementById("mocne").style.opacity="1";
                $("#kaf1").fadeIn(2000);
        }
        if(pochuj==11)
        {
                document.getElementById("slabe").style.left="+57vw";
                document.getElementById("slabe").style.opacity="1";
                $("#kaf2").fadeIn(2000);
        }
        if(pochuj==18)
        {
                document.getElementById("szanse").style.left="+7vw";
                document.getElementById("szanse").style.opacity="1";
                $("#kaf3").fadeIn(2000);
        }
        if(pochuj==26)
        {
                document.getElementById("zagrozenia").style.left="+57vw";
                document.getElementById("zagrozenia").style.opacity="1";
                $("#kaf4").fadeIn(2000);
        }
        else {x.removeEventListener("mouseenter", myFunction);}
}

var xd=true;

function znikanie()
{
        if(xd){
                document.getElementById("a").style.display = "none";
                document.getElementsByClassName("mig")[0].style.display = "none";
                document.getElementsByClassName("mig")[1].style.display = "none";
                document.getElementsByClassName("mig")[2].style.display = "none";
                document.getElementsByClassName("mig")[3].style.display = "none";
                //alert(xd);
                xd=false;
                setTimeout(znikanie,750);
        }
        else {
                document.getElementById("a").style.display = "inline";
                document.getElementsByClassName("mig")[0].style.display = "inline";
                document.getElementsByClassName("mig")[1].style.display = "inline";
                document.getElementsByClassName("mig")[2].style.display = "inline";
                document.getElementsByClassName("mig")[3].style.display = "inline";
                //alert(xd);
                xd=true;
                setTimeout(znikanie,750);
        }
}

var nine0 = document.getElementsByClassName("ninehover")[0];
nine0.addEventListener("mouseover", ShowMe1);
nine0.addEventListener("mouseout", LeaveMe1);

var nine1 = document.getElementsByClassName("ninehover")[1];
nine1.addEventListener("mouseover", ShowMe2);
nine1.addEventListener("mouseout", LeaveMe2);

var nine2 = document.getElementsByClassName("ninehover")[2];
nine2.addEventListener("mouseover", ShowMe3);
nine2.addEventListener("mouseout", LeaveMe3);

var nine3 = document.getElementsByClassName("ninehover")[3];
nine3.addEventListener("mouseover", ShowMe4);
nine3.addEventListener("mouseout", LeaveMe4);

var nine4 = document.getElementsByClassName("ninehover")[4];
nine4.addEventListener("mouseover", ShowMe5);
nine4.addEventListener("mouseout", LeaveMe5);

function ShowMe1()
{
        document.getElementsByClassName("nineshow")[0].style.left="+60vw";
        document.getElementsByClassName("nineshow")[0].style.opacity="1";
}

function LeaveMe1()
{
        document.getElementsByClassName("nineshow")[0].style.left="+50vw";
        document.getElementsByClassName("nineshow")[0].style.opacity="0";
}


function ShowMe2()
{
        document.getElementsByClassName("nineshow")[1].style.left="+60vw";
        document.getElementsByClassName("nineshow")[1].style.opacity="1";
}

function LeaveMe2()
{
        document.getElementsByClassName("nineshow")[1].style.left="+50vw";
        document.getElementsByClassName("nineshow")[1].style.opacity="0";
}

function ShowMe3()
{
        document.getElementsByClassName("nineshow")[2].style.left="+60vw";
        document.getElementsByClassName("nineshow")[2].style.opacity="1";
}

function LeaveMe3()
{
        document.getElementsByClassName("nineshow")[2].style.left="+50vw";
        document.getElementsByClassName("nineshow")[2].style.opacity="0";
}

function ShowMe4()
{
        document.getElementsByClassName("nineshow")[3].style.left="+60vw";
        document.getElementsByClassName("nineshow")[3].style.opacity="1";
}

function LeaveMe4()
{
        document.getElementsByClassName("nineshow")[3].style.left="+50vw";
        document.getElementsByClassName("nineshow")[3].style.opacity="0";
}

function ShowMe5()
{
        document.getElementsByClassName("nineshow")[4].style.left="+60vw";
        document.getElementsByClassName("nineshow")[4].style.opacity="1";
}

function LeaveMe5()
{
        document.getElementsByClassName("nineshow")[4].style.left="+50vw";
        document.getElementsByClassName("nineshow")[4].style.opacity="0";
}


$("#eleven").mouseover(function(){
        $("#eleventext").fadeIn(1200);
      });


      function twelve(){
        document.getElementById("twelveright").style.top="3vh";
        document.getElementById("twelveright").style.opacity="1";
        document.getElementById("twelveright").style.transform="rotate(-5deg)";
}

$("#twelve").mouseover(function(){
        document.getElementById("twelveleft").style.top="3vh";
        document.getElementById("twelveleft").style.opacity="1";
        document.getElementById("twelveleft").style.transform="rotate(10deg)";
        setTimeout(twelve, 550);
      });


      
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Group', 'Percantage'],
          ['Nothing',     50],
          ['Nastolatkowie (13-17 lat)',     15],
          ['Dorośli (powyżej 25 lat)',  50],
          ['Młodzież/ studenci (18-25 lat)',      35],
          ['Emptiness', 50]
        ]);

        var options = {
          pieSliceText: 'none',
          backgroundColor: 'transparent',
          pieSliceBorderColor: 'transparent',
          tooltip: { trigger: 'none' },
          legend: 'none',
          slices: {
                0: { color: 'transparent' },
                1: { color: '#333' },
                2: { color: '#7697e1' },
                3: { color: '#fff' },
                4: { color: 'transparent' }}
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

var f = document.getElementById('donut');
var bruh=true;
function rotato(){
        if(bruh)
        {f.style.transform = 'rotate(60000deg)';
        setTimeout(rotato,1);}
        else {f.style.transform = 'rotate(60000deg)';
        setTimeout(rotato,1);}
}

        document.addEventListener('load', rotato(),true);   

        document.getElementsByClassName('konkurenci')[0].addEventListener('mouseover', function(){   
                alert('noprzeceidziala');
                bruh=false;
        });