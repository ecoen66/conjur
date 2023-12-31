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
 * The AuthenticatorStatus model module.
 * @module model/AuthenticatorStatus
 * @version 5.3.1
 */
class AuthenticatorStatus {
    /**
     * Constructs a new <code>AuthenticatorStatus</code>.
     * @alias module:model/AuthenticatorStatus
     * @param status {String} The status of the endpoint, 'error' if there was an error
     */
    constructor(status) { 
        
        AuthenticatorStatus.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>AuthenticatorStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthenticatorStatus} obj Optional instance to populate.
     * @return {module:model/AuthenticatorStatus} The populated <code>AuthenticatorStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticatorStatus();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The error message if there was an error
 * @member {String} error
 */
AuthenticatorStatus.prototype['error'] = undefined;

/**
 * The status of the endpoint, 'error' if there was an error
 * @member {String} status
 */
AuthenticatorStatus.prototype['status'] = undefined;






export default AuthenticatorStatus;

