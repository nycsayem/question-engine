# Node.js Question Management System

This project implements a **Question Management System** that allows for the management of multiple-choice questions. It supports CRUD operations, rich text formatting, and image embedding, along with a structured API for Unity integration.

## Overview

The system is built using **Node.js**, **MongoDB**, and **Express**. It allows for:
- CRUD operations on questions.
- Rich text support for questions and explanations.
- API to retrieve questions in JSON format for Unity integration.

---

## Quick Setup Guide

Follow these steps to get the project running locally:

### 1. Install Dependencies
Ensure you have **Node.js** and **MongoDB** installed on your system. You can install them using NVM (for Node.js) and follow the MongoDB setup guide.

### 2. Clone the Repository
Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/question-management.git
cd question-management
```


### 3. Install Project Dependencies
Install the required Node.js packages:
```bash
npm install
```


### 4. Configure Environment Create a .env file in the root of the project and add the following environment variables:
```bash
MONGODB_URI=mongodb://localhost:27017/question-management
PORT=3000
```

### 5. Run the Application Start the development server:
```bash
npm run dev
```

The application will be running at http://localhost:3000.



---

## Features

### 1. Question Management
- **CRUD Operations**:
  - Create, Retrieve, Update, and Delete questions.
- **Question Structure**:
  - **Question Text**: Supports rich text formatting (e.g., bold, italics, lists).
  - **Answers**:
    - Multiple-choice options.
    - Indicator for the correct answer.
  - **Explanation**: Rich text formatting and embedded images.
  - **Tags**: Categorization for filtering questions (e.g., math, reading).

### 2. Rich Text and Image Support
- **Rich Text**: Questions and explanations support advanced text formatting.
- **Image Embedding**: Embedded image URLs can be included in both questions and explanations.

### 3. JSON API for Unity Integration
- **API Endpoint**: `/questions/json`
- **Output**:
  - Structured JSON format maintaining rich text and image URLs.
  - Includes optional fields like `skills`, `tags`, and `difficulty`.

---

## API Endpoints

### 1. CRUD Endpoints
| Method   | Endpoint           | Description                |
|----------|--------------------|----------------------------|
| `POST`   | `/questions`       | Create a new question.     |
| `GET`    | `/questions/{id}`  | Retrieve a question by ID. |
| `PUT`    | `/questions/{id}`  | Update an existing question. |
| `DELETE` | `/questions/{id}`  | Delete a question by ID.   |

### 2. JSON Retrieval
| Method   | Endpoint           | Description                        |
|----------|--------------------|------------------------------------|
| `GET`    | `/questions/json`  | Retrieve all questions as JSON.    |
