import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Person {
  id: number;
  name: string;
  lastname: string;
}

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  data!: Person[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Person[]>('../assets/data.json').subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
  }

  

}