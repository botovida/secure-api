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

  a. Ensure you have git and a web browser installed
  b. git clone <https://github.com/botovida/secure-api>
  c. Run npm install
  d. Run npm start to start the server
  e. On the browser, navigate to **``127.0.0.1:3000``**; You will be greeted with a message: **``Welcome to AjoCard Payment Services!``**

##### 2) Make payment API call
a. Ensure you have **Postman** installed
b. On Postman make an ``POST`` API call to ``127.0.0.1:3000/api/v1/paymets`` endpoint with the following parameters:

```
  "accountBalance": 1000,
  "transactionAmount":200,
  "destinationWalletId": 12345,
  "pin": 1234
```

Note: **Ensure that values entered are integers else, an error will be thrown**

c. On successful acceptance of payment details upon user request, the following response is expected:
```
  "data": {
    "status": 201,
    "payment": {
        "transactionId": "39fe1227-f83f-4ec1-a785-dcb265e0057a",
        "transactionAmount": 200,
        "destinationWalletId": 12345,
        "accountPin": "",
        "generatedOTP": 947986,
        "transactionDate": "12/17/2019, 2:37:33 PM",
        "transactionStatus": "Pending"
    },
    "message": "Please enter the OTP sent to you to confirm payment"
  }
```

##### 3) Confirm Payment API call

a. On **Postman** make a PATCH request to ``127.0.0.1:3000/api/v1/payment/:id`` using the transaction ID from the response of the Payment API call above as ``:id`` parameter.

b. Enter the generated OTP in the response above in the body of this request as shown in the example below:

**Request Parameters**:
``127.0.0.1:3000/api/v1/payment/39fe1227-f83f-4ec1-a785-dcb265e0057a``

**Request Body**:
```
  "OTP": 947986
```

c. On sucess, there will be a response message as sampled below:
```
  "status": 200,
  "data": {
    "currentTransaction": {
        "transactionId": "797f4e24-944d-4dd5-bb83-e26c953ec146",
        "amountDebited": 200,
        "accountBalance": 800,
        "transactionStatus": "Completed",
        "transactionDate": "12/17/2019, 3:12:57 PM"
    },
    "message": "Payment Successful"
  }
```

d. On failure, there will be a response message as shown below:
``` 
Transaction Failed
```

##### 4) Fetch a Log of all transactions API call

a. On **Postman** make a GET request to ``127.0.0.1:3000/api/v1/payments``
b. On success, there will be a response showing an array of transcations as shown below:
```
"data": {
        "status": 200,
        "payments": [
            {
                "transactionId": "534504f7-4f01-4eb1-b030-756c768281ee",
                "accountBalance": 1000,
                "transactionAmount": 200,
                "destinationWalletId": 12345,
                "accountPin": "",
                "generatedOTP": 264843,
                "transactionDate": "12/17/2019, 3:41:07 PM",
                "transactionStatus": "Pending"
            },
            {
                "transactionId": "534504f7-4f01-4eb1-b030-756c768281ee",
                "amountDebited": 200,
                "accountBalance": 800,
                "transactionStatus": "Completed",
                "transactionDate": "12/17/2019, 3:41:07 PM"
            },
                        {
                "transactionId": "eac740e5-1bb3-405c-8200-1c99feb5f316",
                "accountBalance": 1000,
                "transactionAmount": 200,
                "destinationWalletId": 12345,
                "accountPin": "",
                "generatedOTP": 59367,
                "transactionDate": "12/17/2019, 3:43:36 PM",
                "transactionStatus": "Pending"
            }
        ]
    }
```
c. There is a response message in event there are not payment records as shown below:
```
    "status": 404,
    "message": "There are no payment records"
```

#### Note
  * In event there is a server error, there will be a response with a status code of 500 and a corresponding server error message.
  * This is Version 1 of this API. It is designed using data structure to persist data. Subesequent versions may witness persisting data with a database.