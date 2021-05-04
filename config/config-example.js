//only need to change client id here

exports.creds = {
	identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', 

	clientID: '<add your own>',
  
	clientSecret: '<add your own>', 
  
	responseType: 'code id_token', 
  
	responseMode: 'form_post', 
  
	redirectUrl: 'http://localhost:2121/auth/openid/return', 
  
	allowHttpForRedirectUrl: true,
  
	validateIssuer: false,
  
	issuer: null,
  
	passReqToCallback: false,
  
	useCookieInsteadOfSession: false,
  
	cookieEncryptionKeys: [ 
	  { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
	  { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
	],
  
	scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],
  
	loggingLevel: false,
  
	nonceLifetime: null,
  
	nonceMaxAmount: 5,
  
	clockSkew: null,
  };
  
  exports.destroySessionUrl = 'http://localhost:2121';
  
  exports.useMongoDBSessionStore = false;
  
exports.databaseUri = 'mongodb+srv://demo:test@cluster0.nvjw1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  
  exports.mongoDBSessionMaxAge = 24 * 60 * 60;  
