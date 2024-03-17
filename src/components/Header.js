function Header({toggleHandler,modeTitle}){
    console.log(modeTitle)
    return(

        <>
         <header >
         <h2>Shopster</h2>
         <button onClick={toggleHandler}>{modeTitle ? "Dark" : "Light"}  Mode</button>
         </header>
       
        
        </>
    )
}

export default Header