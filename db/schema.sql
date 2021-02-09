DROP DATABASE IF EXISTS departments_DB;

CREATE DATABASE department_DB;

USE department_DB;

CREATE TABLE departments (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
    );
    
CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL, 
    department_id INT NOT NULL,
    PRIMARY KEY (id)
    );
    
CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
	manager_id INT NOT NULL,
    PRIMARY KEY (id)
    );