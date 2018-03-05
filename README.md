# Setup && running the application

Run:

```
docker-compose up --build
```

# Architecture

The application can be built using `docker-compose up --build`.

There are several interlinking services orchestrated in individual containers: `db` (the postgresql instance), `backend` (the Rails api), `frontend` (the React application) and finally `nginx` which is the only container which exposes any ports. The Rails application is proxied from port `3000` to port `8080` at `/api` and the Webpack / React application is proxied to `/` on `8080`.

