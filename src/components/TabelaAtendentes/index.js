import Table from 'react-bootstrap/Table';
import'./TabelaAtendimentos.css';



function TabelaAtendimentos() {
  return (
    <Table responsive>
      <thead>
        <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Guilherme</td>
          <td>Agosto</td>
          <td>50</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TabelaAtendimentos;