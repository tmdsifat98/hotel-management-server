const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccount = require("./firebaseSecret.json");

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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//firebase token verify middleware
const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers?.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.decoded = decoded;
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
  next();
};

async function run() {
  try {
    // database collection
    const roomCollection = client.db("roomDB").collection("rooms");
    const bookingCollection = client.db("roomDB").collection("booking");
    const reviewCollection = client.db("roomDB").collection("review");
    const faq = client.db("roomDB").collection("faq");
    const facilities = client.db("roomDB").collection("facilities");

    // filter with price range api
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

    //find room with room id for room details
    app.get("/room/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await roomCollection.findOne(query);
      res.send(result);
    });

    //booked a room will unavailable for others
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

    //featured room api
    app.get("/featuredRooms", async (req, res) => {
      const result = await roomCollection
        .find({})
        .sort({ rating: -1 })
        .limit(6)
        .toArray();
      res.send(result);
    });

    //users own booking find api
    app.get("/myBookings", verifyFirebaseToken, async (req, res) => {
      const email = req.query.email;
      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      const query = { userEmail: email };
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });

    //room book post api
    app.post("/myBookings", async (req, res) => {
      const booking = req.body;
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    //delete booking from my booking page
    app.delete("/myBookings/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(filter);
      res.send(result);
    });

    //update date from room collection
    app.patch("/mybooking/:id", async (req, res) => {
      const id = req.params.id;
      const newData = req.body;
      const updateDocument = {
        $set: newData,
      };
      const query = { roomId: id };
      const result = await bookingCollection.updateOne(query, updateDocument);
      res.send(result);
    });

    //review post
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
              createdAt: new Date(),
            },
          }
        );
      } else {
        result = await reviewCollection.insertOne({
          ...review,
          createdAt: new Date(),
        });
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

    //get review api
    app.get("/review", async (req, res) => {
      const result = await reviewCollection
        .find({ rating: { $gte: 4 } })
        .sort({ createdAt: -1 })
        .toArray();

      res.send(result);
    });

    //review for eatch room api
    app.get("/room/review/:id", async (req, res) => {
      const id = req.params.id;
      const result = await reviewCollection.find({ roomId: id }).toArray();
      res.send(result);
    });

    //faq api
    app.get("/faq", async (req, res) => {
      const result = await faq.find().toArray();
      res.send(result);
    });

    //facilities api
    app.get("/facilities", async (req, res) => {
      const result = await facilities.find().toArray();
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
