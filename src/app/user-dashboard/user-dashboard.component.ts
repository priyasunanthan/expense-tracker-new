import { Component, OnInit } from '@angular/core';

// import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'priya-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  userName: string;
  userSubscription: any;

  constructor(private store: Store<any>) {
    this.userSubscription = this.store.select<any>((state: any) => state)
      .subscribe((s: any) => {
        console.log('inside subscribe... ', s);
        if (!!s.appState.userAuthor) {
          this.userName = s.appState.userAuthor;
        }
      });
  }

  ngOnInit() {
  }

}
