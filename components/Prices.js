import React, {useState} from 'react'


const initialState = {
   currency: 'USD'
};

const Prices = props => {  
    const [formData, setFormData] = useState(initialState);
    let data = props.bpi;
    const onChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
      return (
        <div>
          <ul className="list-group">
            <li className="list-group-item">
            Bitcoin rate for {data.bpi[formData['currency']].description} : 
          <span className="badge badge-primary">{data.bpi[formData['currency']].code}</span> 
          <strong>{data.bpi[formData['currency']].rate}</strong>
        </li>
          </ul>
          <br/>
          <select onChange={e => onChange(e)} className="form-control" name="currency">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
        </div>
      );
}
  
export default Prices;