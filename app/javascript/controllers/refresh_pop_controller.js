import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'population' ]

  connect() {
    setInterval(() => {
      this.refresh()
    }, 5000)
  }

  refresh() {
    // Simple refresh:
    // window.location.reload();
    const countryId = this.element.id.split("-")[1];

    fetch(window.location.origin + "/countries/" + countryId, {
      headers: { "Accept": "application/json" },
    })
      .then(response => response.json())
      .then((data) => {
        this.populationTarget.innerText = data.population
      })
  }
}