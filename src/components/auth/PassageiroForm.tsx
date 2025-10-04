import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const PassageiroForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nomeCompleto: "",
    telefone: "",
    rg: "",
    necessidadesEspeciais: "",
  });
  const [fotoIdentidade, setFotoIdentidade] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || !formData.nomeCompleto || !formData.telefone || !formData.rg) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setLoading(true);

    try {
      // 1. Criar conta de autenticação
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
        }
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error("Erro ao criar usuário");

      // 2. Upload da foto de identidade (se houver)
      let fotoIdentidadeUrl = null;
      if (fotoIdentidade) {
        const fileExt = fotoIdentidade.name.split('.').pop();
        const fileName = `${authData.user.id}/identidade.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('fotos')
          .upload(fileName, fotoIdentidade);

        if (uploadError) {
          console.error("Erro ao fazer upload da foto:", uploadError);
        } else {
          const { data: { publicUrl } } = supabase.storage
            .from('fotos')
            .getPublicUrl(fileName);
          fotoIdentidadeUrl = publicUrl;
        }
      }

      // 3. Criar perfil
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          user_type: 'passageiro',
          nome_completo: formData.nomeCompleto,
          telefone: formData.telefone,
          rg: formData.rg,
        });

      if (profileError) throw profileError;

      // 4. Criar registro de passageiro
      const { error: passageiroError } = await supabase
        .from('passageiros')
        .insert({
          id: authData.user.id,
          necessidades_especiais: formData.necessidadesEspeciais || null,
          foto_identidade_url: fotoIdentidadeUrl,
        });

      if (passageiroError) throw passageiroError;

      toast.success("Cadastro realizado com sucesso! Faça login para continuar.");
      
      // Resetar formulário
      setFormData({
        email: "",
        password: "",
        nomeCompleto: "",
        telefone: "",
        rg: "",
        necessidadesEspeciais: "",
      });
      setFotoIdentidade(null);

    } catch (error: any) {
      console.error("Erro no cadastro:", error);
      toast.error(error.message || "Erro ao realizar cadastro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email-passageiro">E-mail *</Label>
        <Input
          id="email-passageiro"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-passageiro">Senha *</Label>
        <Input
          id="password-passageiro"
          type="password"
          placeholder="Mínimo 6 caracteres"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          minLength={6}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="nome-passageiro">Nome Completo *</Label>
        <Input
          id="nome-passageiro"
          type="text"
          placeholder="Seu nome completo"
          value={formData.nomeCompleto}
          onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefone-passageiro">Telefone *</Label>
        <Input
          id="telefone-passageiro"
          type="tel"
          placeholder="(00) 00000-0000"
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rg-passageiro">RG/Identidade *</Label>
        <Input
          id="rg-passageiro"
          type="text"
          placeholder="Número do RG"
          value={formData.rg}
          onChange={(e) => setFormData({ ...formData, rg: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="necessidades">Necessidades Especiais</Label>
        <Textarea
          id="necessidades"
          placeholder="Descreva suas necessidades especiais (opcional)"
          value={formData.necessidadesEspeciais}
          onChange={(e) => setFormData({ ...formData, necessidadesEspeciais: e.target.value })}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="foto-identidade">Foto de Identidade</Label>
        <Input
          id="foto-identidade"
          type="file"
          accept="image/*"
          onChange={(e) => setFotoIdentidade(e.target.files?.[0] || null)}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Cadastrando...
          </>
        ) : (
          "Cadastrar como Passageiro"
        )}
      </Button>
    </form>
  );
};

export default PassageiroForm;
