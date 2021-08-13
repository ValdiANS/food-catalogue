class Jumbotron extends HTMLElement {

  connectedCallback() {
    this.render();
  }


  render() {
      this.innerHTML = `
        <style>
          .jumbotron {
            background-color: #ffab0f;
          }

          @media screen and (max-width: 990px) {
            .gmbr-d-none {
              display: none !important;
            } 
            
            .gmbr-thumb {
              width: 80% !important;
              max-height: 250px;
              object-fit: cover;
              object-position: center;
            }
          }
        </style>

          <div class="jumbotron jumbotron-fluid bg-jumbotron mt-4 mb-n2">
            <div class="container text-center text-white">
              <h1 class="display-4">Find Your Meal's</h1>
              <p class="lead">Search Your Favorite Meal at <em>Meal's.com</em></p>

              
              <div class="row justify-content-center">
              
                <div id="carouselExampleControls" class="carousel slide w-100 h-25" data-ride="carousel">
                  <div class="carousel-inner ">
                    <div class="carousel-item active" data-interval="4000">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg" class="d-inline w-25 mx-0 gmbr-thumb " alt="Meal's">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/urzj1d1587670726.jpg" class="d-lg-inline gmbr-d-none w-25 mx-0" alt="Meal's">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/xrrwpx1487347049.jpg" class="d-lg-inline gmbr-d-none w-25 mx-0" alt="Meal's">
                      
                    </div>
                    <div class="carousel-item" data-interval="4000">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/58oia61564916529.jpg" class="d-inline w-25 gmbr-thumb" alt="Meal's">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/yuwtuu1511295751.jpg" class="d-lg-inline gmbr-d-none w-25" alt="Meal's">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/ryppsv1511815505.jpg" class="d-lg-inline gmbr-d-none w-25" alt="Meal's">
                    </div>
                    <div class="carousel-item" data-interval="4000">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/txsupu1511815755.jpg" class="d-inline w-25 gmbr-thumb" alt="Meal's">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/xrttsx1487339558.jpg" class="d-lg-inline gmbr-d-none w-25" alt="Meal's">
                      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/vqpwrv1511723001.jpg" class="d-lg-inline gmbr-d-none w-25" alt="Meal's">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>


            </div>
          </div>
        
      `;

    
  }


}

customElements.define('jmb-trn', Jumbotron);