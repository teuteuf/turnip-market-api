import * as SqlMarketRepository from '../app/infra/SqlMarketRepository'
import * as ShortIdGenerator from '../app/infra/ShortIdGenerator'
import { createNewMarketBuilder } from '../app/usecase/CreateNewMarket'
import { findMarketBuilder } from '../app/usecase/FindMarket'
import { addOfferBuilder } from '../app/usecase/AddOffer'
import { findActiveOffersOfMarketBuilder } from '../app/usecase/FindActiveOffersOfMarket'

export const createNewMarket = createNewMarketBuilder(
  SqlMarketRepository.saveMarket,
  ShortIdGenerator.generateId
)

export const findMarket = findMarketBuilder(
  SqlMarketRepository.findMarket
)

export const addOffer = addOfferBuilder(
  SqlMarketRepository.addMarketOffer
)

export const findActiveOffersOfMarket = findActiveOffersOfMarketBuilder(
  SqlMarketRepository.findActiveOffersOfMarket
)
