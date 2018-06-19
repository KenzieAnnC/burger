drop database if exists burgers_db;

create database burgers_db;
use burgers_db;

create table burgers 
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(100) not null,
devoured boolean default false,
primary key (id)
);

