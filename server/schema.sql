drop database if exists chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE userName (
  userNameId Integer NOT NULL AUTO_INCREMENT,
  user varchar(20),
  PRIMARY KEY (userNameId)
  
);

CREATE TABLE message (
  messageId Integer NOT NULL AUTO_INCREMENT,
  messageText varchar(255),
  roomName varchar(20),
  userNameId Integer,
  
  PRIMARY KEY (messageId),
  FOREIGN KEY (userNameId) REFERENCES userName(userNameId)
  
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

