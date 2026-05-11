# NEON - High-Performance Game Ecosystem

## Overview
**NEON** is a modular game ecosystem designed with a decoupled architecture. It combines a real-time game core, a professional administrative interface, and a robust fiscal/logic backend. Built using **Clean Architecture** and **DDD**, it ensures high observability, scalability, and seamless environment orchestration.

## Stack

![Node.js](https://img.shields.io/badge/Node.js-22+-339933?logo=nodedotjs&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/DRF-Backend_API-092E20?logo=django&logoColor=white)
![Webix Jet](https://img.shields.io/badge/Webix_Jet-Frontend_UI-2196F3?logo=javascript&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![Clean Architecture](https://img.shields.io/badge/Architecture-Clean-8A2BE2)

## System Architecture

The project is divided into three main decoupled pillars:

*   **Game Core (The "ROM"):** A pure **Node.js** engine handling real-time game state, brick logic, and physics without framework overhead.
*   **User Interface (The "Console"):** A sophisticated SPA built with **Webix Jet** for managing profiles, themes, scores, and navigation.
*   **Backend Services (The "Cloud"):** A **Django REST Framework (DRF)** API providing persistent data, authentication, and global game configurations.

## Key Architectural Principles

### Clean Architecture & DDD
Business logic is isolated from external concerns:
- **Domain Layer:** Pure logic and entities (e.g., `ITheme`, `Brick.ts`) agnostic of any framework.
- **Application Layer:** Orchestrates use cases and game state transitions.
- **Infrastructure Layer:** Handles external dependencies like MongoDB, PostgreSQL, and Web Servers.

### Technical Strategy
- **NodeNext & ESM:** Strictly following modern ECMAScript Modules for scalable module handling.
- **JIT & AOT Readiness:** Utilizing `ts-node/esm` for rapid development and pre-compiled `dist/` builds for production performance.
- **Repository Pattern:** Data persistence abstracted through TypeScript Generics for compile-time validation.

## Infrastructure

### Container Orchestration
Standardized development environment using **Docker Compose**, ensuring consistency across database instances (MongoDB/PostgreSQL) and network configurations.

## Developer Experience (DX)

- **Unified Workflow:** Automation for port management and process cleanup.
- **Dynamic Seeding:** Type-safe scripts to ensure the database is always hydrated with the latest metadata.
- **Advanced Observability:** Custom ANSI-coded logging for high-visibility terminal feedback in Unix/Linux environments.

## Development

Run the full local environment:

```bash
# To start the infrastructure and services
docker compose up --build
```
