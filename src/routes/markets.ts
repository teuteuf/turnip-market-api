import { Request, Response } from 'express'
import { addOffer, createNewMarket, findMarket, findActiveOffersOfMarket } from '../injected-usecase/market'

export default [
  {
    path: '/api/v1/markets',
    method: 'post',
    handler: async (req: Request, res: Response): Promise<void> => {
      const market = await createNewMarket(req.body.name)

      res
        .status(201)
        .location(`${req.path}${req.path.endsWith('/') ? '' : '/'}${market.id}`)
        .json(market)
    }
  },
  {
    path: '/api/v1/markets/:id',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      const market = await findMarket(req.params.id)

      if (!market) {
        res.status(404).end()
        return
      }

      res.json(market)
    }
  },
  {
    path: '/api/v1/markets/:id/offers',
    method: 'post',
    handler: async (req: Request, res: Response): Promise<void> => {
      const market = await findMarket(req.params.id)

      if (!market) {
        res.status(404).end()
        return
      }

      const offer = await addOffer(market, req.body)

      res
        .status(201)
        .json(offer)
    }
  },
  {
    path: '/api/v1/markets/:id/offers/active',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      const offers = await findActiveOffersOfMarket(req.params.id)

      res
        .status(200)
        .json(offers)
    }
  }
]
