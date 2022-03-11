import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
function AddAcount() {
  const [name, setName] = useState(' ');
  const [password, setPassword] = useState(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 3;
    const customer = { name, password, id };
    fetch("/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer)
    }).then(() => {
      console.log("new customer added.");
    })
  }

  return (
    <div className="AddAcount">
      <Navbar />
      <div className="container loginWrap">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <main className="form-signin">
              <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Pridajte konto</h1>

                <div className="form-floating">
                  <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                  <label>Prihlasovacie meno</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                  <label>Heslo</label>
                </div>

                <div className="checkbox mb-3">
                  <label>Potvrďte tlačidlom pridať</label>
                </div>
                <button className="w-100 btn btn-lg btn-danger" type="submit">Pridať</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2021–2022</p>
              </form>
            </main>
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </div>

    </div>
  );
}

export default AddAcount;