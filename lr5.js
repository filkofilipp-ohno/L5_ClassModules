class Message{
    constructor(value = "", isReaded = false, id = -1){
        this._value = value
        this._isReaded = isReaded
        this._id = id
    }
    get value() {return this._value}
    set value(val) {this._value = val}
    get isReaded() {return this._isReaded}
    set isReaded(val) {this._isReaded = val}
    get id() {return this._id}
    set id(val) {this._id = val}
    show(params) {
        console.log("Сообщение: "+this.value+"\nПрочитанно: "+this.isReaded+"\nId: "+this.id)
    }
    delete(){
        this._value = null
        this._isReaded = null
        this._id = null
    }
    copy(){
        return this
    }
    #read(){this.isReaded=true}
    markAsRead() {
    this.#read()
  }
  static clone(){
    return new Message(this.value, this.isReaded, this.id)
  }
}
export default Message