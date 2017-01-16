# npm install
# docker build -t jm-oms:latest .
FROM dashersw/node-pm2:alpine
MAINTAINER Jeff YU, 2651339@qq.com
ADD . /app
ENV APP app.json
