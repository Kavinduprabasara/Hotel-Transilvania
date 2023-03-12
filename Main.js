
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("nav").className = "navbar2";
    document.getElementById("menu-container").className = "menu-container2";
  } else {
    document.getElementById("nav").className = "navbar";
    document.getElementById("menu-container").className = "menu-container";
  }
}

function click() {
    if(document.getElementById("dropdown").className == "dropdown"){
        document.getElementById("dropdown").className = "dropdown2";
    }
    else{
        document.getElementById("dropdown").className = "dropdown";
    }
}

function update(){
  if(document.getElementById("top").style.display == "none"){
      document.getElementById("top").style.display = "block";
  }
  else{
      document.getElementById("top").style.display = "none";
  }
}