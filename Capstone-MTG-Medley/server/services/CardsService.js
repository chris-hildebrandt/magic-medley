import { Collection } from "mongoose";
import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js"


class CardsService{
  async getAllAccountCards() {
    const cards = await dbContext.Cards.find()
    return cards
  }
  async getCardById(cardId) {
    const card = await dbContext.Cards.findById(cardId).populate('account', 'name picture')
    if(!card) { throw new BadRequest('invalid Card')}
    return card
  }
  async createCard(body) {
    // @ts-ignore
    collectionCard = await this.getCardById(body.id)
    // @ts-ignore
    if(!collectionCard){
    const card = await dbContext.Cards.create(body)
    await card.populate('account', 'name picture')
    return card
    }
    // @ts-ignore
    collectionCard.count++
    // @ts-ignore
    await collectionCard.save()
    // @ts-ignore
    return collectionCard
  }
  async updateCard(cardId, cardData) {
    const card = await this.getCardById(cardId)
    card.count = cardData.count || card.count
    card.prices = cardData.prices || card.prices
    await card.save()
    return card
  }

  async deleteCard(cardId, id) {
    const card = await dbContext.Cards.findById(cardId)
    if(!card){ throw new BadRequest('that card does not exist') }
    // @ts-ignore
    if(card.count > 0){
      // @ts-ignore
      card.count--
      card.save()
    }
    card.remove()
    return `${card.name} has been removed from your collection`
  }
    
}


export const cardsService = new CardsService()