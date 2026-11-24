import { useState } from "react"
import "./../styles/createTaskForm.css"

const CreateTaskForm = ({icon , tasks , setTasks , setTask, setEnCour , setUrgent}) => {
      const date = new Date()
      const [ formData , setFormData ] = useState(
        {
            title : "",
            referenceCode : "",
            regime : "import",
            priority : "normal",
            notes : "",
            completed : false,
            date: new Date().toISOString().split("T")[0]
        }
      )

      const [ error , setError ] = useState({
        title : "",
        referenceCode : "",
      })

      const [ priority , setPriority ] = useState("normal")
      const [ showNotes , setShowNotes ] = useState(false)

      const handleAddTask = () => {
        let check = 0
        // Vérifier les valeurs de title.
        if( typeof formData.title !== "string" ) {
           setError({
            ...error,
            title : "Valeur string uniquement."
          })
          check++
        }
        else if( formData.title === "" || formData.title.trim() === "" ){
          setError({
            ...error,
            title : "Ce champ est obligatoire."
          })
          console.log("yes")
          check++
        }
        else if( formData.title.trim().length < 3 || formData.title.trim().length > 120) {
          setError({
            ...error,
            title : "Entre 3 et 120 caractères."
          })
          check++
        }

        // Vérifier les valeurs de referenceCode.
        if( typeof formData.referenceCode !== "string" ) {
           setError({
            ...error,
            referenceCode : "Valeur string uniquement."
          })
          console.log("yes")
          check++
        }
        else if(formData.referenceCode.trim().length > 0) {
          const cleanReferenceCode = formData.referenceCode.trim().toUpperCase();
          const pattern = /^[A-Z0-9/-]{3,30}$/;
          if (!pattern.test(cleanReferenceCode)) {
             setError({
              ...error,
              referenceCode : "Uniquement lettres (A-Z), chiffres, - ou / (3-30 caractères)."
            })
            check++
          } 
          else {
            setFormData({
              ...formData,
              referenceCode: cleanReferenceCode,
            });
          }
        }

        if(check > 0) {
          console.log(check)
          check = 0
          return
        }

        const copy = [
          ...tasks,
          {
            title : formData.title,
            referenceCode : formData.referenceCode,
            regime : formData.regime,
            priority : formData.priority,
            notes : formData.notes,
            completed : formData.completed,
            date : formData.date
          }
        ]
        setTasks([copy])

        localStorage.removeItem("tasks")  
        localStorage.setItem("tasks",JSON.stringify(copy))
        
        setTask(copy.length)

        setEnCour(copy.filter(element => element.completed == false).length)
        setUrgent(copy.filter(element => element.priority == "urgent").length)

        setFormData({
          title : "",
          referenceCode : "",
          regime : "import",
          priority : "normal",
          notes : "",
          completed : false
        })
      }

      return (
        <>
          <div className="card-add">
            <div className="tite-card-add">
              <div className="cercle"></div>
              <div className="title"> Ajouter une tâche ou info douane </div>
            </div>

            <div className="input-box">
              <span>
                <input type="text" className="task-form__input task-form__field--wide" placeholder="Ex. : Vérifier EUR.1, visite à quai..."
                value={formData.title}
                onChange={(e) => {
                  setFormData( { ...formData, title : e.target.value } )
                  setError( { ...error, title : "" } )
                }}
                />
                {error.title && <span className="error"> {error.title} </span>}
              </span>
              <span>
                <input type="text" className="task-form__input task-form__field--compact" placeholder="Réf. DUM ou N° BL (optionnel)" 
                value={formData.referenceCode}
                onChange={(e) => {
                  setFormData( { ...formData, referenceCode : e.target.value } )
                  setError( { ...error, referenceCode : "" } )
                }}
                />
                {error.referenceCode && <span className="error"> {error.referenceCode} </span>}
              </span>
            </div>

            <div className="task-form__actions">
              <div className="task-form__controls">
                <select name="" id="" className="regime-select" value={formData.regime} onChange={(e) => setFormData({...formData,regime:e.target.value})}>
                  <option value="import"> Régime : Import </option>
                  <option value="export"> Régime : Export </option>
                  <option value="at"> Régime : AT (Adm. Temp.) </option>
                  <option value="mainlevée"> Étape : Mainlevée </option>
                  <option value="documentation"> Docs / Factures </option>
                </select>

                <div className="priority-toggle">
                  <button className={ priority === "normal" ? "priority-toggle__btn priority-toggle__btn-normal" : "priority-toggle__btn" } onClick={() => {
                    setPriority("normal")
                    setFormData({...formData,priority : "normal"})
                  }}> Normal </button>
                  <button className={ priority === "urgent" ? "priority-toggle__btn priority-toggle__btn-urgent" : "priority-toggle__btn" } onClick={() => {
                    setPriority("urgent")
                    setFormData({...formData,priority : "urgent"})
                  }}> Urgent </button>
                </div>

                <button className={showNotes ? "task-form__extra-btn task-form__extra-btn-blue" : "task-form__extra-btn"} onClick={() => setShowNotes(!showNotes)}>
                  {icon} {showNotes ? "Masquer Infos" : "+ Infos / Code SH"}
                </button>
              </div>

              <button className="btn-primary" onClick={() => handleAddTask()}> + Enregistrer </button>
            </div>

            {showNotes && <div className="border-line"></div>}

            {showNotes && <textarea name="" className="info-area" placeholder="Notes importantes à garder : Code SH, nom du client, numéro conteneur, contact inspecteur ou remarque BADR..." value={formData.notes} onChange={(e) => setFormData({...formData,notes:e.target.value})}>
            </textarea>
            }
          </div>
        </>
    )
}

export default CreateTaskForm