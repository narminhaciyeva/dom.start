// 2 dənə input verilir. 1cisinə ekranda çıxmasını istədiyimiz sözü yazırıq 2cisində isə yazının rəngini seçirik. 
// Düyməyə kliklənən zaman həmin rəngdə o yazı HTML-da görünsün

const inp = document.querySelectorAll("input")[0];
const inp2 = document.querySelectorAll("input")[1];
const btn = document.querySelector("button");
let write = [];

function addArr() {
    write.push(inp.value);
    document.getElementById("text").style.color = inp2.value;
    document.getElementById("text").innerHTML = write;





}
