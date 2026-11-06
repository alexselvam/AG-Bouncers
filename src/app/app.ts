import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Hero } from './components/hero/hero';
import { Team } from './components/team/team';
import { Gallery } from './components/gallery/gallery';
import { Booking } from './components/booking/booking';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Location } from './components/location/location';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,About,Services,Hero,Team,Gallery,Booking,Contact,Footer,Location],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('front');
}
