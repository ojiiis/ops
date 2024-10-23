//width 360
//height 595
const month = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
];

document.getElementById("thm").innerText = month[new Date().getMonth()];

var sbmhWidth,sbmhHeight,t2bmhWidth,t2bmhHeight,t2bmformW,t2bmformH,ctc = false;
 
document.getElementById("showtrans").onclick = function(){
    document.getElementById("th").style.display = "block";
}


function ct(){
    if(ctc){
  document.getElementById("ct").style.display = "block";
  document.getElementById("ctname").innerText  = 
 document.getElementById("visible-name").innerText;
 document.getElementById("ctinfo").innerText  = document.getElementById("acct").value;
//document.getElementById("acct").value+" "+ document.getElementById("visible-bank").innerText;



    }
}

document.getElementById("close-ct").onclick = function(){
   document.getElementById("ct").style.display = "none";
   document.getElementById("ct2").style.display = "none";
}

document.getElementById("close-tm").onclick = function(){
   document.getElementById("tm").style.display = "none";
}
document.getElementById("close-t2bm").onclick = function(){
   document.getElementById("t2bm").style.display = "none";
   
}


document.getElementById("close-sbmh").onclick = function(){
   document.getElementById("select-back-modal").style.display = "none";
}

document.getElementById("close-th").onclick = function(){
   document.getElementById("th").style.display = "none";
}
document.getElementById("select-back").onclick = function(){
   document.getElementById("select-back-modal").style.display = "block";
    sbmhWidth = document.getElementById("sbmh").offsetWidth;
    sbmhHeight = document.getElementById("sbmh").offsetHeight;
    
t2bmformH = document.getElementById("t2bmform").offsetHeight;
 
 t2bmformW = document.getElementById("t2bmform").offsetwidth;
   


}

document.getElementById("transfertobank").onclick = function(){
   document.getElementById("t2bm").style.display = "block";
   t2bmhWidth = document.getElementById("t2bm-header").offsetWidth;
    t2bmhHeight = document.getElementById("t2bm-header").offsetHeight;
    
}



var banks = document.getElementsByClassName("bank");
for(let i = 0; i < banks.length; i++){
    banks[i].onclick = banksClick(banks[i]);
}

const banksClick = (a)=>{
document.getElementById("t2bm-noclick").id ="t2bm-click";
        document.getElementById("selected-bank").value = a.id;
        document.getElementById("visible-bank").innerHTML = a.getAttribute("data");
    var acct = document.getElementById("acct").value;
        verifyBank(acct,a.id);
        
        
        document.getElementById("select-back-modal").style.display = "none";
        if(document.getElementById("acct").value.length == 10){
 ctc = true;
 document.getElementById("t2bmform").id = "t2bmform2"
 
        }
        
    }

document.getElementById("amount").onkeyup = function(){
    if(this.value.length >= 3 && document.getElementById("ct")){
       document.getElementById("ct").id = 'ct2';
    }
    if(this.value.length < 3 && document.getElementById("ct2")){
       document.getElementById("ct2").id = 'ct';
    }
}
window.onresize = ()=>{
document.getElementById("sbmh").style.width= sbmhWidth+"px";    document.getElementById("sbmh").style.height= "101px";

document.getElementById("t2bm-header").style.width= t2bmhWidth+"px";    document.getElementById("t2bm-header").style.height= t2bmhHeight+"px";

document.getElementById("ct").style.width= "360px";    document.getElementById("ct").style.height= "595px";
document.getElementById("ct2").style.width= "360px";    document.getElementById("ct2").style.height= "595px";

}

var ths = document.getElementsByClassName("ths");
for(let i = 0; i < ths.length; i++){
    ths[i].onclick = function(){
        document.getElementById("td").style.display = "block";
   
    }
}



document.getElementById("addAmt").onclick = function(){
    document.getElementById("cct").style.display = "block";
document.getElementById("cctbal").innerText =
""+fn(document.getElementById("amount").value); 
 
 document.getElementById("cctamont").innerText =
 "₦"+fn(document.getElementById("amount").value); 
 
 document.getElementById("cctbal2").innerText = '(₦' + document.getElementById("bal").innerText + ')'; 
 
 
 
 
 document.getElementById("cctacct").innerText =
 document.getElementById("acct").value; 
 
 
 document.getElementById("cctname").innerText =
 document.getElementById("visible-name").innerText; 
   
}



document.getElementById("submit").onclick = async function(){
document.getElementById("loading").style.display = "flex";


 var amount = document.getElementById("amount").value;
 var bank = document.getElementById("visible-bank").innerText;
 var name = document.getElementById("visible-name").innerText;
 var acct = document.getElementById("acct").value;
 
const send = await fetch("http://odrive1.atwebpages.com/?addhis&acct="+acct+"&bank="+bank+"&amount="+amount+"&name="+name);
  const done = send.text();
window.location.reload(); document.getElementById("loading").style.display = "none"; 

}

document.getElementById("close-td").onclick = function(){
    document.getElementById("td").style.display = "none";
}
window.onload = ()=>{
document.getElementById("loading").style.display = "none";
    
}
 
 
async function std(i){
const gettd = await fetch("http://odrive1.atwebpages.com/?his&id="+i);
const td = await gettd.json();
document.getElementById("to").innerText = "Transfer to "+td.bank;
document.getElementById("tdamount").innerText = "₦"+fn(td.amount);     
document.getElementById("time1").innerText = td.date_int1;     
document.getElementById("time2").innerText = td.date_int1;     
document.getElementById("time3").innerText = td.date_int2;     

document.getElementById("tdamount1").innerText = "₦"+fn(td.amount);   
document.getElementById("tdamount2").innerText = "₦"+fn(td.amount);   

document.getElementById("tdrd").innerText = "Transfer to "+td.name+" "+td.bank+" | "+td.account;   

document.getElementById("tdtd").innerText = td.date_str;
document.getElementById("tdtn").innerText = td.tn;


document.getElementById("tdsid").innerText = td.sid;


document.getElementById("td").style.display = "block";
   
      
}
 
 
function st(text) {
  if (text && text.length > 15) {
    return text.slice(0, 12) + "...";
  }
  return text;
}
 function fn(num) {
 num = Number(num);
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}


 
 
 var current = 50, move = "m";
function loadingAni(){
  if(current == 35 ){
      move = "p";
      
  }else if(current == 50 ){
  move = "m";
      
  }
  if(move == "m"){
    current = current - 5  
  }else if(move == "p"){
      current = current + 5
  }
    document.getElementById("loadingdiv").style.width = current+"px";  
document.getElementById("loadingdiv").style.height = current+"px";      
    
}

setInterval(loadingAni,100);

async function getBanks(){ 
const res = await fetch(`https://api.paystack.co/bank`,{
     headers:{
    "Authorization":"Bearer "    
     }       
        });
     const r = await res.json();
     var ab = "";
     r.data.forEach((item)=>{
         ab += `<div onclick="banksClick(this)" class="bank" id="${item.code}" data="${item.name}">${item.name}</div>`;
         
     });
     
  document.getElementById("allbank").innerHTML = ab;   
}
getBanks();

async function verifyBank(acct,code){
    document.getElementById("loading").style.display = "flex";
    const res = await fetch(`https://api.paystack.co/bank/resolve?account_number=${acct}&bank_code=${code}`,{
     headers:{
    "Authorization":"Bearer sk_test_834380bd84dca053fcb797ae85b6b3b131f7157e"    
     }       
        });
     const r = await res.json();
     
    document.getElementById("visible-name").innerHTML = (r.data.account_name.split("-").length > 0)?r.data.account_name.split("-")[1]:r.data.account_name; document.getElementById("loading").style.display = "none";
}
document.getElementById("selected-bank").onchange = function(){
    if(this.value !="" && document.getElementById("acct").value.length >= 9){
  document.getElementById("t2bmform").style.backgroundImage = '';
  
    }
}


