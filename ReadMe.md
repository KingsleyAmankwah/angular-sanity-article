# How to Integrate Sanity CMS with Angular: A Step-by-Step Guide

[![Read Article on Dev.to](https://img.shields.io/badge/Read%20Article-Dev.to-black)](https://dev.to/kingsley/how-to-integrate-sanity-cms-with-angular-4i74)  
[![Connect on LinkedIn](https://img.shields.io/badge/Connect%20on-LinkedIn-blue)](https://www.linkedin.com/in/kingsleyamankwah/)

---

This project demonstrates how to build a blog-style Angular application powered by **Sanity CMS**, with content fetched using **GROQ** and styled with **TailwindCSS**.

---

## ✨ Features

- 🧠 Headless CMS powered by **Sanity**
- 🧾 Fetch blog posts using **GROQ** queries
- 🛠 Angular services to communicate with Sanity
- 🧭 Routing with slug-based dynamic post viewing
- 🎨 Clean UI with **TailwindCSS**
- 🛡️ Configured **CORS** for local dev

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/KingsleyAmankwah/angular-sanity-article
cd angular-sanity-article
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up Sanity CMS

- Create a project on [Sanity CMS](https://www.sanity.io/)
- Define the following schemas: post, author, and category
- Add a CORS origin for http://localhost:4200

### 4. Configure Sanity Client

Update the Sanity client config with your credentials:

```bash
// src/app/sanity/sanity.config.ts
export const client = createClient({
  projectId: 'your_project_id',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-10-01',
});

```

### Run the Angular application

```bash
cd angular
ng serve -o
```

### Run the Sanity CMS

```bash
cd sanity
sanity dev
```

### 📸 Screenshots

**Blog Homepage (All Posts)**

![Sanity+Angular Integration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/54k5v4npep7375exkrsn.jpg)

**Single Post View (Fetched by Slug)**

![Sanity+Angular+fetchbyslug](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8nuj5kahdqbdjozm4b0z.jpg)

**Sanity CORS Error**

![Sanity CORS ERROR](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o3b6n1y2849cnr8psw6z.png)

**How To Fix CORS Error on Sanity**

![Sanity CORS ERROR SOLUTION](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rbqw8wr66r254nfnm7zk.png)

# 📖 Full Article

Read the step-by-step article here:
👉 How to Integrate Sanity CMS with Angular

```
[![Read Article on Dev.to](https://img.shields.io/badge/Read%20Article-Dev.to-black)](https://dev.to/kingsley/how-to-integrate-sanity-cms-with-angular-4i74) 
```
