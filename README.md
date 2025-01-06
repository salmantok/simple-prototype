# simple-prototype

`simple-prototype` adalah class JavaScript untuk menangani prototype secara efisien, mendukung pembuatan object, pewarisan, komposisi, pengelolaan property/method, delegasi, dan cloning prototype.

## `simple-prototype` dibundel dengan `microbundle`

## Instalasi

```bash
npm install simple-prototype
```

## Contoh

```js
// esm
import { proto } from 'simple-prototype'

// commonjs
const { proto } = require('simple-prototype')

proto
```

## API Referensi

### `constructor`

```js
proto((base = null))
```

- `base`: Prototype dasar (default: `null`, membuat prototype kosong).

#### Contoh:

```js
proto
```

### `addProps(props)`

Menambahkan property ke prototype.

- `props`: Object yang berisi property untuk ditambahkan.

#### Contoh:

```js
proto.addProps({ species: 'Animal' })
console.log(proto.prototype.species) // Output: Animal
```

### `addMethods(methods)`

Menambahkan method ke prototype.

- `methods`: Object yang berisi method (fungsi) untuk ditambahkan.

> Catatan: Semua nilai harus berupa fungsi.

#### Contoh:

```js
proto.addMethods({
  speak() {
    console.log('Hello!')
  },
})
proto.prototype.speak() // Output: Hello!
```

### `removeKey(key)`

Menghapus property atau method dari prototype.

- `key`: Nama property atau method yang akan dihapus.

#### Contoh:

```js
proto.addProps({ species: 'Animal' })
proto.removeKey('species')
console.log(proto.prototype.species) // Output: undefined
```

### `createInstance(initialProps = {})`

Membuat instance baru yang mewarisi prototype.

- `initialProps`: Property awal untuk instance baru (opsional).

#### Contoh:

```js
proto.addProps({ species: 'Animal' })
const instance = proto.createInstance({ name: 'Dolphin' })
console.log(instance.species) // Output: Animal
console.log(instance.name) // Output: Dolphin
```

### `mergeWith(otherSimplePrototype)`

Menggabungkan prototype dengan `simple-prototype` lain (komposisi).

- `otherSimplePrototype`: Instance `simple-prototype` lain.

#### Contoh:

```js
const protoA = proto
protoA.addProps({ canWalk: true })
const protoB = proto
protoB.addProps({ canSwim: true })
protoA.mergeWith(protoB)
console.log(protoA.prototype.canSwim) // Output: true
```

### `clone()`

Membuat salinan mendalam dari prototype.

#### Contoh:

```js
proto.addProps({ species: 'Animal' })
const clonedProto = proto.clone()
console.log(clonedProto.prototype.species) // Output: Animal
```

### `hasKey(key)`

Memeriksa apakah prototype memiliki property/method tertentu.

- `key`: Nama property/method.

#### Contoh:

```js
proto.addProps({ species: 'Animal' })
console.log(proto.hasKey('species')) // Output: true
console.log(proto.hasKey('name')) // Output: false
```

### `delegate(key, ...args)`

Menjalankan method dari rantai prototype.

- `key`: Nama method yang akan dijalankan.
- `args`: Argumen untuk method tersebut.

#### Contoh:

```js
proto.addMethods({
  greet(name) {
    return `Hello, ${name}!`
  },
})
console.log(proto.delegate('greet', 'Alice')) // Output: Hello, Alice!
```

## Kontribusi Finansial

[Ko-fi](https://ko-fi.com/salmantok)

## Lisensi

[MIT](LICENSE)
