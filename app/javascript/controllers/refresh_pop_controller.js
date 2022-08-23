import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    setInterval(() => {
      this.refresh()
    }, 1000)
  }

  refresh() {
    window.location.reload();
  }
}