import { File } from './file'
import { Directory } from './directory'
import { Visitor } from './visitor'

export class ListVisitor extends Visitor {
  private currentDir = ''

  visit(entry: File | Directory): void {
    console.log(`${this.currentDir}/${entry}`)
    if (entry instanceof File) {
      return
    }
    const saveDir = this.currentDir
    this.currentDir = `${this.currentDir}/${entry.name}`
    const entries = entry.directory
    for (const e of entries) {
      e.accept(this)
    }
    this.currentDir = saveDir
  }
}
