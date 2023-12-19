
import './Calendario.css'

function calendario() {
  const dias = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]

  return (
    <div className='container-calendario'>
      <div className="container-dias-calendario">
        {dias.map((dia, id) => (
          <div className='dias-calendario' key={id}>
            <label className='label-calendario' key={id} htmlFor={id}>
              <input type="checkbox" name={id} id={id} />
              <p className="checkbox-label">{dia}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default calendario