#!/usr/bin/env sh

cd /opt/llu-api/

npm install --production

# chown -R llu-api:llu-api /opt/llu-api/
# chmod -R g=u /opt/llu-api/
# chmod -R +X /opt/llu-api/

systemctl restart llu-api-1
systemctl restart llu-api-2
