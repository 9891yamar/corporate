# Multi-stage build for production optimization
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install specific pnpm version
RUN npm install -g pnpm@8.9.2

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the application
FROM base AS builder
WORKDIR /app

# Install specific pnpm version
RUN npm install -g pnpm@8.9.2

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build application
RUN pnpm build

# Production image
FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install specific pnpm version
RUN npm install -g pnpm@8.9.2

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

# Set user
USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

# Start the application
CMD ["pnpm", "preview"]
