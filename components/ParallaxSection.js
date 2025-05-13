// Author: Jakob Rose
import { useEffect } from 'react';

export default function PartyStats({ party, data }) {
  // You would fetch and render live data here.
  // For now, just show dummy data and party color.
  return (
    <div className="p-6 rounded-lg shadow bg-white border-l-8 mb-6"
      style={{ borderColor: party.color }}>
      <h3 className="text-2xl font-bold mb-2" style={{ color: party.color }}>{party.name}</h3>
      <ul className="space-y-1">
        <li>Current Pledges: {data.pledges || 'N/A'}</li>
        <li>Public Sentiment: {data.sentiment || 'N/A'}</li>
        <li>Direction: {data.direction || 'N/A'}</li>
        <li>Faith in Leader: {data.faith || 'N/A'}</li>
        <li>GDP Line Graph: [Graph Placeholder]</li>
        <li>Held Council Count: {data.councilCount || 'N/A'}</li>
        <li>MP Count: {data.mpCount || 'N/A'}</li>
      </ul>
    </div>
  );
}
