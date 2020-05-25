// Challenge 1

var sentence="Vienna is a nice city";
sentence_array=new Array();
sentence_array=sentence.split(" ");

document.write("<table>")

for (var i = 0 ; i <= sentence_array.length - 1; i++) {
document.write("<tr>");
for (var j = 0; j <= i; j++) {
	document.write("<td></td>");
}
document.write("<td>");
document.write(sentence_array[i]);
document.write("</td></tr>");
}
document.write("</table>");


// Challenge 2

var structure_me="Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";
structured=new Array();
structured=structure_me.split("$");
//document.write(structured.join(" "));
point_break=new Array();
document.write(structured.join(" ").split(".").join(".<br>"))
