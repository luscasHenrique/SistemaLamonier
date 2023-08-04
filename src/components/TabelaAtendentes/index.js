import Table from 'react-bootstrap/Table';
import'./TabelaAtendimentos.css';



function TabelaAtendimentos({ data }) {
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
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.vendedor}</td>
              <td>{item.datainicial}</td>
              <td>10</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Carregando...</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TabelaAtendimentos;