/**
 * Conjur
 * This is an API definition for CyberArk Conjur Open Source. You can find out more at [Conjur.org](https://www.conjur.org/).
 *
 * The version of the OpenAPI document: 5.3.1
 * Contact: conj_maintainers@cyberark.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Conjur);
  }
}(this, function(expect, Conjur) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Conjur.PolicyVersion();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PolicyVersion', function() {
    it('should create an instance of PolicyVersion', function() {
      // uncomment below and update the code to test PolicyVersion
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be.a(Conjur.PolicyVersion);
    });

    it('should have the property clientIp (base name: "client_ip")', function() {
      // uncomment below and update the code to test the property clientIp
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be();
    });

    it('should have the property finishedAt (base name: "finished_at")', function() {
      // uncomment below and update the code to test the property finishedAt
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be();
    });

    it('should have the property policySha256 (base name: "policy_sha256")', function() {
      // uncomment below and update the code to test the property policySha256
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be();
    });

    it('should have the property policyText (base name: "policy_text")', function() {
      // uncomment below and update the code to test the property policyText
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new Conjur.PolicyVersion();
      //expect(instance).to.be();
    });

  });

}));