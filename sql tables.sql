
CREATE DATABASE  buildPortfolio ;

use buildPortfolio;

CREATE TABLE users (
    ID int auto_increment,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    primary key(ID)
);

INSERT INTO `buildportfolio`.`users`  VALUES (default, 'Rivky Rizel', 'vvv', "123");
INSERT INTO `buildportfolio`.`users`  VALUES (default,'Rivky Schoen', 'zzzz', "54545645");

CREATE TABLE messages (
  msg_date timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name varchar(100),
  email varchar(100),
  message text,
  msg_subject text,
  answer tinyint(1) DEFAULT '0'
);

CREATE TABLE images (
  ID int auto_increment,
  base64Image TEXT,
  primary key(ID)
);

CREATE TABLE element_types (
	type int auto_increment,
	description varchar(255),
    primary key(type)
);

CREATE TABLE template_types (
	type int auto_increment,
	description varchar(255),
    primary key(type)
);

CREATE TABLE kind_of_site_types (
	type int auto_increment,
	description varchar(255),
    primary key(type)
);

CREATE TABLE websites(
	site_id int auto_increment,
	user_id int,
	site_name varchar(255),
    kind_of_site int,
    template int,
    primary key(site_id),
    foreign key (kind_of_site) references kind_of_site_types(type),
    foreign key (template) references template_types(type)
);


CREATE TABLE elements (
    auto_key int auto_increment,
    site_id int,
    element_type int,
    color varchar(255),
    size int,
    top int,
    position_left int  NOT NULL,
    element_id int,
    value text  NOT NULL,
    primary key(auto_key),
    foreign key (site_id) references websites(site_id),
	foreign key (element_type) references element_types(type)
);

CREATE TABLE image_elements (
    auto_key int auto_increment,
    site_id int,
    width int,
    height int,
    src longtext,
    primary key(auto_key),
    foreign key (site_id) references websites(site_id)
);

INSERT INTO `buildportfolio`.`element_types` (`description`) VALUES ('text');
INSERT INTO `buildportfolio`.`element_types` (`description`) VALUES ('single_image');

INSERT INTO `buildportfolio`.`template_types` (`description`) VALUES ('A');
INSERT INTO `buildportfolio`.`template_types` (`description`) VALUES ('B');
INSERT INTO `buildportfolio`.`template_types` (`description`) VALUES ('C');

INSERT INTO `buildportfolio`.`kind_of_site_types` (`description`) VALUES ('portfolio');
INSERT INTO `buildportfolio`.`kind_of_site_types` (`description`) VALUES ('blog');







