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

# Using on your own project

Nuke the git directory:

```
rm -rf .git
```

Start again:

```
git init
git add .
git commit -m "Initial commit"
```

Do some work / profit

# Recommended dep versions

I develop using Ubuntu, so your mileage may vary on other operating systems like OS X and Windows.

Docker Compose:

```
➜  react-rails-docker git:(master) docker-compose -v
docker-compose version 1.19.0, build 9e633ef
```

Docker:

```
➜  react-rails-docker git:(master) ✗ docker -v
Docker version 17.12.1-ce, build 7390fc6
```

Ruby version (through rbenv):

```
➜  react-rails-docker git:(master) ✗ ruby -v
ruby 2.5.0p0 (2017-12-25 revision 61468) [x86_64-linux]
```