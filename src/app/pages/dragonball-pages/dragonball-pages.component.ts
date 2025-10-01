import { Component, signal, computed } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  imports: [],
  templateUrl: './dragonball-pages.component.html',
  styles: ``
})
export class DragonballPagesComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 3, name: 'Trunks', power: 5000 },
    { id: 4, name: 'Piccolo', power: 7000 }
  ]);

  addCharacter() {

    if(!this.name() || !this.power() || this.power() <= 0 ) return;

    const newCharacter: Character = {
      id : Math.max(...this.characters().map( character => character.id)) + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update( list => [...list, newCharacter])

      this.resetFields();


  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
