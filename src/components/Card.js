import React from 'react';
import { Link } from 'react-router-dom';

const Card= ({classInfo}) => {

    const Genre = (genre) => {
        switch(genre) {
            case "B":
                return "Bachata";
            case "S":
                return "Salsa";
            default:
                return "";
        }
    }

    const Region = (region) => {
        switch(region) {
            case "HD":
                return "홍대";
            case "GN":
                return "강남";
            default:
                return "";
        }
    };

    const ClassType = (type) => {
        switch(type) {
            case "O":
                return "Open";
            default:
                return ""
        }
    };

    return (
        <div className="col-md-8 col-md-offset-2" >
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-auto d-lg-block" style={{background: 'lightgray'}}>
                    <Link to={{ pathname: '/Class', state: {classInfo} }}>
                        <img src={classInfo.image} width="200" height="250" style={{objectFit: 'cover'}}/>
                    </Link>
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">{Genre(classInfo.genre)}</strong>
                    <h3 className="mb-0">{classInfo.title}</h3>
                    <div className="mb-1 text-muted">
                        <span>{classInfo.startDate}</span>
                        &nbsp;~&nbsp;
                        <span>{classInfo.endDate}</span>
                        &nbsp;({classInfo.dateDesc})
                    </div>
                    <div className="mb-1 text-muted">
                    <span>{classInfo.startTime}</span>
                        &nbsp;~&nbsp;
                        <span>{classInfo.endTime}</span>
                        &nbsp;({classInfo.timeDesc})
                    </div>
                <p className="card-text mb-auto">₩{classInfo.price}&nbsp;({classInfo.priceDesc})</p>
                </div>
            </div>
        </div>
    )
}

export default Card;