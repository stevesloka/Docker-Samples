#DOCKER-VERSION 0.9.1
#
#VERSION 0.1.0
#
# A standard Ubuntu 14.04 image including a version of Mono that is required for running ASP.NET vNext projects

FROM    ubuntu
MAINTAINER Alexander Köplinger

ADD   install-mono.sh /tmp/install-mono.sh
RUN   chmod +x /tmp/install-mono.sh
RUN   /tmp/install-mono.sh

ENV   HOME  /root
RUN   mozroots --import --sync
RUN   /bin/bash -c "curl https://raw.githubusercontent.com/graemechristie/Home/KvmShellImplementation/kvmsetup.sh | sh && source ~/.kre/kvm/kvm.sh && kvm upgrade"

RUN   git clone https://github.com/davidfowl/HelloWorldVNext ~/helloworld
