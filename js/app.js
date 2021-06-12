const items = document.querySelectorAll('img');
const nbSlide = items.length
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");

let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');
    if(count < nbSlide -1){
        count++
    }else{
        count =0;
    }

    items[count].classList.add('active');
};

/*
- l'image qui a l'index 0 enleve lui la classe active 
- SI l'index de l'image est inferieur au nombre d'index du tableau ALORS passe à l'index superieur
-sinon revient à l'index zero
  */

suivant.addEventListener("click", slideSuivante);

function slidePrecedente(){
    items[count].classList.remove('active');
    if(count > 0){
        count--
    }else{
        
        count= nbSlide -1;
    }

    items[count].classList.add('active');
};

/*
- l'image qui a l'index 0 enleve lui la classe active 
- SI l'index de l'image est superieur à l'index zero
ALORS passe à l'index inferieur
SINON revient au dernier index (moins 1) du tableau
  */

precedent.addEventListener("click", slidePrecedente);