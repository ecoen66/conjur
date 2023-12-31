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
* Enum class ServiceAuthenticators.
* @enum {}
* @readonly
*/
export default class ServiceAuthenticators {
    
        /**
         * value: "authn-iam"
         * @const
         */
        "iam" = "authn-iam";

    
        /**
         * value: "authn-oidc"
         * @const
         */
        "oidc" = "authn-oidc";

    
        /**
         * value: "authn-ldap"
         * @const
         */
        "ldap" = "authn-ldap";

    
        /**
         * value: "authn-k8s"
         * @const
         */
        "k8s" = "authn-k8s";

    
        /**
         * value: "authn-gcp"
         * @const
         */
        "gcp" = "authn-gcp";

    
        /**
         * value: "authn-azure"
         * @const
         */
        "azure" = "authn-azure";

    
        /**
         * value: "authn-jwt"
         * @const
         */
        "jwt" = "authn-jwt";

    

    /**
    * Returns a <code>ServiceAuthenticators</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ServiceAuthenticators} The enum <code>ServiceAuthenticators</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

