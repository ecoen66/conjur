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
 * The AzureIdentityToken model module.
 * @module model/AzureIdentityToken
 * @version 5.3.1
 */
class AzureIdentityToken {
    /**
     * Constructs a new <code>AzureIdentityToken</code>.
     * Azure instance identity token
     * @alias module:model/AzureIdentityToken
     */
    constructor() { 
        
        AzureIdentityToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzureIdentityToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzureIdentityToken} obj Optional instance to populate.
     * @return {module:model/AzureIdentityToken} The populated <code>AzureIdentityToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzureIdentityToken();

            if (data.hasOwnProperty('jwt')) {
                obj['jwt'] = ApiClient.convertToType(data['jwt'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} jwt
 */
AzureIdentityToken.prototype['jwt'] = undefined;






export default AzureIdentityToken;

