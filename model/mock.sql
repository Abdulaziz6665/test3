create database contacts;
create extension pgcrypto;


create table users (
    user_id int not null generated by default as identity primary key,
    user_username varchar(24) not null,
    user_password varchar(72) not null
);
create unique index users_uniq_idx on users (lower(user_username));

create table user_contacts (
    user_id int not null generated by default as identity primary key,
    user_username varchar(24) not null,
    user_phone varchar(24) not null,
    user_email varchar(32),
    contacts_id int not null references users (user_id)
);