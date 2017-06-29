/* 
Change the background color of the entire document to red
Change the background color of just the "about me" portion to blue
Change the font-family of the entire document to sans-serif
Add your nickname
Add your favorites
Add your hometown

Extra Credit (still only using JavaScript)
Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
Create a new img element and set its src attribute to a picture of you. Append that element to the page.
*/

document.body.style.backgroundColor = "red"; 
document.body.style.fontFamily = "sans-serif";
document.getElementsByTagName("h1")[0].style.backgroundColor = "blue";
document.getElementById("nickname").innerHTML = "Jamie";
document.getElementById("favorites").innerHTML = "Coding, web development, piano";
document.getElementById("hometown").innerHTML = "Lugoff, SC";

var ul = document.getElementsByTagName("ul")[0];
var li = ul.getElementsByTagName("li");
for (var i=0; i<li.length; ++i) {
	li[i].className = "listitem"; 	
}

var listitems = document.getElementsByClassName("listitem");
for (var i=0; i<listitems.length; ++i) {
	listitems[i].style.color = "red";
}

var imgElement = document.createElement('div'); 
imgElement.innerHTML = "<div id='placehere' style='display: block; float: right;'><img src='https://i.ytimg.com/vi/amMuJBlJPE8/maxresdefault.jpg' /></div>";
document.getElementById("theBody").appendChild(imgElement);