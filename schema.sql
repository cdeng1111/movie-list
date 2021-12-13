/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS movies_all;;
CREATE DATABASE movies_all;
USE movies_all;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(250) NOT NULL,
  watch VARCHAR(25) NOT NULL
 );

