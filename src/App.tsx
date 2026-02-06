import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import type { ContactChannel, EventItem, Program, StatCard } from './types';

const stats: StatCard[] = [
  {
    label: 'Experimentos ativos',
    value: '48',
    description: 'Desafios em andamento com times multidisciplinares.'
  },
  {
    label: 'Mentores disponíveis',
    value: '16',
    description: 'Especialistas em ciência, design e produto.'
  },
  {
    label: 'Taxa de sucesso',
    value: '92%',
    description: 'Projetos que avançam para prototipagem.'
  }
];

const programs: Program[] = [
  {
    title: 'Trilha de Pesquisa Aplicada',
    track: 'LabCore',
    summary: 'Do problema ao experimento validado em quatro sprints.'
  },
  {
    title: 'Aceleração de Protótipos',
    track: 'ProtoBoost',
    summary: 'Semana intensiva para escalar MVPs com apoio técnico.'
  },
  {
    title: 'Comunidade de Talentos',
    track: 'HeroNet',
    summary: 'Banco de talentos e conexões com parceiros estratégicos.'
  }
];

const agenda: EventItem[] = [
  {
    name: 'Onboarding de novas squads',
    date: '12 Nov 2024 · 09:30',
    location: 'Auditório LabHero + transmissão online'
  },
  {
    name: 'Demo day LabHero',
    date: '28 Nov 2024 · 16:00',
    location: 'Hub de Inovação, São Paulo'
  },
  {
    name: 'Oficina de métricas científicas',
    date: '05 Dez 2024 · 10:00',
    location: 'Sala Miro Virtual'
  }
];

const channels: ContactChannel[] = [
  {
    label: 'E-mail da coordenação',
    detail: 'hello@labhero.com',
    helper: 'Respondemos em até 24h úteis.'
  },
  {
    label: 'Canal interno',
    detail: '#labhero-ops',
    helper: 'Disponível para membros da comunidade.'
  },
  {
    label: 'Parcerias',
    detail: 'parcerias@labhero.com',
    helper: 'Sprints especiais e projetos corporativos.'
  }
];

const layoutLinks = [
  { label: 'Visão geral', to: '/' },
  { label: 'Programas', to: '/programas' },
  { label: 'Agenda', to: '/agenda' },
  { label: 'Contato', to: '/contato' }
];

function HomePage() {
  return (
    <section className="page">
      <div className="hero">
        <div>
          <p className="eyebrow">Laboratório colaborativo</p>
          <h1>
            LabHero conecta ciência, produto e pessoas para acelerar soluções de impacto.
          </h1>
          <p className="hero-text">
            Acompanhe os indicadores em tempo real, explore as trilhas e mantenha sua squad alinhada
            com a agenda de experimentos.
          </p>
          <div className="hero-actions">
            <button className="primary">Quero participar</button>
            <button className="ghost">Ver calendário completo</button>
          </div>
        </div>
        <div className="hero-card">
          <h2>Resumo da semana</h2>
          <ul>
            <li>12 squads em revisão de hipóteses</li>
            <li>5 mentorias agendadas para quinta-feira</li>
            <li>8 projetos prontos para demo day</li>
          </ul>
        </div>
      </div>
      <div className="grid">
        {stats.map((item) => (
          <article className="card" key={item.label}>
            <span className="card-label">{item.label}</span>
            <h3>{item.value}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProgramsPage() {
  return (
    <section className="page">
      <header className="page-header">
        <h1>Programas estratégicos</h1>
        <p>Trilhas desenhadas para apoiar times em diferentes estágios de maturidade.</p>
      </header>
      <div className="grid">
        {programs.map((program) => (
          <article className="card" key={program.title}>
            <span className="pill">{program.track}</span>
            <h3>{program.title}</h3>
            <p>{program.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AgendaPage() {
  return (
    <section className="page">
      <header className="page-header">
        <h1>Agenda colaborativa</h1>
        <p>Compartilhe rituais e mantenha cada experimento no ritmo certo.</p>
      </header>
      <div className="list">
        {agenda.map((event) => (
          <article className="list-item" key={event.name}>
            <div>
              <h3>{event.name}</h3>
              <p>{event.location}</p>
            </div>
            <span className="tag">{event.date}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="page">
      <header className="page-header">
        <h1>Contato e apoio</h1>
        <p>Estamos prontos para ajudar sua squad a ganhar velocidade.</p>
      </header>
      <div className="grid">
        {channels.map((channel) => (
          <article className="card" key={channel.label}>
            <h3>{channel.label}</h3>
            <p className="card-highlight">{channel.detail}</p>
            <p>{channel.helper}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page">
      <div className="empty">
        <h1>Ops! Página não encontrada.</h1>
        <p>Escolha uma seção no menu ao lado para continuar navegando.</p>
        <NavLink className="primary" to="/">
          Voltar para a visão geral
        </NavLink>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-shell">
        <aside className="sidebar">
          <div className="logo">
            <span>Lab</span>Hero
          </div>
          <nav>
            {layoutLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' nav-link-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="sidebar-footer">
            <p>Atualização contínua</p>
            <span>v1.0 · GitHub Pages</span>
          </div>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programas" element={<ProgramsPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
