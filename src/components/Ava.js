import React, { useRef, useEffect } from "react";

function Ava({ username, size }) {
    const  getRandomColor= () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
    
      const getInitials = (name) => {
        let initials;
        const nameSplit = name.split(" ");
        const nameLength = nameSplit.length;
        if (nameLength > 1) {
            initials =
                nameSplit[0].substring(0, 1) +
                nameSplit[nameLength - 1].substring(0, 1);
        } else if (nameLength === 1) {
            initials = nameSplit[0].substring(0, 1);
        } else return;
    
        return initials.toUpperCase();
    }

  return (
    <>
      {/* <div className="flex justify-center2 items-center">
        <div
          className={` border  rounded-full text-sm text-center text-white font-semibold uppercase`}
          style={{
            background: getRandomColor(),
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          {getInitials(username)}
        </div>
      </div> */}
      <div
        className=" sb-avatar sb-avatar--text"
        style={{ 
            display: 'inline-block', 
            verticalAlign: 'middle', 
            width: '30px', 
            height: '30px', 
            borderRadius: '100%', 
            fontFamily: 'Helvetica, Arial, sans-serif',
        }}
      >
        <div
          className=" sb-avatar__text"
          style={{
            width: '45px', 
            height: '45px', 
            lineHeight: 'initial', 
            textAlign: 'center',
            color: 'rgb(255, 255, 255)', 
            borderRadius: '100%', 
            // background: 'rgb(126, 55, 148)', 
            background: getRandomColor()
          }}
          title="Selena gomes"
        >
          <div 
          style={{
            display: 'table', 
            tableLayout: 'fixed', 
            width: '100%',
            height: '100%', 
            fontSize: '15px' 
            }}
        >
            <span style={{
                display: 'table-cell', 
                verticalAlign: 'middle', 
                whiteSpace: 'nowrap', }}>
              <span>{getInitials(username)}</span>
              
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ava;
