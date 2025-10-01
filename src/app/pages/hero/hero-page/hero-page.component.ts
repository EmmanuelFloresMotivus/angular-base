import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent {

  name = signal('ironman');
  age= signal(45);

  heroDescription = computed( () => {
    return `${ this.name() } - ${ this.age() }`;
  })

  capitalizedName = computed( () => this.name().toUpperCase() );

  changeHero(): void {
    this.name.set('spiderman');
    this.age.set(22);
  }

  resetForm():void {
    this.name.set('ironman');
    this.age.set(45);
  }

  chageAge(): void {
    this.age.set(60);
  }


}
