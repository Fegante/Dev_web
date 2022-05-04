CREATE TABLE PESSOA (
    id serial primary key,
    nome varchar(200),
    cpf varchar(11),
    cnpj varchar(11),
    telefone varchar(16),
    email varchar(100)
);


INSERT INTO PESSOA (nome, cpf, cnpj, telefone, email)
VALUES
  ('Rowan Gonzalez','66','7','1-779-681-3881', ''),
  ('Camille Mann','81','9','(393) 822-3385',''),
  ('Jacob Whitney','27','10','(768) 593-6262',''),
  ('Kevin Vang','21','2','(477) 503-0015',''),
  ('Yael Leon','60','8','(686) 737-1861',''),
  ('Amethyst Raymond','71','3','1-705-655-1091',''),
  ('Sebastian Mcgee','59','6','1-547-772-2834',''),
  ('Veda Fowler','76','6','1-645-322-6444',''),
  ('Peter Walker','44','1','1-238-883-7610',''),
  ('Shad Robles','63','9','(861) 348-3797','');


CREATE TABLE VENDEDOR (
  id_pessoa int not null,
  dataInicioContrato date not null,
  dataFimContrato date not null,

  CONSTRAINT fk_pessoa 
  FOREIGN KEY (id_pessoa)
  REFERENCES pessoa(id)
);

INSERT INTO VENDEDOR VALUES (1, '2022/04/03', '2022/05/03');
