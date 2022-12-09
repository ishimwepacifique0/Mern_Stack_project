const pool= require('../database/index')
const postcontroller = {
    getAll: async (req,res) =>{
        try{
            const [rows,field] =  await pool.query('select * from data')
            res.json(rows)
        }

        catch(erro){
              console.log(erro)
        }

    },
    getIdAll: async  (req,res) =>{
        try{
            const { id } = req.params
            const[rows,field] = await pool.query('select * from data where id = ?',[id])
            res.json(rows)
        } catch(error){
            console.log(error)
        }

    },
    savedata: async (req,res) =>{
        try{
            const {name,age,phonenumber,email} = req.body
            const sql  = 'insert into data(name,age,phonenumber,email) values(?,?,?,?)'
            const [rows,field] = await pool.query(sql,[name,age,phonenumber,email])
            res.json(rows)
        }catch(error){
            console.log(error)
        }
    },
    edit: async (req,res) =>{
        try{
           const { id } = req.params
           const { name,age,phonenumber,email} = req.body
           const sql = 'update data set name = ?,age = ?,phonenumber = ?,email = ? where id = ?'
           const [rows,field] = await pool.query(sql,[name,age,phonenumber,email,id]) 
           res.json(rows)
        }catch(error){
            console.log(error)
        }
    },
    delete: async (req,res)=>{
        try{
            const { id } = req.params
            const sql = 'delete from data where id = ?'
            const [rows,field] = await pool.query(sql,[id])
            res.json(rows) 

        }catch(error){
            console.log(error)
        }
    }

}

module.exports = postcontroller