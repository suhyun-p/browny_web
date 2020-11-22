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
                    <li class="list-group-item">{classInfo.location}</li>
                    <li class="list-group-item">
                        ₩{classInfo.price}&nbsp;({classInfo.priceDesc})
                        <br/>
                        {classInfo.account}
                    </li>
                    <li class="list-group-item">{classInfo.target}</li>
                    <li class="list-group-item">{classInfo.inquery}</li>
                </ul>
            </div>
        </div>
    )
}

export default ClassDetail;