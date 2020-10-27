const express = require("express");
const cors = require("cors");
const {uuid} = require("uuidv4");

// const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO

  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  // TODO
  const {title, url, techs} = request.body

  const newRepo = { 
    id: uuid(), 
    title, 
    url, 
    techs,
    likes: 0 
      }

      repositories.push(newRepo)

      return response.json(newRepo)
});

app.put("/repositories/:id", (request, response) => {
  // TODO
  const {id} = request.params
  const {title, url, techs} = request.body

  const repositoryIndex = repositories.findIndex(repo => repo.id == id)

  const newRepo = { 
    id, 
    title, 
    url, 
    techs
      }

      repositories[repositoryIndex] = newRepo

      return response.json(newRepo)
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
  const {id} = request.params
  const repositoryIndex = repositories.findIndex(repo => repo.id == id)

  repositories.splice(repositoryIndex, 1)

  return response.status(204).send()
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
