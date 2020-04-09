import * as MarketRepository from '../domain/MarketRepository'
import { DataTypes, Model, Op } from 'sequelize'
import { sequelize } from './Sequelize'

class SqlMarket extends Model<SqlMarket> {
  id!: string
  name!: string
}

SqlMarket.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  createdAt: false,
  updatedAt: false,
  tableName: 'market'
})

class SqlOffer extends Model<SqlOffer> {
  marketId!: string
  player!: string
  startTime!: Date
  endTime!: Date
  price!: number
}

SqlOffer.init({
  marketId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    field: 'id_market'
  },
  player: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    field: 'player'
  },
  startTime: {
    type: DataTypes.TIME,
    primaryKey: true,
    allowNull: false,
    field: 'start_time'
  },
  endTime: {
    type: DataTypes.TIME,
    primaryKey: true,
    allowNull: false,
    field: 'end_time'
  },
  price: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    field: 'price'
  }
}, {
  sequelize,
  createdAt: false,
  updatedAt: false,
  tableName: 'offer'
})

export const saveMarket: MarketRepository.SaveMarket = async (market) => {
  await SqlMarket.create({
    id: market.id,
    name: market.name
  })
}

export const findActiveOffersOfMarket: MarketRepository.FindActiveOffersOfMarket = async (marketId) => {
  const now = new Date()
  const sqlActiveOffers: SqlOffer[] = await SqlOffer.findAll({
    where: {
      marketId: marketId,
      startTime: { [Op.lt]: now },
      endTime: { [Op.gt]: now }
    }
  })

  return sqlActiveOffers.map(({ player, startTime, endTime, price }) => ({
    player,
    startTime,
    endTime,
    price
  }))
}

export const findMarket: MarketRepository.FindMarket = async (id) => {
  const sqlMarket = await SqlMarket.findByPk(id)
  if (!sqlMarket) {
    return undefined
  }

  const activeOffers = await findActiveOffersOfMarket(id)

  return {
    id: sqlMarket.id,
    name: sqlMarket.name,
    activeOffers
  }
}

export const addMarketOffer: MarketRepository.AddMarketOffer = async (marketId, offer) => {
  await SqlOffer.create({
    marketId: marketId,
    ...offer
  })
}
