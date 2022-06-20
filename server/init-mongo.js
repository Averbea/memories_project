// this script is used to initialize the Docker MongoDB instance
db = db.getSiblingDB('memoriesDB');

db.createCollection('sample_collection');

db.sample_collection.insertMany([
 {
    org: 'helpdev',
    filter: 'EVENT_A',
  },
  {
    org: 'helpdev',
    filter: 'EVENT_B',
  },
  {
    org: 'github',
    filter: 'EVENT_C',
  }  
]);