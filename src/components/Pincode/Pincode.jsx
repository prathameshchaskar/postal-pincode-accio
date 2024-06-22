import React, {useState} from 'react'

const Pincode =({ data }) => {
    const [filter, setFilter] = useState('');
  
    const filteredData = data.filter((item) =>
      item.Name.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <div className="post-office-list">
        <h2>Pincode: {data[0].Pincode}</h2>
        <input
          type="text"
          placeholder="Filter by post office name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        {filteredData.length === 0 ? (
          <p>Couldn’t find the postal data you’re looking for…</p>
        ) : (
          filteredData.map((postOffice, index) => (
            <div key={index} className="post-office">
              <h3>{postOffice.Name}</h3>
              <p>Branch Type: {postOffice.BranchType}</p>
              <p>Delivery Status: {postOffice.DeliveryStatus}</p>
              <p>District: {postOffice.District}</p>
              <p>State: {postOffice.State}</p>
            </div>
          ))
        )}
      </div>
    );
}

export default Pincode