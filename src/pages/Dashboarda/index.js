import React, { useState, useEffect, useContext} from 'react';
import './Dashboard.css';

// import components
import SidebarMenu from '../../components/NovoSideBar'
import UserCard from '../../components/UserCard';
import CardInfo from '../../components/CardInfo';
import DateSelector from '../../components/DataSelector';
import StatusButton from '../../components/BotaoStatus';
import TabelaAtendimentos from '../../components/TabelaAtendentes';
import { Context } from '../../context/UserContext';
import api from '../../utils/api.js'


function Dashboard() {

    const [user, setUser] = useState([]); // Inicialize como array vazio
    const [token] = useState(localStorage.getItem('token') || '')
    const { deleteSchedule } = useContext(Context)
  
    useEffect(() => {
      api.get('/dashbord/homeDash',{
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    })
    .then((response) => {
        console.log(response.data)
        setUser(response.data)
    }).catch((error) => {
      console.log(error)
    })}, [token])

    const colunas = ['Nome', 'Idade', 'Email'];
    const dados = [
      { 'Nome': 'João', 'Idade': 25, 'Email': 'joao@example.com' },
      { 'Nome': 'Maria', 'Idade': 30, 'Email': 'maria@example.com' },
      { 'Nome': 'Pedro', 'Idade': 28, 'Email': 'pedro@example.com' },
      // Adicione mais linhas de dados conforme necessário
    ];

    const date = new Date(); 

    
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
                titulo="Atendentes"
                numero={user.atendentesOnline}
                total={0}
                data={date}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                cor="#45214A" // Aqui você pode escolher a cor desejada
            />
            <CardInfo
                titulo="Atendimentos Ativos"
                numero={user.ativo}
                total={0}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                data={date}
                cor="#323050" // Aqui você pode escolher a cor desejada
            />
            <CardInfo
                titulo="Finalizados"
                numero={user.inativo}
                total={0}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                data={date}
                cor="#21445B" // Aqui você pode escolher a cor desejada
            />
            <CardInfo
                titulo="Atendimentos Pendentes"
                numero={user.aberto}
                total={0}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                data={date}
                cor="#1A6566" // Aqui você pode escolher a cor desejada
            />
            <CardInfo
                titulo="Mensagens"
                numero={user.atendimentos}
                total={0}
                // data={selectedDate.toDateString()} // Use a data selecionada aqui
                data={date}
                cor="#5D8A66" // Aqui você pode escolher a cor desejada
            />
            </div>
            <div className='sessao-tabela'>
            <h1>Atendimentos por Atendentes</h1>

            <TabelaAtendimentos data={user.vendedor} />

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