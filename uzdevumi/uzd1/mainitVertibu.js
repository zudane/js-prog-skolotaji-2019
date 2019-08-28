
function palielinat(){ 
   
   let z= document.getElementById("vertiba").value;
   z++;
   document.getElementById("vertiba").value= z;


}
function samazinat(){
    let z= document.getElementById("vertiba").value;
   if (z>0) { z--;} 
   document.getElementById("vertiba").value= z;
     
}