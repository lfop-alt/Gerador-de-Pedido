const pipedrive = require('../integrations/Pipedrive');

module.exports = {
  async getPipedrive(req, res) {
    try {
      const { deal } = req.params;

      const { data } = await pipedrive.get(`deals/${deal}`);

      const emailDeCobranca = data.data.person_id.email;
      const emailsDeCobranca = [];

      emailDeCobranca.map((email) => emailsDeCobranca.push({ email: email.value }));

      const telephone = data.data.person_id.phone;
      const telephones = [];

      telephone.map((tel) => telephones.push({ telephone: tel.value }));

      const cnpj = data.data['1df1eef0047f26100ef6fa22d07c96c3f8b3ac07'];

      res.status(200).json({
        ccm: data.data['83167dcc6ab25a88f88a0220c417c09eadf6c78e'],
        ie: data.data.e1c5ab61b022fa6c49b0723592bd2add86f56f1a,
        equipamentNumber: data.data['2107acef44759f77a31cade6cec65ebceda99495'],
        numberOfCollaborators: data.data['478f2607f9ad2a65265fa107d4f179caa4de0d7a'],
        emailDeCobranca: emailsDeCobranca,
        nomeDeCobranca: data.data.person_id.name,
        telephone: telephones,
        cnpj: cnpj.replace(/[^0-9]+/g, ''),
        nomeVendedor: data.data.user_id.name,
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
