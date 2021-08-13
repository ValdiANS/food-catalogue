class SearchBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }

    get value(){
      return this.querySelector('.searchInput').value;
    }

    render(){
        this.innerHTML = `
          <div class="input-group input-group-lg pb-5">
              <div class="shadow-lg input-group-prepend">
                <button class="btn btn-info" type="button" id="searchButton">Search</button>
              </div>
              <input type="text" class="form-control shadow-lg searchInput" placeholder="search name, ex: Cake">
          </div>
        `;

        this.querySelector('#searchButton').addEventListener('click', this._clickEvent);

    }


}

customElements.define('search-bar', SearchBar);