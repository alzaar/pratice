import { Component, Input } from '@angular/core';

interface Guest {
  name: string,
  invited: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
