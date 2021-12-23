export class Singleton {
  private static _instance: Singleton
  private constructor() {
    console.log('インスタンスを生成しました')
  }

  static get instance(): Singleton {
    if (this._instance == null) {
      this._instance = new Singleton()
    }
    return this._instance
  }
}
