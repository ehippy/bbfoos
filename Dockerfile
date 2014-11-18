# FoosFools in the house!

# Bootstrap a machine with Mongo, Node, NPM, mongoose and nodemon
FROM centos
MAINTAINER Captain Appleballs <foosball@bombbomb.com>
RUN sudo apt-get update && apt-get install -y npm
RUN sudo npm install mongoose
RUN npm install -g nodemon


# coddle precious mongodb
RUN sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
RUN sudo apt-get update
RUN sudo apt-get install -y mongodb-org
RUN sudo service mongod start


# switch to dir
RUN mkdir /src
RUN chmod 777 /src