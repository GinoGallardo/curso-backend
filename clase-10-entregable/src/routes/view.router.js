import express from 'express';
const router = express.Router();


router.get('/realtimeproducts', (req, res) => {
    res.render('index', {})
})

router.get('/realtimeproductsform', (req, res) => {
    res.render('form', {})
}
)


export default router;