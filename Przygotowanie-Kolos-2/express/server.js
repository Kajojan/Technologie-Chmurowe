// const express =require( "express")
// const mongoose = require("mongoose")

// const app = express();
// app.use(express.json());

// const Schema = mongoose.Schema;

// const task = new Schema({
//   name: {
//     type: String,
//   },
//   status:{
//     type: String
//   }
// },{timestamps: true});

// const tasks = mongoose.model('task', task);

// mongoose.set("strictQuery", false);


// const redis = require('redis');

// const redisClient = redis.createClient({ host: 'redis', port: 6379 });

// redisClient.on("error", (err) => console.log(err));

// redisClient.incr('updatedTasks', (err, count) => { 
//   if (err) res.status(500).json({ error: err.message }); 
//   else res.json({ task, updatedTasksCount: count }); });






// app.post("/task", async (req, res) => {
//   const {name, status} = req.body.task;
//  const postTask =  await tasks.create({name,status})
//   res.send("task added");
// });


// app.get("/task", async (req, res) => {
//     const data = await tasks.find()
//     res.send(data);
// });


// app.put("/task/:id", async(req,res)=>{
//     const {name, status} = req.body.task;
//     await redisClient.rpush("task", 1);
//     const updatetask = await task.updateOne({name: name}, {$push:{status : status}})
//     res.send("task updated")
// })
// mongoose
//   .connect('mongodb://mongo:27017/task')
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("listening on port", 3000);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const express = require("express");
const mongoose = require("mongoose");
const redis = require("ioredis");

const app = express();
app.use(express.json());

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

mongoose.set("strictQuery", false);

console.log('Przed połączeniem z Redis');
const redisClient = redis.createClient({ host: 'redis', port: 6379 });
console.log('Po połączeniu z Redis');

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.log('Redis error:', err);
});

// const redisClient = redis.createClient({ host: "redis", port: 6379 });
// redisClient.on('connect', () => {
//     console.log('Connected to Redis');
//   });
// redisClient.on("error", (err) => console.log(err));


app.post("/task", async (req, res) => {
  const { name, status } = req.body.task;
  const postTask = await Task.create({ name, status });
  res.send("task added");
});

app.get("/task", async (req, res) => {
  const data = await Task.find();
  res.send(data);
});

app.put("/task/:id", async (req, res) => {
    const taskId = req.params.id;
    const { status } = req.body.task;
  
    try {
      const updatedTask = await Task.updateOne(
        {_id: taskId},
        { $set: { status } }  
        );
        redisClient.incr("updatedTasks", (err, count) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: "Internal server error" });
            }
            res.json({ updatedTask, updatedTasksCount: count });

          });


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Wystąpił błąd serwera MongoDB." });
    }
  });
  

mongoose
  .connect("mongodb://mongo:27017/task")
  .then(() => {
    app.listen(3000, () => {
      console.log("listening on port", 3000);
    });
  })
  .catch((error) => {
    console.log(error);
  });


  