fetch("viernes.json")
.then(function(response){
return response.json();
})
.then(function(viernes){
let placeholder=document.querySelector("#data-output");
let out="";
for(let dia of viernes){
out+=`
<table border="darkblue">
<tr>
<td>${dia.id}</td>
<td>${dia.nombre}</td>
<td>${dia.edad}</td>
<td>${dia.identidadsecreta}</td>
<td>${dia.poderes}</td>
<td><img src='${dia.imagen}' width="200px" height="200px"></td>
</tr> </table> `;

}placeholder.innerHTML=out;
})
