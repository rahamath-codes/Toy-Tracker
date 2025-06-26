import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
// import { Toy } from './toy';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar,RouterModule,CommonModule,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Toy_Tracker';
}
