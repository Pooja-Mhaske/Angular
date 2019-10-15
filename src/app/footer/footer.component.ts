import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer1',
  template: `
  <div class="footer">
  <div class="container">

      <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 text-center">
          <img src="../../assets/logo.png" alt="">
          <h1>Utkal <br>Samaj Pune</h1>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12 right">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <h4>Business Info.</h4>
                  <p>ipsum dolor sit amet, consectetur</p>
                  <p>ipsum dolor sit amet, consectetur</p>
                  <p>ipsum dolor sit amet, consectetur</p>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                    <h4>Contact Info.</h4>
                    <p>ipsum dolor sit amet, consectetur</p>
                    <p>ipsum dolor sit amet, consectetur</p>
                    <p>ipsum dolor sit amet, consectetur</p>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                    <h4>Social Links</h4>

                    <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-google"></a>
                   

                  
                </div>
            </div>
           
             
             </div>
    </div>
    </div>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
