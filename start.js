import express from 'express';
import fs from 'fs';
import ServerRoutes from './server/routes';

let app = express();
app.set('port', 3100);

ServerRoutes(app);

app.listen(app.get('port'), ()=> {
  console.log('yweb server listening on port ' + app.get('port'));
});
