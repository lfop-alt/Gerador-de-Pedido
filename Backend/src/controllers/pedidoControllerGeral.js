const {
  Pedidos, Address, clientRequests, productPedido,
} = require('../models');

module.exports = {
  async createPedido(req, res) {
    const {
      clientName,
      clientEmail,
      clientTelephone,
      address,
      addressNumber,
      district,
      city,
      state,
      country,
      cep,
      Productname,
      productCode,
      commercialDescription,
      amountOfProduct,
      unitPurchasePrice,
      totalPurchaseAmount,
      monthlyUnitValue,
      totalMonthlyAmount,
      corporateName,
      cnpj,
      telephone,
      numberOfCollaborators,
      equipamentNumber,
      billingAddress,
      billingAddressNumber,
      billingDistrict,
      billingCity,
      billingState,
      billingCountry,
      billingCep,
      financialObservation,
      noteForInvoice,
      observationInstallation,
    } = req.body;

    const clientRequestDate = {
      clientName,
      clientEmail,
      clientTelephone,
    };

    const addressDate = {
      address,
      addressNumber,
      district,
      city,
      state,
      country,
      cep,
    };

    const productPedidosDate = {
      Productname,
      productCode,
      commercialDescription,
      amountOfProduct,
      unitPurchasePrice,
      totalPurchaseAmount,
      monthlyUnitValue,
      totalMonthlyAmount,
    };

    const pedidoDate = {
      corporateName,
      cnpj,
      telephone,
      numberOfCollaborators,
      equipamentNumber,
      billingAddress,
      billingAddressNumber,
      billingDistrict,
      billingCity,
      billingState,
      billingCountry,
      billingCep,
      financialObservation,
      noteForInvoice,
      observationInstallation,
    };

    try {
      if (!pedidoDate) {
        return res.status(400).json({ message: 'Address Date Incorrect' });
      }
      await Pedidos.create(pedidoDate);

      if (!clientRequestDate) {
        return res.status(400).json({ message: 'Client Request Incorrect' });
      }

      await clientRequests.create(clientRequestDate);

      if (!addressDate) {
        return res.status(400).json({ message: 'Address Date Incorrect' });
      }

      await Address.create(addressDate);

      if (!productPedidosDate) {
        return res.status(400).json({ message: 'Address Date Incorrect' });
      }

      await productPedido.create(productPedidosDate);

      return res.status(201).json({ message: 'Pedido Created' });
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};
