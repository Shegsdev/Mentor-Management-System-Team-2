import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'programs'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('gravatar').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('gravatar')
    })
  }
}
