import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private http: HttpClient) { }
  someList = {};
  ngOnInit(): void {
    this.http.get('https://api.github.com/users/literallystan/repos', {responseType: 'json'}).subscribe(
      data => {this.someList = (data);
              console.log(data);}
    );
  }
}
