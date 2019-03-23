import React from 'react';

function PatientForm({ children }) {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Patient Name</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John Doe">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Age</label>
                    <input type="age" class="form-control" id="exampleFormControlInput1" placeholder="21">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
</div>
    )
}
