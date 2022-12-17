import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Edit } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/axios';

import Appbar from '../../components/Appbar/Appbar';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  // Necessita colocar o TOAST e criar um try e catch
  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get('/api/product');
        setProdutos(response.data);
      } catch (err) {
        toast.error('Busca não realizada');
      }
    }
    getData();
  }, []);

  return (
    <Box
      sx={{
        padding: '0 20px',
        marginLeft: { md: '240px', xs: '5px' },
        marginTop: '90px',
      }}
    >
      <Appbar />
      <Box
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'Roboto',
          color: '#fff',
          background: '#3d3d3d',
          marginBottom: '30px',
        }}
      >
        <h1>Produtos</h1>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '20px',
          textDecoration: 'none',
        }}
      >
        <Link to="/produto/cadastro" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Cadastrar</Button>
        </Link>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ height: '50px' }}>
              <TableCell
                align="center"
                sx={{ fontSize: '18px', fontWeight: 'bold' }}
              >
                Codigo
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: '18px', fontWeight: 'bold' }}
              >
                Descrição Comercial
              </TableCell>
              <TableCell align="center" sx={{ fontSize: '18px' }}>
                Editar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto) => (
              <TableRow
                key={produto.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  height: '50px',
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: '16px' }}
                  align="center"
                >
                  {produto.productCode}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '16px' }}>
                  {produto.commercialDescription}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '16px' }}>
                  <Link to={`/produto/edit/${produto.id}`}>
                    <IconButton aria-label="edit">
                      <Edit />
                    </IconButton>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer />
    </Box>
  );
}
