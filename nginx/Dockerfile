FROM nginx:1.11-alpine
MAINTAINER Mark Ronald Delos Santos (markrdelossantos@hotmail.com)

COPY nginx.conf /conf/nginx.conf
COPY lib.js /var/www/assets/lib.js
COPY yadidit.mp4 /var/www/assets/yadidit.mp4
COPY udeditegenfren.gif /var/www/assets/udeditegenfren.gif
COPY you3h6dingdong982vbvc456yolo.gif /var/www/assets/you3h6dingdong982vbvc456yolo.gif

ENTRYPOINT nginx -c /conf/nginx.conf