## Tools

- Frontend Application: [React](https://reactjs.org/) + [Create React App](https://github.com/facebookincubator/create-react-app)

- Backend Application - API: [Ruby on Rails](http://rubyonrails.org/)

- Environment: [Docker](https://www.docker.com/)

- Infrastructure as Code: [Hashicorp | Terraform ](https://www.terraform.io/)

- Commands: [#!/bin/bash](https://www.gnu.org/software/bash/)


## Quick start

### Running locally

To run the client and the API on your local machine:

1. Install [Docker](https://www.docker.com/). 
2. `docker-compose up`
3. Test the API to http://localhost:3000/api/v1/notes.json
4. Test the client (and its connectivity to the API) by going to http://localhost:4000.

The `docker-compose.yml` file mounts `noteboard-client` and `noteboard-api` folders as volumes in each Docker image, so any changes you make to the apps on your host OS will automatically be reflected in the running Docker container. This lets you do iterative "make-a-change-and-refresh" style development.

### Docs

You will find a lot of resources on `docs` folder, please see the list below:

- ![Homework](/docs/homework.md)

- ![Resources](/docs/resources.md)

- ![React](/docs/react.md)

- ![Rails](/docs/rails.md)

- ![Docker](/docs/docker.md)

- ![Terraform](/docs/terraform.md)

### Slides

You can find the slides [here](https://www.slideshare.net/emaraschio/fullstack-conf-2017-basic-dev-pipeline-endtoend-83085680)
