import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Firestore,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent {

  constructor(private router: Router) {};

  private firestore = inject(Firestore);

  game: Game = new Game();

  newGame() {
    const gameRef = collection(this.firestore, 'games');
    addDoc(gameRef, this.game.toJson()).then((gameInfo:any) =>{
       this.router.navigateByUrl('/game/' + gameInfo.id); 
    });
  }
}
