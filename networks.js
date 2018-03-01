'use strict';

var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};
var hexReverse = function(hex) {
  return buffertools.reverse(new Buffer(hex, 'hex'));
};

exports.livenet = {
  name: 'livenet',
  magic: hex('bf0c6bbd'),
  addressVersion: 0x4c,
  privKeyVersion: 204,
  P2SHVersion: 16,
  hkeyPublicVersion: 0x02fe52f8,
  hkeyPrivateVersion: 0x02fe52cc,
  genesisBlock: {
    hash: hexReverse('0000041e482b9b9691d98eefb48473405c0b8ec31b76df3797c74a78680ef818'),
    merkle_root: hexReverse('1b2ef6e2f28be914103a277377ae7729dcd125dfeb8bf97bd5964ba72b6dc39b'),
    height: 0,
    nonce: 2402015,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1454124731,
    bits: 0x1e0ffff0,
  },
  dnsSeeds: [
    'fuzzbawls.pw',
    'coin-server.com',
    's3v3nh4cks.ddns.net',
    'fuzzbawls.pw'
  ],
  defaultClientPort: 51472
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('cee2caff'),
  addressVersion: 0x8c,
  privKeyVersion: 239,
  P2SHVersion: 19,
  hkeyPublicVersion: 0x3a8061a0,
  hkeyPrivateVersion: 0x3a805837,
  genesisBlock: {
    hash: hexReverse('0000041e482b9b9691d98eefb48473405c0b8ec31b76df3797c74a78680ef818'),
    merkle_root: hexReverse('1b2ef6e2f28be914103a277377ae7729dcd125dfeb8bf97bd5964ba72b6dc39b'),
    height: 0,
    nonce: 2402015,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1454124731,
    bits: 0x1e0ffff0,
  },
  dnsSeeds: [
    '88.198.192.110',
    'pivx-testnet.seed.fuzzbawls.pw',
    'pivx-testnet.seed2.fuzzbawls.pw'
  ],
  defaultClientPort: 51474
};
