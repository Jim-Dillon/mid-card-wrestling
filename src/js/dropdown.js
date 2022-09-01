window.addEventListener('load', (event) => {



    const addDropdown = (e) => {
        e.preventDefault();
        const header = document.querySelector('.dropdown-header');
        console.log(header);
        if (header) {
            header.classList.add('open');       
        }  
    }
    
    const openButton = document.querySelector(".dropdown-icon");
    openButton.addEventListener("click", addDropdown);
    
    
    const removeDropdown = (e) => {
        e.preventDefault();
        const header = document.querySelector('.dropdown-header');
        console.log(header);
        if (header) {
            header.classList.remove('open');
        }
    }
    
    
    const closeButton = document.querySelector(".x-icon");
    closeButton.addEventListener("click", removeDropdown);
    
    
    
    });