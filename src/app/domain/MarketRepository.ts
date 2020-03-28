import { Market } from './Market'

export type SaveMarket = (market: Market) => Promise<void>
export type FindMarket = (id: string) => Promise<Market | undefined>
