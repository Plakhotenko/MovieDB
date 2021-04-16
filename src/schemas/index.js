import { schema } from 'normalizr'

export const moviesSchema = new schema.Entity('movies')
export const moviesListSchema = new schema.Array(moviesSchema)

export const listsItemSchema = new schema.Entity('lists')
export const listsSchema = new schema.Array(listsItemSchema)

export const personsSchema = new schema.Entity('persons', {}, { idAttribute: 'credit_id' })
export const personsListSchema = new schema.Array(personsSchema)
