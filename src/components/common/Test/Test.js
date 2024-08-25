import React, { useState, useRef } from "react";

export default function HoverMenuButton() {
  return (
    <nav class="navbar">
      <ul class="menu">
        <li class="dropdown">
          <a href="#">Home</a>
        </li>
        <li class="dropdown">
          <a href="#" class="">
            Services
          </a>
          <div class="submenu">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">App Development</a>
            </li>
            <li>
              <a href="#">SEO Services</a>
            </li>
          </div>
        </li>
        <li class="dropdown">
          <a href="#">About</a>
          <div class="submenu">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">App Development</a>
            </li>
            <li>
              <a href="#">SEO Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">App Development</a>
            </li>
          </div>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
