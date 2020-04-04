import * as MarketRepository from '../domain/MarketRepository'
import { Market } from '../domain/Market'
import { DataTypes, Model } from 'sequelize'
import { sequelize } from './Sequelize'
import { Offer } from '../domain/Offer'

sequelize.define('market', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
})

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

export const findMarket: MarketRepository.FindMarket = async (id) => {
  const sqlMarket = await SqlMarket.findByPk(id)
  if (!sqlMarket) {
    return undefined
  }

  const sqlOffers: SqlOffer[] = await SqlOffer.findAll({
    where: {
      marketId: id
    }
  })

  return {
    id: sqlMarket.id as string,
    name: sqlMarket.name as string,
    offers: sqlOffers.map((sqlOffer) => ({
      player: sqlOffer.player,
      startTime: sqlOffer.startTime,
      endTime: sqlOffer.endTime,
      price: sqlOffer.price
    }))
  }
}

export const addMarketOffer: MarketRepository.AddMarketOffer = async (marketId, offer) => {
  await SqlOffer.create({
    marketId: marketId,
    ...offer
  })
}
