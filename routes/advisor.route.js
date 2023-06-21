const { Router } = require("express");
const router = Router();
const Advisor = require("../models/Advisor");

router.post("/add/advisors", async (req, res) => {
  try {
    const { icon, fullName, reviews, language, status, onSiteSince } = req.body;
    const advisor = new Advisor({
      icon,
      fullName,
      reviews,
      language,
      status,
      onSiteSince,
    });

    await advisor.save();

    res.status(201).json("advisor is added");
  } catch (error) {
    console.log(error);
  }
});

// router.get('/advisors', async (req, res) => {
//     try {
//         const advisors = await Advisor.find()
//         setTimeout(() => {
//             res.json(advisors);

//         }, 1000);
//     } catch (error) {
//         console.log(error)
//     }
// })
router.get("/advisors", async (req, res) => {
  try {
    const { limit, language, status } = req.query;
    const filters = {};
    if (language) {
      filters.language = language;
    }
    if (status) {
      filters.status = status;
    }

    const advisorsQuery = Advisor.find(filters);
    const advisorsCountQuery = Advisor.countDocuments(filters);

    const [advisors, advisorsCount] = await Promise.all([
      advisorsQuery.limit(limit),
      advisorsCountQuery
    ]);

    setTimeout(() => {
      res.json({ advisors, count: advisorsCount });
    }, 1000);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
