import { Component } from '@angular/core';
import { ListproudactService } from '../listproudact.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ToyDetailsComponent } from '../toy-details/toy-details.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  games = [
    {
      title: 'Game Title 1',
      description: 'Explore the world of adventure and excitement.',
      image: 'https://via.placeholder.com/200x150'
    },
    {
      title: 'Game Title 2',
      description: 'A thrilling journey awaits you.',
      image: 'https://via.placeholder.com/200x150'
    },
    {
      title: 'Game Title 3',
      description: 'Challenge your friends and win big!',
      image: 'https://via.placeholder.com/200x150'
    },
    {
      title: 'Game Title 4',
      description: 'Discover a realm of infinite possibilities.',
      image: 'https://via.placeholder.com/200x150'
    }
  ];
}


