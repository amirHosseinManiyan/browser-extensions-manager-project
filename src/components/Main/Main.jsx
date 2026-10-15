import "./Main.css";
import Extension from "../Extension/Extension";
import { useState } from "react";
import { useEffect } from "react";

export default function Main() {
   const [extensions, setExtensions] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const response = await fetch("/data.json");
         const data = await response.json();
         setExtensions(data);
      }

      fetchData();
   }, []);

   function handleExtensionToggle(id) {
      setExtensions(
         extensions.map(extension => 
            extension["id"] === id
            ? {...extension, 
               "isActive": !extension["isActive"]
            } : extension
         )
      );
   }

   function handleExtensionRemove(id) {
      setExtensions(
         extensions.filter(extension => extension["id"] !== id)
      );
   }                                       

   // 0 -> All, 1 -> Active, 2 -> Inactive 
   const [filter, setFilter] = useState(0);

   return(
      <main className="main">
         <section className="main-header">
            <h1 className="main-title">Extensions List</h1>

            <div className="main-filters">
               <button
                  onClick={() => setFilter(0)}
                  className={filter === 0 ? "active-filter" : undefined}
               >
                  All
               </button>

               <button
                  onClick={() => setFilter(1)}
                  className={filter === 1 ? "active-filter" : undefined}
               >
                  Active
               </button>

               <button
                  onClick={() => setFilter(2)}
                  className={filter === 2 ? "active-filter" : undefined}
               >
                  Inactive
               </button>
            </div>
         </section>

         <section className="extensions">
            {
               extensions
               .filter(extension => {
                  if (filter === 1) {
                     return extension["isActive"];
                  } 
                  
                  else if (filter === 2) {
                     return !extension["isActive"];
                  }

                  return true;
               })
               .map(extension => (
                  <Extension
                     key={extension["id"]}
                     extension={extension}
                     onRemove={handleExtensionRemove}
                     onToggle={handleExtensionToggle}
                  />
               )) 

            }
         </section>
      </main>
   );
}