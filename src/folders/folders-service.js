const foldersService = {
    getAllFolders(knex){
        knex.select('*').from('folders')
    }, 
    getFolderById(knex, id){
        knex.select('*').from('folders').where({id})
    }, 
    addFolder(knex, folder){
        knex.into('folders').insert(folder)
    }
}