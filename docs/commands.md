# Development Commands & Troubleshooting

This guide contains essential commands for the **Neon** project environment.

## Docker Operations

### Emergency Cleanup
Stops and removes all containers to free up ports (e.g., 27017 for MongoDB).
```bash
docker stop $(docker ps -aq) && docker rm $(docker ps -aq)
```

### Restart Environment
Full reset: stops services, removes volumes, and lifts them again.
```bash
docker compose down -v && docker compose up -d
```

## TypeScript & Environment Setup
Initialize TypeScript

Creates the tsconfig.json file to manage compiler settings.
```bash
npx tsc --init
```

Install MongoDB Types

Adds type definitions for the MongoDB driver to enable IntelliSense and Type Checking.
```bash
npm install --save-dev @types/mongodb
```

Install TS Runtime

Install the loader needed to run .ts files directly in Node.js.
```bash
npm install --save-dev ts-node
```