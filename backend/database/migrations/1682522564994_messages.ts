import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('sender_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.integer('recipient_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.text('message').nullable()
      table.text('channel_name').notNullable()
      table.text('image_url').nullable()
      table.timestamp('sent_at', { useTz: true })

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
