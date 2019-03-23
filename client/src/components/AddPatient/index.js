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
                    <label for="exampleFormControlSelect1">Gender</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Height in Inches</label>
                    <input type="height" class="form-control" id="exampleFormControlInput1" placeholder="60">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Weight in Lbs</label>
                    <input type="weight" class="form-control" id="exampleFormControlInput1" placeholder="180">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Heartrate</label>
                    <input type="heartrate" class="form-control" id="exampleFormControlInput1" placeholder="75">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Blood Pressure</label>
                    <input type="bloodpressure" class="form-control" id="exampleFormControlInput1" placeholder="110/83">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Medications</label>
                    <input type="age" class="form-control" id="exampleFormControlInput1" placeholder="21">
                </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
</div>
    )
}
