DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

USE departments_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name     VARCHAR(100) NOT NULL
);

CREATE TABLE roles (
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    

)