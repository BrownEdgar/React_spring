import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>
        <ul>
          <li>RESOURSES</li>
          <li>HELP</li>
          <li>COMPANY</li>
          <li>DISCOUNTS</li>
        </ul>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-youtube"></i>
        <i class="bi bi-instagram"></i>
      </footer>
    </div>
  );
}
