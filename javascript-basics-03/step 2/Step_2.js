 function myFunction(){
     var txt = document.querySelector("#texte");
     var showParag = document.querySelector("#show");
     var hideParag = document.querySelector("#hide");

     showParag.addEventListener('click',function(){
       txt.style.display="block";
     })
     hideParag.addEventListener('click',function(){
      txt.style.display="none";
    })
  }


   

  