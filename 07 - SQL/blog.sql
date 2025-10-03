CREATE DATABASE blog;
USE blog;

CREATE TABLE `postagens` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `titulo` VARCHAR(200) NOT NULL,
  `conteudo` longtext,
  `autor_id` INT NOT NULL,
  `imagem_capa` TEXT,
  `postado_em` datetime NOT NULL,
  `categoria_id` INT NOT NULL,
  `regiao_id` INT NOT NULL,
  `ativo` BOOLEAN DEFAULT TRUE	
);

CREATE TABLE `usuarios` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `usuario` VARCHAR(20) UNIQUE NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `data_criacao` DATETIME NOT NULL,
  `data_nascimento` DATE NOT NULL
);

CREATE TABLE `autores` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `usuario_id` INT UNIQUE NOT NULL,
  `biografia` longtext,
  `imagem` text,
  `links` text
);

CREATE TABLE `categorias` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `categoria` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100)
);

CREATE TABLE `regioes` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `regiao` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100)
);

CREATE TABLE `comentarios` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `comentario` VARCHAR(255) NOT NULL,
  `usuario_id` INT NOT NULL,
  `postado_em` DATETIME NOT NULL,
  `postagem_id` INT NOT NULL,
  `ativo` BOOLEAN DEFAULT TRUE
);

ALTER TABLE `postagens` ADD FOREIGN KEY (`autor_id`) REFERENCES `autores` (`id`);

ALTER TABLE `postagens` ADD FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`);

ALTER TABLE `postagens` ADD FOREIGN KEY (`regiao_id`) REFERENCES `regioes` (`id`);

ALTER TABLE `autores` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

ALTER TABLE `comentarios` ADD FOREIGN KEY (`postagem_id`) REFERENCES `postagens` (`id`);

ALTER TABLE `comentarios` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

INSERT INTO categorias(categoria,slug) VALUES
('Turismo e Natureza', 'turismo-e-natureza'),
('Praia', 'praia'),
('Radical', 'radical'),
('Gastronômico', 'gastronomico');

INSERT INTO regioes(regiao,slug) VALUES
('Caminhos do Alto Vale', 'caminhos-do-alto-vale'),
('Vale do Contestado', 'vale-do-contestado'),
('Vale Europeu', 'vale-europeu'),
('Grande Oeste', 'grande-oeste'),
('Caminho dos Príncipes', 'caminho-dos-principes'),
('Caminhos da Fronteira', 'caminhos-da-fronteira'),
('Encantos do Sul', 'encantos-do-sul'),
('Costa Verde e Mar', 'costa-verde-e-mar'),
('Caminhos dos Canyons', 'caminhos-dos-canyons'),
('Serra Catarinense', 'serra-catarinense'),
('Grande Florianópolis', 'grande-florianopolis'),
('Vale das Águas', 'vale-das-aguas');

select * from categorias;
select * from regioes;
select * from autores;



