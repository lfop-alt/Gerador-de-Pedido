import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ButtonGroup } from '@mui/material';

import ObservacoesEdit from '../../pages/EditarPedido/Observacao';
import InstalacoesEdit from '../../pages/EditarPedido/Instalacoes';
import ItensEdit from '../../pages/EditarPedido/Itens';

export default function ButtomSelect({ tam }) {
  const [button, setButton] = useState('instalacao');

  const tamanhoArray = tam;
  console.log(tamanhoArray);

  function buttons(buttonSelect) {
    switch (buttonSelect) {
      case 'instalacao':
        return <InstalacoesEdit tamanho={tamanhoArray} />;
      case 'observacoes':
        return <ObservacoesEdit />;
      case 'itens':
        return <ItensEdit />;
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
      <Box>{buttons(button)}</Box>
    </Box>
  );
}

ButtomSelect.propTypes = {
  tam: PropTypes.number,
};
ButtomSelect.defaultProps = {
  tam: 0,
};
