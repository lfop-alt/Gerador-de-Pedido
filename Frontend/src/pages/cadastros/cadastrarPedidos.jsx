import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Grid } from '@mui/material';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import api from '../../services/axios';
import EnderecoPrinc from './Faturamento';
import Appbar from '../../components/Appbar/Appbar';
import ButtomSelect from '../../components/ButtomPedido';

import productsRepository from '../../repositories/ProductsRepository';

export default function CadastrarPedidos() {
  const [errors, setError] = useState();
  const [productsOptions, setProductsOptions] = useState([]);

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
      financialObservation: '',
      accountingObservation: '',
      installationNote: '',
      statusClient: '',
      sallerName: '',
    },
  });

  async function onSubmit(data) {
    try {
      console.log(data);
      await api.post('/api/pedido', data);
      navigate('/pedidos');
    } catch (err) {
      setError(err.message);
      toast.error(errors);
    }
  }

  async function handleLoadProducts() {
    try {
      const { data: products } = await productsRepository.getAll();
      console.log(products);
      setProductsOptions(products);
    } catch (err) {
      alert('Erro ao carregar os produtos');
      console.log(err);
    }
  }

  const cnpjMonitorado = useWatch({
    name: 'cnpjFaturamento',
    control: methods.control,
  });

  useEffect(() => {
    async function getDataEndereco() {
      if (cnpjMonitorado?.length === 14) {
        try {
          const { data } = await axios.get(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpjMonitorado}`
          );

          methods.setValue('corporateName', data.razao_social);
          methods.setValue('billingAddress', data.logradouro);
          methods.setValue('billingAddressNumber', data.numero);
          methods.setValue('billingDistrict', data.bairro);
          methods.setValue('billingCity', data.municipio);
          methods.setValue('billingState', data.uf);
          methods.setValue('billingCep', data.cep);
          methods.setValue('dataOfFundation', data.data_inicio_atividade);
        } catch (err) {
          setError(err.message);
          toast.error(`erro ao buscar endereço: ${errors}`);
        }
      }
    }

    getDataEndereco();
  }, [cnpjMonitorado]);

  const pipeDriveMonitorado = useWatch({
    name: 'pipedriveUrl',
    control: methods.control,
  });

  useEffect(() => {
    async function getDataPipe() {
      try {
        if (pipeDriveMonitorado.length >= 4) {
          const response = await api.get(
            `/api/pipedrive/${pipeDriveMonitorado}`
          );

          console.log(response);

          methods.setValue('ccm', response.data.ccm);
          methods.setValue('ie', response.data.ie);
          methods.setValue('equipamentNumber', response.data.equipamentNumber);
          methods.setValue(
            'numberOfCollaborators',
            response.data.numberOfCollaborators
          );
          methods.setValue('cnpjFaturamento', response.data.cnpj);
          methods.setValue('nomeVendedor', response.data.nomeVendedor);
        }
      } catch (err) {
        setError(err.message);
        toast.error(errors);
      }
    }

    getDataPipe();
  }, [pipeDriveMonitorado]);

  const CepInstalattionMonitora = useWatch({
    name: 'installation',
    control: methods.control,
  });

  useEffect(() => {
    async function getDataCpnjInstalation() {
      try {
        CepInstalattionMonitora.map(async (cep, index) => {
          if (cep.installationCep?.length === 8) {
            const response = await axios.get(
              `https://viacep.com.br/ws/${cep.installationCep}/json/`
            );
            console.log('cheguei');
            console.log(response.data);
            methods.setValue(cep.address, response.data.logradouro);
            console.log(cep.address);
            methods.setValue(cep.installationBairro, response.data.bairro);
            methods.setValue(cep.installationCity, response.data.localidade);
            methods.setValue(cep.installationState, response.data.uf);
          } else {
            //console.log("estou aqui");
          }
        });
        console.log('hehehehe');
      } catch (err) {
        setError(err.message);
        toast.error(errors);
      }
    }
    getDataCpnjInstalation();
  }, []);

  useEffect(() => {
    handleLoadProducts();
  }, []);

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
          <h1>Formulário de Pedido</h1>
        </Box>
        <Divider sx={{ marginBottom: '40px' }} />
        <EnderecoPrinc />
        <Divider sx={{ marginTop: '40px' }} />

        <Box>
          <ButtomSelect productsOptions={productsOptions} />
        </Box>

        <Grid
          container
          rowSpacing={3}
          sx={{
            height: 'auto',
            marginTop: '20px',
            marginBottom: '10px',
          }}
        >
          <Button variant="contained" onClick={methods.handleSubmit(onSubmit)}>
            Cadastrar
          </Button>
        </Grid>

        <ToastContainer position="top-center" />
      </Box>
      {/* </Box> */}
    </FormProvider>
  );
}
