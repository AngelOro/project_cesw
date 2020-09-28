CREATE TABLE tbl_usuarios (
  id_usuarios      int(11)     unsigned NOT NULL AUTO_INCREMENT,
  usuario   varchar(30)  not null,
  clave    varchar(50)  not null,
  constraint pk_usuarios PRIMARY KEY (id_usuarios)
);

INSERT INTO tbl_usuarios (usuario, clave) 
     VALUES ('edwar', '12345'),
			('esteban', '1234'), 
            ('angelica',  '123456');

create table tbl_marcas_vehiculos(
id_marca integer not null,
descripcion varchar(50) not null,
constraint pk_marca primary key (id_marca)
);

create table tbl_tipos_vehiculos(
	id_tipo integer not null,
    descripcion varchar(70) not null,
    constraint pk_tipo_vehiculo primary key (id_tipo)
);

create table tbl_tipos_consumos(
	id_consumo integer not null,
    descripcion varchar(80) not null,
    constraint pk_tipo_consumo primary key (id_consumo)
);

create table tbl_ciudades(
	id_ciudad integer not null,
    descripcion varchar(60) not null,
    constraint pk_ciudad primary key (id_ciudad)
);

create table tbl_estados(
	id_estado integer not null,
    descripcion varchar(50) not null,
    constraint pk_estado primary key (id_estado)
);

create table tbl_productos(
	id_producto  integer NOT NULL AUTO_INCREMENT,
    nombre_producto varchar(70) not null,
    referencia varchar(90) not null,
    descripcion varchar(150) not null,
    constraint pk_producto primary key (id_producto)
);

create table tbl_conductores (
	identificacion varchar(15) not null,
	nombre varchar(60) not null,
	primer_apellido varchar(30) not null,
	segundo_apellido varchar(30) ,
	telefono_contacto varchar(15) not null,
	fecha_nacimiento date not null,
	licencia_conduccion varchar(30) not null,
	constraint pk_identificacion primary key (identificacion)
);

create table tbl_vehiculos(
	id_vehiculo integer(11)  NOT NULL AUTO_INCREMENT,
    placa varchar(20) not null,
    matricula varchar(20) not null,
    r_trailer varchar(20) ,
    capacidad varchar(20) not null,
    fecha_soat date not null,
    fecha_poliza date not null,
    modelo varchar(10) not null,
    id_marca integer not null, 
	id_tipo integer not null,
    id_estado integer not null,
    constraint pk_vehiculo primary key (id_vehiculo),
    constraint fk_marca foreign key (id_marca) references tbl_marcas_vehiculos(id_marca),
    constraint fk_tipo_vehiculo foreign key (id_tipo) references tbl_tipos_vehiculos(id_tipo),
    constraint fk_estado foreign key (id_estado) references tbl_estados(id_estado)
);

create table tbl_consumo_vehiculo(
	id_detalle_consumo integer  NOT NULL AUTO_INCREMENT,
    id_consumo integer,
    vehiculo integer,
    fecha_consumo date not null,
    valor_consumo integer not null,
    constraint pk_detalle_consumo primary key (id_detalle_consumo),
    constraint fk_tipo_consumo foreign key (id_consumo) references tbl_tipos_consumos(id_consumo),
    constraint fk_vehiculo_consumo foreign key (vehiculo) references tbl_vehiculos(id_vehiculo)
);

create table tbl_vehiculo_asignado (
	id_vehiculo_asignado integer NOT NULL AUTO_INCREMENT,
	id_vehiculo integer, 
	id_conductor varchar(15),
	fecha_asignacion date not null,
	constraint pk_id_vehiculo_asignado primary key (id_vehiculo_asignado),
    constraint fk_id_vehiculo foreign key (id_vehiculo)  references tbl_vehiculos(id_vehiculo),
    constraint fk_id_conductor foreign key (id_conductor) references tbl_conductores(identificacion)
);

create table tbl_envios(
	id_envio integer NOT NULL AUTO_INCREMENT,
    fecha_inicio date not null,
    fecha_fin date,
    valor_envio varchar(20) not null,
    id_vehiculo integer not null,
    id_estado integer not null,
    id_origen integer not null,
    id_destino integer not null,
    constraint pk_envio primary key (id_envio),
    constraint fk_vehiculo foreign key (id_vehiculo) references tbl_vehiculo_asignado(id_vehiculo_asignado),
    constraint fk_estado_envio foreign key (id_estado) references tbl_estados(id_estado),
    constraint fk_origen foreign key (id_origen) references tbl_ciudades(id_ciudad),
    constraint fk_destino foreign key (id_destino) references tbl_ciudades(id_ciudad)
);

create table tbl_detalle_producto(
id_detalle integer NOT NULL AUTO_INCREMENT,
id_producto integer,
id_envio integer,
cantidad integer not null,
numero_lote varchar(20) not null,
constraint pk_id_detalle primary key (id_detalle),
constraint fk_id_producto foreign key (id_producto) references tbl_productos(id_producto),
constraint fk_id_envio foreign key (id_envio) references tbl_envios (id_envio)
);

CREATE TABLE tbl_usuarios (
  id_usuarios      int(11)     unsigned NOT NULL AUTO_INCREMENT,
  usuario   varchar(30)  not null,
  clave    varchar(50)  not null,
  constraint pk_usuarios PRIMARY KEY (id_usuarios)
);


INSERT INTO tbl_usuarios (usuario, clave) 
     VALUES ('edwar', '12345'),
			('esteban', '1234'), 
            ('angelica',  '123456');


insert into tbl_estados values(1, "Activo");
insert into tbl_estados values(2, "Inactivo");
insert into tbl_estados values(3, "En proceso");
insert into tbl_estados values(4, "Entregado");


insert into tbl_marcas_vehiculos values (1, "KENWORTH");
insert into tbl_marcas_vehiculos values (2, "MACK");
insert into tbl_marcas_vehiculos values (3, "FREIGHTLINER");

insert into tbl_tipos_vehiculos values (1, "Carroceria");
insert into tbl_tipos_vehiculos values (2, "Remolque");
insert into tbl_tipos_vehiculos values (3, "Cisterna");
insert into tbl_tipos_vehiculos values (4, "Contenedor");

insert into tbl_vehiculos (placa, matricula, r_trailer, capacidad, fecha_soat, fecha_poliza, modelo, id_marca, id_tipo, id_estado)
 values ( "SAW-098", "873291JG", null, "17", sysdate(), sysdate(), "2015", 3, 2, 1),
 ( "HSJ-857", "621732JS", "R-6821", "12", sysdate(), sysdate(), "2009", 1, 3, 1),
 ( "JSA-892", "739214HJ", null, "26", sysdate(), sysdate(), "2019", 3, 2, 1),
 ( "SIW-972", "372479KI", "R-7974", "30", sysdate(), sysdate(), "2003", 2, 1, 2),
 ( "SWE-398", "7328142UH", "R-8976", "13", sysdate(), sysdate(), "2005", 1, 3, 2),
 ( "CIR-233", "789432IL", null, "25", sysdate(), sysdate(), "2017", 1, 4, 1);


INSERT INTO tbl_conductores(identificacion, nombre, primer_apellido, segundo_apellido, telefono_contacto,fecha_nacimiento,licencia_conduccion)
values (1040759456,"Juan Esteban","Olaya","Lopez",3058578770,sysdate(),"LCEJGFSOSN");

INSERT INTO tbl_conductores(identificacion, nombre, primer_apellido, segundo_apellido, telefono_contacto,fecha_nacimiento,licencia_conduccion)
values (9992964,"Diego Juan","Olaya","franco",3136262661,sysdate(),"OPFGSHK");

insert into tbl_envios (fecha_inicio,fecha_fin,valor_envio,id_vehiculo,id_estado,id_origen,id_destino)
values ('1995-01-29','2000-01-29', "3000",1,2,2,1);

insert into tbl_envios  (fecha_inicio,fecha_fin,valor_envio,id_vehiculo,id_estado,id_origen,id_destino)
values (2,sysdate(),sysdate(), "4000",2,1,1,2);

insert into tbl_ciudades values(1, "Medellin");
insert into tbl_ciudades values(2, "Bogota");
insert into tbl_ciudades values(3, "Cartagena");

insert into tbl_envios (fecha_inicio,fecha_fin,valor_envio,id_vehiculo,id_estado,id_origen,id_destino)
values ('1995-01-29','2000-01-29', "3000",1,2,2,1);

insert into tbl_envios  (fecha_inicio,fecha_fin,valor_envio,id_vehiculo,id_estado,id_origen,id_destino)
values (sysdate(),sysdate(), "4000",1,1,1,2);

select * from tbl_envios;

select * from tbl_vehiculo_asignado;

insert into tbl_vehiculo_asignado(id_vehiculo,id_conductor,fecha_asignacion) values (1,1040759456,sysdate());

select * from tbl_vehiculos;

select * from tbl_ciudades;

select * from tbl_estados;
select * from tbl_marcas_vehiculos;

SELECT * FROM tbl_conductores;

SELECT * FROM tbl_conductores where identificacion = 1040759456;

update tbl_conductores set identificacion