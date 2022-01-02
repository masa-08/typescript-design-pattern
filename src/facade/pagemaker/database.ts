import maildata from './maildata.json'

export class Database {
  static readonly dbname = 'maildata'
  static getProperties(dbname: string): { [key: string]: string } | null {
    if (dbname !== this.dbname) {
      console.log(`Warning: ${dbname} is inappropriate name.`)
      return null
    }
    return maildata
  }
}
