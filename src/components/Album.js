import React from 'react';

const Album= ({classInfo}) => {

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
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <div style={{background: 'lightgray'}}>
                    <img src={classInfo.image} width="100%" height="225" style={{objectFit: 'scale-down'}}/>
                </div>
                <div class="card-body">
                    <strong class="d-inline-block mb-2 text-primary">{Genre(classInfo.genre)}</strong>
                    &nbsp;&nbsp;
                    <strong class="d-inline-block mb-2 text-info">{Region(classInfo.region)}</strong>
                    &nbsp;&nbsp;
                    <strong class="d-inline-block mb-2 text-success">{ClassType(classInfo.type)}</strong>
                    &nbsp;&nbsp;
                    <strong class="d-inline-block mb-2 text-warning">World</strong>
                    <h5 class="mb-0">{classInfo.title}</h5>
                    <div class="mb-1 text-muted">
                        <span>{classInfo.startDate}</span>
                        &nbsp;~&nbsp;
                        <span>{classInfo.endDate}</span>
                        &nbsp;({classInfo.dateDesc})
                        <br/>
                        <span>{classInfo.startTime}</span>
                        &nbsp;~&nbsp;
                        <span>{classInfo.endTime}</span>
                        &nbsp;({classInfo.timeDesc})
                    </div>
                    <p class="card-text mb-auto">₩{classInfo.price}&nbsp;({classInfo.priceDesc})</p>
                    {/* <a href="#" class="stretched-link">자세히 보기</a> */}
                </div>
            </div>
        </div>
    )
}

export default Album;