// Equal to
```
db.collection.find({ age: { $eq: 25 } });
```

// Not Equal
```
db.collection.find({ age: { $ne: 25 } });
```

// Greater Than
```
db.collection.find({ age: { $gt: 25 } });
```

// Greater Than or Equal To
```
db.collection.find({ age: { $gte: 25 } });
```

// Less Than
```
db.collection.find({ age: { $lt: 25 } });
```

// Less Than or Equal To
```
db.collection.find({ age: { $lte: 25 } });
```

// In
```
db.collection.find({ age: { $in: [20, 25, 30] } });
```

// Not In
```
db.collection.find({ age: { $nin: [20, 25, 30] } });
```



// AND
```
db.collection.find({ $and: [{ age: { $gte: 25 } }, { city: "New York" }] });
```

// OR
```
db.collection.find({ $or: [{ age: { $gte: 25 } }, { city: "New York" }] });
```

// NOT
```
db.collection.find({ age: { $not: { $gte: 25 } } });
```

// All elements match
```
db.collection.find({ tags: { $all: ["sports", "news"] } });
```

// Element match
```
db.collection.find({ tags: { $elemMatch: { $eq: "sports" } } });
```

// Array size
```
db.collection.find({ tags: { $size: 3 } });
```

```
db.collection.find({ age: 25 }).sort({ age: 1 });
```

```
db.collection.find({ age: { $exists: false } });
```
```
db.collection.find({
  tags: "sports",
  age: { $in: [null, { $exists: false }] }
});
```

```
db.collection.find({
  tags: { $size: 3 },
  age: null
});
```

```
db.collection.find({ "numbers.2": 10 });
```

// Set a value
```
db.collection.updateOne({ name: "Hafsa" }, { $set: { age: 30 } });
```

// Increment a value
```
db.collection.updateOne({ name: "Hafsa" }, { $inc: { age: 1 } });
```

// Push to an array
```
db.collection.updateOne({ name: "Hafsa" }, { $push: { tags: "sports" } });
```

// Pull from an array
```
db.collection.updateOne({ name: "Hafsa" }, { $pull: { tags: "sports" } });
```

// Remove a field
```
db.collection.updateOne({ name: "Hafsa" }, { $unset: { age: "" } });
```

// Sum
```
db.collection.aggregate([{ $group: { _id: null, totalAge: { $sum: "$age" } } }]);
```

// Average
```
db.collection.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);
```

// Min
```
db.collection.aggregate([{ $group: { _id: null, minAge: { $min: "$age" } } }]);
```

// Max
```
db.collection.aggregate([{ $group: { _id: null, maxAge: { $max: "$age" } } }]);
```




