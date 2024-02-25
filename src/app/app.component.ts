import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-data-binding';
  userList = [
    {name:'Mohamed', age:10} ,
    {name:'Ali', age:20} ,
    {name:'Samia', age:12} ,
    {name:'Saleh', age:25 },
    ];
    etat_bouton=true;

    etat_affichage= false;
    afficher()
    {
     this.etat_affichage=true;
    }
    toggleAffichage() {
      this.etat_affichage = !this.etat_affichage;
    }
    //exercicie >>>> ajouter deux buttons

    compteur = 0;

  incrementerCompteur() {
    if (this.compteur < 10) {
      this.compteur++;
    }
  }

  decrementerCompteur() {
    if (this.compteur > 0) {
      this.compteur--;
    }
  }
 




}
