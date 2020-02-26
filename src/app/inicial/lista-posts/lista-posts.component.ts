import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  constructor() { }

  @Input() usuario:any ="";
  ngOnInit(): void {
  }

}
