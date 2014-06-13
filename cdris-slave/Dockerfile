FROM ubuntu:14.04
MAINTAINER Stephen Sloka <slokas@upmc.edu>

# Install RabbitMQ
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y rabbitmq-server pwgen
RUN rabbitmq-plugins enable rabbitmq_management

#Install OpenSSH Server
RUN apt-get install openssh-server -y
RUN mkdir /var/run/sshd

#install java
RUN apt-get install openjdk-6-jdk -y

#install ruby
RUN apt-get install ruby -y
RUN apt-get install ruby-dev -y
RUN apt-get install ruby1.9.1-dev -y
RUN apt-get install make -y
RUN gem install bundler
RUN gem install cucumber

#Create jenkins user
RUN adduser jenkins 
RUN echo "jenkins:jenkins" | chpasswd

#mount the current project workspace under /project inside the container
ADD . /workspace

# Add scripts
ADD run.sh /run.sh
ADD set_rabbitmq_password.sh /set_rabbitmq_password.sh
RUN chmod 755 ./*.sh

EXPOSE 5672 15672 22
CMD ["/run.sh"]
