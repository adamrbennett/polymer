FROM 517077376125.dkr.ecr.us-east-1.amazonaws.com/msa/base-node:6

USER node

ARG APP_DIR=/opt/app
WORKDIR $APP_DIR

# create a layer containing the node modules
COPY package.json $APP_DIR/
RUN npm install --production

COPY . $APP_DIR

CMD ["node", "index.js"]
