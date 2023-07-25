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
 * The AuthenticatorsResponse model module.
 * @module model/AuthenticatorsResponse
 * @version 5.3.1
 */
class AuthenticatorsResponse {
    /**
     * Constructs a new <code>AuthenticatorsResponse</code>.
     * @alias module:model/AuthenticatorsResponse
     */
    constructor() { 
        
        AuthenticatorsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthenticatorsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthenticatorsResponse} obj Optional instance to populate.
     * @return {module:model/AuthenticatorsResponse} The populated <code>AuthenticatorsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticatorsResponse();

            if (data.hasOwnProperty('configured')) {
                obj['configured'] = ApiClient.convertToType(data['configured'], ['String']);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], ['String']);
            }
            if (data.hasOwnProperty('installed')) {
                obj['installed'] = ApiClient.convertToType(data['installed'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The authenticators configured on the Conjur server
 * @member {Array.<String>} configured
 */
AuthenticatorsResponse.prototype['configured'] = undefined;

/**
 * The authenticators enabled on the Conjur server
 * @member {Array.<String>} enabled
 */
AuthenticatorsResponse.prototype['enabled'] = undefined;

/**
 * The authenticators installed on the Conjur server
 * @member {Array.<String>} installed
 */
AuthenticatorsResponse.prototype['installed'] = undefined;






export default AuthenticatorsResponse;

