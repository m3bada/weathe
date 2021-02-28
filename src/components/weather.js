import React from 'react';


const Weather = (props) => {
    return (
        <div className="info">
            {
                props.tempreature &&
                <p className="info_key"> tempreature =
                <span className="info_value"> { props.tempreature - 273 } c ْ</span>
                </p>
            }
            {
                props.tempreature &&
                <p className="info_key"> city =
                <span className="info_value"> {props.city} </span>
                </p>
            }
            {
                props.tempreature &&
                <p className="info_key"> country =
                 <span className="info_value"> {props.country} </span>
                </p>
            }
            {
                props.tempreature &&
                <p className="info_key"> humidity =
                <span className="info_value"> {props.humidity} </span>
                </p>
            }
            {
                props.tempreature &&
                <p className="info_key"> description =
                <span className="info_value"> {props.description} </span>
                </p>
            }


        </div>
    )

}
export default Weather 