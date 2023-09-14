CREATE DATABASE libreria;

USE libreria;

-- Tabla libros
CREATE TABLE `libreria`.`libros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `autor` VARCHAR(45) NULL,
  `publicacion` INT NULL,
  `editorial` VARCHAR(45) NULL,
  `precio` INT NULL,
  PRIMARY KEY (`id`));

-- Insertar datos en la tabla librería
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('Cien a�os de soledad', 'Gabriel Garc�a M�rquez', '2021', 'Mayor', '100');
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('El peligro de estar cuerda', 'Rosa Montero', '2017', 'Sepan cuantos', '342');
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('A pesar de ti', 'Colleen Hoover', '2019', 'Sepan cuantos', '145');
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('El jard�n de las mariposas', 'Dot Hutchison', '2016', 'Sepan cuantos', '123');
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('Pura pasi�n', 'Annie Ernaux', '2021', 'Mayor', '123');
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('La verg�enza', 'Annie Ernaux', '2021', 'Macmillan', '323');
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('El acontecimiento', 'Annie Ernaux', '2021', 'Mayor', '214');
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('Mi polic�a', 'Bethan Roberts', '2022', 'Macmillan', '341');
INSERT INTO `libreria`.`libros` (`titulo`, `autor`, `publicacion`, `editorial`, `precio`) VALUES ('El lugar', 'Annie Ernaux', '2016', 'Sepan cuantos', '241');
