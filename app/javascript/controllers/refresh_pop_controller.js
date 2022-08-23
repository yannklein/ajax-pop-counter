import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    console.log('Hello from refresh_pop_controller.js')
    // console.log(this.testTarget)
  }
}