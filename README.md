bbfoos
======

bbfoos is a scorekeeping application for BombBomb Foosball

1. [Install Docker](https://docs.docker.com/installation/)
2. Pray

Build your foos docker:

	docker build -t bombbomb/bbfoos .


The following will boot your docker container and give you a bash shell as root (windows replace `` `pwd` `` with your path):

	docker run -i -t -p 3000:3000 -v `pwd`:/src bombbomb/bbfoos


once inside your docker container, run the following to install any node dependencies and start the node server:

	npm install
	nodemon server.js
