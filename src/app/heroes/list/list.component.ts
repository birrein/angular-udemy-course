import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHero: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  deleteHero = () => {
    this.deletedHero = this.heroes.pop() || '';
  }
}
