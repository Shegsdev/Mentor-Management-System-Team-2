import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class BroadcastMessage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  recipients: number[]

  @column()
  message: string

  @column()
  files: string[]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
