var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

document.getElementById("quote-selection").addEventListener("click", function() {
    alert('Age is an issue of mind over matter. If you don\'t mind, it doesn\'t matter. - Mark Twain');
});
