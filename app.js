
function myFunction1() {
    var startPoint = document.getElementById("start1");
    var moreText = document.getElementById("showMore1");
    var btnText = document.getElementById("myBtn1");
  
    if (startPoint.style.display === "none") {
      startPoint.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    } else {
      startPoint.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
  };


  function myFunction2() {
    var startPoint = document.getElementById("start2");
    var moreText = document.getElementById("showMore2");
    var btnText = document.getElementById("myBtn2");
  
    if (startPoint.style.display === "none") {
      startPoint.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    } else {
      startPoint.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
  };

  function myFunction3() {
    var startPoint = document.getElementById("start3");
    var moreText = document.getElementById("showMore3");
    var btnText = document.getElementById("myBtn3");
  
    if (startPoint.style.display === "none") {
      startPoint.style.display = "inline";
      btnText.innerHTML = "Show more"; 
      moreText.style.display = "none";
    } else {
      startPoint.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "inline";
    }
  };


    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
