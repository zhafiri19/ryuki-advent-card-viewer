import React from 'react';

export default function RiderSelector({ riders, selectedRider, onSelect }) {
  return (
    <div className="mb-4">
      <select
        className="form-select"
        value={selectedRider}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Select a Rider --</option>
        {riders.map((rider) => (
          <option key={rider.riderId} value={rider.riderId}>
            {rider.name}
          </option>
        ))}
      </select>
    </div>
  );
}
