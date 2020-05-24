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


$("#eleven").mouseover(function(){
        $("#eleventext").fadeIn(1200);
      });

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Group', 'Percantage'],
          ['Nothing',     50],
          ['Dorośli (powyżej 25 lat)',  50],
          ['Nastolatkowie (13-17 lat)',     15],
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