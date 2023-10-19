# @muzman/muzman-framework

`@muzman/muzman-framework` is a custom npm package written in TypeScript, designed to easily integrate authentication middleware and custom error/result handlers into your Express applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the latest version of Node.js installed. This package assumes you have Express installed in your project.

### Installation

Easily add this npm package to your project with:

```bash
npm i @muzman/@muzman/muzman-framework
```

or

```bash
yarn add @muzman/muzman-framework
```

### Comprehensive Usage Guide

After installing the @muzman/muzman-framework, you can utilize its features within your application. Here's how you can use each part of the framework:

1-Auth Middleware (requireAuth): This middleware function is used to verify the authentication of users. If the token is valid, it allows the request to proceed; otherwise, it responds with an error.

```javascript
import { requireAuth } from "@muzman/muzman-framework";

// Protect your routes with requireAuth
app.use("/protected-route", requireAuth, (req, res) => {
  // Your code here. This will run after successful authentication.
});
```

2-Error Handling (errorHandler): This function handles errors within your application. You can customize the status code and the message returned to the client.

```javascript
import { errorHandler } from "@muzman/muzman-framework";

// Usage in your Express error-handling middleware.
app.use((err, req, res, next) => {
  // Customize the status code and message as per your requirements.
  errorHandler(req, res, "Custom error message", 500);
});
```

3-Result Handling (resultHandler): This function allows you to standardize the response you send from your API routes, ensuring you maintain consistency throughout your application.

```javascript
import { resultHandler } from "@muzman/muzman-framework";

app.get("/some-route", (req, res) => {
  // You can customize the payload and status code for the response.
  resultHandler(req, res, { data: "This is the response data." }, 200);
});
```

These are the core functionalities provided by @muzman/muzman-framework. By integrating this into your application, you ensure streamlined error handling, response management, and secure routes with authentication.

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated. Please refer to the CONTRIBUTING.md for more information.

### License

Distributed under the ISC License. See LICENSE.md for more information.
