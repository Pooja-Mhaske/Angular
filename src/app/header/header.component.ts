import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!-- navbar -->


  <nav class="navbar navbar-expand-lg ">
      
          <div class="container">
                  <a class="navbar-brand" href="#">
                        <img src="../../assets/logo.png" alt="">
                      </a>
      <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav mr-4">
          
          <li class="nav-item">
          <a class="nav-link active" routerLink="/about" [routerLinkActive]="'active'">About</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" routerLink="/gallery" [routerLinkActive]="'active'" >Gallery</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" routerLink="/contact" [routerLinkActive]="'active'" >Contact</a>
          </li>
          
      </ul>
      </div>

  </div>


</nav>
<header>
<div class="container-fluid bg-overlay">
      <div class="row text-center">
          <div class="container">
          <h1><strong>Lorem ipsum</strong></h1>
          <h2>Lorem ipsum dolor sit amet</h2>             
          <p>Mauris sed mi at velit ornare fringilla. Phasellus aliquam, orci ac finibus tempor,<br>
              Mauris sed mi at velit ornare fringilla.</p>
         
          <button type="button" class="btn btn-light btn-md">Contact Us</button>
      </div>
      </div>
  </div>
</header>


  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
