# Expense Tracking System API

A RESTful API built with Node.js, Express, and MongoDB for managing personal finances. This backend service allows users to manage multiple digital wallets, track incoming funds, and log outgoing expenses. The system automatically recalculates wallet balances as new transactions are recorded.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
  - [Wallets](#wallets)
  - [Incomes](#incomes)
  - [Expenses](#expenses)
- [System Architecture & Recommended Improvements](#system-architecture--recommended-improvements)

## Features

- **Wallet Management**: Full CRUD operations to create and manage multiple wallets.
- **Income Tracking**: Log incoming funds which automatically increment the associated wallet balance.
- **Expense Tracking**: Log outgoing funds which automatically decrement the associated wallet balance.
- **Centralized Routing**: Modular route handling for clean separation of concerns.
- **Fallback Error Handling**: Global 404 handler for undefined routes.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Configuration**: dotenv

## Prerequisites

Before running this project, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas URI)

## Installation & Setup

1. **Clone the repository** (if applicable) and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd expense-tracking-system
