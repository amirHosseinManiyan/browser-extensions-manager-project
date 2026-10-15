import "./Extension.css";

export default function Extension({ extension, onRemove, onToggle }) {
   return(
      <article className="extension">
         <div className="extension-info">
            <img src={extension["logo"]} className="extension-logo" alt={`${extension["name"]} logo`} />

            <div>
               <h3 className="extension-name">{extension["name"]}</h3>
               <p className="extension-description">{extension["description"]}</p>
            </div>
         </div>

         <div className="extension-actions">
            <button className="remove-extension-btn"
               onClick={() => onRemove(extension["id"])}
            >
               Remove
            </button>

            <label className="switch">
              <input type="checkbox" 
               checked={extension["isActive"]}
               onChange={() => onToggle(extension["id"])} 
            />
              <span className="slider"></span>
            </label>
         </div>
      </article>
   );
}