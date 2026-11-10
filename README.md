# Studio Fit Protein

Aplicativo (PWA) de acompanhamento da ingestão diária de proteína para alunos do Studio Fit Personal.
Publicado em https://proteina.sherleyferreira.com.br (GitHub Pages).

Projeto independente do Sistema Sherley GLP-1™.

## Como funciona

- O aluno escreve o que comeu ("arroz, feijão e 2 ovos"), confere as quantidades e confirma.
- O app soma a proteína do dia e mostra quanto falta para a meta.
- A meta é informada pelo profissional. Sem meta, o app calcula uma estimativa provisória (ver `METODO-META.md`).
- Não há foto, inteligência artificial, login nem servidor. O reconhecimento do texto usa regras fixas e sinônimos.

## Dados e privacidade

- Perfil e registros ficam só no aparelho do aluno (`localStorage`). Nada é enviado.
- O aluno aceita um aviso de privacidade no primeiro uso e pode apagar tudo em Perfil.
- Cópia de segurança: exportar e restaurar arquivo, em Perfil.
- "Enviar meu dia pelo WhatsApp": o aluno decide se envia o resumo.
- Fontes tipográficas hospedadas no próprio site (sem chamadas a terceiros).

## Valores nutricionais

Ver `FONTES.md`. Proteína, calorias e gordura vêm da TACO 4ª ed. (NEPA/UNICAMP, 2011), pelo número do alimento.

## Arquivos

- `index.html`: o aplicativo inteiro (tela, regras e biblioteca de alimentos).
- `sw.js`: funcionamento sem internet.
- `fonts/`: Sora e Manrope (licença SIL Open Font License 1.1).
- `manifest.webmanifest` e ícones: instalação na tela inicial.
