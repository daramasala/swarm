## Collaborative Platform

This is a first attempt at the implementation of the 

in order to prepare a new ubuntu 13.10 machine for running this you should install the following packages like that:

```
$ sudo apt-get install nodejs nodejs-legacy
```
Install meteor as described in meteor.com:
```
$ curl https://install.meteor.com/ | sh
```

(you don't need to install neo4j right now)
install neo4j according to this: http://www.neo4j.org/download/linux

By default neo4j browser web app only accepts localhost requests you can change that according to information from: http://docs.neo4j.org/chunked/stable/security-server.html

We also rely on meteorite so you need to install that too
```
$ sudo npm install -g meteorite
```

Now you can clone this project. Copy the repository's url from the box on the left.
```
$ git clone <repository-url>
```

now we need to download the meteorite packages so we
```
$ cd swarm 
$ sudo mrt install
```

Running for the first time you will probably need sudo too because some other packages are being downloaded

```
$ sudo meteor
```

Voila!
