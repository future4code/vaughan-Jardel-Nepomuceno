### Exercício 1  
(a) VARCHAR strings de no máximo 255 caracteres. Primary Key identificador único (id). Not null não é obrigatório inserir um item. DATETIME representa uma data com tempo.

(b) SHOWDATABASE mostra os dados do usuário no banco de dados. SHOWTABLES mostra as tabelas disponíveis no banco de dados.

(c) Exibiu todos os dados da tabela Actor.

### Exercício 2  
(a) foi inserido a atriz na tabela.

(b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' = Não foi possível inserir Outros dados pois já existe uma pessoa com o mesmo ID.

(c) Ficou faltando um dado na tabela no caso a Data. (tradução )contagem não corresponde à contagem de valor na linha 1.

(d) Ficou faltando um dado na tabela no caso o Name.(tradução) O campo 'nome' não tem um valor padrão.

(e) Deu erro na parte birth_Date porque foi inserido a Data sem está entre aspas.(tradução)Valor de dados incorretos: '1950' para a coluna 'birth_date' 1O campo 'name' não tem um valor padrão

(f) atores criados

### Exercício 3  
(a) SELECT id, name from Actor WHERE gender = "female"

(b) SELECT id, salary from Actor WHERE name = "tony ramos"

(c) SELECT * from Actor WHERE gender = 'invalid'. Não retorna nenhuma invalid pois não possui gender com esse valor.

(d) SELECT id, name , salary from Actor WHERE salary < 500000

(f) Coluna desconhecida 'nome' na 'lista de campos. O campo Nome está escrito errado o correto seria 'name'. SELECT id, name from Actor WHERE id = "002".

### Exercício 4 
(a) Seleciona todos os dados da tabela e retorna nome com a letra A ou J e com salário superior a 300000 reais.

(b) SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

(c) SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

(d) SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

### Exercício 5
(a)  CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
(b) Se eu fosse você criado.

(c) Doce de mãe criado.

(d) Auto da Compadecida criado.

Exercício 6 - (a) SELECT id, title , rating from Movie WHERE id= 1;

(b) - SELECT title from Movie WHERE title= "Se Eu Fosse Você";

(c) - SELECT id, title , synopsis from Movie WHERE Rating >= 7;

### Exercício 7 
(a) SELECT * FROM Movie
WHERE name LIKE "Vida%" ;

(b) SELECT * FROM Movie
WHERE title LIKE "%Auto%" OR synopsis LIKE "%forma%";

(c) SELECT * FROM Movie
WHERE release_Date < "2020-05-04";

(d) SELECT * FROM Movie
WHERE release_Date < "2022-05-04" AND 
      (title LIKE "%dona%" OR
      synopsis LIKE "%dona%") AND rating > 7;


