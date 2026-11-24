import "./../styles/createTaskForm.css"

const CreateTaskForm = ({icon}) => {
    return (
      <>
        <div className="card-add">
          <div className="tite-card-add">
            <div className="cercle"></div>
            <div className="title"> Ajouter une tâche ou info douane </div>
          </div>

          <div className="input-box">
            <input type="text" className="task-form__input task-form__field--wide" placeholder="Ex. : Vérifier EUR.1, visite à quai..."/>
            <input type="text" className="task-form__input task-form__field--compact" placeholder="Réf. DUM ou N° BL (optionnel)" />
          </div>

          <div className="task-form__actions">
            <div className="task-form__controls">
              <select name="" id="" className="regime-select">
                <option value="import"> Régime : Import </option>
                <option value="export"> Régime : Export </option>
                <option value="at"> Régime : AT (Adm. Temp.) </option>
                <option value="mainlevée"> Étape : Mainlevée </option>
                <option value="docs"> Docs / Factures </option>
              </select>

              <div className="priority-toggle">
                <button className="priority-toggle__btn"> Normal </button>
                <button className="priority-toggle__btn"> Urgent </button>
              </div>

              <button className="task-form__extra-btn">
                {icon} + Infos / Code SH
              </button>
            </div>

            <button className="btn-primary"> + Enregistrer </button>
          </div>

          <div className="border-line"></div>

          <textarea name="" className="info-area" placeholder="Notes importantes à garder : Code SH, nom du client, numéro conteneur, contact inspecteur ou remarque BADR..."></textarea>
        </div>
      </>
  )
}

export default CreateTaskForm