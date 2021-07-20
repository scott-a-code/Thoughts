DROP TABLE IF EXISTS thoughts;

CREATE TABLE thoughts(
    id serial,
    title varchar(100) NOT NULL,
    pseudonym varchar(100) NOT NULL,
    post_body varchar(500) NOT NULL
);