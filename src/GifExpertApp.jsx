import { useState } from "react"
import { AddCategory,GifGrid } from "./components"



export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['Dragon ball'])
    
    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory))return
        //setCategories((col)=>['Valorant',...col]); se utiliza el callback de useState
        setCategories([newCategory,...categories]);
        //categories.push(newCategory);
    }
    
    return (
    <>

        <h1>GifExpertApp</h1>
        
            <AddCategory 
                
                onNewCategory = {event =>{onAddCategory(event)}}
            />
            
        
        
        
            {categories.map((category)=>(
                <GifGrid 
                    key={category} 
                    category ={category}
                />
                    
                ))
            }
        
               

    </>
  )
}
