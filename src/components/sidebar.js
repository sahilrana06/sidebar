// import React from 'react';
// import './sidebar.css';
// import userData from '../userdata';

// function Sidebar() {
//     return (
//         <aside className="sidebar">
//             <div className="user-details">
//                 <img src={userData.avatarUrl} alt="User Avatar" className="avatar" />
//                 <h2>{userData.name}</h2>
//                 <p>{userData.companyName}</p>
//             </div>
//             <nav className="menu">
//                 <a href="#dashboard">Dashboard</a>
//                 <a href="#realtime-monitor">Real-time Monitor</a>
//                 <a href="#traffic-activity">Traffic Activity</a>
//                 <a href="#revenue">Revenue</a>
//                 <a href="#visitors">Visitors</a>
//             </nav>
//         </aside>
//     );
// }

// export default Sidebar;
import React from 'react';
import './sidebar.css';
import userData from '../userdata';

// Importing the logos
import dashboardIcon from '../Assets/Icons/Home.svg';
import realtimeMonitorIcon from '../Assets/Icons/Clock.svg';
import trafficActivityIcon from '../Assets/Icons/Car.svg';
// import revenueIcon from '../Assets/Icons/revenue.svg';
import visitorsIcon from '../Assets/Icons/People.svg';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="user-details">
                <img src={userData.avatarUrl} alt="User Avatar" className="avatar" />
                <h2>{userData.name}</h2>
                <p>{userData.companyName}</p>
            </div>
            <nav className="menu">
                <a href="#dashboard">
                    <img src={dashboardIcon} alt="Dashboard Icon" className="menu-icon" />
                    Dashboard
                </a>
                <a href="#realtime-monitor">
                    <img src={realtimeMonitorIcon} alt="Real-time Monitor Icon" className="menu-icon" />
                    Real-time Monitor
                </a>
                <a href="#traffic-activity">
                    <img src={trafficActivityIcon} alt="Traffic Activity Icon" className="menu-icon" />
                    Traffic Activity
                </a>
                <a href="#revenue">
                    <img src={trafficActivityIcon} alt="Revenue Icon" className="menu-icon" />
                    Revenue
                </a>
                <a href="#visitors">
                    <img src={visitorsIcon} alt="Visitors Icon" className="menu-icon" />
                    Visitors
                </a>
            </nav>
        </aside>
    );
}

export default Sidebar;
