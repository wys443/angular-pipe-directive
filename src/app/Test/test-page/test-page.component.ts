import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  movies = [
    { id: 1, name: "Movie 1" },
    { id: 2, name: "Movie 2" },
    { id: 3, name: "Movie 3" },
    { id: 4, name: "Movie 4" },
    { id: 5, name: "Movie 5" },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  refreshData() {
    this.movies = [
      { id: 1, name: "Movie 1" },
      { id: 2, name: "Movie 20" },
      { id: 3, name: "Movie 3" },
      { id: 4, name: "Movie 4" },
      { id: 5, name: "Movie 5" },
      { id: 6, name: "Movie 6" },
    ]
  }

  refreshMovies(movie: any): string {
    return movie.name;
  }

  reset() {
    this.movies = [
      { id: 1, name: "Movie 1" },
      { id: 2, name: "Movie 2" },
      { id: 3, name: "Movie 3" },
      { id: 4, name: "Movie 4" },
      { id: 5, name: "Movie 5" },
    ]
  }
}


