function myFunction() {
    var x, output;
    x = document.getElementById("input").value;
    if (x==="events"||x==="Events"||x==="EVENTS") {
        window.open("http://technovanza.org/autobots.php");
    } 
    else if(x==="sponsors"||x==="Sponsors"||x==="SPONSORS"){
        window.open("http://technovanza.org/sponsors.php");
    }
    else if(x==="map"||x==="MAP"||x==="Map"){
        window.open("https://www.google.co.in/maps/place/Veermata+Jijabai+Technological+Institute/@19.0222386,72.8539803,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7cf268c5e833d:0xd2be7bbd1ee0e0a1!8m2!3d19.0222335!4d72.856169?hl=en");
    }
    else{
    window.alert("Invalid input");}
    document.getElementById("demo").innerHTML = output;
}
