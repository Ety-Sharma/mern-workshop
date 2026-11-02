// errorHandler.js: turns database errors into clean answers
export default function errorHandler(err, req, res, next) {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });      // bad data from the client
  }
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid id" });     // id is not a valid ObjectId
  }
  console.error(err);
  res.status(500).json({ message: "Server error" });
}
