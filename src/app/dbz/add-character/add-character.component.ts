import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Input() newCharacter: ICharacter = {
    name: '',
    power: 0,
  };

  // @Output() onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  add = () => {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    // this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };

  };
}
