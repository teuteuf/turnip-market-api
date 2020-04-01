import * as MarketRepository from '../domain/MarketRepository'
import { Market } from '../domain/Market'
import { DataTypes } from 'sequelize'
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

export const saveMarket: MarketRepository.SaveMarket = async (market) => {
  try {
    await sequelize.model('market').create(market)
  } catch (e) {
    console.error(e)
  }
}

export const findMarket: MarketRepository.FindMarket = async (id) => {
  const sqlMarket = await sequelize.model('market').findByPk(id)
  return {
    id: sqlMarket?.get('id'),
    name: sqlMarket?.get('name')
  } as Market
}
