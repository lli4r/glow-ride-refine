import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const MotoristaForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nomeCompleto: "",
    telefone: "",
    rg: "",
    cnh: "",
    placaVeiculo: "",
  });
  const [fotoCnh, setFotoCnh] = useState<File | null>(null);
  const [fotoRosto, setFotoRosto] = useState<File | null>(null);
  const [documentoVeiculo, setDocumentoVeiculo] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || !formData.nomeCompleto || 
        !formData.telefone || !formData.rg || !formData.cnh || !formData.placaVeiculo) {
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

      // 2. Upload das fotos e documentos
      let fotoCnhUrl = null;
      let fotoRostoUrl = null;
      let documentoVeiculoUrl = null;

      if (fotoCnh) {
        const fileExt = fotoCnh.name.split('.').pop();
        const fileName = `${authData.user.id}/cnh.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('documentos')
          .upload(fileName, fotoCnh);

        if (!uploadError) {
          const { data: { publicUrl } } = supabase.storage
            .from('documentos')
            .getPublicUrl(fileName);
          fotoCnhUrl = publicUrl;
        }
      }

      if (fotoRosto) {
        const fileExt = fotoRosto.name.split('.').pop();
        const fileName = `${authData.user.id}/rosto.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('fotos')
          .upload(fileName, fotoRosto);

        if (!uploadError) {
          const { data: { publicUrl } } = supabase.storage
            .from('fotos')
            .getPublicUrl(fileName);
          fotoRostoUrl = publicUrl;
        }
      }

      if (documentoVeiculo) {
        const fileExt = documentoVeiculo.name.split('.').pop();
        const fileName = `${authData.user.id}/veiculo.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('documentos')
          .upload(fileName, documentoVeiculo);

        if (!uploadError) {
          const { data: { publicUrl } } = supabase.storage
            .from('documentos')
            .getPublicUrl(fileName);
          documentoVeiculoUrl = publicUrl;
        }
      }

      // 3. Criar perfil
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          user_type: 'motorista',
          nome_completo: formData.nomeCompleto,
          telefone: formData.telefone,
          rg: formData.rg,
        });

      if (profileError) throw profileError;

      // 4. Criar registro de motorista
      const { error: motoristaError } = await supabase
        .from('motoristas')
        .insert({
          id: authData.user.id,
          cnh: formData.cnh,
          foto_cnh_url: fotoCnhUrl,
          foto_rosto_url: fotoRostoUrl,
          placa_veiculo: formData.placaVeiculo,
          documento_veiculo_url: documentoVeiculoUrl,
        });

      if (motoristaError) throw motoristaError;

      toast.success("Cadastro realizado com sucesso! Aguarde aprovação para fazer login.");
      
      // Resetar formulário
      setFormData({
        email: "",
        password: "",
        nomeCompleto: "",
        telefone: "",
        rg: "",
        cnh: "",
        placaVeiculo: "",
      });
      setFotoCnh(null);
      setFotoRosto(null);
      setDocumentoVeiculo(null);

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
        <Label htmlFor="email-motorista">E-mail *</Label>
        <Input
          id="email-motorista"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-motorista">Senha *</Label>
        <Input
          id="password-motorista"
          type="password"
          placeholder="Mínimo 6 caracteres"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          minLength={6}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="nome-motorista">Nome Completo *</Label>
        <Input
          id="nome-motorista"
          type="text"
          placeholder="Seu nome completo"
          value={formData.nomeCompleto}
          onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefone-motorista">Telefone *</Label>
        <Input
          id="telefone-motorista"
          type="tel"
          placeholder="(00) 00000-0000"
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rg-motorista">RG/Identidade *</Label>
        <Input
          id="rg-motorista"
          type="text"
          placeholder="Número do RG"
          value={formData.rg}
          onChange={(e) => setFormData({ ...formData, rg: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cnh">CNH *</Label>
        <Input
          id="cnh"
          type="text"
          placeholder="Número da CNH"
          value={formData.cnh}
          onChange={(e) => setFormData({ ...formData, cnh: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="placa">Placa do Veículo *</Label>
        <Input
          id="placa"
          type="text"
          placeholder="ABC-1234"
          value={formData.placaVeiculo}
          onChange={(e) => setFormData({ ...formData, placaVeiculo: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="foto-cnh">Foto da CNH</Label>
        <Input
          id="foto-cnh"
          type="file"
          accept="image/*"
          onChange={(e) => setFotoCnh(e.target.files?.[0] || null)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="foto-rosto">Foto de Rosto</Label>
        <Input
          id="foto-rosto"
          type="file"
          accept="image/*"
          onChange={(e) => setFotoRosto(e.target.files?.[0] || null)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="doc-veiculo">Documento do Veículo</Label>
        <Input
          id="doc-veiculo"
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setDocumentoVeiculo(e.target.files?.[0] || null)}
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
          "Cadastrar como Motorista"
        )}
      </Button>
    </form>
  );
};

export default MotoristaForm;
