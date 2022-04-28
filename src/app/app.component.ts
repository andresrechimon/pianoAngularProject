import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pianoApp';

  sound(number:number):void{
    const audio = new Audio();
    audio.src = `../assets/sounds/note${number}.wav`;
    audio.load();
    audio.play();
  }
}
