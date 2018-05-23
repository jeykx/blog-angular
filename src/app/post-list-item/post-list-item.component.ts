import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() dislikeIts: number;
  @Input() created_at: Date;

  
  onLike() {
    this.loveIts++;
  }

  onDisLike() {
    this.dislikeIts++;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
