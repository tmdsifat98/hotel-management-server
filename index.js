const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@alpha10.qadkib3.mongodb.net/?retryWrites=true&w=majority&appName=Alpha10`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const roomCollection = client.db("roomDB").collection("rooms");
    const bookingCollection = client.db("roomDB").collection("booking");
    const reviewCollection = client.db("roomDB").collection("review");

    app.get("/rooms", async (req, res) => {
      const min = parseFloat(req.query.minPrice);
      const max = parseFloat(req.query.maxPrice);
      
      let result;
      const allRooms = await roomCollection.find().toArray();
      if (!min && !max) {
        result = allRooms;
      } else if (min && !max) {
        result = allRooms.filter((room) => room.pricePerNight >= min);
      } else if (!min && max) {
        result = allRooms.filter((room) => room.pricePerNight <= max);
      } else {
        result = allRooms.filter(
          (room) => room.pricePerNight >= min && room.pricePerNight <= max
        );
      }
      res.send(result);
    });

    app.get("/room/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await roomCollection.findOne(query);
      res.send(result);
    });
    app.patch("/room/:id", async (req, res) => {
      const id = req.params.id;
      const newData = req.body;
      const updateDocument = {
        $set: newData,
      };
      const query = { _id: new ObjectId(id) };
      const result = await roomCollection.updateOne(query, updateDocument);
      res.send(result);
    });

    app.get("/myBookings", async (req, res) => {
      const query = { userEmail: req.query.email };
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/myBookings", async (req, res) => {
      const booking = req.body;
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    app.delete("/myBookings/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(filter);
      res.send(result);
    });
    app.post("/review", async (req, res) => {
      const review = req.body;
      const { roomId, userEmail } = review;
      const givenReview = await reviewCollection.findOne({
        roomId,
        userEmail,
      });
      let result;
      if (givenReview) {
        result = await reviewCollection.updateOne(
          { roomId, userEmail },
          {
            $set: {
              rating: review.rating,
              comment: review.comment,
              createdAt: new Date().toLocaleString(),
            },
          }
        );
      } else {
        result = await reviewCollection.insertOne(review);
      }

      const allReviews = await reviewCollection.find({ roomId }).toArray();

      const totalRating = allReviews.reduce((acc, cur) => acc + cur.rating, 0);
      const averageRating = totalRating / allReviews.length;

      const bookingQuery = { _id: new ObjectId(roomId) };
      await roomCollection.updateOne(bookingQuery, {
        $set: { rating: averageRating, totalReview: allReviews.length },
      });

      res.send(result);
    });

    app.get("/review", async (req, res) => {
      const goodReview = await reviewCollection
        .find()
        .sort({
          createdAt: -1,
        })
        .toArray();
      const result = goodReview.filter((review) => review.rating >= 4);
      res.send(result);
    });

    app.get("/room/review/:id", async (req, res) => {
      const id = req.params.id;
      const result = await reviewCollection.find({ roomId: id }).toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hotel management system");
});

app.listen(port, () => {
  console.log("server is running at port", port);
});
