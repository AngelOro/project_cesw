
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
	id_producto  integer not null,
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
	id_vehiculo integer not null,
    placa varchar(20) not null,
    matricula varchar(20) not null,
    r_trailer varchar(20) not null,
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
	id_detalle_consumo integer not null,
    id_consumo integer,
    id_vehiculo integer,
    fecha_consumo date not null,
    valor_consumo integer not null,
    constraint pk_detalle_consumo primary key (id_detalle_consumo),
    constraint fk_tipo_consumo foreign key (id_consumo) references tbl_tipos_consumos(id_consumo),
    constraint fk_vehiculo_consumo foreign key (id_vehiculo) references tbl_vehiculos(id_vehiculo)
);

create table tbl_vehiculo_asignado (
	id_vehiculo_asignado integer,
	id_vehiculo integer, 
	id_conductor varchar(15),
	fecha_asignacion date not null,
	constraint pk_id_vehiculo_asignado primary key (id_vehiculo_asignado),
    constraint fk_id_vehiculo foreign key (id_vehiculo)  references tbl_vehiculos(id_vehiculo),
    constraint fk_id_conductor foreign key (id_conductor) references tbl_conductores(identificacion)
);

create table tbl_envios(
	id_envio integer not null,
    fecha_inicio date not null,
    fecha_fin date,
    valor_envio varchar(20) not null,
    id_vehiculo integer not null,
    id_estado integer not null,
    id_origen integer not null,
    id_destino integer not null,
    constraint pk_envio primary key (id_envio),
    constraint fk_vehiculo foreign key (id_vehiculo) references tbl_vehiculos(id_vehiculo),
    constraint fk_estado_envio foreign key (id_estado) references tbl_estados(id_estado),
    constraint fk_origen foreign key (id_origen) references tbl_ciudades(id_ciudad),
    constraint fk_destino foreign key (id_destino) references tbl_ciudades(id_ciudad)
);

create table tbl_detalle_producto(

	id_detalle integer,
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

select * from  tbl_usuarios;
