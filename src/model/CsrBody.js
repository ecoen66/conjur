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
 * The CsrBody model module.
 * @module model/CsrBody
 * @version 5.3.1
 */
class CsrBody {
    /**
     * Constructs a new <code>CsrBody</code>.
     * @alias module:model/CsrBody
     * @param csr {String} 
     * @param ttl {String} 
     */
    constructor(csr, ttl) { 
        
        CsrBody.initialize(this, csr, ttl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, csr, ttl) { 
        obj['csr'] = csr;
        obj['ttl'] = ttl;
    }

    /**
     * Constructs a <code>CsrBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CsrBody} obj Optional instance to populate.
     * @return {module:model/CsrBody} The populated <code>CsrBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CsrBody();

            if (data.hasOwnProperty('csr')) {
                obj['csr'] = ApiClient.convertToType(data['csr'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} csr
 */
CsrBody.prototype['csr'] = undefined;

/**
 * @member {String} ttl
 */
CsrBody.prototype['ttl'] = undefined;






export default CsrBody;
