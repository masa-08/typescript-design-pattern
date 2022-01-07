import { Failure, Result, Success } from './result'

export class Context {
  private token?: string
  private tokens: string[]
  private index = 0
  constructor(text: string) {
    this.tokens = text.split(/\s/)
    this.nextToken()
  }

  nextToken(): Result<string, Error> {
    this.index++
    this.token = this.tokens[this.index]
    return this.currentToken()
  }

  currentToken(): Result<string, Error> {
    return this.token != null
      ? new Success(this.token)
      : new Failure(new Error('There is no more token'))
  }

  skipToken(token: string): Result<string, Error> {
    if (token !== this.token) {
      return new Failure(
        new Error(`Warning: ${token} is expected, but ${this.token} is found.`)
      )
    }
    return this.nextToken()
  }

  currentNumber(): Result<number, Error> {
    if (this.token == null || isNaN(+this.token)) {
      return new Failure(new Error(`Warning: Cannot parse ${this.token}`))
    }
    return new Success(+this.token)
  }
}
