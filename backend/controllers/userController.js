// controllers/userController.js

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { MongoClient, ObjectId, ReturnDocument } = require("mongodb");
const dotenv = require("dotenv");
const { connect } = require("mongoose");

dotenv.config();
const uri = process.env.MONGODB_URI;
let client;

// MongoDB connection
async function connectClient() {
  if (!client) {
    client = new MongoClient(uri); // modern driver doesn’t need useNewUrlParser/unifiedTopology
    await client.connect();
    console.log("✅ MongoDB connected!");
  }
  return client.db("mergebase");
}

// Signup
async function signup(req, res) {
  const { username, email, password } = req.body;
  try {
    const db = await connectClient();
    const userCollection = db.collection("users");

    const user = await userCollection.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      username,
      email,
      password: hashedPassword,
      repositories: [],
      followedUsers: [],
      starredRepos: [],
    };

    const result = await userCollection.insertOne(newUser);
    const token = jwt.sign(
      { id: result.insertedId },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Login
async function login(req, res) {
  const { email, password } = req.body;
  try {
    const db = await connectClient();
    const userCollection = db.collection("users");

    const user = await userCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, userId: user._id });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get all users
async function getAllUsers(req, res) {
  try {
    const db = await connectClient();
    const userCollection = db.collection("users");

    const users = await userCollection.find().toArray();//convert it to array or else it wont work 
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get user profile
async function getUserProfile(req, res) {
  const currentId = req.params.id;
  try {
    const db = await connectClient();
    const userCollection = db.collection("users");

    let user = null;
    if (ObjectId.isValid(currentId)) {
      user = await userCollection.findOne({ _id: new ObjectId(currentId) });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Update user profile (placeholder)
async function updateUserProfile(req, res) {
    await connectClient();
    const db = client.db("mergebase");
    const userCollection = db.collection("users");

    const currentId = req.params.id;
    const {email,password} = req.body;
    try {
        let updateFields = {email};
        if(password){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updateFields.password = hashedPassword;
        }
        const result = await userCollection.findOneAndUpdate(
            { _id: new ObjectId(currentId) },
            { $set: updateFields },
            { ReturnDocument: 'after' }
        );
        if(!result.value){
            return res.status(404).json({ message: "User not found" });
        }
        res.send(result.value);
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
  res.send("User profile updated");
}

// Delete user profile (placeholder)
async function deleteUserProfile(req, res) {
  const currentID = req.params.id;

  try {
    await connectClient();
    const db = client.db("mergebase");
    const usersCollection = db.collection("users");

    const result = await usersCollection.deleteOne({
      _id: new ObjectId(currentID),
    });

    if (result.deleteCount == 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json({ message: "User Profile Deleted!" });
  } catch (err) {
    console.error("Error during updating : ", err.message);
    res.status(500).send("Server error!");
  }
}
module.exports = {
  signup,
  login,
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
