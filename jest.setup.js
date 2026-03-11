// jest.setup.js
const { TextEncoder, TextDecoder } = require('util');
const { ReadableStream, TransformStream, WritableStream } = require('stream/web');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.ReadableStream = ReadableStream;
global.TransformStream = TransformStream;
global.WritableStream = WritableStream;
global.BroadcastChannel = class BroadcastChannel {
  constructor(name) { this.name = name; }
  postMessage() { }
  close() { }
  addEventListener() { }
  removeEventListener() { }
};

require('cross-fetch/polyfill');
require('@testing-library/jest-dom');