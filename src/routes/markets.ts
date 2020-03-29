import { Request, Response } from 'express'
import { createNewMarket, findMarket } from '../injected-usecase/market'

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
  }
]
