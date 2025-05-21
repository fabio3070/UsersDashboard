# User Dashboard Project

A modern, accessible user dashboard built with React, TypeScript, and Tailwind CSS.

## Key Features

- **Responsive UI**: Built with Tailwind CSS for consistent styling and accessibility
- **Optimized Data Fetching**: Uses SWR for caching and state management
- **Scalable Architecture**: Feature-based organization for maintainability
- **Type Safety**: Full TypeScript integration
- **Accessibility**: Tailwind's default accessibility-friendly configuration

## Technology Stack

| Category         | Technology             |
|------------------|------------------------|
| UI Framework     | React 18               |
| Styling          | Tailwind CSS           |
| State Management | SWR                    |
| API Client       | Fetch API              |
| Language         | TypeScript             |
| Architecture     | Feature-based          |

## Project Structure
```mermaid
src/
├── components/ # Shared UI components
├── features/
│ ├── dashboard/ # Dashboard feature
│ └── users/ # Users page feature
├── hooks/ # Custom hooks
├── lib/
│ └── swr/ # SWR hooks and caching
├── services/ # API service layer
│ ├── http/ # HTTP client implementation
│ └── api/ # API fetching and business logic
├── types/ # TypeScript definitions
└── utils/ # Utility functions
```

## Architectural Decisions

### 1. Styling with Tailwind CSS
- Pre-configured for accessibility
- Themeable design system
- Utility-first approach for rapid development

### 2. Data Fetching Strategy
```mermaid
    Component -->|useUsers| SWRHook
    SWRHook -->|calls| ApiService
    ApiService -->|uses| HttpClient
    HttpClient -->|Fetch API| Backend
```
### 3. Why Fetch API?
- It has similar functionality as Axios or other fetching libraries
- Its built in React and a Native Javascript API
- For this small exercise, where we won't need interceptors it works just fine

### 4. Feature based structure
I used a feature-based architecture to ensure the project is scalable, easy to understand, and aligned with the SOLID principles—without introducing unnecessary complexity or over-engineering.

Currently, the project includes two main routes:
- **Dashboard**
- **UsersPage**

Each feature folder contains only the code relevant to that specific feature. Shared components, hooks, and assets are located in the root-level structure of the project to promote reusability and maintain a clean separation of concerns.

## Installing Guide

### 1. 📦 Install Dependencies
```mermaid
npm install
```

### 2. ▶️ Start Development Server
```mermaid
npm install
```

### 3. ▶️ Open the Development Server
```mermaid
http://localhost:5173/
```