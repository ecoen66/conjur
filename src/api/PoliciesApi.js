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


import ApiClient from "../ApiClient";
import LoadedPolicy from '../model/LoadedPolicy';

/**
* Policies service.
* @module api/PoliciesApi
* @version 5.3.1
*/
export default class PoliciesApi {

    /**
    * Constructs a new PoliciesApi. 
    * @alias module:api/PoliciesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the loadPolicy operation.
     * @callback module:api/PoliciesApi~loadPolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadedPolicy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds data to the existing Conjur policy.
     * Adds data to the existing Conjur policy. Deletions are not allowed. Any policy objects that exist on the server but are omitted from the policy file will not be deleted and any explicit deletions in the policy file will result in an error.  ##### Permissions required  `create` privilege on the policy.\" 
     * @param {String} account Organization account name
     * @param {String} identifier ID of the policy to update
     * @param {String} body Policy
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one. 
     * @param {module:api/PoliciesApi~loadPolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoadedPolicy}
     */
    loadPolicy(account, identifier, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling loadPolicy");
      }
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling loadPolicy");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling loadPolicy");
      }

      let pathParams = {
        'account': account,
        'identifier': identifier
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Request-Id': opts['xRequestId']
      };
      let formParams = {
      };

      let authNames = ['conjurAuth'];
      let contentTypes = ['application/x-yaml', 'text/plain', 'text/x-yaml', 'text/yaml'];
      let accepts = ['application/json'];
      let returnType = LoadedPolicy;
      return this.apiClient.callApi(
        '/policies/{account}/policy/{identifier}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the replacePolicy operation.
     * @callback module:api/PoliciesApi~replacePolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadedPolicy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Loads or replaces a Conjur policy document.
     * Loads or replaces a Conjur policy document.  **Any policy data which already exists on the server but is not explicitly specified in the new policy file will be deleted!**. 
     * @param {String} account Organization account name
     * @param {String} identifier ID of the policy to load (root if no root policy has been loaded yet)
     * @param {String} body Policy
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one. 
     * @param {module:api/PoliciesApi~replacePolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoadedPolicy}
     */
    replacePolicy(account, identifier, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling replacePolicy");
      }
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling replacePolicy");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replacePolicy");
      }

      let pathParams = {
        'account': account,
        'identifier': identifier
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Request-Id': opts['xRequestId']
      };
      let formParams = {
      };

      let authNames = ['conjurAuth'];
      let contentTypes = ['application/x-yaml', 'text/plain', 'text/x-yaml', 'text/yaml'];
      let accepts = ['application/json'];
      let returnType = LoadedPolicy;
      return this.apiClient.callApi(
        '/policies/{account}/policy/{identifier}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePolicy operation.
     * @callback module:api/PoliciesApi~updatePolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadedPolicy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies an existing Conjur policy.
     * Modifies an existing Conjur policy. Data may be explicitly deleted using the `!delete`, `!revoke`, and `!deny` statements. Unlike `replace` mode, no data is ever implicitly deleted.  ##### Permissions required 
     * @param {String} account Organization account name
     * @param {String} identifier ID of the policy to update
     * @param {String} body Policy
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRequestId Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one. 
     * @param {module:api/PoliciesApi~updatePolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoadedPolicy}
     */
    updatePolicy(account, identifier, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling updatePolicy");
      }
      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling updatePolicy");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePolicy");
      }

      let pathParams = {
        'account': account,
        'identifier': identifier
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Request-Id': opts['xRequestId']
      };
      let formParams = {
      };

      let authNames = ['conjurAuth'];
      let contentTypes = ['application/x-yaml', 'text/plain', 'text/x-yaml', 'text/yaml'];
      let accepts = ['application/json'];
      let returnType = LoadedPolicy;
      return this.apiClient.callApi(
        '/policies/{account}/policy/{identifier}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}