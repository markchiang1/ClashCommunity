import React from "react";

export const Input = props => (
  <div className="form-group">
Username:
    <input className="form-control" {...props} />
Password:
    <input className="form-control" {...props} />
Game name:    
    <input className="form-control" {...props} />
Rank:
    <input className="form-control" {...props} />
Role:
    <input className="form-control" {...props} />

Do you want to be captian?
<input className="form-control" type='radio' name="captian" value='Yes' {...props} />
<input className="form-control" type='radio' name="captian" value='No' {...props} />

</div>

  
);
