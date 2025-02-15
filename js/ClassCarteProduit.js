/* Création de la classe carte pour la page Index
    affichageCarte() 
    => a pour but de créer les différents élements, de les assigner dans le DOM
    => a pour but de générer une URL à partir des éléments de la carte cliquée
*/
class Carte {

    constructor(lenses, _id, name, price, description, imageUrl){
        this.lenses = lenses,
        this._id = _id, 
        this.name = name,
        this.price = price,
        this.description = description,
        this.imageUrl = imageUrl
    }

    affichageCarte(){

        // Construction de l'élément carte
        const wrapper = document.getElementById('wrapper');
        const carte = document.createElement('article');
        carte.classList.add('carte');
        carte.setAttribute("id", this._id);

        const carteImage = document.createElement('img');
        carteImage.classList.add('carte__image');
        carteImage.setAttribute("src", this.imageUrl);

        const cartePrix = document.createElement('div');
        cartePrix.classList.add('carte__prix');
        cartePrix.textContent = this.displayPrice('fr-FR', 'EUR');  //???

        const carteDescription = document.createElement('div');
        carteDescription.classList.add('carte__description');       //???

        const carteDescriptionHover = document.createElement('div');
        carteDescriptionHover.classList.add('carte__description-hover');
        carteDescriptionHover.textContent = this.description;

        const carteTitre = document.createElement('h2'); 
        carteTitre.classList.add('carte__description__titre');
        carteTitre.textContent = this.name;
        
        const carteLenses = document.createElement('ul'); 
        carteLenses.classList.add('carte__description__option');
        
        this.lenses.forEach(lense => {                              //???this.lenses
            const carteLensesItems = document.createElement('li');
            carteLensesItems.textContent = lense;                       //???
            carteLenses.appendChild(carteLensesItems);                  //??? li
        });
        

        // Assignation des éléments 
        wrapper.appendChild(carte);
        carte.appendChild(carteImage);
        carte.appendChild(cartePrix);
        carte.appendChild(carteDescription);
        carte.appendChild(carteDescriptionHover);
        carteDescription.appendChild(carteTitre);
        carteDescription.appendChild(carteLenses);
        
        // Création automatique de l'URL de destination qui prend en compte l'Id de chaque produit.
        const urlElement = new URL("https://github.com/Av-code80/AvGhasemian-ShopProject-JS/blob/master/js/produit.js");
            urlElement.searchParams.set("id", this._id);
                
        // Au clic sur chaque carte, nous renvoyons vers l'URL correspondante au produit
        carte.addEventListener('click', function(){
            window.location.href = urlElement;
        });
    }
    
    //Permet d'afficher le prix en euros et format français
    displayPrice(lang, money){
        return Intl.NumberFormat(lang, { style: 'currency', currency: money }).format(this.price/100)
    }
}