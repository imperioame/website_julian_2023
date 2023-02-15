# website_julian_2023
Personal website



# Setup:

This repo contains a git submodule. The old CV version.
To import correctly, clone the repo with the following aditional parameter:

> git clone --recurse-submodules https://github.com/imperioame/website_julian_2023

If you've made pull and forgot to import the module, you can:
> git submodule update --init --recursive

Then, run ...
> npm install

which installs dependencies.

have parcel installed ... 
> npm install parcel -g

... so you can ...


## Local
> parcel ./src/index.html 

for automatic build and virtual server.


## Prod
> npm run build

to build in prod.