import { Request, Response } from 'express'
import { createNewMarket } from '../injected-usecase/market'

export default [
  {
    path: '/api/v1/markets',
    method: 'post',
    handler: async (req: Request, res: Response): Promise<void> => {
      const market = await createNewMarket(req.body.name)

      console.log(market)

      res
        .status(201)
        .location(`${req.url}/${market.handle}`)
        .end()
    }
  },
  {
    path: '/api/v1/markets',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      res.send('coucou')
    }
  }
]
