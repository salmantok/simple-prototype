import { addPlugin, runPlugin, test } from 'node-plug'
import { proto } from '../index.js'

let t = {
  async run() {
    proto.addProps({ species: 'Animal' })
    console.log(proto.prototype.species) // Output: Animal
  },
}
// Melakukan pengujian
test(['Animal'])

t = {
  async run() {
    proto.addMethods({
      speak() {
        console.log('Hello!')
      },
    })
    proto.prototype.speak() // Output: Hello!
  },
}
// Melakukan pengujian
test(['Hello!'])

t = {
  async run() {
    proto.addProps({ species: 'Animal' })
    proto.removeKey('species')
    console.log(proto.prototype.species) // Output: undefined
  },
}
// Melakukan pengujian
test([undefined])

t = {
  async run() {
    proto.addProps({ species: 'Animal' })
    const instance = proto.createInstance({ name: 'Dolphin' })
    console.log(instance.species) // Output: Animal
    console.log(instance.name) // Output: Dolphin
  },
}
// Melakukan pengujian
test(['Animal', 'Dolphin'])

t = {
  async run() {
    const protoA = proto
    protoA.addProps({ canWalk: true })
    const protoB = proto
    protoB.addProps({ canSwim: true })
    protoA.mergeWith(protoB)
    console.log(protoA.prototype.canSwim) // Output: true
  },
}
// Melakukan pengujian
test([true])

t = {
  async run() {
    proto.addProps({ species: 'Animal' })
    const clonedProto = proto.clone()
    console.log(clonedProto.prototype.species) // Output: Animal
  },
}
// Melakukan pengujian
test(['Animal'])

t = {
  async run() {
    proto.addProps({ species: 'Animal' })
    console.log(proto.hasKey('species')) // Output: true
    console.log(proto.hasKey('name')) // Output: false
  },
}
// Melakukan pengujian
test([true, false])

t = {
  async run() {
    proto.addMethods({
      greet(name) {
        return `Hello, ${name}!`
      },
    })
    console.log(proto.delegate('greet', 'Alice')) // Output: Hello, Alice!
  },
}
// Melakukan pengujian
test(['Hello, Alice!'])

// Menambahkan plugin
addPlugin(t)

// Menjalankan plugin
runPlugin()
