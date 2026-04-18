# NEON - High-Performance Game Core & Infrastructure

## Overview
NEON is a modular game engine core built with Node.js, utilizing a Clean Architecture approach to handle real-time game state, persistent themes, and player telemetry. The system is designed for high observability, scalability, and seamless environment orchestration using Docker.

## Key Architectural Principles

### Clean Architecture & DDD
The project follows Domain-Driven Design (DDD) principles to ensure business logic remains isolated from external concerns:
- **Domain Layer:** Pure logic and entities (e.g., Brick.js) agnostic of any framework.
- **Application Layer:** Orchestrates use cases and game state transitions.
- **Infrastructure Layer:** Handles external dependencies such as MongoDB, Web Servers, and Logging utilities.

### Repository Pattern
Data persistence is abstracted through repositories. This decoupling ensures that the Game Core interacts with high-level interfaces rather than specific database drivers, allowing for easy migration or multi-database support.

## Infrastructure & Environment

### Container Orchestration
The project leverages **Docker Compose** to provide a consistent development environment. This ensures that MongoDB instances and network configurations are standardized across all deployments.

## Developer Experience (DX)

### Unified Workflow
A streamlined automation pipeline is integrated into the system to handle the full development lifecycle:
- **Automatic Port Management:** Prevents `EADDRINUSE` errors by cleaning up stale processes.
- **Dynamic Seeding:** Ensures the database is always hydrated with the latest themes and metadata upon startup.
- **Parallel Service Execution:** Synchronizes Node.js and Python services simultaneously.

### Advanced Observability
Custom ANSI-coded logging provides high-visibility terminal feedback. By avoiding non-standard characters and utilizing standardized status tags (`INFO`, `SUCCESS`, `DATABASE`, `ERROR`), the system ensures clear monitoring across professional Unix/Linux environments.

## Technical Specifications
- **Runtime:** Node.js v22+ (ES Modules)
- **Database:** MongoDB (Managed via Docker)
- **Integration:** Cross-service communication with Python-based modules.
- **Standardization:** Native environment file handling (`--env-file`) without external dependencies.
