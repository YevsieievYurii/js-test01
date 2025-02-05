const ulList = document.querySelector("#task-list");
ulList.addEventListener("click", handleClick);

function handleClick(evt) {
    // console.log(evt.currentTarget);
    
    if(evt.target.nodeName === "BUTTON"){
        console.log(evt.target.closest("[data-id]"));
        const evtTargetLi = evt.target.closest("[data-id]")
        console.log(evtTargetLi.dataset);
    }
    // console.log(evt.target.nodeName);
    
}