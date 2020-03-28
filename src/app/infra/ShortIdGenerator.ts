import shortid from 'shortid'
import * as IdGenerator from '../domain/IdGenerator'

export const generateId: IdGenerator.GenerateId = () => shortid.generate()
