import React, {Suspense} from "react";

const withSuspense = (Component) => {
    return (props) => {
       return (
           <Suspense fallback={"Загрузка..."}>
               <Component {...props}/>
           </Suspense>
        )
    };
}

export  default  withSuspense;