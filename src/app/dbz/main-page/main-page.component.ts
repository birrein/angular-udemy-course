import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  ngOnInit(): void {}

  newCharacter: ICharacter = {
    name: 'wena',
    power: 0,
  };
}
