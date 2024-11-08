FROM node:18-bullseye-slim as builder

WORKDIR /app

ENV NODE_ENV production

RUN apt-get update && apt-get install -y openssl

COPY package*.json ./

COPY . /app

RUN npm install --dev --legacy-peer-deps && npm run build

# Check build output
RUN ls -la /app/build

FROM caddy:2.6.4-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/build /srv
COPY --from=builder /app/build /var/www/html

RUN caddy fmt --overwrite /etc/caddy/Caddyfile