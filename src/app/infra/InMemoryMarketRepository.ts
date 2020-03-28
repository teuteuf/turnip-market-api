import * as MarketRepository from '../domain/MarketRepository'
import { Market } from '../domain/Market'

const allMarkets: Market[] = []

export const saveMarket: MarketRepository.SaveMarket = async (market) => {
  allMarkets.concat(market)
}

export const findMarket: MarketRepository.FindMarket = async (id) => {
  return allMarkets.find(market => market.id === id)
}
