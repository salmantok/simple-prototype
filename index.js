class SimplePrototype {
  constructor(base = null) {
    this.prototype = base || Object.create(null)
  }

  addProps(props) {
    Object.assign(this.prototype, props)
    return this
  }

  addMethods(methods) {
    Object.entries(methods).forEach(([key, value]) => {
      if (typeof value !== 'function') {
        throw new Error(`Value for key '${key}' must be a function.`)
      }
      this.prototype[key] = value
    })
    return this
  }

  removeKey(key) {
    delete this.prototype[key]
    return this
  }

  createInstance(initialProps = {}) {
    return Object.assign(Object.create(this.prototype), initialProps)
  }

  mergeWith(otherSimplePrototype) {
    if (!(otherSimplePrototype instanceof SimplePrototype)) {
      throw new Error('Argument must be an instance of SimplePrototype.')
    }
    Object.assign(this.prototype, otherSimplePrototype.prototype)
    return this
  }

  clone() {
    return new SimplePrototype(Object.create(this.prototype))
  }

  hasKey(key) {
    return Object.prototype.hasOwnProperty.call(this.prototype, key)
  }

  delegate(key, ...args) {
    if (typeof this.prototype[key] !== 'function') {
      throw new Error(`Method '${key}' does not exist in prototype.`)
    }
    return this.prototype[key](...args)
  }
}

export const proto = new SimplePrototype()
