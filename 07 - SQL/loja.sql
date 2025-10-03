CREATE DATABASE lojaVirtual;
USE lojaVirtual;
 
CREATE TABLE clientes(
id_cliente INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE,
data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);
 
INSERT INTO clientes(nome, email) VALUES
('nicolas','nicolas@email.com'),
('carlos','carlos@email.com'),
('Joelson','Joelson@email.com');
 
SELECT nome,email FROM clientes;
 
UPDATE clientes
SET email = 'novo@email.com'
WHERE id_cliente = 2;
 
DELETE FROM clientes WHERE email = 'carlos@email.com';
 
CREATE TABLE pedidos(
id_pedido INT PRIMARY KEY AUTO_INCREMENT,
id_cliente INT,
valor_total DECIMAL(10,2),
data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP
);
 
INSERT INTO pedidos(id_cliente, valor_total) VALUES
(2, 200000.99),
(3, 1.99);
 
SELECT * FROM pedidos;
 
DROP TABLE clientes;
DROP DATABASE lojaVirtual;
 
select version();