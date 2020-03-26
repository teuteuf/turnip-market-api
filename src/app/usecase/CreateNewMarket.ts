import * as MarketRepository from '../infra/InMemoryMarketRepository'

export const createNewMarket = async (marketName: string): Promise<void> => {
  const handle = 'azeazeazeaze'
  await MarketRepository.createMarket({
    handle,
    name: marketName
  })
}
