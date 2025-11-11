import Message from "./lr5.js"
class AuthoredMessage extends Message {
  constructor(value = "", isReaded = false, id = -1, author = "Unknown") {
    super(value, isReaded, id)
    this._author = author
  }
  get author() { return this._author }
  set author(val) { this._author = val }
  show() {
    console.log("Сообщение: " + this.value +"\nПрочитано: " + this.isReaded +"\nId: " + this.id +"\nАвтор: " + this.author)
  }
  delete() {
    super.delete()
    this._author = null
  }
  copy() {
    return this
  }
  static clone(authoredInstance) {
    return new AuthoredMessage(
      authoredInstance.value,
      authoredInstance.isReaded,
      authoredInstance.id,
      authoredInstance.author
    )
  }
}
export default AuthoredMessage