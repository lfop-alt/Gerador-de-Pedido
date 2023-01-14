const path = require('path');
const ejs = require('ejs');
const puppeteer = require('puppeteer');
const {
  Pedidos,
  Installation,
  productPedido,
  Cobranca,
} = require('../models');
const installation = require('./installationController');
const productOfPedido = require('./productPedidoController');
const cobranca = require('./cobrancaController');

module.exports = {
  async createProduto(req, res) {
    try {
      const date = req.body;
      if (!date) {
        return res.status(400).json({ message: 'date Incorrect' });
      }

      const {
        corporateName,
        cnpjFaturamento,
        numberOfCollaborators,
        equipamentNumber,
        billingAddress,
        billingAddressNumber,
        billingDistrict,
        billingCity,
        billingState,
        billingCep,
        ccm,
        plano,
        condiçãoOfPpagament,
        serasaConditions,
        fidelity,
        foundationDate,
        ie,
        financialObservation,
        accountingObservation,
        installationNote,
        documentoAssinado,
        statusClient,
        sallerName,
      } = date;

      
      console.log(`estou aqui222 ${date.installation}`)

      const { id } = await Pedidos.create({
        corporateName,
        cnpj: cnpjFaturamento,
        numberOfCollaborators,
        equipamentNumber,
        billingAddress,
        billingAddressNumber,
        billingDistrict,
        billingCity,
        billingState,
        billingCountry: 'Brasil',
        billingCep,
        customerPlan: plano,
        productPaymentTerms: condiçãoOfPpagament,
        serasaConditions,
        fidelity,
        foundationDate,
        ie,
        ccm,
        financialObservation,
        noteForInvoice: accountingObservation,
        observationInstallation: installationNote,
        sallerName: 'Luana',
        statusClient: 'Novo',
        digitallySigned: documentoAssinado,
      });
      date.pedidosId = id;
      date.cobrancaId = id;
      date.productPedidoId = id;

      
      const product = await productOfPedido.createProductPedido(date, res);
      if (product !== true) {
        return res.status(400).json({ message: product });
      }
      const InstallationPedido = await installation.createInstallation(date, res);
      if (InstallationPedido !== true) {
        return res.status(400).json({ message: InstallationPedido });
      }

      const cobrancaPedido = await cobranca.createCobranca(date, res);
      if (cobrancaPedido !== true) {
        return res.status(400).json({ message: cobrancaPedido });
      }

      return res.status(200).json({ message: 'create' });
    } catch (e) {
      return console.log(e.message);
    }
  },

  async deletePedido(req, res) {
    try {
      const { id } = req.params;

      await Pedidos.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: 'Exclusão' });
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  },

  async listOnePedido(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: 'ID Incorrect' });
      }
      const pedido = await Pedidos.findByPk(id, {
        include: [
          { model: Installation },
          { model: productPedido },
          { model: Cobranca },
        ],
      });

      if (!pedido) {
        return res.status(400).json({ message: 'Pedido não encontrado' });
      }

      return res.status(200).json(pedido);
    } catch (e) {
      return res.status(400).json({ e: e.message });
    }
  },

  async listAllPedidos(req, res) {
    try {
      const pedidos = await Pedidos.findAll();
      return res.status(200).json(
        pedidos,
      );
    } catch (e) {
      return res.status(400).json(e.message);
    }
  },

  async generatePdf(req, res) {
    try {
      const { id } = req.params;
      // const { corporationName } = req;

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(`http://localhost:3003/api/relatorio/pedido/pdf/${id}`, {
        waitUntil: 'networkidle0',
      });
      const pdf = await page.pdf({
        printBackground: true,
        landscape: true,
      });

      await browser.close();

      res.contentType('application/pdf');

      return res.send(pdf);
    } catch (e) {
      return res.status(400).json({ e: e.message });
    }
  },

  async renderHtml(req, res) {
    try {
      const { id } = req.params;

      const pedidos = await Pedidos.findByPk(id, {
        include: [
          { model: Installation },
          { model: Cobranca },
          { model: productPedido },
        ],
      });
      const filePath = path.resolve(__dirname, '../', './integrations', './PDF', './template', 'pdf.ejs');

      await ejs.renderFile(filePath, { date: pedidos }, (err, html) => {
        if (err) {
          res.status(400).json({ message: err.message });
        }

        return res.send(html);
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
