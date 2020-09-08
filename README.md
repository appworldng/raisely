# raisely

A basic signup form that makes a POST request with a JSON payload to Raisely's API - https://api.raisely.com/v3/signup using the user’s first name, last name, email address and password.

```
{
 "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
 "data": {
  "firstName": "the user's first name",
  "lastName": "the user's last name",
  "email": "the user's email address",
  "password": "the user's password"
 }
}
```

The form also asynchronously validates the email address once a POST request is made to https://api.raisely.com/v3/check-user with the body

```
{
 "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
 "data": {
  "email": "the user's email address",
 }
}
```

and returns

```
{
 "data": {
  "status": "OK",
 }
}
```

Or

```
{
 "data": {
  "status": "EXISTS",
 }
}
```
