import React, { useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';

import Itens from '../../pages/cadastros/Itens';
import Instalacoes from '../../pages/cadastros/Instalacoes';
import Observacoes from '../../pages/cadastros/Observacao';

import ObservacoesEdit from '../../pages/EditarPedido/Observacao';
import InstalacoesEdit from '../../pages/EditarPedido/Instalacoes';
import ItensEdit from '../../pages/EditarPedido/Itens';

export default function ButtomSelect() {
  const [button, setButton] = useState('instalacao');

  function buttons(buttonSelect) {
    switch (buttonSelect) {
      case 'instalacao':
        return <Instalacoes />;
      case 'observacoes':
        return <Observacoes />;
      case 'itens':
        return <Itens />;
      default:
        return null;
    }
  }

  return (
    <Box>
      <Box
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          '& > *': {
            mt: 2,
            mb: 4,
          },
        }}
      >
        <ButtonGroup
          variant="outlined"
          size="large"
          aria-label="text button group"
        >
          <Button onClick={() => setButton('instalacao')}>Instalação</Button>
          <Button onClick={() => setButton('observacoes')}>Observações</Button>
          <Button onClick={() => setButton('itens')}>Itens</Button>
        </ButtonGroup>
      </Box>
      {console.log('Estou aqui')}
      <Box>{buttons(button)}</Box>
    </Box>
  );
}
