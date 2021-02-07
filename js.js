document.addEventListener("load", begone());

function begone()
{
        $("body").addClass("stop-scrolling");
        setTimeout(function(){$("#start").addClass("gone");},5000);
        setTimeout(function(){
                document.getElementById("listone").style.display = "block";
                document.getElementById("toplogo").style.display = "block";
                document.getElementById("listone").style.WebkitAnimation = "fadeInUp 1.8s ease-in-out";
                document.getElementById("toplogo").style.WebkitAnimation = "fadeInUp 1.8s ease-in-out";
                document.getElementById("listone").style.animation = "fadeInUp 1.8s ease-in-out";
                document.getElementById("toplogo").style.animation = "fadeInUp 1.8s ease-in-out";
                setTimeout(function()
                {
                        $("body").removeClass("stop-scrolling");
                        $("#content").addClass("start-scrolling");
                }
                ,1800);
        },6000);
}

// -----------------------------------------------------------------------------------------------------  SCROLL  ------------------------------------------------------------------------------------------------

$('#buttonik').on('click', function() {
        const images = $('#two').position().top;

        $('html, body').animate(
          {
            scrollTop: images
          },
          1100
        );
      });

$('#BackToTop').on('click', function() {
        const toptop = $('#one').position().top;

        $('html, body').animate(
          {
            scrollTop: toptop
          },
          1100
        );
      });

// -------------------------------------------------------------------------------------------------------  FOUR  --------------------------------------------------------------------------------------------------

$("#four").mouseover(function(){
        $("#fourtext").fadeIn(2000);
      });

// ------------------------------------------------------------------------------------------------------  SEVEN  --------------------------------------------------------------------------------------------------

$(".seven-content-1").mouseenter(function(){
        $(this).css("top","5vh");
        $(".triangle-up").css("top","-5vh");
        $(this).css("left","22vw");
        $(".triangle-up").css("left","2vw");
});

      $(".seven-content-2").mouseenter(function(){
        $(this).css("top","55vh");
        $(".triangle-down").css("top","45vh");
        $(this).css("left","22vw");
        $(".triangle-down").css("left","2vw");
      });

$("#seven-picture1").mouseenter(function(){
        $(this).css("top","10vh");
        $(".triangle-right").css("top","-5vh");
        $(this).css("left","62vw");
        $(".triangle-right").css("left","52vw");
      });

$("#seven-picture2").mouseenter(function(){
        $(this).css("top","10vh");
        $(".triangle-left").css("top","-5vh");
        $(this).css("left","7vw");
        $(".triangle-left").css("left","2vw");
      });


      $(".seven-content-1").mouseleave(function(){
        $(this).css("top","10vh");
        $(".triangle-up").css("top","0vh");
        $(this).css("left","20vw");
        $(".triangle-up").css("left","0vw");
});

      $(".seven-content-2").mouseleave(function(){
        $(this).css("top","60vh");
        $(".triangle-down").css("top","50vh");
        $(this).css("left","20vw");
        $(".triangle-down").css("left","0vw");
      });

$("#seven-picture1").mouseleave(function(){
        $(this).css("top","15vh");
        $(".triangle-right").css("top","0vh");
        $(this).css("left","60vw");
        $(".triangle-right").css("left","50vw");
      });

$("#seven-picture2").mouseleave(function(){
        $(this).css("top","15vh");
        $(".triangle-left").css("top","0vh");
        $(this).css("left","5vw");
        $(".triangle-left").css("left","0vw");
      });

// -----------------------------------------------------------------------------------------------------  EIGHT  ------------------------------------------------------------------------------------------------

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
                      document.getElementById("zagrozenia").style.display="inline";
                      document.getElementById("slabe").style.display="inline";
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
                      //zmiana
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
                      //zmiana
                      $("#kaf4").fadeIn(2000);
              }
              else {x.removeEventListener("mouseenter", myFunction);}
      }

// -------------------------------------------------------------------------------------------------------  NINE  --------------------------------------------------------------------------------------------------

        var xd=true;
      function znikanie()
      {
              var navbar = document.getElementsByClassName("scrollup")[0];

              if (window.pageYOffset >= 1400) {
                      navbar.classList.remove("gone");
              } else {
                      navbar.classList.add("gone");
              }

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

// -------------------------------------------------------------------------------------------------------  TEN  --------------------------------------------------------------------------------------------------

      $("#ten3").mouseenter(function(){
              $(this).css("width","40vw");
              $("#ten4").css("width","30vw");
              $("#ten5").css("width","30vw");
      });
      $("#ten4").mouseenter(function(){
              $(this).css("width","40vw");
              $("#ten3").css("width","30vw");
              $("#ten5").css("width","30vw");
      });
      $("#ten5").mouseenter(function(){
              $(this).css("width","40vw");
              $("#ten4").css("width","30vw");
              $("#ten3").css("width","30vw");
      });

      $("#ten3").mouseleave(function(){
              $(this).css("width","33vw");
              $("#ten4").css("width","33vw");
              $("#ten5").css("width","33vw");
      });
      $("#ten4").mouseleave(function(){
              $(this).css("width","33vw");
              $("#ten3").css("width","33vw");
              $("#ten5").css("width","33vw");
      });
      $("#ten5").mouseleave(function(){
              $(this).css("width","33vw");
              $("#ten4").css("width","33vw");
              $("#ten3").css("width","33vw");
      });

// ------------------------------------------------------------------------------------------------------  ELEVEN  -------------------------------------------------------------------------------------------------

      $("#eleven").mouseover(function(){
              $("#eleventext").css("opacity","1");
            });

// ------------------------------------------------------------------------------------------------------  TWELVE  -------------------------------------------------------------------------------------------------

            function twelve(){
              document.getElementById("twelveright").style.top="20vh";
              document.getElementById("twelveright").style.opacity="1";
              document.getElementById("twelveright").style.transform="rotate(-5deg)";
      }

      $("#twelve").mouseover(function(){
              document.getElementById("twelveleft").style.top="20vh";
              document.getElementById("twelveleft").style.opacity="1";
              document.getElementById("twelveleft").style.transform="rotate(10deg)";
              setTimeout(twelve, 550);
            });

// ----------------------------------------------------------------------------------------------------  THIRTEEN  -----------------------------------------------------------------------------------------------

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

              var data = google.visualization.arrayToDataTable([
                ['Group', 'Percantage'],
                ['Nastolatkowie (13-17 lat)',     15],
                ['Dorośli (powyżej 25 lat)',  50],
                ['Młodzież/ studenci (18-25 lat)',      35],
              ]);

              var options = {
                backgroundColor: 'transparent',
                tooltip: { trigger: 'none' },
                legend: 'none',
                pieStartAngle: 35,
                'is3D':true,
                slices: {
                      0: { color: '#222' },
                      1: { color: '#e1c076' },
                      2: { color: '#7697e1' }}
              };

              var chart = new google.visualization.PieChart(document.getElementById('piechart'));

              chart.draw(data, options);
            }

// -----------------------------------------------------------------------------------------------------  FIFTEEN  ------------------------------------------------------------------------------------------------
/*
var f = document.getElementById('donut');
var konk1=document.getElementsByClassName("konkurenci")[0];
var konk2=document.getElementsByClassName("konkurenci")[1];
var konk3=document.getElementsByClassName("konkurenci")[2];
var konk4=document.getElementsByClassName("konkurenci")[3];
var konk5=document.getElementsByClassName("konkurenci")[4];

function rotato(){
        f.style.animationPlayState = 'running';
        konk1.style.animationPlayState='running';
        konk2.style.animationPlayState='running';
        konk3.style.animationPlayState='running';
        konk4.style.animationPlayState='running';
        konk5.style.animationPlayState='running';
        $("#konkurenci1").removeClass("powieksz1");
        $("#powieksz1").css("opacity","0");
}

function trzym(){
        f.style.animationPlayState = 'paused';
        konk1.style.animationPlayState='paused';
        konk2.style.animationPlayState='paused';
        konk3.style.animationPlayState='paused';
        konk4.style.animationPlayState='paused';
        konk5.style.animationPlayState='paused';
        $(this).addClass("powieksz1");
        $("#powieksz1").css("opacity","1");
}
        document.getElementsByClassName('konkurenci')[0].addEventListener('mouseenter', trzym);
        document.getElementsByClassName('konkurenci')[1].addEventListener('mouseenter', trzym);
        document.getElementsByClassName('konkurenci')[2].addEventListener('mouseenter', trzym);
        document.getElementsByClassName('konkurenci')[3].addEventListener('mouseenter', trzym);
        document.getElementsByClassName('konkurenci')[4].addEventListener('mouseenter', trzym);

        document.getElementsByClassName('konkurenci')[0].addEventListener('mouseleave', rotato);
        document.getElementsByClassName('konkurenci')[1].addEventListener('mouseleave', rotato);
        document.getElementsByClassName('konkurenci')[2].addEventListener('mouseleave', rotato);
        document.getElementsByClassName('konkurenci')[3].addEventListener('mouseleave', rotato);
        document.getElementsByClassName('konkurenci')[4].addEventListener('mouseleave', rotato);

/*
        Zajdzie zwiększenie diva, animacja staje w miejscu i opacity elementów wewnątrz zmienia się na 1
*/