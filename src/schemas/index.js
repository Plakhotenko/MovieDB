import camelcaseKeys from 'camelcase-keys'

import { schema } from 'normalizr'

export const moviesSchema = new schema.Entity('movies', {}, { processStrategy: entity => camelcaseKeys(entity) })

export const moviesListSchema = new schema.Array(moviesSchema)

export const listsItemSchema = new schema.Entity('lists', {}, { processStrategy: entity => camelcaseKeys(entity) })
export const listsSchema = new schema.Array(listsItemSchema)

export const personsSchema = new schema.Entity(
  'persons',
  {},
  {
    idAttribute: 'credit_id',
    processStrategy: entity => camelcaseKeys(entity)
  }
)
export const personsListSchema = new schema.Array(personsSchema)
