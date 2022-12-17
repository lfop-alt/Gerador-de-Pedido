const puppeteer = require('puppeteer');
const ejs = require('ejs');
const path = require('path');

const dataF = new Date();

module.exports = {
  async getPedido(date) {
    ejs.renderFile(path.join(__dirname, './template', 'pedidoPdf.ejs'), { date }, async (err, html) => {
      if (err) {
        console.log(err.message);
      }

      const option = {
        format: 'A4',
        orientation: 'landscape',
        border: {
          right: '8',
          left: '8',
          top: '6',
        },
      };
      console.log('Aqui estou');
      const data = new Date();
      const corporate = String(date.corporateName);
      const corporate1 = corporate.replace(' ', '_');
      const corporate2 = corporate1.replace(' ', '_');
      const corporate3 = corporate2.replace(' ', '_');

      const nome = `./src/integrations/PDF/allPdfs/${corporate3}_${data.getDate()}${data.getMonth()}${data.getFullYear()}${data.getHours()}.pdf`;
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.setContent(html);
      await page.emulateMedia('screen');
      const pdf = await page.pdf(option);

      console.log('Relatorio emitido com sucesso');

      await browser.close();
      return pdf;
    });

    const corporate = String(date.corporateName);
    const corporate1 = corporate.replace(' ', '_');
    const corporate2 = corporate1.replace(' ', '_');
    const corporate3 = corporate2.replace(' ', '_');
    const nomeFinal = `${corporate3}_${dataF.getDate()}${dataF.getMonth()}${dataF.getFullYear()}${dataF.getHours()}.pdf`;
    return nomeFinal;
  },
};
