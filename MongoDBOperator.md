// Equal to
db.collection.find({ age: { $eq: 25 } });

// Not Equal
db.collection.find({ age: { $ne: 25 } });

// Greater Than
db.collection.find({ age: { $gt: 25 } });

// Greater Than or Equal To
db.collection.find({ age: { $gte: 25 } });

// Less Than
db.collection.find({ age: { $lt: 25 } });

// Less Than or Equal To
db.collection.find({ age: { $lte: 25 } });

// In
db.collection.find({ age: { $in: [20, 25, 30] } });

// Not In
db.collection.find({ age: { $nin: [20, 25, 30] } });



// AND
db.collection.find({ $and: [{ age: { $gte: 25 } }, { city: "New York" }] });

// OR
db.collection.find({ $or: [{ age: { $gte: 25 } }, { city: "New York" }] });

// NOT
db.collection.find({ age: { $not: { $gte: 25 } } });
