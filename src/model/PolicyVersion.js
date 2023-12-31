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
 * The PolicyVersion model module.
 * @module model/PolicyVersion
 * @version 5.3.1
 */
class PolicyVersion {
    /**
     * Constructs a new <code>PolicyVersion</code>.
     * @alias module:model/PolicyVersion
     */
    constructor() { 
        
        PolicyVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PolicyVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyVersion} obj Optional instance to populate.
     * @return {module:model/PolicyVersion} The populated <code>PolicyVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyVersion();

            if (data.hasOwnProperty('client_ip')) {
                obj['client_ip'] = ApiClient.convertToType(data['client_ip'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('finished_at')) {
                obj['finished_at'] = ApiClient.convertToType(data['finished_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('policy_sha256')) {
                obj['policy_sha256'] = ApiClient.convertToType(data['policy_sha256'], 'String');
            }
            if (data.hasOwnProperty('policy_text')) {
                obj['policy_text'] = ApiClient.convertToType(data['policy_text'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} client_ip
 */
PolicyVersion.prototype['client_ip'] = undefined;

/**
 * @member {String} created_at
 */
PolicyVersion.prototype['created_at'] = undefined;

/**
 * @member {String} finished_at
 */
PolicyVersion.prototype['finished_at'] = undefined;

/**
 * @member {String} id
 */
PolicyVersion.prototype['id'] = undefined;

/**
 * @member {String} policy_sha256
 */
PolicyVersion.prototype['policy_sha256'] = undefined;

/**
 * @member {String} policy_text
 */
PolicyVersion.prototype['policy_text'] = undefined;

/**
 * @member {String} role
 */
PolicyVersion.prototype['role'] = undefined;

/**
 * @member {Number} version
 */
PolicyVersion.prototype['version'] = undefined;






export default PolicyVersion;

