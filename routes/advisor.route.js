const { Router } = require('express')
const router = Router()
const Advisor = require("../models/Advisor")

router.post('/add/advisors', async (req, res) => {
    try {
        const {icon, fullName, reviews, language, status, onSiteSince} = req.body
        const advisor = new Advisor({icon, fullName, reviews, language, status, onSiteSince})
    
        await advisor.save()

        res.status(201).json("advisor is added")
    } catch (error) {
        console.log(error)
    }
})

router.get('/advisors', async (req, res) => {
    try {
        const advisors = await Advisor.find()
        res.json(advisors)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router