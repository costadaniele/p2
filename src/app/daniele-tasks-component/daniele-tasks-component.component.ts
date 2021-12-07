import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Auth {
  token: string;
  username: string;
  profile: Array<String>;
}

@Component({
  selector: 'app-daniele-tasks-component',
  templateUrl: './daniele-tasks-component.component.html',
  styleUrls: ['./daniele-tasks-component.component.css'],
})
export class DanieleTasksComponentComponent implements OnInit {
  site = 'https://warm-eyrie-48554.herokuapp.com';
  name = 'Cápsulas Sonoras';

  title = '';

  auth = null;

  list = null;

  listintg = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  postCapsula() {
    this.http
      .post<Auth>(this.site + '/capsulas', {
        title: this.title,
      })
      .subscribe((data) => {
        this.auth = data;
      });
  }

  getList() {
    this.http.get<any>(this.site + '/capsulas', {}).subscribe((data) => {
      this.list = data;
    });
  }
}
