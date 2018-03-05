# Setup && running the application

Running the app (and navigate to `http://localhost:8080`):

```
docker-compose up --build
```

Accessing the bash console for the React container (for installing new Yarn / NPM packages):

```
docker-compose run frontend bash
```

Accessing the bash console for the Rails app (for `rails c`):

```
docker-compose run backend bash
=> rails c
```

Creating the database:

```
docker-compose run backend rake db:setup
```

Running migrations:

```
docker-compose run backend rake db:migrate
```

# Architecture

The application can be built using `docker-compose up --build`.

There are several interlinking services orchestrated in individual containers: `db` (the postgresql instance), `backend` (the Rails api), `frontend` (the React application) and finally the `nginx` proxy container which pulls everything together and which is the only container which exposes any ports to the host machine.

The Rails application is proxied from port `3000` to `http://localhost:8080/api` and the Webpack / React application is proxied from port `4000` to the root at `http://localhost:8080/`.

The React application was originally created using `create-react-app` but was ejected to expose the full configuration.