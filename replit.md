# Overview

Evergreen Family Clinic is a modern healthcare web application that serves as a complete digital presence for a family medical practice. The application provides a comprehensive platform for patients to learn about medical services, view doctor profiles, book appointments, and contact the clinic. Built with a full-stack TypeScript architecture, it combines a React frontend with an Express.js backend, featuring a clean, responsive design optimized for healthcare interactions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 and TypeScript, utilizing a component-based architecture with modern UI patterns. The application uses Vite as the build tool for fast development and optimized production builds. State management is handled through TanStack Query (React Query) for server state and React's built-in state management for local component state.

The UI framework is based on shadcn/ui components, which provides a consistent design system built on top of Radix UI primitives and styled with Tailwind CSS. This approach ensures accessibility compliance and consistent user interactions across all components. The design system includes healthcare-specific color variables and theming support for both light and dark modes.

Navigation is implemented using Wouter, a lightweight client-side routing solution that provides smooth single-page application behavior. The application follows a mobile-first responsive design approach with smooth scrolling navigation between page sections.

## Backend Architecture
The server is built with Express.js and TypeScript, following a RESTful API design pattern. The application uses a layered architecture with clear separation between routes, business logic, and data access layers. The server includes comprehensive request logging and error handling middleware for debugging and monitoring.

The storage layer is abstracted through an interface-based approach, currently implementing an in-memory storage solution for development purposes. This abstraction allows for easy migration to persistent database solutions without affecting the business logic or API contracts.

## Data Management
The application uses Drizzle ORM with PostgreSQL schema definitions for type-safe database interactions. Database schemas are defined using Drizzle's table definitions with proper TypeScript typing throughout the application. Input validation is handled through Zod schemas that are automatically generated from the database schema definitions, ensuring consistency between database structure and API validation.

Three main data entities are managed: doctors (with profiles and specialties), appointments (patient booking information), and contact messages (general inquiries). All schemas include proper field validation and type checking to maintain data integrity.

## Development Environment
The project is configured for development on Replit with specialized plugins for error overlay and debugging. The development setup includes hot module replacement, automatic TypeScript checking, and integrated build processes. The monorepo structure keeps shared types and schemas accessible to both frontend and backend code.

## Authentication and Security
Currently, the application operates without user authentication, focusing on public information display and contact form submissions. Form submissions include basic validation and sanitization through Zod schemas. The architecture is prepared for future authentication implementation through the existing middleware structure.

# External Dependencies

## Core Technologies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type-safe development across the entire stack
- **Vite**: Build tool and development server for the frontend
- **Tailwind CSS**: Utility-first CSS framework for styling

## UI and Component Libraries
- **shadcn/ui**: Complete component library based on Radix UI primitives
- **Radix UI**: Unstyled, accessible UI components for forms, dialogs, and interactions
- **Lucide React**: Icon library providing consistent iconography
- **React Icons**: Additional icon sets for social media and branding

## Data and State Management
- **TanStack Query**: Server state management with caching, synchronization, and background updates
- **Drizzle ORM**: Type-safe database toolkit and query builder
- **Zod**: Schema validation library for runtime type checking
- **Drizzle-Zod**: Integration between Drizzle schemas and Zod validation

## Database and Storage
- **PostgreSQL**: Primary database (configured via Drizzle but using in-memory storage in development)
- **Neon Database**: Serverless PostgreSQL provider for production deployment

## Development and Build Tools
- **esbuild**: Fast JavaScript bundler for server-side builds
- **tsx**: TypeScript execution environment for development
- **PostCSS**: CSS processing with Autoprefixer for cross-browser compatibility

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional CSS class name utility
- **class-variance-authority**: Type-safe variant generation for component styling
- **nanoid**: Secure URL-friendly unique ID generator

## Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development environment enhancements