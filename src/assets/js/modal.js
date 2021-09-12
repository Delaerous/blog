const modalBtn = document.querySelectorAll('[data-modal');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__cross');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(btn => 
    btn.addEventListener('click', event=> {
        let $this = event.currentTarget;
        let modalID = $this.getAttribute('data-modal')
        let modal = document.getElementById(modalID);
        let modalContent = modal.querySelector('.modal__content');
            
        modalContent.addEventListener('click', event =>{
                event.stopPropagation();
        
            });

        modal.classList.add('show');
        body.classList.add('blocked');
        setTimeout(function(){
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);
    }

    ));

modalClose.forEach(btn => 
    btn.addEventListener('click', event=> {
       let currentModal = event.target.closest('.modal');
       closeModal(currentModal);}

        )
    );

    modal.forEach(btn => 
        btn.addEventListener('click', event=> {
           let currentModal = event.currentTarget;
           
             closeModal(currentModal)
        })
        );

function closeModal(currentModal){
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style')
    setTimeout(() =>{
        currentModal.classList.remove('show');
        body.classList.remove('blocked');
        
    }, 300);
}