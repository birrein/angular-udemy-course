import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces/icharacter';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  // @Input() characters: ICharacter[] = [];
  get characters(): ICharacter[] {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {}
}
