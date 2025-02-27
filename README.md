<h1 align="center"> PROJETO AMIGO SECRETO </h1>
<h2 align="center"> Challenge Desafio Alura/Oracle Gen 8 </h2>



- **Descrição do Projeto**

Este projeto é um desafio proposto pela Alura Cursos para os candidatos ao curso de Formação Oracle One, turma da oitava edição do programa.

O desafio é construir uma pequena aplicação denominada "Amigo Secreto" colocando em prática os conceitos aprendidos ao longo dos cursos ministrados: logica de programação, elementos básicos de estrutura de dados e elementos basicos da linguagem Javascript.

A aplicação tem como front-end uma página HTML, personalizada via CSS, que recebe informações do usuário através de um campo de entrada, faz uma validação nos dados no momento da digitação, armazena estas informações em uma mémoria temporária e quando desejado pelo usuário faz um sorteio dos dados previamente armazendos e exibe o resultado em local próprio.

Ao projeto original foi adicionado por mim um botão para reiniciar a aplicação. Motivo: termindo o sorteio o usuário ficaria sem saber o que fazer visto que nenhuma outra interação havia sido informada.

Os próximos passos desse projeto serão:

possibilidade do usuário cancelar/apagar o ultimo nome

Criar a possibilidade de checagem de nomes duplicados, solicitando que seja colocado mais un nome caso o primeiro já exista no sistema. Exemplo: o usuario forneceu um nome "Ana" e este já havia sido digitado, então digitado novamente o sistema alerta o usuário e o pergunta se ele deseja adicionar mais um nome junta a "Ana"

Capitalizar as iniciais de cada nome digitado.
- **Status do Projeto**

Concluido

- **Tecnologias utilizadas**

Html, CSS, Javascript

- **Acesso ao Projeto**

Público

- **Pessoas Desenvolvedoras do Projeto**

Jose Geraldo Gonçalves (https://github.com/joshgoncalves)

- **Licença**

Acesso ao Projeto

- **Conclusão/Comentarios do Autor:**

Enquanto pesquisava para ver como concluir o desafio, além claro das aulas e material da Alura, me deparei com outras opções de programação, uma delas, ainda que não estivesse no escopo do que foi ensinado utilezei-a e quero comentar aqui:

O uso de *addEventListener()* como metodo para target de eventos.

No curso 2 de lógica de programação da Alura (Curso de Lógica de programação: explore funções e listas)  na aula 2 e 3 foi ensinado o metodo de definir eventos no Html e então chamar a função no javascript.

A escolha entre usar addEventListener() no JavaScript ou referências diretas a funções no HTML (onclick, onchange, etc.)

1\. Usar addEventListener() no JavaScript

Essa é a abordagem mais recomendada na maioria dos casos, especialmente em projetos maiores ou mais complexos.

Vantagens:

- Separação de preocupações: Mantém o HTML limpo e separado do comportamento (JavaScript). Isso facilita a manutenção e a leitura do código.
- Flexibilidade: Permite adicionar múltiplos listeners para o mesmo evento em um elemento.
- Controle dinâmico: Você pode adicionar ou remover event listeners durante a execução do código.
- Melhor organização: Centraliza toda a lógica de eventos no JavaScript, o que facilita a depuração e o gerenciamento.



2\. Referências diretas no HTML (onclick, onchange, etc.)

Essa abordagem é mais simples e direta, mas geralmente é menos recomendada para projetos maiores.

Vantagens:

- Simplicidade: É mais fácil de implementar para casos muito simples ou rápidos.
- Integração rápida: Pode ser útil para protótipos ou scripts pequenos.

Desvantagens:

- Mistura de camadas: O HTML fica poluído com lógica de comportamento, o que dificulta a manutenção.
- Limitação: Só é possível atribuir uma função diretamente a um evento por vez.
- Menos flexível: Dificulta a remoção ou alteração dinâmica de eventos.


