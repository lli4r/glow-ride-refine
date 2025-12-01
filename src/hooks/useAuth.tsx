import { useState, useEffect } from "react";

export interface User {
  id: string;
  email: string;
  nome: string;
  telefone: string;
  tipo: "passageiro" | "motorista";
  placa?: string;
}

// Simula API de autenticação com dados fictícios
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregar usuário do localStorage
    const storedUser = localStorage.getItem("acessa_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simula chamada de API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Dados fictícios de usuário
        const mockUser: User = {
          id: "user-123",
          email: email,
          nome: "João Silva",
          telefone: "(47) 99876-5432",
          tipo: "passageiro",
        };
        
        localStorage.setItem("acessa_user", JSON.stringify(mockUser));
        setUser(mockUser);
        resolve({ success: true });
      }, 1000);
    });
  };

  const register = async (
    email: string,
    password: string,
    nome: string,
    telefone: string,
    tipo: "passageiro" | "motorista",
    placa?: string
  ): Promise<{ success: boolean; error?: string }> => {
    // Simula chamada de API
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: `user-${Date.now()}`,
          email,
          nome,
          telefone,
          tipo,
          placa,
        };
        
        localStorage.setItem("acessa_user", JSON.stringify(mockUser));
        setUser(mockUser);
        resolve({ success: true });
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("acessa_user");
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};
