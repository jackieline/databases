-- CREATE DATABASE chat;

USE chat;


CREATE TABLE roomName (
  roomNameId Integer NOT NULL AUTO_INCREMENT,
  room varchar(20),
  PRIMARY KEY (roomNameId)
  
);

CREATE TABLE userName (
  userNameId Integer NOT NULL AUTO_INCREMENT,
  user varchar(20),
  PRIMARY KEY (userNameId)
  
);

CREATE TABLE message (
  messageId Integer NOT NULL AUTO_INCREMENT,
  messageText varchar(255),
  timeSent timestamp,
  roomNameId Integer,
  userNameId Integer,
  
  PRIMARY KEY (messageId),
  FOREIGN KEY (roomNameId) REFERENCES roomName(roomNameId),
  FOREIGN KEY (userNameId) REFERENCES userName(userNameId)
  
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

