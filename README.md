# conjur

Conjur - JavaScript client for conjur
This is an API definition for CyberArk Conjur Open Source. You can find out more at [Conjur.org](https://www.conjur.org/).
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 5.3.1
- Package version: 5.3.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install conjur --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your conjur from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Conjur = require('conjur');

var defaultClient = Conjur.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new Conjur.AuthenticationApi()
var account = "account_example"; // {String} Organization account name
var body = "body_example"; // {String} New password
var opts = {
  'xRequestId': test-id // {String} Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one. 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.changePassword(account, body, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Conjur.AuthenticationApi* | [**changePassword**](docs/AuthenticationApi.md#changePassword) | **PUT** /authn/{account}/password | Changes a user’s password.
*Conjur.AuthenticationApi* | [**enableAuthenticator**](docs/AuthenticationApi.md#enableAuthenticator) | **PATCH** /{authenticator}/{account} | Enables or disables authenticator defined without service_id.
*Conjur.AuthenticationApi* | [**enableAuthenticatorInstance**](docs/AuthenticationApi.md#enableAuthenticatorInstance) | **PATCH** /{authenticator}/{service_id}/{account} | Enables or disables authenticator service instances.
*Conjur.AuthenticationApi* | [**getAPIKey**](docs/AuthenticationApi.md#getAPIKey) | **GET** /authn/{account}/login | Gets the API key of a user given the username and password via HTTP Basic Authentication. 
*Conjur.AuthenticationApi* | [**getAPIKeyViaLDAP**](docs/AuthenticationApi.md#getAPIKeyViaLDAP) | **GET** /authn-ldap/{service_id}/{account}/login | Gets the Conjur API key of a user given the LDAP username and password via HTTP Basic Authentication. 
*Conjur.AuthenticationApi* | [**getAccessToken**](docs/AuthenticationApi.md#getAccessToken) | **POST** /authn/{account}/{login}/authenticate | Gets a short-lived access token, which is required in the header of most subsequent API requests. 
*Conjur.AuthenticationApi* | [**getAccessTokenViaAWS**](docs/AuthenticationApi.md#getAccessTokenViaAWS) | **POST** /authn-iam/{service_id}/{account}/{login}/authenticate | Get a short-lived access token for applications running in AWS.
*Conjur.AuthenticationApi* | [**getAccessTokenViaAzure**](docs/AuthenticationApi.md#getAccessTokenViaAzure) | **POST** /authn-azure/{service_id}/{account}/{login}/authenticate | Gets a short-lived access token for applications running in Azure.
*Conjur.AuthenticationApi* | [**getAccessTokenViaGCP**](docs/AuthenticationApi.md#getAccessTokenViaGCP) | **POST** /authn-gcp/{account}/authenticate | Gets a short-lived access token for applications running in Google Cloud Platform. 
*Conjur.AuthenticationApi* | [**getAccessTokenViaJWT**](docs/AuthenticationApi.md#getAccessTokenViaJWT) | **POST** /authn-jwt/{service_id}/{account}/authenticate | Gets a short-lived access token for applications using JSON Web Token (JWT) to access the Conjur API. 
*Conjur.AuthenticationApi* | [**getAccessTokenViaJWTWithId**](docs/AuthenticationApi.md#getAccessTokenViaJWTWithId) | **POST** /authn-jwt/{service_id}/{account}/{id}/authenticate | Gets a short-lived access token for applications using JSON Web Token (JWT) to access the Conjur API. Covers the case of use of optional URL parameter \&quot;ID\&quot; 
*Conjur.AuthenticationApi* | [**getAccessTokenViaKubernetes**](docs/AuthenticationApi.md#getAccessTokenViaKubernetes) | **POST** /authn-k8s/{service_id}/{account}/{login}/authenticate | Gets a short-lived access token for applications running in Kubernetes.
*Conjur.AuthenticationApi* | [**getAccessTokenViaLDAP**](docs/AuthenticationApi.md#getAccessTokenViaLDAP) | **POST** /authn-ldap/{service_id}/{account}/{login}/authenticate | Gets a short-lived access token for users and hosts using their LDAP identity to access the Conjur API. 
*Conjur.AuthenticationApi* | [**getAccessTokenViaOIDC**](docs/AuthenticationApi.md#getAccessTokenViaOIDC) | **POST** /authn-oidc/{service_id}/{account}/authenticate | Gets a short-lived access token for applications using OpenID Connect (OIDC) to access the Conjur API. 
*Conjur.AuthenticationApi* | [**k8sInjectClientCert**](docs/AuthenticationApi.md#k8sInjectClientCert) | **POST** /authn-k8s/{service_id}/inject_client_cert | For applications running in Kubernetes; sends Conjur a certificate signing request (CSR) and requests a client certificate injected into the application&#39;s Kubernetes pod. 
*Conjur.AuthenticationApi* | [**rotateApiKey**](docs/AuthenticationApi.md#rotateApiKey) | **PUT** /authn/{account}/api_key | Rotates a role&#39;s API key.
*Conjur.CertificateAuthorityApi* | [**sign**](docs/CertificateAuthorityApi.md#sign) | **POST** /ca/{account}/{service_id}/sign | Gets a signed certificate from the configured Certificate Authority service.
*Conjur.HostFactoryApi* | [**createHost**](docs/HostFactoryApi.md#createHost) | **POST** /host_factories/hosts | Creates a Host using the Host Factory.
*Conjur.HostFactoryApi* | [**createToken**](docs/HostFactoryApi.md#createToken) | **POST** /host_factory_tokens | Creates one or more host identity tokens.
*Conjur.HostFactoryApi* | [**revokeToken**](docs/HostFactoryApi.md#revokeToken) | **DELETE** /host_factory_tokens/{token} | Revokes a token, immediately disabling it.
*Conjur.PoliciesApi* | [**loadPolicy**](docs/PoliciesApi.md#loadPolicy) | **POST** /policies/{account}/policy/{identifier} | Adds data to the existing Conjur policy.
*Conjur.PoliciesApi* | [**replacePolicy**](docs/PoliciesApi.md#replacePolicy) | **PUT** /policies/{account}/policy/{identifier} | Loads or replaces a Conjur policy document.
*Conjur.PoliciesApi* | [**updatePolicy**](docs/PoliciesApi.md#updatePolicy) | **PATCH** /policies/{account}/policy/{identifier} | Modifies an existing Conjur policy.
*Conjur.PublicKeysApi* | [**showPublicKeys**](docs/PublicKeysApi.md#showPublicKeys) | **GET** /public_keys/{account}/{kind}/{identifier} | Shows all public keys for a resource.
*Conjur.ResourcesApi* | [**showResource**](docs/ResourcesApi.md#showResource) | **GET** /resources/{account}/{kind}/{identifier} | Shows a description of a single resource.
*Conjur.ResourcesApi* | [**showResourcesForAccount**](docs/ResourcesApi.md#showResourcesForAccount) | **GET** /resources/{account} | Lists resources within an organization account.
*Conjur.ResourcesApi* | [**showResourcesForAllAccounts**](docs/ResourcesApi.md#showResourcesForAllAccounts) | **GET** /resources | Lists resources within an organization account.
*Conjur.ResourcesApi* | [**showResourcesForKind**](docs/ResourcesApi.md#showResourcesForKind) | **GET** /resources/{account}/{kind} | Lists resources of the same kind within an organization account.
*Conjur.RolesApi* | [**addMemberToRole**](docs/RolesApi.md#addMemberToRole) | **POST** /roles/{account}/{kind}/{identifier} | Update or modify an existing role membership
*Conjur.RolesApi* | [**removeMemberFromRole**](docs/RolesApi.md#removeMemberFromRole) | **DELETE** /roles/{account}/{kind}/{identifier} | Deletes an existing role membership
*Conjur.RolesApi* | [**showRole**](docs/RolesApi.md#showRole) | **GET** /roles/{account}/{kind}/{identifier} | Get role information
*Conjur.SecretsApi* | [**createSecret**](docs/SecretsApi.md#createSecret) | **POST** /secrets/{account}/{kind}/{identifier} | Creates a secret value within the specified variable.
*Conjur.SecretsApi* | [**getSecret**](docs/SecretsApi.md#getSecret) | **GET** /secrets/{account}/{kind}/{identifier} | Fetches the value of a secret from the specified Secret.
*Conjur.SecretsApi* | [**getSecrets**](docs/SecretsApi.md#getSecrets) | **GET** /secrets | Fetch multiple secrets
*Conjur.StatusApi* | [**getAuthenticators**](docs/StatusApi.md#getAuthenticators) | **GET** /authenticators | Details about which authenticators are on the Conjur Server
*Conjur.StatusApi* | [**getGCPAuthenticatorStatus**](docs/StatusApi.md#getGCPAuthenticatorStatus) | **GET** /authn-gcp/{account}/status | Details whether an authentication service has been configured properly
*Conjur.StatusApi* | [**getServiceAuthenticatorStatus**](docs/StatusApi.md#getServiceAuthenticatorStatus) | **GET** /{authenticator}/{service_id}/{account}/status | Details whether an authentication service has been configured properly
*Conjur.StatusApi* | [**whoAmI**](docs/StatusApi.md#whoAmI) | **GET** /whoami | Provides information about the client making an API request.


## Documentation for Models

 - [Conjur.AuthenticatorStatus](docs/AuthenticatorStatus.md)
 - [Conjur.AuthenticatorsResponse](docs/AuthenticatorsResponse.md)
 - [Conjur.AzureIdentityToken](docs/AzureIdentityToken.md)
 - [Conjur.CertificateJson](docs/CertificateJson.md)
 - [Conjur.CreateHost](docs/CreateHost.md)
 - [Conjur.CreateHostForm](docs/CreateHostForm.md)
 - [Conjur.CreateHostTokenForm](docs/CreateHostTokenForm.md)
 - [Conjur.CsrBody](docs/CsrBody.md)
 - [Conjur.EnableAuthenticatorSetting](docs/EnableAuthenticatorSetting.md)
 - [Conjur.GoogleIdentityToken](docs/GoogleIdentityToken.md)
 - [Conjur.JWTToken](docs/JWTToken.md)
 - [Conjur.LoadedPolicy](docs/LoadedPolicy.md)
 - [Conjur.OIDCToken](docs/OIDCToken.md)
 - [Conjur.PolicyVersion](docs/PolicyVersion.md)
 - [Conjur.Resource](docs/Resource.md)
 - [Conjur.ResourcePermissions](docs/ResourcePermissions.md)
 - [Conjur.ResourceSecrets](docs/ResourceSecrets.md)
 - [Conjur.ServiceAuthenticators](docs/ServiceAuthenticators.md)
 - [Conjur.WhoAmI](docs/WhoAmI.md)


## Documentation for Authorization



### basicAuth

- **Type**: HTTP basic authentication



### conjurAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header



### conjurKubernetesMutualTls


