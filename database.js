import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";

(async () => {
    try {
        const mongod = new MongoMemoryServer({
            binary: {
                version: '4.2.6'
            }
        });
        const cliente = await MongoClient.connect(mongod.getUri());
        console.log('mongodb in memory connected.');
        const collection = cliente.db().collection('person');
        const document = {name: 'Sem'  };
        await collection.insertOne(document);
        const result = await collection.findOne(document);
        await cliente.close();
        console.log(result);
        console.log('monfgodb in memory is disconnected.');
    } catch (error) {
        console.error(error);
    }
})();