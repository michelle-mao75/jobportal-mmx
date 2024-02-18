import { Component} from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private auth:AuthService){}

  logout(){
    this.auth.logout();
  }
 
}
