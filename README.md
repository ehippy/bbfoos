bbfoos
======

bbfoos is a scorekeeping application for BombBomb Foosball

1. [Install Docker](https://docs.docker.com/installation/) and run boot2docker
2. Get a [mongo container](https://registry.hub.docker.com/_/mongo/) booted:

    	docker pull mongo
    	docker run --name foosdb -d mongo

3. Build app's node.js container:

		docker build -t bombbomb/bbfoos .


4. The following will boot your docker container, link it's /src dir with this dir, and give you a bash shell. (Windows fans replace `` `pwd` `` with your path, I bet):

		docker run -d -p 3000:3000 -v `pwd`:/src bombbomb/bbfoos


5. once inside your node container, run the following to install any node dependencies and start the node server:

		npm install
		nodemon server.js
		
6. Get your boot2docker's ip

		boot2docker ip
		
7. Point your browser at [http://boot2docker_ip:3000/]()
8. When you change your code, enter `rs` into your node box to reload node :-\