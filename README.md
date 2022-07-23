<div align="center">
  <h3 text-transform="underline"> MERN stack (MongoDB, Express, React, Node.js) E-Commerce app with Redux Toolkit. </h3>
</div>

<p align="center">
 That was a hobby project for someone trying to learn Redux Toolkit and MERN stack deeply. I learned a lot things while doing it and had a lot of fun (LOL, actually I hate it cause of bugs). I think I've learned many things about MERN stack and RTK Query. 
</p>

<p align="center">
  Hosted with <a href="https://vercel.com/" target="_blank">Vercel</a>
</p>

<p align="center">
  <a href="https://github.com/olcaneristi/mern-blog-app/tree/main/client/LICENSE" target="_blank">
  <img src="https://camo.githubusercontent.com/c687724720de8b1cda17417d380b20a5cb493c5eb8e7bf3597e26cdcf665d52a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f444156466f756e646174696f6e2f6361707461696e2d6e336d302e7376673f7374796c653d666c61742d737175617265" alt="License"/></a>
</p>

<h3 align="center">
 <a href="https://mern-ecommerce-liart.vercel.app/" target="_blank"> Demo </a> 🚀
</h3>

<!-- ## 📷 Screenshots and Demo GIF

![demo]()

<div align="center">
  <img alt="Demo Gif" src=""/>
</div>

 -->

## 🗂️ Packages used in this project

| Package (Frontend) | Version |
| ------------------ | ------- |
| axios              | ^0.21.4 |
| framer-motion      | ^6.3.16 |
| jwt-decode         | ^3.1.12 |
| moment             | ^2.29.1 |
| react              | ^17.0.2 |
| react-hot-toast    | ^2.2.0  |
| react-lottie       | ^1.2.3  |
| react-modal        | ^3.15.1 |
| react-redux        | ^7.2.2  |
| @reduxjs-toolkit   | ^4.0.5  |
| redux-logger       | ^3.0.6  |
| sass               | ^1.53.0 |
| swiper             | ^8.0.0  |

| Package (Backend) | Version |
| ----------------- | ------- |
| bcrypt            | ^5.0.1  |
| cors              | ^2.8.5  |
| dotenv            | ^16.0.1 |
| express           | ^4.18.1 |
| joi               | ^17.6.0 |
| jsonwebtoken      | ^8.5.1  |
| mongoose          | ^6.4.4  |
| nodemon           | ^2.0.18 |

<br/>

## 🛠 Installation

1. Clone this project via GitHub or Git, then go to folder location (frontend or backend, whichever you want)

```bash
cd client ## for frontend

#or

cd server ## for backend
```

2. Install deps with Yarn:

```bash
yarn
```

3. In the project directory, run the development server:

```bash
yarn start ## for frontend

nodemon ## for backend
```

<br/>

## ℹ️ Information

This project uses MongoDB Cloud as database service and JSON Web Tokens for auth.

Create .env files inside server/ and enter the necessary variables (JWT secret key or MongoDB Cloud URI)

```bash

DB_URI = mongodb+srv://<yourUsername:<yourPassword>@cluster0.u5blo2m.mongodb.net/<databaseName>?retryWrites=true&w=majority

JWT_KEY = YOUR_KEY_OR_SOMETHING

```
