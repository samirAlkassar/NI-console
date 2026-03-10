// jest.setup.js
import '@testing-library/jest-dom'

// import 'cross-fetch/polyfill' // polyfill fetch, Response, Headers
// import { TextEncoder, TextDecoder } from 'util'

// // Polyfill TextEncoder/TextDecoder for Node
// if (typeof global.TextEncoder === 'undefined') {
//   global.TextEncoder = TextEncoder
// }
// if (typeof global.TextDecoder === 'undefined') {
//   global.TextDecoder = TextDecoder
// }

// // Polyfill BroadcastChannel for MSW
// if (typeof global.BroadcastChannel === 'undefined') {
//   class PolyfillBroadcastChannel {
//     constructor(name) {
//       this.name = name
//       this.onmessage = null
//     }
//     postMessage(msg) {
//       // no-op
//     }
//     close() {}
//   }
//   global.BroadcastChannel = PolyfillBroadcastChannel
// }