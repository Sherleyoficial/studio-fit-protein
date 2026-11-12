# Studio Fit Protein

Aplicativo (PWA) de acompanhamento da ingestão diária de proteína para alunos do Studio Fit Personal.
Publicado em https://proteina.sherleyferreira.com.br (GitHub Pages).

Projeto independente do Sistema Sherley GLP-1™.

## Como funciona

- O aluno escreve o que comeu ("arroz, feijão e 2 ovos"), confere as quantidades e confirma.
- O app soma a proteína do dia e mostra quanto falta para a meta.
- A meta é informada pelo profissional. Sem meta, o app calcula uma estimativa provisória (ver `METODO-META.md`).
- Palavras genéricas (leite, queijo, carne, carne moída, frango, peixe, pão, iogurte) fazem o app perguntar qual foi, em vez de escolher sozinho. A escolha fica lembrada e pode ser trocada.
- "Minhas refeições": o aluno salva combinações frequentes e registra com um toque, sempre conferindo antes.
- Alimento fora da tabela: cadastro pelo rótulo (porção, proteína na porção, quanto comeu).
- Não há foto, inteligência artificial, login nem servidor. O reconhecimento do texto usa regras fixas e sinônimos.

## Dados e privacidade

- Perfil e registros ficam só no aparelho do aluno (`localStorage`). Nada é enviado.
- O aluno aceita um aviso de privacidade no primeiro uso e pode apagar tudo em Perfil.
- Cópia de segurança: exportar e restaurar arquivo, em Perfil.
- Não há envio de dados ao Studio. O aluno mostra o Histórico no próprio celular.
- Fontes tipográficas hospedadas no próprio site (sem chamadas a terceiros).

## Valores nutricionais

Ver `FONTES.md`. Proteína, calorias e gordura vêm da TACO 4ª ed. (NEPA/UNICAMP, 2011), pelo número do alimento.

## Arquivos

- `index.html`: o aplicativo inteiro (tela, regras e biblioteca de alimentos).
- `sw.js`: funcionamento sem internet.
- `MEDIDAS-CASEIRAS.md`: pesos das medidas caseiras, para revisão técnica.
- `fonts/`: Sora e Manrope (licença SIL Open Font License 1.1).
- `manifest.webmanifest` e ícones: instalação na tela inicial.
