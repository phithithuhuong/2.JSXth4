import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// curDate sẽ lưu trữ thời gian hiện tại
// let curDate = new Date();
//
// // Lấy giờ hiện tại
// let hours = curDate.getHours();
// console.log(hours);
//
// // Lấy phút hiện tại
// let minutes = curDate.getMinutes() + 1;
// console.log(minutes);
//
// // Lấy giây hiện tại
// let seconds = curDate.getSeconds();
// console.log(seconds);
const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = () => {
    root.render(
        <div>
            <center>
                <h1>Welcome, this is time now !</h1>
                <h4>It is {new Date().toLocaleTimeString()}.</h4>
            </center>
        </div>
    );
};

setInterval(tick, 1000);