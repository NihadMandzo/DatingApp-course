import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  [x: string]: any;
  private accountService=inject(AccountService);
  
  ngOnInit(): void {
    this.serCurrentUser()
  }

  serCurrentUser(){
    const userString=localStorage.getItem('user');
    if (!userString) return;
    const user=JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

}
