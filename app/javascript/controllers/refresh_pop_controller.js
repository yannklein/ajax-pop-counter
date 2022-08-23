import { Controller } from '@hotwired/stimulus'
import { csrfToken } from "@rails/ujs"


export default class extends Controller {
  static targets = [ 'population' ]

  connect() {
    setInterval(() => {
      this.refresh()
    }, 1000)
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
        // console.log(data[countryId]?.population)
        this.populationTarget.innerText = data.population
      })
  }
}