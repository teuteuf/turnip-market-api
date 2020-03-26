import { Market } from './Market'

export type CreateMarket = (market: Market) => Promise<void>
export type FindMarket = (handle: string) => Promise<Market | undefined>
