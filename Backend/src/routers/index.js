const router = require('express').Router();
const productRouter = require('./productRouter');
const addressRouter = require('./addressRouter');
const pedidoRouter = require('./pedidoRouter');
const productPedidoRouter = require('./productPedidoRoute');
const tokenRouter = require('./tokenRouter');
const pipedrive = require('./pipedrive');
const userRouter = require('./userRouter');
const pdfRouter = require('./pdfRouter');
const cobrancaRouter = require('./cobrancaRouter')

router.use(productRouter);
router.use(addressRouter);
router.use(pipedrive);
router.use(productPedidoRouter);
router.use(pedidoRouter);
router.use(tokenRouter);
router.use(userRouter);
router.use(pdfRouter);
router.use(cobrancaRouter)

module.exports = router;
