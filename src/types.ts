export interface Usuario {
  id: string;
  nome: string;
  perfil: 'ADMIN' | 'GESTORA' | 'RH_PLENO' | 'ESTAGIARIA';
  unidade?: string;
}

export interface RotinaBlueprint {
  id: string;
  nome: string;
  descricao: string;
  papel: 'ADMIN' | 'GESTORA' | 'RH_PLENO' | 'ESTAGIARIA';
  tipo: 'SEMANAL' | 'DIARIO' | 'MENSAL' | 'RMO';
  versao: number;
  itens: RotinaItemBlueprint[];
}

export interface RotinaItemBlueprint {
  id: string;
  titulo: string;
  descricao: string;
  diaSemana:
    | 'SEGUNDA'
    | 'TERCA'
    | 'QUARTA'
    | 'QUINTA'
    | 'SEXTA'
    | 'SABADO'
    | 'DOMINGO'
    | 'TODOS';
  periodo: 'MANHA' | 'TARDE' | 'DIA_TODO';
  categoria:
    | 'RS'
    | 'PONTO'
    | 'COMPRAS'
    | 'ESTOQUE'
    | 'FACILITY'
    | 'CONTRATOS'
    | 'CONFORMIDADE'
    | 'OUTRO';
  obrigatorio: boolean;
}

export interface RotinaInstancia {
  id: string;
  usuarioId: string;
  papel: string;
  dataReferencia: string;
  tipo: 'SEMANAL' | 'DIARIO' | 'MENSAL' | 'RMO';
  blueprintId: string;
  status: 'ABERTA' | 'EM_ANDAMENTO' | 'CONCLUIDA' | 'ATRASADA';
  itens: RotinaItemInstancia[];
}

export interface RotinaItemInstancia {
  blueprintItemId: string;
  titulo: string;
  diaSemana: string;
  periodo: string;
  obrigatorio: boolean;
  feito: boolean;
  feitoEm: string | null;
  comentario: string | null;
}

export interface AtividadeDiaria {
  id: string;
  usuarioId: string;
  data: string;
  tipo: 'RS' | 'COMPRAS' | 'ESTOQUE' | 'CONTRATOS' | 'FACILITY' | 'PONTO' | 'OUTRO';
  descricao: string;
  rotinaInstanciaId?: string;
  rotinaItemBlueprintId?: string;
  duracaoMinutos?: number;
  createdAt: string;
}

export interface ProcessoSeletivo {
  id: string;
  vaga: string;
  unidade: string;
  area: string;
  dataAbertura: string;
  dataFechamento: string | null;
  status: 'ABERTO' | 'PAUSADO' | 'FECHADO';
  origem: string;
}

export interface Candidato {
  id: string;
  nome: string;
  contato: string;
  origem: string;
  processoSeletivoId: string;
  idExternoJobecam?: string;
  linkVideoEntrevista?: string;
  scoreJobecam?: number;
  scores?: {
    tecnico?: number;
    comportamental?: number;
    entrevista?: number;
  };
  tags?: string[];
}
