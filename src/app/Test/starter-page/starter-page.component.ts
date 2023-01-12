import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter-page',
  templateUrl: './starter-page.component.html',
  styleUrls: ['./starter-page.component.scss']
})
export class StarterPageComponent implements OnInit {

  movies = [
    { "id": 1, "name": "Movie 1" },
    { "id": 2, "name": "Movie 2" },
    { "id": 3, "name": "Movie 3" },
    { "id": 4, "name": "Movie 4" },
    { "id": 5, "name": "Movie 5" }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  addNewItem() {
    this.movies = [
      { "id": 1, "name": "Movie 1" },
      { "id": 2, "name": "Movie 20" },
      { "id": 3, "name": "Movie 3" },
      { "id": 4, "name": "Movie 4" },
      { "id": 5, "name": "Movie 5" },
      { "id": 6, "name": "Movie 6" }
    ]
  }


  refreshMovies(index: number, movie: any) {
    return movie.name;
  }

}
