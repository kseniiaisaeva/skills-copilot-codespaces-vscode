function skillsMember() {
    // get the value of the input field with id="skills"
    var x = document.getElementById("skills").value;
    // check if the input is empty
    if (x == "") {
        // if the input is empty, display a message
        alert("You must write something!");
    } else {
        // if the input is not empty, display the input and add it to the list
        document.getElementById("skillsList").innerHTML = x;
    }
}