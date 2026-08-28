Estrutura recomendada
Grátis — experimentar
Deve entregar uma experiência completa para uso individual e pontual:
- Cadastro local de colaboradores.
- Montagem manual da escala.
- Pincel de turnos.
- Geração automática básica.
- Indicadores e alertas básicos.
- Salvamento no navegador.
- Exportação CSV.
- Backup e restauração local em JSON.
- Impressão comum da página, se desejarem mantê-la.
- Uso sem cadastro e sem prazo de expiração.
Limitações naturais:
- Sem banco de dados ou Google Sheets.
- Sem sincronização entre dispositivos.
- Sem colaboração entre usuários.
- Sem histórico de alterações.
- Sem permissões e controle de acesso.
- Sem automações avançadas.
- Sem suporte operacional incluído.
Isso já torna a versão gratuita valiosa, mas inadequada para uma operação crítica ou compartilhada.
Completa — operar
A versão completa deve resolver continuidade, segurança e colaboração:
- Sincronização com Google Sheets e backend.
- Dados acessíveis em diferentes dispositivos.
- PDF profissional e relatórios completos.
- Histórico e recuperação de alterações.
- Cadastros e escalas centralizados.
- Regras operacionais mais avançadas.
- Automatizações.
- Atualizações e suporte.
- Eventualmente, usuários, permissões e auditoria.
Aqui, o cliente não compra apenas “mais botões”. Ele compra confiança operacional.
Customizada — adaptar
Além de tudo da versão completa:
- Identidade visual e cores do cliente.
- Alteração de botões, textos e fluxos.
- Novos campos e regras de negócio.
- Novas funcionalidades.
- Relatórios específicos.
- Integrações adicionais.
- Implantação conforme a operação.
- Treinamento ou acompanhamento, quando contratado.
A diferença entre “completa” e “customizada” precisa estar principalmente na adaptação ao negócio, e não apenas na aparência.
Sobre as funções premium visíveis
É uma boa estratégia, desde que usada com moderação. Eu deixaria visíveis somente algumas funções que comunicam claramente o próximo nível, por exemplo:
- Sincronizar com Google Sheets.
- Gerar PDF profissional.
- Compartilhar com a equipe.
- Histórico de alterações.
- Regras avançadas.
Ao clicar, apareceria um aviso curto:
Recurso disponível nas versões Completa e Customizada. Fale com a SAE para conhecer as opções.

Com duas ações discretas:
- “Conhecer versões”
- “Continuar usando grátis”
Evitaria vários cadeados, banners recorrentes ou interrupções. Dois ou três pontos premium bem escolhidos vendem melhor do que uma interface cheia de bloqueios.
CTA discreto
O contato pode ficar em três lugares:
- Uma pequena opção “Suporte e versões” no cabeçalho ou nas configurações.
- Uma mensagem contextual ao tentar usar um recurso premium.
- Um rodapé discreto: “Precisa sincronizar, compartilhar ou adaptar? Conheça as versões SAE.”
O CTA deve aparecer quando surgir uma necessidade concreta. Esse é o melhor momento para converter, porque o próprio usuário já identificou o problema.
PDF bloqueado
É defensável reservar o PDF profissional para as versões pagas. Porém, bloquear window.print() completamente pode ser percebido como uma limitação artificial, pois o navegador já oferece impressão e “Salvar como PDF”.
Uma divisão mais elegante seria:
- Grátis: impressão simples, com identificação “Modelo gratuito SAE”.
- Completa: PDF formatado, limpo, com cabeçalho, período, paginação e relatórios.
- Customizada: PDF com marca, campos e estrutura do cliente.
Assim, o premium oferece qualidade e profissionalismo, não apenas remove uma barreira.
“Usei, gostei, quero mais”
A progressão está muito boa:
1. Usei: acesso imediato, sem cadastro e sem configuração complicada.
2. Gostei: interface agradável, dados persistentes, escala realmente utilizável.
3. Quero mais: o usuário percebe naturalmente que precisa de sincronização, colaboração, segurança ou personalização.
A frase “simples, barato e produtivo” também funciona, mas corrigiria “proddutivo” para “produtivo”. Como mensagem comercial, pode ser refinada para:
Simples para começar. Produtivo para trabalhar. Acessível para evoluir.

Principal cuidado estratégico
Não recomendo apresentar o armazenamento local como “seguro”. Melhor dizer:
Os dados desta versão ficam armazenados somente neste navegador. Faça backups regularmente.

Isso aumenta a confiança por transparência e, ao mesmo tempo, evidencia naturalmente o benefício da versão completa: sincronização e persistência centralizada.
Minha avaliação final: a proposta tem um bom equilíbrio entre produto gratuito, geração de confiança e oportunidade comercial. A conversão deverá vir menos de “bloqueios” e mais do momento em que o usuário precisar transformar uma ferramenta individual em uma solução operacional.

## Leitura técnica do projeto

O projeto atual é o MVP comercial da edição **Grátis** do SAE Controle de Escala:

- `index.html`: WebApp single-file, mobile-first, com Vue 3 via CDN, componentes visuais SAE, regras básicas de escala e persistência no `localStorage`.
- `codigo.gs`: entrada `doGet()` do Google Apps Script e configuração pública da edição, incluindo o canal comercial oficial no WhatsApp.
- Os dados operacionais não chegam ao servidor na edição grátis. Essa separação reduz custo e escopo de privacidade, mas exige comunicar claramente que o navegador é o único armazenamento.

## Arquitetura-alvo por edição

| Capacidade | Grátis | Completa | Customizada |
| --- | --- | --- | --- |
| Persistência | `localStorage` + backup JSON | Google Sheets por entidade | Google Sheets e regras próprias do cliente |
| Uso | Individual e experimental | Equipe e operação recorrente | Operação adaptada ao negócio |
| Backend GAS | Configuração e contato | CRUD, validação, permissões e auditoria | Fluxos, integrações e automações específicas |
| Relatórios | CSV e impressão comum | PDF profissional e indicadores | Marca e modelos personalizados |
| Identidade | Marca SAE, temas dark/light | Marca SAE, temas dark/light | White-label parametrizável |

Para a edição Completa, cada aba da planilha deve representar uma entidade (`Colaboradores`, `Escalas`, `Turnos`, `Usuarios`, `Auditoria` e `Configuracoes`). Toda linha deve ter UUID, datas ISO 8601 e números normalizados. O frontend continuará em Vue 3 e falará exclusivamente com funções públicas do GAS por `google.script.run`; validação, autorização e regras críticas permanecerão no servidor.

## Fases de evolução

1. **Leitura e entendimento — concluída:** inventário funcional, limites da edição e separação entre frontend local e backend GAS.
2. **Base visual — em andamento:** temas dark/light da marca, responsividade e acessibilidade dos controles.
3. **Qualidade do MVP grátis:** testes dos cálculos, importação segura, exportação CSV, estados vazios e experiência offline/PWA.
4. **Edição Completa:** repositórios GAS para Sheets, concorrência com `LockService`, cache, auditoria, permissões e migração dos dados locais.
5. **Edição Customizada:** tokens de marca, campos, regras, relatórios e integrações parametrizados por cliente.
6. **Produto vendável:** termos e privacidade, configuração comercial, telemetria consentida, documentação de implantação, demonstração, preços, suporte e checklist de publicação.

## Recomendações priorizadas

### Antes de produção

- Remover `ALLOWALL` ou documentar uma necessidade real de incorporação; liberar frames amplia a superfície de clickjacking.
- Fixar versões dos CDNs de Vue e Tailwind. O Tailwind CDN é útil para protótipo, mas deve ser avaliado no checklist de desempenho da publicação GAS.
- Criar testes automatizados para geração 12x36, 6x1 e 5x2, cálculo de horas, sanitização de CSV e validação/restauração de backup.
- Incluir manifest PWA e uma estratégia compatível com as limitações do `HtmlService`, validada no domínio implantado.
- Adicionar política de privacidade antes de introduzir qualquer captação futura de dados comerciais dentro do WebApp.

### Para a edição Completa

- Não expor IDs de planilha, segredos ou decisões de permissão no HTML.
- Usar respostas padronizadas (`ok`, `code`, `message`, `data`) em todas as funções chamadas com `google.script.run`.
- Proteger gravações concorrentes com `LockService`, trabalhar em lote com `getValues()`/`setValues()` e registrar usuário, instante ISO, entidade e ação na auditoria.
- Planejar migração idempotente do backup local para Sheets, sem apagar a origem até a confirmação do usuário.

## Tema da marca

O padrão inicial permanece **dark glassmorphism**. O controle no cabeçalho alterna para um tema claro SAE, mantém a preferência em `localStorage`, atualiza `color-scheme` e `theme-color` e aplica a escolha antes da montagem do Vue para evitar flash visual. A preferência de tema é independente dos dados da escala e, portanto, não entra no backup operacional.
