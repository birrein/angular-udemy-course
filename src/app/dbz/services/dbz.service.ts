import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces';

@Injectable()
export class DbzService {
  private _characters: ICharacter[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];

  get characters(): ICharacter[] {
    return [...this._characters];
  }

  constructor() {}

  addCharacter = (character: ICharacter) => {
    this._characters.push(character);
  };
}
