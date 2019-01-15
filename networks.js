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
  magic: hex('2cade31'),
  addressVersion: 0x3A,
  privKeyVersion: 212,
  P2SHVersion: 16,
  hkeyPublicVersion: 0x02fe52f8,
  hkeyPrivateVersion: 0x02fe52cc,
  genesisBlock: {
    hash: hexReverse('00000afed892c787c80d30221f112c4611013cf366b574cc9cf6149415a93957'),
    merkle_root: hexReverse('5631b0ce092246abb7f7cbf0a6ee315bd7cf41092a714c7ece4c1aed15dd3995'),
    height: 0,
    nonce: 514578,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1546206065,
    bits: 504365040,
  },
  dnsSeeds: [
    'seed.posq.space',
    'posq.seeds.mn.zone',
    'posq.mnseeds.com',
    '207.246.112.156'
  ],
  defaultClientPort: 5510
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('2a3cb5e1'),
  addressVersion: 0x8B,
  privKeyVersion: 239,
  P2SHVersion: 19,
  hkeyPublicVersion: 0x3a8061a0,
  hkeyPrivateVersion: 0x3a805837,
  genesisBlock: {
    hash: hexReverse('0000073f1de9d1268731bff93d98a357572d1665aed31e5893961dc3d96a8032'),
    merkle_root: hexReverse('5631b0ce092246abb7f7cbf0a6ee315bd7cf41092a714c7ece4c1aed15dd3995'),
    height: 0,
    nonce: 773271,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1546206194,
    bits: 504365040,
  },
  dnsSeeds: [
    '88.120.192.110',
    'seed-testnet.seed.posq.space',
    'seed-testnet2.seed.posq.space'
  ],
  defaultClientPort: 15510
};
