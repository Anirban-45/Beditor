

function countWords(str) {
str = str.replace(/(^\s*)|(\s*$)/gi,"");
str = str.replace(/[ ]{2,}/gi," ");
str = str.replace(/\n /,"\n");
var words = str.split(' ').length;

    document.getElementById("words-counter").innerHTML = words + " words"
}
