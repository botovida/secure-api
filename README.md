# AjoCard Secure API

AjoCard is a financial services company, leveraging technology to provide services to the unbanked and the underbanked.

To do this, users would have to be logged in to their AjoCard mobile app
and complete a transaction by:
1. Specifying the amount.
2. Specifying the destination wallet ID.
3. Inputting their 4 digit PIN, and
4. Providing an OTP that’ll be sent to their registered phone number.


### Features

1. Users should be able to make payments by entering payment details.
2. Users should be able to validate payment using an OTP.
3. Users should be able to access an audit log of their transactions. 


### How it works

This API is currently under development. Users can test the API in a local development environment (personal computer) as shown below:

##### 1) Clone the project:

    To clone this repository: 

  a) Ensure you have git and a web browser installed
  b) git clone https://github.com/botovida/secure-api/tree/staging-secure-api
  c) Run npm install
  d) Run npm start to start the server
  e) On the browser, navigate to **``127.0.0.1:3000``**; You will be greeted with a message: **``Welcome to AjoCard Payment Services!``**


##### 2) Make payment API call:
a) Ensure you have **Postman** installed
b) On Postman make an ``POST`` API call to ``127.0.0.1:3000/api/v1/paymets`` endpoint with the following parameters:
```
	"accountBalance": 1000,
	"transactionAmount":200,
	"destinationWalletId": 12345,
	"pin": 1234
```
Note: **Ensure that values entered are integers else, an error will be thrown**

c) On successful acceptance of payment details upon user request, the following response is expected:
