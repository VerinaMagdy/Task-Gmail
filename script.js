var d=document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked=null;

d.forEach(checkbox =>checkbox.addEventListener('click',function()

 {
     //check if shift key is pressed down 
     //and it is a checked box
    let boxesBetween=false;
     
    if(event.shiftKey && this.checked)
     { 
        //loop on every checkbox 
        d.forEach(checkbox => 
    {
        console.log(checkbox);
        if(checkbox==lastChecked || checkbox==this )
        {
            boxesBetween=!boxesBetween;
        }
        if (boxesBetween)
        {
            //to check the boxes between the ones selected
            console.log("tobechecked");
            checkbox.checked=true;
        }
    })
     }
    //to make the last checkbox the last one i clicked on 
    lastChecked=this;
}

));  