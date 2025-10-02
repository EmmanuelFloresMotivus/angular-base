import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from '../../components/dragonball/dragonball-character-add/dragonball-character-add.component';
import { DragonBallService } from '../../services/dragonball.service';



@Component({
  selector: 'app-dragonball-super-pages',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super-pages.component.html'
})
export class DragonballSuperPagesComponent {


  public dragonballService = inject(DragonBallService);

}
