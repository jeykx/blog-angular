import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // Définition du type de "post" qui sera contenu dans un array "posts"
  post: {
      title: string,
      content: string,
      loveIts: number,
      hateIts: number,
      created_at: Date
    };
   
  // Définition de "posts" de type  array pouvant contenir des objets de type "post"
  @Input() posts: ["post"];

  constructor() { }

  ngOnInit() {
    //console.log(">>>> Enter in  PostList component");
  }

}
