import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  film ='';
  nomFilm ='';
  isFavoris=false;
  films: any[]= [];
  favoris: any[]= [];
  constructor(private http: HttpClient) {}

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

  onAjouterFavoris(i: number){
    this.isFavoris = false;
    this.favoris.push(this.films[i]);
  }

  onRecherche(){
    this.isFavoris = false;
    this.films = [];
  }
  onVoirFavoris(){
    this.films = this.favoris;
    this.isFavoris = true;
  }

}
