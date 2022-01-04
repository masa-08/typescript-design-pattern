import { Mediator } from './mediator'

export type Colleague = {
  setMediator(mediator: Mediator): void
  setColleagueEnabled(enabled: boolean): void
}
