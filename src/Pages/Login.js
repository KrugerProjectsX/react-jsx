
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function Login(){
    const email = React.useRef('');
    const password = React.useRef('');
    const usersRef = collection(db, 'users');
    const login = async (e)=>{
       e.preventDefault();
       /**Realizar la conexion del email y constrasena son las correctas */
      const search = query(usersRef, where('email','==', email.current.value))
      const result = await getDocs(search);

      console.log(result)  
      if (result.docs.length > 0){
        const user = result.docs[0].data()
        if(user.password === password.current.value){
        console.log('Login Sucess')    
        console.log('Redirige')
       }else{
        console.log('Incorrect')
       }
      }      
   }
   return (
    
    <>
      <div>
        <h1>Login</h1>
      </div>
      <Box component="form" onSubmit={login} sx={{ p: 2, border: '1px dashed grey' }}>
      
      <TextField label='Email' inputRef={email}  className={'w-full my-4'} variant='outlined' type='Email'></TextField>
      <TextField label='Password' inputRef={password} className={'w-full my-4'} variant='outlined' type='Password'></TextField>
      <Button type='submit' variant='contained'>Login</Button>
      </Box>


    
    </>
    

   );

}