# Processos de Bolso

Web app pessoal (PWA) para iPhone e Mac: acompanhar processos judiciais — resumo, decisão, últimas movimentações,
autos transcritos pesquisáveis e perguntas ao GPT sobre cada processo.

- Sem servidor e sem conta: os dados ficam no aparelho (IndexedDB) e, se ligado, num cofre criptografado
  (AES-256-GCM, chave derivada da senha com PBKDF2) num repositório **privado** do GitHub do dono.
- Este repositório tem **só o código**. Nenhum dado de processo fica aqui.
- Novidades vêm do Diário de Justiça Eletrônico Nacional (API pública do CNJ, `comunicaapi.pje.jus.br`).
- Perguntas vão direto do aparelho para a API da OpenAI, com a chave do próprio dono.

Publicação: GitHub Pages, branch `main`, pasta raiz. No iPhone: Safari › Compartilhar › Adicionar à Tela de Início.
