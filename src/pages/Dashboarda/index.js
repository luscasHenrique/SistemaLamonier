import React, { useState } from 'react';
import './Dashboard.css';

// import components
import SidebarMenu from '../../components/NovoSideBar'
import UserCard from '../../components/UserCard';
import CardInfo from '../../components/CardInfo';
import DateSelector from '../../components/DataSelector';
import StatusButton from '../../components/BotaoStatus';
import TabelaAtendimentos from '../../components/TabelaAtendentes';



function Dashboard() {
    const colunas = ['Nome', 'Idade', 'Email'];
    const dados = [
      { 'Nome': 'João', 'Idade': 25, 'Email': 'joao@example.com' },
      { 'Nome': 'Maria', 'Idade': 30, 'Email': 'maria@example.com' },
      { 'Nome': 'Pedro', 'Idade': 28, 'Email': 'pedro@example.com' },
      // Adicione mais linhas de dados conforme necessário
    ];

    
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

  return (
    <div className="container-layout">
        <div className='container-left'>
            <SidebarMenu/>
        </div>

        <div className='container-right'>
            <div className='header'>
                <div className='sessao-button'>
                   <StatusButton/> 
                </div>
                
                <div className="user-profile">
                    <UserCard />
                    
                </div>
                
            </div>
            {/* <div className="Datas">
            <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />
            </div> */}

            <div className='sessao-cards'>
            <CardInfo
                titulo="Atendentes Online"
                numero={42}
                total={1000}
                data="2023-08-01"
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                cor="#805050" // Aqui você pode escolher a cor desejada
            />
            <CardInfo
                titulo="Atendimentos Ativos"
                numero={42}
                total={1000}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                data="2023-08-01"
                cor="#008080" // Aqui você pode escolher a cor desejada
            />
            <CardInfo
                titulo="Finalizados"
                numero={42}
                total={1000}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                data="2023-08-01"
                cor="#87cefa" // Aqui você pode escolher a cor desejada
            />
            <CardInfo
                titulo="Atendimentos Pendentes"
                numero={42}
                total={1000}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                data="2023-08-01"
                cor="#ffbdfd" // Aqui você pode escolher a cor desejada
            />
            <CardInfo
                titulo="Mensagens"
                numero={42}
                total={1000}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                data="2023-08-01"
                cor="#ff6961" // Aqui você pode escolher a cor desejada
            />
            </div>
            <div className='sessao-tabela'>
            <h1>Atendimentos por Atendentes</h1>

            <TabelaAtendimentos />

            </div>
            <div>
            
            </div>

        </div>

        <div className='footer'>

        </div>

    </div>
  )
}

export default Dashboard;