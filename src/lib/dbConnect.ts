import mongoose from "mongoose";

type ConnectObject = {
  isConnected?: number;
};

const connection: ConnectObject = {};

async function dbConnect(): Promise<void> {
  // Check if already connected
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    // Attempt to connect to MongoDB
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    connection.isConnected = db.connections[0].readyState;

    console.log("Connected to MongoDB:", connection.isConnected);
  } catch (error) {
    console.error("Database connection failed", error);

    
    process.exit(1);
  }
}

export default dbConnect;
