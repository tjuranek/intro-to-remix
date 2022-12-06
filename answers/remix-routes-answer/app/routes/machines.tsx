import { Outlet } from '@remix-run/react';

export default function Machines() {
  return (
    <div className="layout">
      <div className="sidebar">
        <h1>Machines</h1>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
