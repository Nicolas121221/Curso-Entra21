CREATE DATABASE viagens;
USE viagens;
 
CREATE TABLE `empresas` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `nome_empresa` VARCHAR(100) NOT NULL,
  `nacionalidade` VARCHAR(100) NOT NULL
);
 
CREATE TABLE `aeronaves` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `modelo` VARCHAR(100) NOT NULL,
  `assentos` INT NOT NULL,
  `peso_bagagem` DECIMAL(10,3) NOT NULL
);
 
CREATE TABLE `aeroportos` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `sigla_aeroporto` VARCHAR(10) NOT NULL,
  `cidade` VARCHAR(100) NOT NULL,
  `estado` VARCHAR(100) NOT NULL,
  `pais` VARCHAR(100) NOT NULL,
  `continente` VARCHAR(100) NOT NULL
);
 
CREATE TABLE `voos` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `data_saida` datetime NOT NULL,
  `data_chegada` datetime NOT NULL,
  `aeroporto_id_decolagem` INT NOT NULL,
  `aeroporto_id_destino` INT NOT NULL,
  `empresa_id` INT NOT NULL,
  `numero_passageiros` INT NOT NULL,
  `assentos_disponiveis` INT NOT NULL,
  `carga` DECIMAL(10,3) NOT NULL,
  `aeronave_id` INT NOT NULL
);
 
ALTER TABLE `voos` ADD FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`);
 
ALTER TABLE `voos` ADD FOREIGN KEY (`aeronave_id`) REFERENCES `aeronaves` (`id`);
 
ALTER TABLE `voos` ADD FOREIGN KEY (`aeroporto_id_decolagem`) REFERENCES `aeroportos` (`id`);
 
ALTER TABLE `voos` ADD FOREIGN KEY (`aeroporto_id_destino`) REFERENCES `aeroportos` (`id`);
 
INSERT INTO empresas(nome_empresa, nacionalidade) VALUES
('Emirates','Emirados Árabes Unidos'),
('Delta Air Lines','Estados Unidos'),
('Lufthansa','Alemanha'),
('Air France','França'),
('British Airways','Reino Unido'),
(' Qatar Airways','Qatar'),
('LATAM','Brasil'),
('GOL linhas aéreas','Brasil'),
('Azul linhas aéreas','Brasil'),
('United Airlines','Estados Unidos'),
('Qantas Airways','Austrália');
 
INSERT INTO aeronaves(modelo, assentos, peso_bagagem) VALUES
('Boeing 737-800',162,20),
('Airbus A320',180,20),
('Boeing 777-200',180,20),
('Airbus A330-300',277,30),
('Embraer E195',118,20),
('Boeing 787-9 Dreamliner',296,25),
('Airbus A350-900',315,25),
('Boeing 747-400',416,30),
('MCdonnell Douglas MD-80',140,20),
('Bombardier CRJ-900',90,20);
 
INSERT INTO aeroportos(nome,sigla_aeroporto,cidade,estado,pais,continente) VALUES
("Aeroporto Internacional de São Paulo/Guarulhos", "GRU", "São Paulo", "SP", "Brasil", "América do Sul"),
("Aeroporto Internacional de Frankfurt", "FRA", "Frankfurt", "Hesse", "Alemanha", "Europa"),
("Aeroporto Internacional de Los Angeles", "LAX", "Los Angeles", "Califórnia", "Estados Unidos", "América do Norte"),
("Aeroporto de Heathrow", "LHR", "Londres", "Inglaterra", "Reino Unido", "Europa"),
("Aeroporto Internacional de Tóquio Narita", "NRT", "Tóquio", "Tóquio", "Japão", "Ásia"),
("Aeroporto Internacional de Dubai", "DXB", "Dubai", "Dubai", "Emirados Árabes Unidos", "Ásia"),
("Aeroporto Internacional de Sydney", "SYD", "Sydney", "Nova Gales do Sul", "Austrália", "Oceania"),
("Aeroporto Internacional de Paris Charles de Gaulle", "CDG", "Paris", "Île-de-France", "França", "Europa"),
("Aeroporto Internacional de Hong Kong", "HKG", "Hong Kong", "Hong Kong", "China", "Ásia"),
("Aeroporto Internacional de Toronto Pearson", "YYZ", "Toronto", "Ontário", "Canadá", "América do Norte"),
("Aeroporto Internacional de Munique", "MUC", "Munique", "Baviera", "Alemanha", "Europa"),
("Aeroporto Internacional de Changi", "SIN", "Cingapura", "Cingapura", "Cingapura", "Ásia"),
("Aeroporto Internacional de Madrid-Barajas", "MAD", "Madrid", "Madrid", "Espanha", "Europa"),
("Aeroporto Internacional de São Francisco", "SFO", "São Francisco", "Califórnia", "Estados Unidos", "América do Norte"),
("Aeroporto Internacional de Moscovo Sheremetyevo", "SVO", "Moscovo", "Moscovo", "Rússia", "Europa"),
("Aeroporto Internacional de Cairo", "CAI", "Cairo", "Cairo", "Egito", "África"),
("Aeroporto Internacional de Johannesburg", "JNB", "Joanesburgo", "Gauteng", "África do Sul", "África"),
("Aeroporto Internacional de Buenos Aires Ministro Pistarini", "EZE", "Buenos Aires", "Buenos Aires", "Argentina", "América do Sul"),
("Aeroporto Internacional de Kuala Lumpur", "KUL", "Kuala Lumpur", "Selangor", "Malásia", "Ásia");
 
INSERT INTO voos(data_saida, data_chegada,aeroporto_id_decolagem,aeroporto_id_destino,empresa_id,numero_passageiros,assentos_disponiveis,carga,aeronave_id) VALUES
("2025-03-12 08:30", "2025-03-12 10:30", 1, 2, 1, 150, 12, 20000, 1),
("2025-03-12 09:00", "2025-03-12 11:00", 2, 3, 2, 175, 5, 25000, 2),
("2025-03-13 10:00", "2025-03-13 12:00", 3, 4, 3, 200, 20, 30000, 3),
("2025-03-13 11:30", "2025-03-13 13:30", 4, 5, 4, 180, 10, 22000, 4),
("2025-03-14 07:45", "2025-03-14 09:45", 5, 6, 5, 160, 30, 15000, 5),
("2025-03-14 08:00", "2025-03-14 10:00", 6, 7, 6, 100, 60, 30000, 6),
("2025-03-15 14:00", "2025-03-15 16:00", 7, 8, 7, 250, 50, 40000, 7),
("2025-03-15 15:30", "2025-03-15 17:30", 8, 9, 8, 120, 15, 18000, 8),
("2025-03-16 09:00", "2025-03-16 11:00", 9, 10, 9, 140, 10, 22000, 9),
("2025-03-16 10:30", "2025-03-16 12:30", 10, 11, 10, 180, 30, 27000, 10),
("2025-03-17 06:30", "2025-03-17 08:30", 11, 12, 11, 210, 5, 23000, 1),
("2025-03-17 07:15", "2025-03-17 09:15", 12, 13, 2, 300, 40, 35000, 2),
("2025-03-18 13:00", "2025-03-18 15:00", 13, 14, 3, 130, 50, 20000, 3),
("2025-03-18 14:00", "2025-03-18 16:00", 14, 15, 4, 150, 20, 25000, 4),
("2025-03-19 11:30", "2025-03-19 13:30", 15, 16, 5, 180, 25, 30000, 5),
("2025-03-19 12:00", "2025-03-19 14:00", 16, 17, 6, 120, 10, 15000, 6),
("2025-03-20 08:00", "2025-03-20 10:00", 17, 18, 7, 200, 30, 40000, 7),
("2025-03-20 09:30", "2025-03-20 11:30", 18, 19, 8, 250, 15, 22000, 8),
("2025-03-21 13:00", "2025-03-21 15:00", 19, 10, 9, 140, 5, 18000, 9),
("2025-03-21 14:30", "2025-03-21 16:30", 10, 1, 11, 160, 35, 25000, 10),
("2025-03-22 10:00", "2025-03-22 12:00", 1, 2, 1, 170, 10, 30000, 1),
("2025-03-22 11:00", "2025-03-22 13:00", 2, 3, 2, 180, 15, 20000, 2),
("2025-03-23 07:30", "2025-03-23 09:30", 3, 4, 3, 200, 25, 35000, 3),
("2025-03-23 08:00", "2025-03-23 10:00", 4, 5, 4, 150, 30, 27000, 4),
("2025-03-24 12:00", "2025-03-24 14:00", 5, 6, 5, 250, 5, 40000, 5),
("2025-03-24 13:30", "2025-03-24 15:30", 6, 7, 6, 130, 50, 22000, 6),
("2025-03-25 10:30", "2025-03-25 12:30", 7, 8, 7, 300, 20, 35000, 7),
("2025-03-25 11:00", "2025-03-25 13:00", 8, 9, 8, 170, 10, 18000, 8),
("2025-03-26 09:30", "2025-03-26 11:30", 9, 10, 9, 180, 40, 25000, 9),
("2025-03-26 10:00", "2025-03-26 12:00", 10, 1, 10, 150, 25, 20000, 10);
 
select * from aeroportos;
select * from empresas;
select * from aeronaves;
select * from voos;
 
UPDATE empresas
SET nome_empresa = "TAM"
WHERE nome_empresa = "LATAM";
 
UPDATE aeroportos
SET sigla_aeroporto = "GIU"
WHERE sigla_aeroporto = 'GRU';
 
UPDATE aeronaves
SET modelo = 'MCdonnell Douglas MD-11'
WHERE modelo = 'MCdonnell Douglas MD-80';
 
UPDATE voos 
SET 
    assentos_disponiveis = 0
WHERE
    assentos_disponiveis = 5;
 
DELETE FROM empresas WHERE nome_empresa = "%Latam%";
DELETE FROM aeroportos WHERE nome = "Aeroporto Internacional de Los Angeles";
DELETE FROM aeronaves WHERE modelo = "Boeing 777-200";
DELETE FROM voos WHERE assentos_disponiveis = 0;
 
SELECT numero_passageiros as "Número de passageiros",assentos_disponiveis AS "assentos disponiveis",  round(numero_passageiros / (assentos_disponiveis+numero_passageiros) * 100 , 2) AS 'porcentagem de assentos', round(carga ,2)
FROM voos;
 
 