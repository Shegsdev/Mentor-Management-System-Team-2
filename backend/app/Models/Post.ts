import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Comment from './Comment'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public title: string

  @column()
  public description: string

  @column()
  public emoji: string

  @column()
  public imageUrl: string

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
