import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ListproudactService } from './listproudact.service';
import { Product } from './models/product';
import { signInComponent } from './singIn/signIn.component';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, signInComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'project';
  name1: string
  isTrue: boolean

  constructor(private service: ListproudactService) {

  }
  ngOnInit() {

    this.service.currentName.subscribe((newname) => {

      this.name1 = newname; // עדכון הערך ב-name1

    });


  }
}
