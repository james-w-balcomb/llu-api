#!/usr/bin/env sh

echo "#!/usr/bin/env sh" > deploy_scp_commands.sh

find $PWD -maxdepth 1 -mindepth 1 -type f | awk '{ print "scp" " " $1 " " "jbalcomb@172.81.134.163:/opt/llu-api/"}' >> deploy_scp_commands.sh
find $PWD -maxdepth 1 -mindepth 1 -type d | awk '{ print "scp -r" " " $1 " " "jbalcomb@172.81.134.163:/opt/llu-api/"}'  >> deploy_scp_commands.sh

# ssh
# cd /opt/llu-api/
# npm install --production
# systemctl restart llu-api-1
# systemctl restart llu-api-2
