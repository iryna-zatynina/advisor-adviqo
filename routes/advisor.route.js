const { Router } = require('express')
const router = Router()
const Advisor = require("../models/Advisor")
const { userInfo } = require('os')

router.post('/new-advisors', async (req, res) => {
    try {
        const {icon, fullName, reviews, language, status, onSiteSince} = req.body
        const advisor = new Advisor({icon, fullName, reviews, language, status, onSiteSince})
    
        await userInfo.save()

        res.status(201).json("advisor is added")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router