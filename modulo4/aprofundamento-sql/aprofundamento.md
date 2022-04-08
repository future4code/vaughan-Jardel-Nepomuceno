### EXERCÍCIO 1 - 

(a) ALTER TABLE Actor DROP COLUMN salary;. Vai remover a coluna de salários.

(b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Vai redeclarar uma coluna já existente.

(c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); vai alter o gender pra aceitar até 255 caracteres.

### EXERCÍCIO 2 -

(a) UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

(b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

(c) UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

### EXERCÍCIO 3 -

(a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

(b) DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000


### EXERCÍCIO 4 -

(a) SELECT MAX(salary) FROM Actor

(b) SELECT MIN(salary) FROM Actor WHERE gender = "female" 

(c) SELECT COUNT(*) FROM Actor WHERE gender = "female"

(d) SELECT SUM(salary) FROM Actor

EXERCÍCIO 5 -

