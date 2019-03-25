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

                {/* Pull dropdown from API here. Possibly a select instead of an input*/}
                <div class="form-group">
                    <label for="exampleFormControlInput1">Medications</label>
                    <input type="age" class="form-control" id="exampleFormControlInput1" placeholder="21">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Pre-existing Conditions</label>
                    <input type="preExistingConditions" class="form-control" id="exampleFormControlInput1" placeholder="Diabetes">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Allergies</label>
                    <input type="allergies" class="form-control" id="exampleFormControlInput1" placeholder="Penicillin">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Surgeries</label>
                    <input type="surgeries" class="form-control" id="exampleFormControlInput1" placeholder="Transplant">
                </div>

                {/* Pull dropdown from docs db to populate. */}
                <div class="form-group">
                    <label for="exampleFormControlInput1">Physician</label>
                    <input type="doctor" class="form-control" id="exampleFormControlInput1" placeholder="21">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Amount Due</label>
                    <input type="bill" class="form-control" id="exampleFormControlInput1" placeholder="300.00">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Next Appointment</label>
                    <input type="nxtappt" class="form-control" id="exampleFormControlInput1" placeholder="01/01/2020">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="john.doe@gmail.com">
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Phone Number</label>
                    <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="555-555-5555">
                </div>



  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
</div>
    )
}
