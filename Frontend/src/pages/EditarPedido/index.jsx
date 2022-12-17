import React, { useState, useEffect } from 'react';
import { Box, Button, Divider } from '@mui/material';

import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import api from '../../services/axios';

import EnderecoPrinc from './Faturamento';
import Appbar from '../../components/Appbar/Appbar';
import ButtomSelectEdit from '../../components/ButtomPedidoEdit';

export default function CadastrarPedidos() {
  const [errors, setError] = useState();
  const [tamanho, setTamanho] = useState();

  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      cnpjFaturamento: '',
      pipedriveUrl: '',
      nomeVendedor: '',
      billingAddress: '',
      billingState: '',
      billingAddressNumber: '',
      billingDistrict: '',
      billingCity: '',
      corporateName: '',
      billingCep: '',
      ccm: '',
      ie: '',
      fidelity: '',
      foundationDate: '',
      plano: '',
      condiçãoOfPpagament: '',
      serasaConditions: '',
      numberOfCollaborators: '',
      equipamentNumber: '',
      documentoAssinado: '',
      emailDeCobranca: '',
      nomeDeCobranca: '',
      telephone: '',
      celularDeCobranca: '',
      financialObservation: '',
      accountingObservation: '',
      installationNote: '',
      statusClient: '',
      sallerName: '',
    },
  });

  const { id } = useParams();
  console.log(tamanho);

  useEffect(() => {
    async function getDataPedidos() {
      const { data } = await api.get(`/api/pedido/${id}`);

      console.log(data);
      setTamanho(data.Installations.length);

      methods.setValue('corporateName', data.corporateName);
      methods.setValue('pipedriveUrl', '12234');
      methods.setValue('nomeVendedor', data.sallerName);
      methods.setValue('cnpjFaturamento', data.cnpj);
      methods.setValue('telephone', data.telephone);
      methods.setValue('numberOfCollaborators', data.numberOfCollaborators);
      methods.setValue('equipamentNumber', data.equipamentNumber);
      methods.setValue('billingAddress', data.billingAddress);
      methods.setValue('billingAddressNumber', data.billingAddressNumber);
      methods.setValue('billingDistrict', data.billingDistrict);
      methods.setValue('billingCity', data.billingCity);
      methods.setValue('billingState', data.billingState);
      methods.setValue('billingCountry', data.billingCountry);
      methods.setValue('billingCep', data.billingCep);
      methods.setValue('financialObservation', data.financialObservation);
      methods.setValue('noteForInvoice', data.noteForInvoice);
      methods.setValue('observationInstallation', data.observationInstallation);
      methods.setValue('ccm', data.ccm);
      methods.setValue('ie', data.ie);
      methods.setValue('digitallySigned', data.digitallySigned);
      methods.setValue('digitallySignedLink', data.digitallySignedLink);
      methods.setValue('plano', data.customerPlan);
      methods.setValue('productPaymentTerms', data.productPaymentTerms);
      methods.setValue('serasaConditions', data.serasaConditions);
      methods.setValue('fidelity', data.fidelity);
      methods.setValue('foundationDate', data.foundationDate);
      methods.setValue('instalationCnpj', data.instalationCnpj);
      methods.setValue('emailDeCobranca', data.emailDeCobranca);
      methods.setValue('nomeDeCobranca', data.nomeDeCobranca);
      methods.setValue('celularDeCobranca', data.celularDeCobranca);

      methods.setValue(
        'installation.[0].installationAddress',
        data.Installations[0].installationEmail
      );
      methods.setValue(
        'installation.installationNumber',
        data.Addresses[0].addressNumber
      );
      methods.setValue('installation.installationBairro', 'Minha casa');
      methods.setValue('installation.installationCity', data.Addresses[0].city);
      methods.setValue(
        'installation.installationState',
        data.Addresses[0].state
      );
      methods.setValue('installation.installationCep', data.Addresses[0].cep);
      methods.setValue(
        'installation.installationName',
        data.clientRequests[0].clientName
      );
      methods.setValue(
        'installation.installationEmail',
        data.clientRequests[0].clientEmail
      );
      methods.setValue(
        'installation.clientTelephone',
        data.clientRequests[0].clientTelephone
      );
      methods.setValue(
        'installation.installationCel',
        data.clientRequests[0].clientTelephone
      );
    }
    getDataPedidos();
  }, []);

  async function onSubmit(data) {
    try {
      console.log(data);
      await api.put(`/api/pedido/${id}`, data);
      navigate('/pedidos');
    } catch (err) {
      setError(err.message);
      toast.error(errors);
    }
  }

  return (
    <FormProvider {...methods}>
      <Appbar />
      <Box
        sx={{
          marginLeft: { md: '240px', xs: '20px' },
          padding: '0 20px',
          marginTop: '90px',
        }}
      >
        <Box
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'Roboto',
            color: '#fff',
            background: '#3d3d3d',
            marginBottom: '40px',
          }}
        >
          <h1>Editar Pedido</h1>
        </Box>
        <Divider sx={{ marginBottom: '40px' }} />
        <EnderecoPrinc />
        <Divider sx={{ marginTop: '40px' }} />

        <Box>
          <ButtomSelectEdit tam={tamanho} />
        </Box>

        <Button variant="contained" onClick={methods.handleSubmit(onSubmit)}>
          Salvar
        </Button>
        <ToastContainer position="top-center" />
      </Box>
      {/* </Box> */}
    </FormProvider>
  );
}
