import { Offer } from './Offer'

export interface Market {
  id: string
  name: string
  activeOffers: Offer[]
}
