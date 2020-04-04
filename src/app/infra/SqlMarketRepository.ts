import * as MarketRepository from '../domain/MarketRepository'
import { Market } from '../domain/Market'
import { DataTypes, Model } from 'sequelize'
import { sequelize } from './Sequelize'

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

export const saveMarket: MarketRepository.SaveMarket = async (market) => {
  try {
    await SqlMarket.create(market)
  } catch (e) {
    console.error(e)
  }
}

export const findMarket: MarketRepository.FindMarket = async (id) => {
  const sqlMarket = await SqlMarket.findByPk(id)
  return sqlMarket
    ? {
      id: sqlMarket.id as string,
      name: sqlMarket.name as string
    }
    : undefined
}
