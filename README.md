# Restaurants App

Project to manage restaurants in an simple app.

## Adjustments and improvements

Project development:

- [x] Create API rest with express.
- [x] Develop CRUD for restaurants management.
  - [x] Connect with Mongo.
  - [x] Register.
  - [x] List.
  - [x] Delete.
  - [x] Update.
- [ ] Insert batch processing.
  - [x] Read csv file.
  - [ ] Connect with RabbitMQ.
  - [ ] Send message to queue.

## Requirements

### Installing project (windows)

After clonning projet

`$ npm i`

Installing Chocolatey

`$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`

Downloading Rabbit Mq

`$ choco install rabbitmq`

Now you have to start rabbitmq with this command

`docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management`

Runnning the project

`$ npm start`
