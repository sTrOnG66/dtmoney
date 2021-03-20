import React, { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';



function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Desenvolvimento</td>
          <td>R$120</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
      </tbody>
    </table>
  )
}

export const TransactionsTable = () => {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response))
  }, [])

  return (
    <Container>
      <Table />
    </Container>
  )
}
