create table notes(
    id integer primary key generated by default as identity, 
    "name" text not null, 
    modified TIMESTAMP default NOW(), 
    "folderId" INTEGER REFERENCES folders(id) ON DELETE CASCADE, 
    content text not null
);