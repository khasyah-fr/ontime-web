function showMore() {
    const more = document.getElementById("more");
    const btn = document.getElementById("myBtn");
    if(more.style.display === "none"){
      more.style.display = "block";
      btn.innerHTML = "&#708;"
    }
    else{
      btn.innerHTML = "&#709;";
      more.style.display = "none";
    }
 }

 function showMore2() {
    const more = document.getElementById("smore");
    const btn = document.getElementById("myBtn2");
    if(more.style.display === "none"){
      more.style.display = "block";
      btn.innerHTML = "&#708;"
    }
    else{
      btn.innerHTML = "&#709;";
      more.style.display = "none";
    }
 }