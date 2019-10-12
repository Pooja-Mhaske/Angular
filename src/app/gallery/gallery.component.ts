import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
  <div id="gallery" class="container-fluid parallax">
  <div class="row text-center">
      <div class="container">
              <h2 class="text-center">Gallery</h2>
              <div class="row">
               <div class="col-lg-3 col-md-3 col-sm-12 item">
                <img src="../../assets/1.jpg" class="img-fluid" alt="team">
                <div class="des">
                 Konark Sun Temple
                 </div>
                
               </div>
               <div class="col-lg-3 col-md-3 col-sm-12 item">
                <img src="../../assets/2.jpg" class="img-fluid" alt="team">
                <div class="des">
                  Chilika Lake
                 </div>
                
               </div>
               <div class="col-lg-3 col-md-3 col-sm-12 item">
                <img src="../../assets/3.jpg" class="img-fluid" alt="team">
                <div class="des">
                  Lord Jagannath Temple
                 </div>
               
               </div>
               <div class="col-lg-3 col-md-3 col-sm-12 item">
                <img src="../../assets/4.jpg" class="img-fluid" alt="team">
                 <div class="des">
                  Lingaraja Temple
                 </div>
                
               </div>
              </div>
  </div>
  </div>
</div>


  `,
  styles: []
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
