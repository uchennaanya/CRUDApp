# CRUDApp
This project is a CRUD App with MogoDB database and Express


## Create User

> This is use to create a new user to be store in the database
- **ENDPOINT :**   `https://my-crud-app-19.herokuapp.com/api/v1/createuser`

- **METHOD :** `POST`

- **PARAMETERS :**
```JSON
{
    "names":"Uchenna Martins Anya",
    "email":"martinsanya19@gmail",
    "country": "Nigeria"  
}

```
- Response

```JSON
   {
    "message": "Success!",
    "response": {
        "_id": "609bdde60e00d50015edbe7c",
        "names": "Uchenna Martins Anya",
        "email": "martinsanya19@gmail.com",
        "country": "Nigeria",
        "__v": 0
    }
}
```

## Get All Users
> This route fetch all users in the database

- **ENDPOINT :**  `https://my-crud-app-19.herokuapp.com/api/v1/getusers`
- Respponse
```JSON
{
    "message": "Success!",
    "response": [
        {
            "_id": "609bdde60e00d50015edbe7c",
            "names": "Uchenna Martins Anya",
            "email": "martinsanya19@gmail.com",
            "country": "Nigeria",
            "__v": 0
        },
        {
            "_id": "609bde700e00d50015edbe7d",
            "names": "Emekah Okeh",
            "email": "emeka@gmail.com",
            "country": "Nigeria",
            "__v": 0
        }
    ]
}

- **METHOD :** `GET`

## Get A User By ID

> This route allows you to fetch a user by providing user ID

- **ENDPOINT :** `https://my-crud-app-19.herokuapp.com/api/v1/getuser/:id`

- **METHOD :** `GET`

- **PARAMETERS :**
# request.params.id
{_id: "609bdde60e00d50015edbe7c"}

- Respponse
```JSON
{
    "message": "Success!",
    "response": {
        "_id": "609bdde60e00d50015edbe7c",
        "names": "Uchenna Martins Anya",
        "email": "martinsanya19@gmail.com",
        "country": "Nigeria",
        "__v": 0
    }
}

```
## Update User By ID
> This route allows you to update a particular user by ID

- **ENDPOINT :** `https://my-crud-app-19.herokuapp.com/api/v1/updateuser/:id`

- **METHOD :** `PUT`
# request.params.id
{_id: "609bdde60e00d50015edbe7c"}


## Delete User By It ID
> This allows you to delete a user using a specific user ID 
- **ENDPOINT :** `https://my-crud-app-19.herokuapp.com/api/v1/deleteuser/:id`

- **METHOD :** `DELETE`
# request.params.id
{_id :609bdde60e00d50015edbe7c }-