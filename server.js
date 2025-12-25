const express = require("express");
const app = express();

let relayState = "OFF";

// Device polling API
app.get("/device/SL001/command", (req, res) => {
  res.json({ relay: relayState });
});

// Manual control (for testing)
app.get("/set/:state", (req, res) => {
  relayState = req.params.state.toUpperCase();
  res.send("Relay set to " + relayState);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("CCMS server running on port", PORT);
});

