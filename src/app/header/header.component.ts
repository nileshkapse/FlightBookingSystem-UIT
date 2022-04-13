import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  template: ` 
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

  <div class="navbar is-lightyellow ">
    <div class="navbar-brand ">
        <a class="navbar-item">
            <img src="assets/Images/head_logo1.png" style="margin-left: 400px;" width="110" height="90">
              <p style="margin-left: 30px; margin-bottom:5px; font-family:Georgia font-style: italic;
                       font-weight: bold; font-size:35px;color:#3498DB" >
                <b><i> WELCOME TO AEROFLY</i></b>
                
              <img src="assets/Images/head_logo2.png" style="margin-left: 30px;" width="110" height="90">  
        </a>
    </div>
</div>



<nav class="navbar is-info"  role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="{{imageSrc}}" width="30" height="50">
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <h3 style="margin-bottom:5px; font-family:Georgia;" routerLink="/"><b>  HOME </b></h3>
        </a>
  
        <a class="navbar-item">
             <h3 style="margin-bottom:5px; font-family:Georgia;" ><b> BOOK FLIGHT </b></h3>
        </a>
  
        <a class="navbar-item">
             <h3 style="margin-bottom:5px; font-family:Georgia;" ><b> OFFERS </b></h3>
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
               <h3 style="margin-bottom:5px; font-family:Georgia;" ><b> MORE </b></h3>
             </a>
  
            <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                  <a class="navbar-item" routerLink="/report">
                  Report an issue
                  </a>
              </div>
          </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" routerLink="/signup">
              <strong>Sign up</strong>
            </a>
          
            <a class="button is-primary" routerLink="/login-page">
              <strong>Login</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

 


`,
  //templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageSrc = 'assets/Images/menu2.png'
  constructor( private router:Router) { }

  

  ngOnInit(): void {
  }
  


}
