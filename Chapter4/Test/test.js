function myFunction() {
    var x = document.getElementById("myTopnav");
    alert("hello world");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else if (x.className === "homePage") {
        x.className += "HomePage";
    }
    else {
        x.className = "topnav";
    }
}