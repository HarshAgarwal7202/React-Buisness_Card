import React from "react";
const Button = (props) => {
  const myStyle = {
    backgroundColor: props.bgcolor,
    color: props.textcolor,
  };
  return (
    <div className="btn">
      <button style={myStyle}>
        <img
          style={{
            resizeMode: "cover",
            height: 15,
            width: 15,
          }}
          src={props.imgshow}
          alt=""
        />
        {props.text}
      </button>
    </div>
  );
};
export default Button;
