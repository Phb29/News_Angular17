import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnimeComponent } from '../anime/anime.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FlexLayoutModule ,AnimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'  
})
export class AppComponent {
verdadeiro=true;
 level='pleno';

  title = 'Angular17News';

animes=['pokémon','naruto','dragon ball'];


}

