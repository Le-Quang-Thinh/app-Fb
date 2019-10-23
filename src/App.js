import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
    <div className="content">
      <p className="center">Hello</p>
    </div>
    <div className="menu">
    <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="true">áo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="true">quần</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="true">giỏ sách</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="true">mũ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="true">ảnh nền</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="true">giày</a>
        </li>
      </ul>
    </div>
    
    <div className="row col-sm-8 float-left">
      <div className="col-sm-3">
        <div className="card">
          <img src="true" alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" > </h5>
            <p className="cart-text" /> 
            <a href="true" className="btn btn-primary" ></a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="true" alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" > </h5>
            <p className="cart-text" /> 
            <a href="true" className="btn btn-primary" ></a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="true" alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" > </h5>
            <p className="cart-text" /> 
            <a href="true" className="btn btn-primary" ></a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <img src="true" alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" > </h5>
            <p className="cart-text" /> 
            <a href="true" className="btn btn-primary" ></a>
          </div>
        </div>
      </div>
    </div>
    <div className="background-manocanh row col-sm-2">
      <div className="manocanh" >
        <div className='row'>
          <div className="col-sm-10 border" style={{background:"&fff",height:"30rem"}}>
            <img src="true"></img>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
