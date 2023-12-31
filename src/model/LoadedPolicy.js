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

import ApiClient from '../ApiClient';

/**
 * The LoadedPolicy model module.
 * @module model/LoadedPolicy
 * @version 5.3.1
 */
class LoadedPolicy {
    /**
     * Constructs a new <code>LoadedPolicy</code>.
     * @alias module:model/LoadedPolicy
     */
    constructor() { 
        
        LoadedPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoadedPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoadedPolicy} obj Optional instance to populate.
     * @return {module:model/LoadedPolicy} The populated <code>LoadedPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoadedPolicy();

            if (data.hasOwnProperty('created_roles')) {
                obj['created_roles'] = ApiClient.convertToType(data['created_roles'], Object);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} created_roles
 */
LoadedPolicy.prototype['created_roles'] = undefined;

/**
 * @member {Number} version
 */
LoadedPolicy.prototype['version'] = undefined;






export default LoadedPolicy;

