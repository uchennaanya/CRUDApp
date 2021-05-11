# CRUDApp
This project is a CRUD App with MogoDB database and Express


## Create User

> This is use to create a new user to be store in the database
- **ENDPOINT :**   `https://my-crud-app-19.herokuapp.com/api/v1/createuser`

- **METHOD :** `POST`

- **PARAMETERS :**
```JSON
{
    "firstname":"Uchenna",
    "lastname":"Anya",
    "age":36
    
}
```
- Response

```JSON
    {
    "status": "success",
    "responseMessage": {
        "_id": "60950b5a505ecb00156d7c04",
        "firstname": "Uchenna",
        "lastname": "Anya",
        "age": 36,
        "createdAt": "2021-05-07T09:41:46.485Z",
        "updatedAt": "2021-05-07T09:41:46.485Z",
        "__v": 0
    }
}
```

## Get All Users
> This route fetch all the users in the database

- **ENDPOINT :**  `https://my-crud-app-19.herokuapp.com/api/v1/getuser`

- **METHOD :** `GET`

## Get A User By ID
> This route allows you fetch a user by providing user ID

- **ENDPOINT :** `https://my-crud-app-19.herokuapp.com/api/v1/getuser/:id`

- **METHOD :** `GET`

- **PARAMETERS :**
# request.params.id
{_id: "609aab715cb9ca0015f8ac15"}

- Respponse
```JSON
{
    message: "Success!",
    response: [
    {
        _id: "609aab715cb9ca0015f8ac15",
        firstname: "Oleh",
        lastname: "Uduma",
        age: 80,
        __v: 0
        }
    ]
}

```
## Update User By ID
> This route allows you to update a particular user by ID

- **ENDPOINT :** `https://my-crud-app-19.herokuapp.com/api/v1/updateuser/:id`

- **METHOD :** `PUT`
# request.params.id
{_id: "609aab715cb9ca0015f8ac15"}


## Delete User By It ID
> This allows you to delete a user using a specific user ID 
- **ENDPOINT :** `https://my-crud-app-19.herokuapp.com/api/v1/deleteuser/:id`

- **METHOD :** `DELETE`
# request.params.id
{_id :609aab715cb9ca0015f8ac15}-