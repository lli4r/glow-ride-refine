import { useState, useEffect } from "react";

export interface Viagem {
  id: string;
  origem: string;
  destino: string;
  data: string;
  horario: string;
  status: "concluida" | "em_andamento" | "agendada" | "cancelada";
  valor: number;
  motorista?: {
    nome: string;
    placa: string;
    avaliacao: number;
  };
  passageiro?: {
    nome: string;
    telefone: string;
  };
}

// Simula API de viagens com dados fictícios
export const useViagens = (userId?: string) => {
  const [viagens, setViagens] = useState<Viagem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    // Simula chamada de API
    setTimeout(() => {
      const mockViagens: Viagem[] = [
        {
          id: "viagem-1",
          origem: "Rua XV de Novembro, 1000 - Centro",
          destino: "Hospital Santa Catarina - Velha",
          data: "2025-11-28",
          horario: "14:30",
          status: "concluida",
          valor: 25.50,
          motorista: {
            nome: "Carlos Eduardo",
            placa: "ABC-1234",
            avaliacao: 4.8,
          },
        },
        {
          id: "viagem-2",
          origem: "Shopping Neumarkt",
          destino: "Centro de Fisioterapia - Garcia",
          data: "2025-11-30",
          horario: "09:00",
          status: "agendada",
          valor: 18.00,
          motorista: {
            nome: "Maria Santos",
            placa: "XYZ-5678",
            avaliacao: 4.9,
          },
        },
        {
          id: "viagem-3",
          origem: "Parque Vila Germânica",
          destino: "Rua XV de Novembro, 1000",
          data: "2025-11-25",
          horario: "18:00",
          status: "concluida",
          valor: 15.00,
          motorista: {
            nome: "Pedro Oliveira",
            placa: "DEF-9012",
            avaliacao: 5.0,
          },
        },
        {
          id: "viagem-4",
          origem: "FURB - Universidade",
          destino: "Terminal Rodoviário",
          data: "2025-11-22",
          horario: "16:45",
          status: "concluida",
          valor: 22.00,
          motorista: {
            nome: "Ana Paula",
            placa: "GHI-3456",
            avaliacao: 4.7,
          },
        },
      ];

      setViagens(mockViagens);
      setLoading(false);
    }, 800);
  }, [userId]);

  return {
    viagens,
    loading,
  };
};
