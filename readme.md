# Dockerization

> Backend - Node js

- ./backend/Dockerfile

> Frontend - React -> Nginx

- ./fronted/Dockerfile

### Run docker-compose.yml

`docker compose up --build -d`

- **-d** flag will **remove the containers** when shut down the docker-compose

`docker images`

```bash
REPOSITORY                 TAG       IMAGE ID       CREATED          SIZE
blog-react_frontend        latest    433b7ea1d917   39 seconds ago   42MB
blog-express_backend       latest    34e20691845f   46 minutes ago   186MB
```

`docker ps`

```bash
CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS          PORTS        NAMES
2db57908f228   blog-react_frontend    "/docker-entrypoint.…"   10 minutes ago   Up 10 minutes   3000/tcp, 0.0.0.0:3000->80/tcp, :::3000->80/tcp   react_frontend

0f6f0010f6af   blog-express_backend   "docker-entrypoint.s…"   10 minutes ago   Up 10 minutes   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp         express_backend
```

> Frontend running on 3000 & Backend running on 8080

> Do a crud operation

`docker compose down`

[Summerize Video](https://drive.google.com/file/d/14Id4aCwxOe4kgYpj2rbDgKv6ADNM6Ns-/view?usp=sharing)
