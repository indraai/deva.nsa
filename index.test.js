"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:31251607628264689769 LICENSE.md

const {expect} = require('chai')
const NSADeva = require('./index.js');

describe(NSADeva.me.name, () => {
  beforeEach(() => {
    return NSADeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(NSADeva).to.be.an('object');
    expect(NSADeva).to.have.property('agent');
    expect(NSADeva).to.have.property('vars');
    expect(NSADeva).to.have.property('listeners');
    expect(NSADeva).to.have.property('methods');
    expect(NSADeva).to.have.property('modules');
  });
})
