import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // recherche du formulaire
  film ='';

  // flag si on affiche les favoris ou la recherche
  isFavoris=false;

  // instanciation des films et favoris
  films: any[]= [];
  favoris: any[]= [];


  constructor(private http: HttpClient) {}

  // méthode de recherche sur API omdb
  onRechercher(){
    const val =this.film;
    const url ='http://www.omdbapi.com/?apikey=efdc2275&s='+val;
    this.film='';
    this.http.get<any>(url).subscribe(
      (films)=> { // JSON
        this.films = films.Search;
      }
    );
  }

  // affichage de la recherche
  onRecherche(){
    this.isFavoris = false;
    this.films = [];
  }

  // affiche des favoris
  onVoirFavoris(){
    this.films = this.favoris;
    this.isFavoris = true;
  }

  // ajouter un film aux favoris
  onAjouterFavoris(i: number){
    this.isFavoris = false;
    this.favoris.push(this.films[i]);
  }

  // supprimer un film des favoris
  onSupprimerFavoris(i: number){
    this.favoris.splice(i,1);
  }
}
