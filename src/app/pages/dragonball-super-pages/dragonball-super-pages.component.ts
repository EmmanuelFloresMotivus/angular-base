import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'app-dragonball-super-pages',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super-pages.component.html',
  styles: ``
})
export class DragonballSuperPagesComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 }
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
