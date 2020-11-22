import React from 'react';

const ClassDetail= ({classInfo}) => {
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

    const ClassType = (type) => {
        switch(type) {
            case "O":
                return "Open";
            default:
                return ""
        }
    };

    let location = classInfo.location !== "" ? <li class="list-group-item">{classInfo.location}</li> : null;
    let discount = null;
    if(classInfo.discountOption != null) {
        discount = classInfo.discountOption.map((option) => {
            return (<li>{option}</li>);
        })
    }
    let account = classInfo.account !== "" ? <><li class="list-group-item">{classInfo.account}</li></> : null;
    let target = classInfo.target !== "" ? <li class="list-group-item">{classInfo.target}</li> : null;
    let etc = classInfo.etc != "" ? <li class="list-group-item">{classInfo.etc}</li> : null;
    let inquery = classInfo.inquery !== "" ? <li class="list-group-item">{classInfo.inquery}</li> : null;

    return (
        <div class="row featurette">
            <div class="col-md-5 order-md-1">
                <img src={classInfo.image} width="100%" height="100%" style={{objectFit: 'contain'}}/>      
            </div>
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">{classInfo.title}</h2>
                <span class="badge badge-primary">{Genre(classInfo.genre)}</span>
                &nbsp;
                <span class="badge badge-primary">{Region(classInfo.region)}</span>
                &nbsp;
                <span class="badge badge-primary">{ClassType(classInfo.type)}</span>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        {classInfo.inst1}, {classInfo.inst2}
                    </li>
                    <li class="list-group-item">
                        <span>{classInfo.startDate}</span>
                        &nbsp;~&nbsp;
                        <span>{classInfo.endDate}</span>
                        &nbsp;({classInfo.dateDesc})
                        <br/>
                        <span>{classInfo.startTime}</span>
                        &nbsp;~&nbsp;
                        <span>{classInfo.endTime}</span>
                        &nbsp;({classInfo.timeDesc})
                    </li>
                    {location}
                    <li class="list-group-item">
                        ₩{classInfo.price}&nbsp;({classInfo.priceDesc})
                        {discount}
                    </li>
                    {account}
                    {target}
                    {etc}
                    {inquery}
                </ul>
            </div>
        </div>
    )
}

export default ClassDetail;