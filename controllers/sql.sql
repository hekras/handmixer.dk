
DROP TABLE scdata;

CREATE TABLE scdata (
user varchar(255) NOT NULL,
datestamp varchar(255) NOT NULL,
activity int,
CONSTRAINT PK_scdata PRIMARY KEY (user,datestamp)
);


DROP TABLE scactivities;

CREATE TABLE scactivities (
user varchar(255) NOT NULL,
pos int NOT NULL,
fg varchar(255),
bg varchar(255),
fs varchar(255),
txt varchar(255),
CONSTRAINT PK_scactivities PRIMARY KEY (user,pos)
);
