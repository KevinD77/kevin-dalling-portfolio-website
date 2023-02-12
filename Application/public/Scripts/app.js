/* Name: Kevin Dalling
   ID#: 301247589
   Date: February 4, 2023
*/

// IIFE - Immediately Invoked Function Express
(function(){
    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons){
            button.addEventListener('click',(event)=> {
               if(!confirm("Are you sure?"))
               {
                event.preventDefault();
                window.location.assign('/contact-list')
               }

          });
        }
    }

    window.addEventListener("load",Start)
})();