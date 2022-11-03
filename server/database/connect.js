// assuming mongoose@6.x
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoServer = await MongoMemoryServer.create();

(async () => {
  await mongoose.connect(mongoServer.getUri(), { dbName: "nodeUsers" });

  // your code here
  
  await mongoose.disconnect();
})();