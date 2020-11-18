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
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                    <strong class="d-inline-block mb-2 text-primary">{Genre(classInfo.genre)}</strong>
                    &nbsp;&nbsp;
                    <strong class="d-inline-block mb-2 text-info">{Region(classInfo.region)}</strong>
                    &nbsp;&nbsp;
                    <strong class="d-inline-block mb-2 text-success">{ClassType(classInfo.type)}</strong>
                    &nbsp;&nbsp;
                    <strong class="d-inline-block mb-2 text-warning">World</strong>
                    <h3 class="mb-0">{classInfo.title}</h3>
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