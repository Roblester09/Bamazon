CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  Product_Name VARCHAR(45) NOT NULL,
  Department_Name VARCHAR(45) NOT NULL,
  Price INT NOT NULL,
  Stock_Quantity INT NOT NULL,
  PRIMARY KEY (id)
);