import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div id="contact" class="contact-form">
  <div class="container">
   <form #userFrom="ngForm">
  
  

  

    <div class="row slide">

     <div class="col-lg-4 col-md-4 col-sm-12">
       <h1>Get in Touch</h1> 
       <p><span class="glyphicon glyphicon-map-marker"></span> Loreum, ispum</p>
      <p><span class="glyphicon glyphicon-phone"></span> +00 00000</p>
      <p><span class="glyphicon glyphicon-envelope"></span> test@something.com</p>
      
      </div>

     <div class="col-lg-8 col-md-8 col-sm-12 right">

        <div class="form-group">
       
        <label>Name</label>
          <input type="text" class="form-control form-control-lg" name="userName" ngModel>
        </div>

        <div class="form-group">
       
        <label>Email</label>
          <input type="email" class="form-control form-control-lg" name="email" ngModel>
        </div>

        <div class="form-group">
       
        <label>Message</label>
        <textarea class="form-control" rows="5" name="message" ngModel></textarea>
        </div>
        <button type="button" class="btn btn-primary">Send</button>

      </div>
      </div>
   </form>
  </div>
 </div>

 
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
