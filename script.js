    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }

    function closemenu(){
        sidemeu.style.right = "-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycby_xtmTnoqCkorQJqKcXeL1wqqww0qVjRXYIMmKOPHOC5pU0_1Qkbs-HCYFQ3M0-VvFbg/exec'
	const form = document.forms['contactform']
		  
	form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => alert("Thank you! submitted successfully." ))
		.then(() => {  window.location.reload(); })
		.catch(error => console.error('Error!', error.message))
		})

