import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { Card } from "../models/Card.js"
import { mtg, search } from "./AxiosService"

class CardsService {
  async getCardsBySearch(searchTerm, filterTerm) {

    // if (AppState.searchByColor == true) { searchTerm += '+color%3d' + (AppState.colors.toString()) }
    // console.log('this is the moddified search term', searchTerm)

    // if (AppState.searchByType) { searchTerm += '+type%3A' + searchTerm }

    // if (AppState.searchByRarity) { searchTerm += '+rarity%3A' + AppState.rarity }

    // if (AppState.searchByText) {}

    const colorFilter = '+color%3D' + filterTerm
    const rarityFilter = 'rarity%3A' + filterTerm
    console.log(colorFilter, searchTerm, filterTerm);
    const res = await search.get(searchTerm + rarityFilter + colorFilter)
    AppState.searchedCards = res.data.data.map(c => new Card(c))
    // AppState.cards = res.data.
  }
  async getCardsByName() {
    const res = await mtg.get()
  }

  async cardsAutocomplete() {
    const res = await mtg.get()
  }

  async getRandomCard() {
    const res = await mtg.get('cards/random')
    console.log('Getting Random Card:', res.data)
    AppState.card = res.data
  }

  async cardsCollection() {
    const res = await mtg.get()
  }

  async cardsById() {
    const res = await mtg.get()
  }

  async getCardByOracle() {
    const res = await mtg.get()
  }
}


export const cardsService = new CardsService()