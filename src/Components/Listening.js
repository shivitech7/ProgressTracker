import React from "react";
import "../Styles/listening.css";

const Listening = () => {

    //Array of objects for table data
    const trendData = [{
        'user': 'You',
        'accuracy': 60,
        'attempt': 5,
        'score': 6,
        'band': 6
    },
    {
        'user': 'Talati Shlok (Topper)',
        'accuracy': 95,
        'attempt': 3,
        'score': 8.5,
        'band': 8.5
    }
    ]

    return (
        <div className="main_container">

            <div className="middle_container">
                <div className="band_container">
                    <h1>6.5</h1>
                    <p style={{ marginTop: '0.4rem', color:'#90a2b7', fontWeight:'normal' }}>Band</p>
                </div>
                <div className="progress_container">
                    <div>
                        <p>Total </p>
                        <p>Questions</p>
                        <p style={{ marginTop: '0.7rem' }}>40</p>
                    </div>

                    <span className="vertical_seperator"></span>

                    <div>
                        <p>Questions</p>
                        <p> Attended</p>
                        <p style={{ marginTop: '0.7rem' }}>35</p>
                    </div>

                    <span className="vertical_seperator"></span>

                    <div>
                        <p>Correct</p>
                        <p> Answers</p>
                        <p style={{ marginTop: '0.7rem' }}>31</p>
                    </div>
                </div>
            </div>

           {/* Seperator bar */}
            <div style={{ width: '100%', height: '5px', backgroundColor: '#f1f1f1', borderRadius: '5px', marginTop: '1rem' }}></div>

            {/* Trend analysis container */}
            <div className="trend_container">
                <div style={{ width: '100%', color: '#205a9d', marginBottom: '1rem' }}>
                    <h2>Trend Analysis</h2>
                </div>

                <table >
                    <thead>
                        <tr>
                            {['User', 'Accuracy', 'Attempt', 'Score', 'Band'].map((head) => (
                                <th
                                    style={{
                                        borderBottom:'2px solid #f1f1f1',
                                        height: '2rem',
                                        padding: '0.3rem',
                                        margin:0
                                    }}
                                    width={head === 'User' ? '190px' : '170px'}
                                    key={head}
                                    align={head === 'User' ? "left" : 'center'}
                                >
                                    <p style={{ color: '#90a2b7' }}>{head}</p>
                                </th>
                            ))}
                        </tr>
                       
                    </thead>

                    <tbody>
                        {trendData.map((data, i) => {
                            console.log(data.user)
                            const User = data.user;
                            return (
                                <tr style={{ color: User === 'You' ? '#62ac5d' : '#90a2b7' }} key={i}>
                                    <td style={{ textAlign: 'left', padding: '0.3rem' }}>
                                        {data.user}
                                    </td>
                                    <td className="column">
                                        {data.accuracy}%
                                    </td>
                                    <td className="column">
                                        {data.attempt}
                                    </td>
                                    <td className="column">
                                        {data.score}
                                    </td>
                                    <td className="column">
                                        {data.band}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Listening;