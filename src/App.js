import logo from './logo.svg';
import './Bootstrap.css';
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from 'react';
import firebase from './util/firebase'

// console.log(mangga)
function App() {
     // Hooks
    const [total_mangga, setTotalMangga] = useState(0)
    const [mangga, setMangga] = useState([])
    const [total_mangga_matang, setTotalManggaMatang] = useState(0)
    const [total_mangga_belum, setTotalManggaBelum] = useState(0)


    // realtime db
    useEffect(() => {
        const db = getDatabase()
        const dataRef = ref(db, 'result')
        onValue(dataRef, (snapshot) => {
            setMangga(snapshot.val())
            setTotalMangga(snapshot.val().length)
            let jml_matang = 0
            let jml_belum = 0
            snapshot.val().map(v => {
                if(v.Mutu === 'Matang'){
                    jml_matang += 1
                }else{
                    jml_belum += 1
                }
                return 0
            })
            setTotalManggaMatang(jml_matang)
            setTotalManggaBelum(jml_belum)
        })
    },[])
    
    
  
  
  return (
    <div className="container" style={{marginTop: 100}}>
        <center>
            <div className="row">
                <div className="col-lg-6 ml-4 mr-4 mb-3">
                    <div className="card bg-success text-white">
                        <div className="card-body konten">
                            <span className="center">
                                <h1 style={{fontSize: 100}}>{total_mangga_matang}</h1>
                            </span>
                        </div>
                        <div className="card-footer">
                            Matang
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ml-4 mr-4 mb-3">
                    <div className="card bg-danger text-white">
                        <div className="card-body konten">
                            <span className="center">
                                <h1 style={{fontSize: 100}}>{total_mangga_belum}</h1>
                            </span>
                        </div>
                        <div className="card-footer">
                            Belum matang
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 ml-4 mr-4 mb-3">
                    <div className="card bg-info text-white">
                        <div className="card-body konten">
                            <span className="center">
                                <h1 style={{fontSize: 100}}>{total_mangga}</h1>
                            </span>
                        </div>
                        <div className="card-footer">
                            Total Mangga
                        </div>
                    </div>
                </div>
            </div>
        </center>
      </div>
  );
}

export default App;
