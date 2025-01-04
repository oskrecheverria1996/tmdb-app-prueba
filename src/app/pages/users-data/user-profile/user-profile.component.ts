import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from "rxjs";
import { UsersDataFacade } from "../users-data.facade";
import { ActivatedRoute } from "@angular/router";

@Component({
  standalone: false,
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  userData$: Observable<any>;
  userData: any = {};
  isLoading$: Observable<boolean>;

  constructor(
    public usersDataFacade: UsersDataFacade,
    private route: ActivatedRoute,
  ) { 
    // this.userData$ = this.usersDataFacade.getUserData$();
    this.usersDataFacade.getUserData$().subscribe((res) => {
      this.userData = res
    });
    this.isLoading$ = this.usersDataFacade.isLoadingSingle$();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
       this.usersDataFacade.getUserByName(params['userName']);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
