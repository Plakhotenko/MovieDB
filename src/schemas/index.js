import camelcaseKeys from 'camelcase-keys'

import { schema } from 'normalizr'

export const moviesSchema = new schema.Entity('movies', {}, { processStrategy: camelcaseKeys })

export const moviesListSchema = new schema.Array(moviesSchema)

export const listsItemSchema = new schema.Entity('lists', {}, { processStrategy: camelcaseKeys })
export const listsSchema = new schema.Array(listsItemSchema)

export const personsSchema = new schema.Entity(
  'persons',
  {},
  {
    idAttribute: 'credit_id',
    processStrategy: camelcaseKeys
  }
)
export const personsListSchema = new schema.Array(personsSchema)
