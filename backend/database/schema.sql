--
CREATE TABLE methods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    method VARCHAR(25) NOT NULL
);

INSERT INTO methods(method) VALUES ("traine");
INSERT INTO methods(method) VALUES ("leurre");
INSERT INTO methods(method) VALUES ("appat");
INSERT INTO methods(method) VALUES ("bord");
INSERT INTO methods(method) VALUES ("plongee");

CREATE TABLE fishs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    weight DECIMAL(5,1) NOT NULL,
    picture VARCHAR(255) NOT NULL,
    alt VARCHAR(25) NOT NULL,
    year DECIMAL(10) NOT NULL,
    method_id INT,
    FOREIGN KEY (method_id) REFERENCES methods(id)
);

INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("tassergale",3,"../../frontend/src/assets/1.jpg","tassegale",2023,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("seriole",15,"../../frontend/src/assets/2.jpg","seriole",2023,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("denti",6,"../../frontend/src/assets/3.jpg","denti",2023,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("tassergale",3,"../../frontend/src/assets/4.jpg","tassergale",2023,2);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("loup",5,"../../frontend/src/assets/5.jpg","loup",2022,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("seriole",13,"../../frontend/src/assets/6.jpg","seriole",2021,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("pelamide",3,"../../frontend/src/assets/7.jpg","pelamide",2021,2);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("loup",6,"../../frontend/src/assets/8.jpg","loup",2023,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("seriole",11,"../../frontend/src/assets/9.jpg","seriole",2021,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("liche",14,"../../frontend/src/assets/10.jpg","seriole",2022,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("seriole",16,"../../frontend/src/assets/11.jpg","seriole",2022,1);
INSERT INTO fishs(name,weight,picture,alt,year,method_id) VALUES ("daurade",3,"../../frontend/src/assets/12.jpg","daurade",2023,3);
