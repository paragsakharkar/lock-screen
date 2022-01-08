function fizzbuzz(){
           let n= document.getElementById("t1").value;
            if(n=="")
            alert("enter n number to generate Fizz Buzz series");
            else
            for(i=1;i<=n;i++){
   var li_ref=document.createElement("LI");
   li_ref.innerText=i;
   if(i%3==0 && i%5==0)
   li_ref.innerText="FIZZBUZZ";
   else if(i%3==0)
   li_ref.innerText="FIZZ";
   else if(i%5==0)
   li_ref.innerText="BUZZ";
   else
   li_ref.innerText=i;
   let result_ref=document.getElementById("result");
   result_ref.appendChild(li_ref);
            }
        }
        