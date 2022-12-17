const router = require('express').Router();
const productRouter = require('./productRouter');
const addressRouter = require('./addressRouter');
const clientRouter = require('./clientRequestRouter');
const pedidoRouter = require('./pedidoRouter');
const productPedidoRouter = require('./productPedidoRoute');
const tokenRouter = require('./tokenRouter');
// const pdf = require('./teste');
const pipedrive = require('./pipedrive');
const userRouter = require('./userRouter');
const pdfRouter = require('./pdfRouter');

router.use(productRouter);
router.use(addressRouter);
router.use(pipedrive);
router.use(clientRouter);
router.use(productPedidoRouter);
router.use(pedidoRouter);
// router.use(pdf);
router.use(tokenRouter);
router.use(userRouter);
router.use(pdfRouter);

module.exports = router;
