(function(){
    
    const sliders = [...document.querySelectorAll('.testimony_body')];   /*los puntos dice que es un array*/
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    
    let value;
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show')
        if (value ===sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;   /*condicional valor = 0 me manda al ultimo con length o al primero*/


        }

        sliders[value-1].classList.add('testimony_body--show');

        /* console.log(value); */
    }

})();