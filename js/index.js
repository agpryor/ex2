window.onload = function() {
  //check that js is working
  console.log("reading js");

  //capture the submit event
  document.f.onsubmit = processForm;
  
  //capture the reset event
  document.f.onreset=resetPage;

  //define process function
  function processForm() {

    //store user name in a variable
    var userName = document.f.userName.value;

    var userColor = document.f.color.value;
    
    var userSong = document.f.song.value;
    
    var userAnimal = document.f.animal.value;
    
    var userMovie = document.f.movie.value;

   // if (userName == "" || userColor == "") {
  //    alert("fill out the form!");
   // }

    //capture the msg element to change it's text and html
    var myMsg = document.getElementById("myMsg");

    /*
    myMsg.innerHTML = "The user's name is " + userName + ". The user's favorite color is " + userColor + ".";
*/
    myMsg.innerHTML= "The user's name is " + userName + ". " + userName + "'s favorite color to bet on is " + userColor + ". " + userName + "'s favorite song to listen to is " + userSong + ". " + userName + "'s favorite animal to have as a pet is a " + userAnimal + ". " + userName + "'s favorite movie to show every person they meet is " + userMovie + ".";
    
    //use the console.log to concatenate a message

    //add a background color change if the user chooses blue as a favorite color

    //prevent page from reloading
    return false;
  }
  
  function resetPage(){
    userName.value="";
    myMsg.innerHTML = "";
    
    return false;
  }
}