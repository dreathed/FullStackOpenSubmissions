const PhoneForm = (props) => {
    return (
        <form>
          <div>
            name: <input onChange={props.handleInputChange} value={props.newName}/>
          </div>
          <div>
            number: <input onChange={props.handleNumberChange} value={props.newNumber}/>
          </div>
          <div>
            <button type="submit" onClick={props.handleSubmit}>add</button>
          </div>
        </form>
    )
  }

  export default PhoneForm