CREATE DATABASE mercado;
USE mercado;
 
CREATE TABLE `produtos` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `descricao_cupom` VARCHAR(50) UNIQUE NOT NULL,
  `descricao_produto` TEXT NOT NULL,
  `tipo_id` INT NOT NULL,
  `codigo_barras` VARCHAR(13) UNIQUE NOT NULL,
  `marca_id` INT NOT NULL
);
 
CREATE TABLE `tipos` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `descricao_tipo` VARCHAR(50) UNIQUE NOT NULL,
  `subcategoria` VARCHAR(50) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL
);
 
CREATE TABLE `marcas` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `nome_marca` VARCHAR(255) NOT NULL
);
 
CREATE TABLE `cupons` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `data_emissao` DATE,
  `hora_emissao` TIME,
  `forma_pagamento_id` INT NOT NULL,
  `valor` DECIMAL(10,2)
);
 
CREATE TABLE `forma_pagamento` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `forma_pagamento_descricao` VARCHAR(100) UNIQUE NOT NULL
);
 
CREATE TABLE `cupom_itens` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `cupom_id` INT NOT NULL,
  `produtos_id` INT NOT NULL,
  `quantidade` DECIMAL(10,3) NOT NULL,
  `valor_unitario` DECIMAL(10,2) NOT NULL,
  `valor_total` DECIMAL(10,2) NOT NULL
);
 
ALTER TABLE `produtos` ADD FOREIGN KEY (`tipo_id`) REFERENCES `tipos` (`id`);
 
ALTER TABLE `produtos` ADD FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`);
 
ALTER TABLE `cupons` ADD FOREIGN KEY (`forma_pagamento_id`) REFERENCES `forma_pagamento` (`id`);
 
ALTER TABLE `cupom_itens` ADD FOREIGN KEY (`cupom_id`) REFERENCES `cupons` (`id`);
 
ALTER TABLE `cupom_itens` ADD FOREIGN KEY (`produtos_id`) REFERENCES `produtos` (`id`);
 
INSERT INTO forma_pagamento(forma_pagamento_descricao) VALUE 
("dinheiro"),
("crédito"),
('débito'),
('boleto');
 
select * from forma_pagamento;
 
INSERT INTO marcas(nome_marca) VALUES
('Coffee ++'),
('food inc'),
('Something entreprise');
 
select * from marcas;
 
Insert into tipos(descricao_tipo, subcategoria, categoria) VALUES 
('Café extra premium', 'café', 'bebidas'),
('Café expresso', 'café', 'bebidas'),
('Café com leite', 'café', 'bebidas'),
('suco de uva ', 'sucos integrais', 'bebidas'),
('suco em de limão em pó', 'sucos industrializados', 'bebidas');
 
select * from tipos;

INSERT INTO produtos(descricao_cupom, descricao_produto, tipo_id,codigo_barras, marca_id) VALUES 
('café premium expresso muito caro','café da marca alguma coisa contém café produzido na malázia com o perído de colheita que dura 1 ano',1,123134234,1);

select * from produtos;

INSERT INTO cupons(data_emissao,hora_emissao,forma_pagamento_id,valor) VALUES
(curdate(), curtime(), 1, 200);

select * from cupons;

Insert into cupom_itens(cupom_id, produtos_id, quantidade, valor_unitario, valor_total) VALUES
(1,1,20,20,400);

select * from cupom_itens;


