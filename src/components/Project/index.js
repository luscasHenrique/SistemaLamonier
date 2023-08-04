import './projectModules.css';
import { useState, useEffect } from 'react';

const Projeto = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      status: 'Tarefas Prontas',
      tags: ['Copywriting'],
      descricao: 'Konsep hero title yang menarik',
      data: '24 de Novembro',
      comentarios: '3',
      anexos: '7',
    },
    {
      id: 2,
      status: 'Em Progresso',
      tags: ['UI Design'],
      descricao: 'Ícone na seção "Nossos Serviços"',
      data: '24 de Novembro',
      comentarios: '2',
      anexos: '5',
    },
    {
      id: 3,
      status: 'Revisando',
      tags: ['Copywriting'],
      descricao: 'Konsep hero title yang menarik',
      data: '24 de Novembro',
      comentarios: '2',
      anexos: '3',
    },
  ]);

  const colunas = ['Tarefas Prontas', 'Em Progresso', 'Revisando', 'Feito'];

  const handleDragStart = (e, tarefaId) => {
    e.dataTransfer.setData('text/plain', tarefaId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const tarefaId = e.dataTransfer.getData('text');
    const tarefaAtualizada = tarefas.map((tarefa) => {
      if (tarefa.id === Number(tarefaId)) {
        return { ...tarefa, status };
      } else {
        return tarefa;
      }
    });
    setTarefas(tarefaAtualizada);
  };

  return (
    <main className='projeto'>
      <div className='projeto-info'>
        <h1>Design da Página Inicial</h1>
        <div className='projeto-participantes'>
          <span></span>
          <span></span>
          <span></span>
          <button className='projeto-participantes__adicionar'>Adicionar Participante</button>
        </div>
      </div>

      <div className='projeto-tarefas'>
        {colunas.map((coluna, index) => (
          <ColunaProjeto key={index} titulo={coluna} columnIndex={index} onDrop={handleDrop} onDragOver={handleDragOver}>
            {tarefas
              .filter((tarefa) => tarefa.status === coluna)
              .map((tarefa) => (
                <Tarefa key={tarefa.id} {...tarefa} onDragStart={handleDragStart} draggable='true' />
              ))}
          </ColunaProjeto>
        ))}
      </div>

      <DetalhesTarefa />
    </main>
  );
};

const Tarefa = ({ tags, descricao, data, comentarios, anexos }) => {
  return (
    <div className='tarefa' draggable='true'>
      <div className='tarefa__tags'>
        {tags.map((tag, index) => (
          <span key={index} className={`tarefa__tag tarefa__tag--${tag.toLowerCase()}`}>
            {tag}
          </span>
        ))}
        <button className='tarefa__opcoes'>
          <i className='fas fa-ellipsis-h'></i>
        </button>
      </div>
      <p>{descricao}</p>
      <div className='tarefa__estatisticas'>
        <span>
          <time dateTime={`2021-11-24T20:00:00`}>
            <i className='fas fa-flag'></i>
            {data}
          </time>
        </span>
        <span>
          <i className='fas fa-comment'></i>
          {comentarios}
        </span>
        <span>
          <i className='fas fa-paperclip'></i>
          {anexos}
        </span>
        <span className='tarefa__responsavel'></span>
      </div>
    </div>
  );
};

const ColunaProjeto = ({ titulo, children, columnIndex }) => {
  return (
    <div className='coluna-projeto'>
      <div className='coluna-projeto-titulo'>
        <h2 className='coluna-projeto-titulo__texto'>{titulo}</h2>
        <button className='coluna-projeto-titulo__opcoes'>
          <i className='fas fa-ellipsis-h'></i>
        </button>
      </div>
      <div data-column-index={columnIndex}>
        {children}
      </div>
    </div>
  );
};

const DetalhesTarefa = () => {
  return (
    <aside className='detalhes-tarefa'>
      <ProgressoTag tag='Copywriting' progresso='3/8' />
      <ProgressoTag tag='Illustration' progresso='6/10' />
      <ProgressoTag tag='UI Design' progresso='2/7' />
      <AtividadeTarefa />
    </aside>
  );
};

const ProgressoTag = ({ tag, progresso }) => {
  return (
    <div className='progresso-tag'>
      <h2>Progresso da Tarefa</h2>
      <div className='progresso-tag'>
        <p>
          {tag} <span>{progresso}</span>
        </p>
        <progress
          className={`progresso progresso--${tag.toLowerCase().replace(' ', '-')}`}
          max='10'
          value={progresso.split('/')[0]}
        >
          {progresso}
        </progress>
      </div>
    </div>
  );
};

const AtividadeTarefa = () => {
  return (
    <div className='atividade-tarefa'>
      <h2>Atividades Recentes</h2>
      <ul>
        {/* Itens da lista de atividades da tarefa vão aqui */}
      </ul>
    </div>
  );
};

export default Projeto;
