import { Controller } from '@hotwired/stimulus'
import * as Swing from 'swing'

export default class extends Controller {
  static targets = [ 'card' ]

  connect() {
    // Prepare the cards in the stack for iteration.
    this.cards = [].slice.call(this.cardTargets)

    // An instance of the Stack is used to attach event listeners.
    const stack = Swing.Stack()

    this.cards.forEach((targetElement) => {
      // Add card element to the Stack.
      stack.createCard(targetElement)
    })

    // Add event listener for when a card is thrown out of the stack.
    stack.on('throwout', (event) => {
      const swingItem = event.target
      swingItem.classList.add('d-none')
      this.isLiked(event.throwDirection == Swing.Direction.RIGHT, swingItem)
    })

    // Add event listener for when a card is thrown in the stack, including the spring back into place effect.
    stack.on('throwin', (event) => {
      console.log('Card snapped back to the stack.')
      const swingItem = event.target
      swingItem.classList.remove('d-none')
    })
  }

  choose(event) {
    event.preventDefault()
    const swingItem = event.currentTarget.parentElement.parentElement
    swingItem.classList.add('d-none')
    this.isLiked(event.params.like, swingItem)
  }

  isLiked(like, item) {
    // do something when the card is liked or noped
    console.log(`This card ${item.id} was ${ like ? 'liked' : 'noped'}`)
  }
}