import { Directory } from './directory'
import { File } from './file'

export abstract class Visitor {
  abstract visit(file: File): void
  abstract visit(directory: Directory): void
}
