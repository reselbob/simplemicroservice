# simplemicroservice
A project that demonstrates how to create a simple microservice that carries its own data

## Installing the Code

`npm install`

## Testing the Code

`npm test`

## Running the Code

`node index.js`

In a second terminal windows make a call to the service:

`curl localhost:3000`

You get output similar to the following:

`{"fortune":"As hard as nails."}`

## Packaging the Code up as a Docker Container

`docker build -t fortunes .`

`docker run -d -p 3003:3000 --name fortunes_service fortunes`

## Running the Code against the Container

`curl localhost:3003`

You get output similar to the following:

`{"fortune":"Windows will never cease."}`


