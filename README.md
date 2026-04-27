# NEON - High-Performance Game Core & Infrastructure

## Overview
NEON is a modular game engine core built with Node.js and TypeScript, utilizing a Clean Architecture approach to handle real-time game state, persistent themes, and player telemetry. The system is designed for high observability, scalability, and seamless environment orchestration using Docker.

## Key Architectural Principles

### Clean Architecture & DDD
The project follows Domain-Driven Design (DDD) principles to ensure business logic remains isolated from external concerns:
- **Domain Layer:** Pure logic, interfaces, and entities (e.g., `ITheme`, `Brick.ts`) agnostic of any framework.
- **Application Layer:** Orchestrates use cases and game state transitions.
- **Infrastructure Layer:** Handles external dependencies such as MongoDB, Web Servers, and Logging utilities.

### Repository Pattern & Type Safety
Data persistence is abstracted through repositories using **TypeScript Generics**. This decoupling ensures that the Game Core interacts with high-level interfaces rather than specific database drivers, providing compile-time validation for all database operations.

## TypeScript & Runtime Strategy

### NodeNext Module Resolution
The project is configured with **NodeNext** resolution, strictly following the latest ECMAScript Modules (ESM) standards. This ensures modern, scalable module handling and compatibility with the latest Node.js features.

### Just-In-Time (JIT) Execution
For development, the system utilizes a **JIT compilation** strategy via `ts-node/esm`. This allows for a rapid development cycle by compiling TypeScript in memory on-the-fly, eliminating the need for a manual build step during iteration.

### Ahead-Of-Time (AOT) Readiness
The architecture is designed for **AOT compilation**. While JIT is used for development, the project is structured to be compiled into a optimized `dist/` directory for production environments, ensuring maximum performance and minimal startup latency.

## Infrastructure & Environment

### Container Orchestration
The project leverages **Docker Compose** to provide a consistent development environment. This ensures that MongoDB instances and network configurations are standardized across all deployments.

## Developer Experience (DX)

### Unified Workflow
A streamlined automation pipeline is integrated into the system to handle the full development lifecycle:
- **Automatic Port Management:** Prevents `EADDRINUSE` errors by cleaning up stale processes.
- **Dynamic Seeding:** Ensures the database is always hydrated with the latest themes and metadata using type-safe seeding scripts.
- **Parallel Service Execution:** Synchronizes Node.js and Python services simultaneously.

### Advanced Observability
Custom ANSI-coded logging provides high-visibility terminal feedback. By avoiding non-standard characters and utilizing standardized status tags (`INFO`, `SUCCESS`, `DATABASE`, `ERROR`), the system ensures clear monitoring across professional Unix/Linux environments.

## Technical Specifications
- **Runtime:** Node.js v22+ (ES Modules)
- **Language:** TypeScript 5+ (Strict Mode)
- **Database:** MongoDB (Managed via Docker)
- **Execution:** `ts-node` for seamless development iteration.
- **Standardization:** Native environment file handling (`--env-file`) without external dependencies.
