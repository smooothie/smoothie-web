const { exec } = require('child_process');

require('dotenv').config();

exec(`get-graphql-schema ${process.env.REACT_APP_API_URL}/static/schema.json > schema.graphql`);
