import express from 'express';
const router = express.Router();

const product = [
  { name: "pizza",price: 200,id: 1},
  { name: "hamburguesa",price: 150,id: 2},
  { name: "papas fritas",price: 100,id: 3},
  { name: "papas fritas",price: 100,id: 4}
  ];

router.get('/', (req, res) => {
  res.render('index', {
    product
  });
})

router.get('/realTimeProducts', (req, res) => {
  res.render('realTimeProducts', {
    product
  });
})



export default router;