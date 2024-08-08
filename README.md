# Exercícios de Revisão Javascript

### Atividade 01

Um parque de diversões decidiu instalar uma mini montanha-russa! Para garantir a segurança dos clientes, você precisa criar um programa que verifica se a pessoa pode ou não entrar no brinquedo, de acordo com a altura mínima permitida. Implemente também o limite para altura máxima.

### Atividade 02
O parque está com uma promoção relâmpago! A cada 3 ingressos comprados, o cliente ganha uma porção de batatas fritas grátis. Você precisa criar um programa que calcula quantas porções de batata frita o cliente ganhará, baseado na quantidade de ingressos que ele comprar.

### Atividade 03
Uma escola de música está realizando audições para novos alunos! Para organizar as inscrições, você precisa criar um programa que verifica se a pessoa possui a idade mínima para realizar sua matrícula.
Desafio Extra:
Implemente intervalos de idades para definir categorias de turmas.

### Atividade 04
Uma banda de música está se apresentando e a plateia está super animada! Você precisa criar um programa que simule os aplausos da plateia, exibindo no console uma sequência de palmas "👏" de acordo com a intensidade escolhida pelo usuário.
Desafio Extra:
Implemente uma lógica para que, a cada 5 palmas, o programa adicione um emoji de “🎉” à string de aplausos.

### Atividade 05 
Uma lanchonete modernizou o seu sistema de pedidos! Agora, os clientes montam seus hambúrgueres diretamente no código, sem precisar de interface gráfica. É a sua vez de programar essa experiência inovadora!

### **Exercício: Batalha de Robôs 🤖💥**

**Contexto:** Em um futuro distante, robôs gigantes batalham em arenas pelo entretenimento das multidões! Você é o programador responsável por controlar o arsenal de um desses robôs.
**Criar o Arsenal:** Crie um array chamado armas contendo pelo menos 5 tipos de armas (strings), como "Laser", "Mísseis", etc.
**Robô Atacante:** Crie um array chamado ataques que inicialmente estará vazio. Este array representará a sequência de ataques que seu robô irá realizar.
**Plano de Ataque:** Adicione a ordem dos ataques ao array, usando os índices do array armas.
**Relatório de Batalha:** Exiba no console a sequência de ataques do seu robô, um por linha, prefixando cada ataque com "Ataque [número do ataque]: [nome do atque]".
**Nome do Robô:** A posição 0 do array deve indicar o nome do robô e a mensagem deve mostrar “Nome: [nome do robô]”.

### **Exercício: Maratona de Livros 📚**
**Contexto:** Um leitor apaixonado por livros definiu uma meta de ler um certo número de livros por mês. Você precisa criar um programa que o ajude a acompanhar seu progresso e verificar se ele atingiu sua meta.
**Definir a Meta:** Crie uma variável chamada metaLivros e defina a meta de leitura mensal (número inteiro).
**Registrar os Livros Lidos:** Crie um array chamado livrosLidos e preencha-o com os nomes (strings) dos livros que o leitor já leu no mês atual. 
**Analisar o Progresso:**
- Utilize um laço de repetição for para percorrer o array livrosLidos e exibir no console o nome de cada livro lido.
- Após o loop, utilize uma estrutura de decisão if para verificar se a quantidade de livros lidos (livrosLidos.length) atingiu ou ultrapassou a metaLivros.
- Exiba no console a mensagem apropriada:
    - **Meta Atingida:** "Parabéns! Você atingiu sua meta de leitura!"
    - **Meta Não Atingida:** "Você está progredindo! Faltam [quantidade] livros para atingir sua meta."