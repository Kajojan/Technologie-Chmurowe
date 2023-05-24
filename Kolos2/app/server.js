const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const { error } = require("console");

const PORT = process.env.PORT
const app = express();
app.use(express.json());

const Schema = mongoose.Schema;

const usershema = new Schema(
  {
    _id:{
      type: Number
    },
    userId: {
      type:Number
    },
    street: {
      type: String,
    },
    city:{
      type: String
    },
    postalCode:{

    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", usershema);

mongoose.set("strictQuery", false);

async function dropMongo(){
  try{
    await User.deleteMany()
    fs.readFile("plik.json", "utf-8", (err,data)=>{
      if(data){
        const parsedData = JSON.parse(data);
        parsedData.data.forEach(element => {
          User.create(element)
        })
    }else{
      console.error(err)
    }
    })
  }catch(error){
    console.error(error)
  }
}
dropMongo()







app.get("/", async (req, res) => {
  const data = await User.find();
  res.send(data);
});


app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const updatedTask = await User.findByIdAndDelete(id)
      res.send("delete user")
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Wystąpił błąd serwera MongoDB." });
    }
  });
  

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });



