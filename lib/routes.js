// lib/routes.js
const MAP = {
  Home: "/",
  About: "/about",
  WhatWeDo: "/what-we-do",
  Projects: "/projects",
  Team: "/team",
  Shop: "/shop",
  Admin: "/admin"
};

export function createPageUrl(name) {
  return MAP[name] ?? "/";
}
