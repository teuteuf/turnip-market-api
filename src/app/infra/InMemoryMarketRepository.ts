import * as MarketRepository from '../domain/MarketRepository'
import { Market } from '../domain/Market'

const allMarkets: Market[] = []

export const createMarket: MarketRepository.CreateMarket = async (market) => {
  allMarkets.concat(market)
}

export const findMarket: MarketRepository.FindMarket = async (handle) => {
  return allMarkets.find(market => market.handle === handle)
}
