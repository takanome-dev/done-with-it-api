<div align="center">
  <br>
  <img src="/public/logo-red.png" alt="DoneWithIt Logo" width="300px">
  <h1>DoneWithIt Mobile App - Backend</h1>
</div>

This is the backend for the [DoneWithIt mobile app](https://github.com/TAKANOME-DEV/done-with-it). It is built using Node.js, Express, and MongoDB.

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### Installing

1. fork the repo

2. Clone the repo

```sh
git clone https://github.com/<your_username>/done-with-it-api.git
```

3. Change directory

```sh
cd done-with-it-api
```

4. Install NPM packages

```sh
npm install
```

5. Create a `.env` file in the root directory and add the following environment variables

```sh
# Generate one using: openssl rand -base64 32
JWT_PRIVATE_KEY = "your_jwt_private_key"
# default port
PORT = 9000
# your ip address
ASSETS_BASE_URL = "http://<your_ip_address>:<port_number>/assets/"
# max number of images to be uploaded
MAX_IMAGE_COUNT = 5
```

6. Run the server

```sh
npm start
```

## :balance_scale: LICENSE

The scripts and documentation in this project are released under the [MIT LICENSE](LICENSE)

## :pray: Support

Don't forget to leave a ⭐ if you like this project :wink:

## 📫 Contact

Find out more about how to reach me at [takanomedev221@gmail.com](mailto:takanomedev221@gmail.com)
