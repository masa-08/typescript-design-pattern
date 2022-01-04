export type Mediator = {
  colleagueChanged(): void
  toggle(id: string): void
  print(step: number): void
}
