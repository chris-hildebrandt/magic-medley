import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { Card } from "../models/Card.js"
import { mtg, search } from "./AxiosService"

class CardsService {
  async getCardsBySearch(searchTerm) {

    if (AppState.searchByColor == true) { searchTerm += '+color%3d' + (AppState.colors.toString()) }
    console.log('this is the modified search term', searchTerm)

    if (AppState.searchByType) { searchTerm += '+type%3A' + searchTerm }

    if (AppState.searchByRarity) { searchTerm += '+rarity%3A' + AppState.rarity }

    if (AppState.searchByText) {}

    const res = await search.get(searchTerm)
    console.log('Searched Cards:', res.data.data)
    AppState.searchedCards = res.data.data.map(c => new Card(c))
    console.log(AppState.searchedCards)
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

  async getCardByOracle(oracleId) {
    console.log('Oracle ID:', oracleId)
    const res = await mtg.get('cards/search?q=oracleid%3A' + oracleId + "&unique=prints")
    AppState.oracleCard = res.data.data.map(c => new Card(c))
    console.log('Getting card by oracle', AppState.oracleCard)
  }
}


export const cardsService = new CardsService()