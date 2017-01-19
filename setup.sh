#!/bin/bash
# BEFORE USE:chmod 777 deploy_web_to_production.sh
# Usage:./deploy_web_to_production.sh

sudo gem install -n /usr/local/bin rhc
sudo gem update
rhc setup
