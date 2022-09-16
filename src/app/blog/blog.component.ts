import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  lista_post: any[] = []

  constructor() { 
   fetch('https://dev.to/api/articles')
   .then(response => response.json())
   .then(json =>{
    this.lista_post = json
   })
  }

  ngOnInit(): void {
  }

}
