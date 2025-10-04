-- Criar enum para tipo de usuário
CREATE TYPE user_type AS ENUM ('motorista', 'passageiro');

-- Criar tabela de perfis base
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  user_type user_type NOT NULL,
  nome_completo text NOT NULL,
  telefone text NOT NULL,
  rg text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Criar tabela específica de motoristas
CREATE TABLE public.motoristas (
  id uuid PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  cnh text NOT NULL,
  foto_cnh_url text,
  foto_rosto_url text,
  placa_veiculo text NOT NULL,
  documento_veiculo_url text,
  aprovado boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Criar tabela específica de passageiros
CREATE TABLE public.passageiros (
  id uuid PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  necessidades_especiais text,
  foto_identidade_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.motoristas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.passageiros ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
CREATE POLICY "Usuários podem ver seu próprio perfil"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar seu próprio perfil"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Usuários podem inserir seu próprio perfil"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Políticas para motoristas
CREATE POLICY "Motoristas podem ver seu próprio perfil"
  ON public.motoristas FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Motoristas podem atualizar seu próprio perfil"
  ON public.motoristas FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Motoristas podem inserir seu próprio perfil"
  ON public.motoristas FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Políticas para passageiros
CREATE POLICY "Passageiros podem ver seu próprio perfil"
  ON public.passageiros FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Passageiros podem atualizar seu próprio perfil"
  ON public.passageiros FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Passageiros podem inserir seu próprio perfil"
  ON public.passageiros FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Criar buckets de storage para uploads
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('documentos', 'documentos', false),
  ('fotos', 'fotos', false);

-- Políticas de storage para documentos
CREATE POLICY "Usuários podem fazer upload de seus documentos"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'documentos' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Usuários podem ver seus documentos"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'documentos' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Usuários podem atualizar seus documentos"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'documentos' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Políticas de storage para fotos
CREATE POLICY "Usuários podem fazer upload de suas fotos"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'fotos' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Usuários podem ver suas fotos"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'fotos' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Usuários podem atualizar suas fotos"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'fotos' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_motoristas_updated_at
  BEFORE UPDATE ON public.motoristas
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_passageiros_updated_at
  BEFORE UPDATE ON public.passageiros
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();