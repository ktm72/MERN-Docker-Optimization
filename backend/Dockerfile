FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN --mount=type=cache,target=/app/.npm \
  npm set cache /app/.npm && \
  npm ci --only=production

USER node

COPY --chown=node:node ./dist/ .

EXPOSE 8080

CMD ["node", "index.js"]