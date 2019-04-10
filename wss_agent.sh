#!/bin/sh 

# NOTE: this is installed into the Docker image
# curl -LJO https://github.com/whitesource/unified-agent-distribution/raw/master/standAlone/wss-unified-agent.jar
# Not needed as the project has a custom config file
# curl -LJO https://github.com/whitesource/unified-agent-distribution/raw/master/standAlone/wss-unified-agent.config

java -jar /tmp/wss-unified-agent.jar "$@"