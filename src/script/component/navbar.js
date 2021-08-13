class NavBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
            
            this.innerHTML = `
                <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-warning shadow-sm">
                  <div class="container">
                      <a class="navbar-brand" href="#"><em>Meal's.com</em></a>
                      <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>


                      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                          <a class="nav-item nav-link active" href="#" id="homeTab">Home <span class="sr-only">(current)</span></a>
                          <a class="nav-item nav-link" href="#" id="wishlistTab">Wishlist</a>

                        </div>
                      </div>
                  </div>
                </nav>
            `;
            
    }

}

customElements.define('nav-bar', NavBar);